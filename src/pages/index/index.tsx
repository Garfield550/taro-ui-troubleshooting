import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
