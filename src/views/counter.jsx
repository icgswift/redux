/* 
   UI组件：不包含任何redux API
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Vd extends Component {
  // 类型检查
  static propTypes = {
    count: PropTypes.number.isRequired,
    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired
  }

  inc = () => {
    const number = this.msg.value * 1

    this.props.increment(number)
    // this.props.store.dispatch(actions.increment(number))
    //this.props.store.dispatch({type:INCREMENT,data:number})
  }

  dec = () => {
    const number = this.msg.value * 1
    const count = this.props.count

    if (count > 0) {
      this.props.decrement(number)
    }
  }

  incOdd = () => {
    const count = this.props.count
    if (count % 2 === 0) {
      const number = this.msg.value * 1
      this.props.increment(number)
    }
  }

  incAsync = () => {
    setTimeout(
      () => {
        const number = this.msg.value * 1
        this.props.increment(number)
      }
      , 1000)
  }

  render() {
    const count = this.props.count
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

