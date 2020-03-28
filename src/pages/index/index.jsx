import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import Navigation from '../../components/Nav.js'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }
  
  render () {
    return (
      <View className='index'>
          <Navigation />
      </View>
    )
  }
}