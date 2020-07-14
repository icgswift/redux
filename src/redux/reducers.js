/* 
   包含n个reducer函数的模块 
                                     */

import { INCREMENT, DECREMENT } from './action-types'

//    根据旧的state和action 产生新的state
//    返回一个新的状态，不要修改原来的状态
export function counter(state = 0, action) {
  // console.log('counter()', state, action)

   switch (action.type) {
      case INCREMENT: return state + action.data
      case DECREMENT: return state - action.data
      default: return state
   }
}