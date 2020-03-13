import { AtSwitch } from 'taro-ui'
import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

interface IndexStates {
  checked: boolean
}

export default class Index extends Taro.Component<{}, IndexStates> {
  public constructor() {
    super()
    this.state = {
      checked: false
    }
  }

  public static config: Taro.Config = {
    navigationBarTitleText: '首页'
  }

  private handleStatusChanged(value: boolean): void {
    this.setState({
      checked: value
    })
  }

  public render(): JSX.Element {
    const { checked } = this.state

    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtSwitch border={false}
          color='#006dcc'
          checked={checked}
          title={checked ? '状态:在线' : '状态:下线'}
          onChange={this.handleStatusChanged.bind(this, !checked)}
        />
      </View>
    )
  }
}
