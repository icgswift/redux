/* 
    包含UI组件的model组件(容器组件)
*/

// 引入连接函数
import { connect } from 'react-redux'
// 引入action函数、
import { increment, decrement } from '../redux/actions'
//引入UI组件
import Counter from '../views/counter'


/* 
  connect(): 用于包装 UI 组件生成容器组件
  connect(
          mapStateToprops,
          mapDispatchToProps)(UI)
                                                                */

export default connect(
    /* 
    mapStateToprops() 将外部的数据state 转换为UI组件的标签属性(props)
             const mapStateToprops = function (state) {
                                                        return {value: state}
                                                                              }
                                                                                 */
    state => ({ count: state }),
    /* 
     mapDispatchToProps()
                         将分发action的函数(reducer)转换为UI组件的标签属性(props)
                         简洁语法：直接指定为actions对象或包含多个action方法的对象
                                                                                            */
    { decrement, increment }
)(Counter)





