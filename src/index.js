import {createStore} from 'redux';
import reducer from "./reducer";
import {inc, dec, rnd} from './actions';


const store = createStore(reducer);
document
    .querySelector('#rnd')
    .addEventListener('click', ()=>{
        const payload = Math.floor(Math.random() * 10);
        store.dispatch(rnd(payload));
    })
document
    .querySelector('#inc')
    .addEventListener('click', ()=>{
        store.dispatch(inc());
    });
document
    .querySelector('#dec')
    .addEventListener('click', ()=>{
        store.dispatch(dec());
    });
const update = () =>{
    document
        .querySelector('#counter')
        .textContent = store.getState();
}
store.subscribe(update);