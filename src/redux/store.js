import { createStore } from 'redux';
import { activity } from './action';

const initialState = {
    name: 'Boots',
    activity: 'napping',

}

export const store = createStore(cat, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);