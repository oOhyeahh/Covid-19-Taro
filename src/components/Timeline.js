import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtTimeline, AtDivider } from 'taro-ui';
import { divideByMonth, mapMonthName, mapCountryCnName } from '../utils';

export default class Timeline extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: undefined,
      deaths: undefined
    };
  }
  componentWillMount() {}

  componentDidMount() {
    fetch(`https://corona.lmao.ninja/v2/historical/${this.props.countryName}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const timelineData = data['timeline'];
        let cases = divideByMonth(timelineData['cases']);
        let deaths = divideByMonth(timelineData['deaths']);
        let case_list = [];
        let death_list = [];

        for (let [key, value] of cases) {
          var info = mapMonthName(key) + value.toString();
          case_list.push({ title: info });
        }

        for (let [key, value] of deaths) {
          var info = mapMonthName(key) + value.toString();
          death_list.push({ title: info });
        }

        this.setState({
          cases: case_list,
          deaths: death_list
        });
      });
  }
  render() {
    return (
      <View>
        <View className='at-article__h2'>{mapCountryCnName(this.props.countryName)}</View>

        <View className='at-row'>
          <View className='at-col at-col-6'>
            <AtDivider content='确诊病例' />
            <AtTimeline items={this.state.cases} />
          </View>
          <View className='at-col at-col-6'>
            <AtDivider content='死亡病例' />
            <AtTimeline items={this.state.deaths} />
          </View>
        </View>
      </View>
    );
  }
}
