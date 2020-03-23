import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Taro.Component {
  public static config: Taro.Config = {
    navigationBarTitleText: '首页'
  }

  public render(): JSX.Element {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
