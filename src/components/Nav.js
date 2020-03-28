import Taro from "@tarojs/taro";
import { View } from '@tarojs/components';
import { AtTabs, AtTabsPane } from "taro-ui";
import GlobalRowCard from './GlobalRowCard'
import MainCountryInfo from './MainCountryInfo'
import MainTimeline from './MainTimeline'

export default class Navigation extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    };
  }
  handleClick(value) {
    this.setState({
      current: value
    });
  }
  render() {
    const tabList = [{ title: "全球疫情信息" }, { title: "国家疫情信息" }, { title: "时间线" }];
    return (
      <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={this.state.current} index={0}>
          <View style='background-color: #FAFBFC;text-align: center;'><GlobalRowCard /></View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <View style='background-color: #FAFBFC;'><MainCountryInfo /></View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
          <View style='background-color: #FAFBFC;'><MainTimeline /></View> 
        </AtTabsPane>
      </AtTabs>
    );
  }
}
