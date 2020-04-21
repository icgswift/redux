import { createStore } from 'redux'
import { counter } from './reducers'

// console.log(counter)   可知第一次渲染没有dispatch
const store = createStore(counter)
export default store