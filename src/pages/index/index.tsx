import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtSwitch, AtInput, AtForm } from 'taro-ui'
import './index.scss'

export default class Index extends Taro.Component {
  public static config: Taro.Config = {
    navigationBarTitleText: '首页'
  }

  public render(): JSX.Element {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtForm>
          <AtInput name='input' placeholder='Input' onChange={() => {}} />
          <AtSwitch title='Switch' />
        </AtForm>
      </View>
    )
  }
}
