import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import TodoList from './TodoList';
import Counters from './components/counters';
import Counter from './counter';
import TDUX from './todoredux';
ReactDOM.render(<div><Counters /><TodoList /><Counter /><TDUX /></div>, document.getElementById('container'));


