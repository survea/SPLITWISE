import {createStore} from 'redux';
import {userReducer} from './reducers/userReducer';
// creating object store
export const store = createStore(userReducer);

store.subscribe(()=>{
    console.log("subscribe .....",store.getState());
})