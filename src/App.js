import React, { Component } from 'react';

// import { a,b } from './redux/actions'    以actions指代{ a,b }这个对象   引入Action Constructor  
import * as actions from './redux/actions'


export default class Vd extends Component {

  inc = () => {
    // 得到增加数量的值 
    const number = this.msg.value * 1
    
    //  调用dispatch方法更新状态:分发action
    // 1.执行actions.increment函数
    // 2.action返回一个包含动作和数据的对象到store
    // 3.触发reducer调用，产生新的state
    // 4.subscribe方法监听到状态变化，调用render函数
    
    this.props.store.dispatch(actions.increment(number))
    //this.props.store.dispatch({type:INCREMENT,data:number})
  }

  dec = () => {
    //    判断当前count的状态  不满足条件不予执行
    const count = this.props.store.getState()

    const number = this.msg.value * 1
    if (count > 0) {
      this.props.store.dispatch(actions.decrement(number))
    }
  }

  incOdd = () => {
    const count = this.props.store.getState()
    if (count % 2 === 0) {
      const number = this.msg.value * 1
      this.props.store.dispatch(actions.increment(number))
    }
  }

  incAsync = () => {
    setTimeout(
      () => {
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

