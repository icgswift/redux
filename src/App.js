import React, { Component } from 'react';

// -- import {INCREMENT,DECREMENT} from './redux/action-types'       以下-- 表示没有单独定义 Action Constructor

// import { a,b } from './redux/actions' 以actions指代{ a,b }这个对象   引入Action Constructor  
import * as actions from './redux/actions'


export default class Vd extends Component {

  inc = () => {
    // -- this.props.store.dispatch({type:INCREMENT,data:number})

    // 得到增加数量的值 
    const number = this.msg.value * 1
    //  调用store的dispatch方法更新状态:分发action(action.type,action.data)，触发reducer调用，产生新的state
    this.props.store.dispatch(actions.increment(number))
  }

  dec = () => {
    //--this.props.store.dispatch({type:DECREMENT,data:number})

    //    判断当前count的状态  不满足条件不予执行
    const count = this.props.store.getState()

    const number = this.msg.value * 1
    if (count > 0) {
      this.props.store.dispatch(actions.decrement(number))
    }
  }

  incOdd = () => {
    //  --this.props.store.dispatch({type:INCREMENT,data:number})

    const count = this.props.store.getState()
    if (count % 2 === 0) {
      const number = this.msg.value * 1
      this.props.store.dispatch(actions.increment(number))
    }
  }

  incAsync = () => {
    setTimeout(
      () => {
        //  --this.props.store.dispatch({type:INCREMENT,data:number})

        const number = this.msg.value * 1
        this.props.store.dispatch(actions.increment(number))
      }
      , 1000)
  }

  render() {
    const count = this.props.store.getState()
    // console.log(count)
    return (
      <div>
        <h1>you click me {count} times</h1>
        <select ref={(value) => { this.msg = value }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
        <button onClick={this.incOdd}>increment if odd</button>
        <button onClick={this.incAsync}>increment async</button>
      </div>
    )
  }
}

