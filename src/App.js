import React,{Component} from 'react';

import './App.css';

class App extends Component{
  constructor() {
    super()
    this.addTodo = this.addTodo.bind(this)
    this.addONE = this.addONE.bind(this)
  }

  addTodo=() => {
    //4、store.dispatch  派发action
    this.props.store.dispatch({
      //用于区分动作
      type:"ADD_TODO",
      //传递的数据
      payload:this.refs.todoval.value
    })
  }
  addONE = () => {
    this.props.store.dispatch((dispatch,state) => {
      setTimeout(function(){
        dispatch({
          type:'ADD_ONE',
          payload:1
        })
      },2000)
    })
  }

  render() {
    const list = this.props.store.getState().list
    const count = this.props.store.getState().count
    return (
       <div className="App">
      <input type="text" ref="todoval"></input>
      <button onClick={this.addTodo}>add_todo</button>
      <hr/>

      {count}<button onClick={this.addONE}>count+1</button>
      <ul>
        {list.map((item,i)=> {
          return <li key={i}>{item}</li>
        })}
      </ul>
    </div>
    )
  }
  
}
export default App


