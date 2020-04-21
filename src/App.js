import React,{Component} from 'react';

// import {INCREMENT,DECREMENT} from './redux/action-types'
import * as actions from './redux/actions'

export default class Vd extends Component{
 /*  state={
      count:0
  } */

  inc=()=>{
  //   console.log(this.msg.value)
   //  console.log(typeof this.msg.value ) string
     /*   let {count} =this.state
       count+=this.msg.value*1
       this.setState({count}) */
     
  
  // 得到增加数量的值
    const number=this.msg.value*1
  //  调用store的dispatch方法更新状态:分发action(action.type,action.data)，触发reducer调用，产生新的state
  
    // this.props.store.dispatch({type:INCREMENT,data:number})
    this.props.store.dispatch(actions.increment(number))

  }
  dec=()=>{
     /*  let {count} =this.state
       count-=this.msg.value*1
       if(count>=0){

           this.setState({count})
       } */
     
       const count= this.props.store.getState()
       const number=this.msg.value*1
       //this.props.store.dispatch({type:DECREMENT,data:number})
       if(count>0){
         this.props.store.dispatch(actions.decrement(number))
    } 
  }
  incOdd=()=>{
     /*  let {count} =this.state
      if(count%2===0){
          
          count+=this.msg.value*1
           this.setState({count})
       } */

       const count= this.props.store.getState()
       if(count%2===0){
         const number=this.msg.value*1
        //  this.props.store.dispatch({type:INCREMENT,data:number})
            this.props.store.dispatch(actions.increment(number))
     }
         

  }
  incAsync=()=>{
       setTimeout(
       ()=>{
       /*    let {count} =this.state
       count+=this.msg.value*1
       this.setState({count})  */
       
         const number=this.msg.value*1
        //  this.props.store.dispatch({type:INCREMENT,data:number})
            this.props.store.dispatch(actions.increment(number))
       }    
       ,1000)
  }

render(){
      const count= this.props.store.getState()
      // console.log(count)
      return(
          <div>
              <h1>you click me {count} times</h1>
              <select ref={(value)=>{this.msg=value}}>
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

