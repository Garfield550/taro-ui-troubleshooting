import Taro from '@tarojs/taro'
import Index from './pages/index'
import './app.scss'

class App extends Taro.Component {
  public config: Taro.Config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  public render(): JSX.Element {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
