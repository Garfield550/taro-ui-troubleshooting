import React from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends React.Component {
  public render(): JSX.Element {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
