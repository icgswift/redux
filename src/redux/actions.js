/* 
    Action Creators
    创建Action的工厂函数

          action：一个对象，用来标识执行行为，两个属性
                1.type：标识，值为字符串 唯一必要属性
                2.data：数据  可选属性
  
*/
import { INCREMENT, DECREMENT } from './action-types'

export const increment = (number) => ({ type: INCREMENT, data: number })
export const decrement = (number) => ({ type: DECREMENT, data: number })