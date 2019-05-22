import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {
    state = {
        counters:[
            {
                id:1,
                value:4
            },
            {
                id:2,
                value:0
            },
            {
                id:3,
                value:0
            },
            {
                id:4,
                value:0
            }
        ]
    }
    addE = counter => {
        const counters = [...this.state.counters];
        //console.log(counters);
        //console.log(counter);
        const index = counters.indexOf(counter);
        //console.log(index);

        counters[index] = { ...counter };
        //console.log({...counter})
        counters[index].value++;
        //console.log({...counter})
        this.setState({ counters })
    }
    render() {       
        return (
            <div>
                {this.state.counters.map(counter=><Counter key={counter.id} value={counter.value}
                id={counter.id} add={this.addE} counter={counter}
                ></Counter>)}               
            </div>
        );
    }
}
    
export default Counters;