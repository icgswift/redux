/* 
   使用redux的问题
   1.redux与react组件的代码耦合度太高
   2.编码不够简洁

  react-redux: 简化react应用redux    解耦数据管理(业务逻辑)和显示
                                                                     */

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
// 引入reducers
import { counter } from './redux/reducers'
// 引入容器组件
import App from './container/app'

// 根据reducer创建store对象
const store = createStore(counter)

ReactDOM.render(
  (
    //让所有组件都可以获取到state,dispatch(还是通过store管理)
    < Provider store = { store }>
    < App />
    </Provider>
  ),
  document.getElementById('root')
)