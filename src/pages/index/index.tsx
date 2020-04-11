import { AtSwipeAction } from 'taro-ui'
import { SwipeActionOption } from 'taro-ui/types/swipe-action'
import { View, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

export default class Index extends Taro.Component {
  public static config: Taro.Config = {
    navigationBarTitleText: '首页'
  }

  private handleClick = (item: SwipeActionOption): void => {
    console.log(item)
    Taro.showToast({
      title: `点击了${item.text}`,
      icon: 'none',
      duration: 1000
    })
  }

  private handleOpened = (): void => {
    // Taro.showToast({
    //   title: '打开',
    //   icon: 'none',
    //   duration: 1000
    // })
  }

  private handleClosed = (): void => {
    // Taro.showToast({
    //   title: '关闭',
    //   icon: 'none',
    //   duration: 1000
    // })
  }

  public render(): JSX.Element {
    return (
      <View className='index'>
        <ScrollView scrollY scrollWithAnimation>
          <View>Hello world!</View>
          <View>Hello world!</View>
          <View>Hello world!</View>
          <View>Hello world!</View>
          <View>Hello world!</View>
          <View>Hello world!</View>
          <View>Hello world!</View>
          <View>Hello world!</View>
          <View>Hello world!</View>
          <AtSwipeAction autoClose options={[
            {
              text: '取消',
              style: {
                backgroundColor: '#6190E8'
              }
            },
            {
              text: '确认',
              style: {
                backgroundColor: '#FF4949'
              }
            }
          ]}
            onClick={this.handleClick}
            onOpened={this.handleOpened}
            onClosed={this.handleClosed}
          >
            <View className='normal'>点击按钮自动关闭</View>
          </AtSwipeAction>
          <View>Hello world!</View>
          <View>Hello world!</View>
          <View>Hello world!</View>
          <View>Hello world!</View>
          <View>Hello world!</View>
          <View>Hello world!</View>
          <View>Hello world!</View>
          <View>Hello world!</View>
          <View>Hello world!</View>
        </ScrollView>
      </View>
    )
  }
}
