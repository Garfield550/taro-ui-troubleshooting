import React from 'react'
import './app.scss'

class App extends React.Component {
  // this.props.children 是将要会渲染的页面
  public render(): React.ReactNode {
    return this.props.children
  }
}

export default App
