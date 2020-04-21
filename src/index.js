
/* 
   redux:独立专业做状态管理的js库(不是react插件库，但主要用于react)
         集中式管理react应用中多个组件共享的状态    
*/
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// import {createStore} from 'redux'              可以直接引入生成store的方法
// import  {counter}   from './redux/reducers'    引入Reducers暴露的函数

//得到store对象，调用redux的createStore(接收reducers：将store关联reducer)方法
// const store=createStore(counter) 


import store from './redux/store'

function render() {
  // 将store管理对象通过props传递给子组件
  ReactDOM.render(<App store={store} />, document.getElementById('root'))
}

// 初始化渲染
render()

// 订阅监听(store中状态发生变化，自动调用进行重绘)
store.subscribe(render)

