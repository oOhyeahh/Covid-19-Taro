import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtCard } from 'taro-ui';

export default class GlobalRowCard extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: 0,
      death: 0,
      recovered: 0,
      exist: 0
    };
  }

  componentWillMount() {}

  componentDidMount() {
    // fetch data from api
    Taro.request({
      url: 'https://corona.lmao.ninja/all',
      success: res => {
        let data = res.data;
        this.setState({
          cases: data['cases'].toLocaleString(),
          death: data['deaths'].toLocaleString(),
          recovered: data['recovered'].toLocaleString(),
          exist: data['active'].toLocaleString()
        });
      }
    })
  }
  render() {
    return (
      <View>
        <AtCard title='全球新冠病毒疫情信息'>
          <View className='at-row' style='font-size:16px'>
            <View className='at-col'>总数: {this.state.cases}</View>
            <View className='at-col'>现存病例: {this.state.exist}</View>
          </View>
          <View className='at-row' style='font-size:16px'>
            <View className='at-col'>死亡人数: {this.state.death}</View>
            <View className='at-col'>康复人数: {this.state.recovered}</View>
          </View>
        </AtCard>
      </View>
    );
  }
}
