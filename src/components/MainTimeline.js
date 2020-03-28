import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import Timeline from './Timeline';

export default class MainTimeline extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      selector: ['美国', '中国', '澳大利亚', '意大利']
    };
  }

  componentWillMount() {}

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    });
  };

  render() {
    return (
      <View>
        <View className='page-section'>
          <View>
            {/* <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
              <View className='picker'>当前选择：{this.state.selectorChecked}</View>
             </Picker> */}
            <Timeline countryName='Australia' />
            <Timeline countryName='China' />
            <Timeline countryName='America' />
            <Timeline countryName='Italy' />
          </View>
        </View>
      </View>
    );
  }
}
