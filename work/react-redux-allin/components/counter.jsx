import React, { Component } from 'react';
class Counter extends Component{
    render(){
        //console.log(this.props)
        //console.log(this.props.counter)
        return (
            <div>
                <span>{this.props.id}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>{this.props.value}</span>
                <button onClick={() => this.props.add(this.props.counter)}>+</button>
            </div>
        );
    }
}

export default Counter;