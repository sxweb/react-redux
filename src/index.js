import {createStore, bindActionCreators} from 'redux';
import reducer from "./reducer";
import * as actions from './actions';


const store = createStore(reducer);
const {dispatch} = store;

const {inc, dec, rnd} =
    bindActionCreators(actions, dispatch);
document
    .querySelector('#rnd')
    .addEventListener('click', ()=>{
        const payload = Math.floor(Math.random() * 10);
        rnd(payload);
    })
document
    .querySelector('#inc')
    .addEventListener('click', ()=>{
        inc();
    });
document
    .querySelector('#dec')
    .addEventListener('click', ()=>{
        dec();
    });
const update = () =>{
    document
        .querySelector('#counter')
        .textContent = store.getState();
}
store.subscribe(update);