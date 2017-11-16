import { createStore } from 'redux';
import reducers from './reducers';

let initialState = {
    name: "Johnny Smith",
    address1: "123 Bowl lane",
    address2: "New York, NY 10021",
    team: [],
};

export default createStore(
    reducers, 
    initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);