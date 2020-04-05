import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtAccordion, AtList, AtListItem } from 'taro-ui';
import { mapCountryCnName } from '../utils';

export default class CountryInfo extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      todayCases: 0,
      todayDeaths: 0,
      cases: 0,
      deaths: 0,
      recovered: 0,
      active: 0,
      critical: 0,
      open: false
    };
  }
  componentWillMount() {}

  componentDidMount() {
    Taro.request({
      url: `https://corona.lmao.ninja/countries/${this.props.countryName}`,
      success: res => {
        let data = res.data;
        this.setState({
          todayCases: data['todayCases'].toLocaleString(),
          todayDeaths: data['todayDeaths'].toLocaleString(),
          cases: data['cases'].toLocaleString(),
          deaths: data['deaths'].toLocaleString(),
          recovered: data['recovered'].toLocaleString(),
          active: data['active'].toLocaleString(),
          critical: data['critical'].toLocaleString()
        });
      }
    });
  }

  handleClick(value) {
    this.setState({
      open: value
    });
  }

  render() {
    return (
      <View>
        <AtAccordion
          open={this.state.open}
          onClick={this.handleClick.bind(this)}
          title={mapCountryCnName(this.props.countryName)}
        >
          <AtList hasBorder={false}>
            <AtListItem title={'今日确诊数：' + this.state.todayCases} />
            <AtListItem title={'今日死亡数：' + this.state.todayDeaths} />
            <AtListItem title={'累计总数：' + this.state.cases} />
            <AtListItem title={'现存病例：' + this.state.active} />
            <AtListItem title={'康复数：' + this.state.recovered} />
            <AtListItem title={'病危数：' + this.state.critical} />
            <AtListItem title={'死亡数：' + this.state.deaths} />
          </AtList>
        </AtAccordion>
      </View>
    );
  }
}
