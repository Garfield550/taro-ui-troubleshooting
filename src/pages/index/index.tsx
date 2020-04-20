import Taro from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtList, AtListItem } from 'taro-ui'
import './index.scss'

interface IndexState {
  dateSel: string
}

export default class Index extends Taro.Component {
  public state: IndexState = {
    dateSel: '2018-04-22'
  }

  public static config: Taro.Config = {
    navigationBarTitleText: '首页'
  }

  private onDateChange = (e: CommonEvent): void => {
    this.setState({
      dateSel: e.detail.value
    })
  }

  public render(): JSX.Element {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Picker mode='date' value={this.state.dateSel} onChange={this.onDateChange}>
          <AtList>
            <AtListItem title='请选择日期' extraText={this.state.dateSel} />
          </AtList>
        </Picker>
      </View>
    )
  }
}
