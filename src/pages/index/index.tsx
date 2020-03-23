import { AtDrawer /** , AtTabBar */ } from 'taro-ui'
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
        {/* <AtTabBar fixed current={0} tabList={[
            { title: '待办事项', text: 8 },
            { title: '拍照' },
            { title: '通讯录', dot: true }
          ]}
          onClick={(i: number, e: any)=> console.log(i, e)}
        /> */}
        <AtDrawer show />
      </View>
    )
  }
}
