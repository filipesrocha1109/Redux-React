import { createStore, combineReducers } from 'redux';

import NumerosReducers from './reducers/numerosReducers';

const reducers = combineReducers({
    numeros : NumerosReducers,     
     
})

const configStore = () =>{
    return createStore(reducers)
}

export default configStore;