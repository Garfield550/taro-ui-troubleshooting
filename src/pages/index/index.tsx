import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtInput } from 'taro-ui'
import './index.scss'

export default class Index extends Taro.Component {
  public static config: Taro.Config = {
    navigationBarTitleText: '首页'
  }

  public render(): JSX.Element {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtInput name='value' type='password' placeholder='密码' value='000000' onChange={() => {}} />
      </View>
    )
  }
}
