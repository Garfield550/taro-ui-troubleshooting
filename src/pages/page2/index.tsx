import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default class Index extends Taro.Component {
  public static config: Taro.Config = {
    navigationBarTitleText: '第二页'
  }

  public render(): JSX.Element {
    return (
      <View className='index'>
        <Text>Hello page 2!</Text>
      </View>
    )
  }
}
