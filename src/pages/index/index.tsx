import { AtButton } from 'taro-ui'
import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

export default class Index extends Taro.Component {
  public static config: Taro.Config = {
    navigationBarTitleText: '首页'
  }

  public render(): JSX.Element {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtButton>按钮文案</AtButton>
        <AtButton type='primary'>按钮文案</AtButton>
      </View>
    )
  }
}
