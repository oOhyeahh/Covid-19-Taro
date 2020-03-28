import Taro from '@tarojs/taro';
import { View, Text, Picker } from '@tarojs/components';
import CountryInfo from './CountryInfo'

export default class MainCountryInfo extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      selector: ['美国', '中国', '澳大利亚', '日本', '意大利']
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
            <CountryInfo countryName='Australia' />
            <CountryInfo countryName='China' />
            <CountryInfo countryName='America' />
            <CountryInfo countryName='Italy' />
          </View>
        </View>
      </View>
    );
  }
}
