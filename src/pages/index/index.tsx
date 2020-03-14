import { AtButton, AtForm, AtInput } from 'taro-ui'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import './index.scss'

interface IndexState {
  value: string
}

export default class Index extends Taro.Component<{}, IndexState> {
  public constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  public static config: Taro.Config = {
    navigationBarTitleText: '首页'
  }

  private handleInputChanged(value: string): void {
    this.setState({
      value
    })
  }

  private handleFormSubmit(event: CommonEvent): void {
    console.log('Submit Event:', event)
  }

  private handleFormReset(event: CommonEvent): void {
    console.log('Reset Event:', event)
    this.setState({
      value: ''
    })
  }

  public render(): JSX.Element {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtForm
          onSubmit={this.handleFormSubmit.bind(this)}
          onReset={this.handleFormReset.bind(this)}
        >
          <AtInput
            name='value'
            title='文本'
            type='text'
            placeholder='单行文本'
            value={this.state.value}
            onChange={this.handleInputChanged.bind(this)}
          />
          <AtButton formType='submit'>提交</AtButton>
          <AtButton formType='reset'>重置</AtButton>
        </AtForm>
      </View>
    )
  }
}
