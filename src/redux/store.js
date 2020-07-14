// 直接引入生成store的方法
import { createStore } from 'redux'

// 引入Reducers暴露的函数
import { counter } from './reducers'

// console.log(counter)   可知第一次渲染没有dispatch
//创建包含指定reducer的store对象，调用createStore(接收reducers：将store关联reducer)方法
const store = createStore(counter)   //
export default store

/*  内部维护着:
		state
		reducer
    核心方法:
		getState()                     访问state
		dispatch(action)               分发action，改变状态
        subscribe(listener)            监听状态变化
                                                */