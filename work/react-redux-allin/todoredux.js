import React, { Component } from 'react';
import { createStore } from 'redux';
function todo(state=[],action){
    switch(action.type){
        case 'add':
            let addState = JSON.parse(JSON.stringify(state));
            addState.push(action.value)
            return addState;
        case 'del':
            let delState = JSON.parse(JSON.stringify(state));
            delState.splice(action.value.index,1);
            return delState;
        default:
            return state;
    }
}

const store = createStore(todo);

store.subscribe(()=>console.log(store.getState()))
function add(e){
    if(e.keyCode === 13){
        store.dispatch({
            type:'add',
            value:e.target.value
        })
        e.target.value = "";
    }
    
} 

function del(e){
    store.dispatch({
        type:'del',
        value:e
    })
}
class TDUX extends Component{
    constructor(){
        super();

        store.subscribe(() => {
            this.setState({num:store.getState()})
        })
    }
    

    render(){
        return(
            <div>
                <input type='text' onKeyDown={add} />
                <ul>
                    {
                        store.getState().map((item,index)=>(   
                            <li onClick={del}>{item}</li>

                    ))
                    }
                </ul>
            </div>
        )
    }
}
export default TDUX;