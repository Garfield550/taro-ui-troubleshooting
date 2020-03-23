import Taro from '@tarojs/taro'
import Index from './pages/index'
import './app.scss'

class App extends Taro.Component {
  public config: Taro.Config = {
    pages: [
      'pages/index/index',
      'pages/page2/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页'
        },
        {
          pagePath: 'pages/page2/index',
          text: '第二页'
        },
      ]
    }
  }

  public render(): JSX.Element {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
