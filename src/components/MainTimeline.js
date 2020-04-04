import Taro from '@tarojs/taro';
import { AtDivider, AtButton } from 'taro-ui';
import { View, Picker } from '@tarojs/components';
import Timeline from './Timeline';
import { mapCountryEnName } from '../utils';

export default class MainTimeline extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      selector: ['澳大利亚', '日本'],
      countryViewList: ['China', 'America', 'Italy'],
      selectorChecked: undefined
    };
  }

  componentWillMount() {}

  onChange = e => {
    this.setState(
      {
        selectorChecked: this.state.selector[e.detail.value] || ''
      },
      () => {
        if (!this.state.selector[e.detail.value]) {
          return;
        }
        this.setState({
          countryViewList: [...this.state.countryViewList, mapCountryEnName(this.state.selectorChecked)],
          selector: [...this.state.selector].filter(item => item !== this.state.selectorChecked)
        });
      }
    );
  };

  render() {
    let timelines = this.state.countryViewList.map(country => {
      return <Timeline key={country} countryName={country} />;
    });
    return (
      <View>
        <View className='page-section'>
          <View>
            <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
              <AtButton type='Secondary' size='small'>
                <View className='picker'>地区选择: {this.state.selectorChecked}</View>
              </AtButton>
            </Picker>
            <AtDivider />
            {timelines}
          </View>
        </View>
      </View>
    );
  }
}
