import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//1、引入必要的redux的组件
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

//引入TODOListReducer reducer
import TODOListReducer from '../src/redux/TODOListReducer'
import COUNTReducer from '../src/redux/COUNTReducer'

// //3、reducer 负责操作state
// const reducer = (state={list:[]},action={}) => {
//     switch(action.type){
//         case "ADD_TODO":
//         //做一次深拷贝
//         const newState = Object.assign({},state)
//         newState.list.push(action.payload)
//         return newState
//     default:
//         return state
//     }
// }

//抽离reducer,合并reducer
const reducer = combineReducers({
    list:TODOListReducer,
    count:COUNTReducer
})

//2、生成store const store = createStore(reducer,state初始状态/可选)
const store = createStore(reducer,{list:[]},applyMiddleware(thunk))

//取得当前时刻的state
// const state = store.getState()
function randerPage() {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}
randerPage()

//5、设置监听函数  当store 改变的时候会自动调用回调函数store.subscribe(callback）
store.subscribe(randerPage)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
