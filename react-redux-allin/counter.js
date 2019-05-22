import { combineReducers, createStore } from 'redux';
import React, { Component } from 'react';
function counter(state=0,action){
    switch(action.type){
        case 'ADD':
            return state + 1;
        case 'SUB':
            return state - 1;
        default:
            return state;
    }
}
let num
let store = createStore(counter);
store.subscribe(() => console.log(store.getState().toString()))


function add(){
    store.dispatch({ type:'ADD'})
}
function sub(){
    store.dispatch({type:'SUB'})

}
class Counter extends Component{
    constructor(){
        super();
        store.subscribe(() => {
            this.setState({num:store.getState()})
        });
    }
    render(){
        return(
            <div>
                <p>
                    <span>
                       {store.getState()}&nbsp;
                        <button onClick={add}>+</button>&nbsp;
                        <button onClick={sub}>-</button>&nbsp;
                    </span>
                </p>
            </div>
        )
    }
}

export default Counter;