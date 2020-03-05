import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import './index.scss'

interface IndexState {
  current: number
}

export default class Index extends Taro.Component<{}, IndexState> {
  public constructor() {
    super()
    this.state = {
      current: 1,
    }
  }

  public static config: Taro.Config = {
    navigationBarTitleText: '首页',
  }

  private handleClick(current: number) {
    this.setState({
      current,
    })
    console.log('Current tab:', current)
  }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType: 'home' },
            { title: '评论', iconType: 'home' },
            { title: '引导', iconType: 'home' },
            { title: '我的', iconType: 'home' },
          ]}
          current={this.state.current}
          onClick={this.handleClick.bind(this)}
        />
      </View>
    )
  }
}
