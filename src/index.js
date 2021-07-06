import {createStore} from 'redux';
import reducer from "./reducer";
import {inc, dec, rnd} from './actions';


const store = createStore(reducer);
const {dispatch} = store;

const bindActionCreator = (creator, dispatch) => (...args) =>{
    dispatch(creator(...args));
}
const incDispatch = bindActionCreator(inc, dispatch);
const decDispatch = bindActionCreator(dec, dispatch);
const rndDispatch = bindActionCreator(rnd, dispatch);
document
    .querySelector('#rnd')
    .addEventListener('click', ()=>{
        const payload = Math.floor(Math.random() * 10);
        rndDispatch(payload);
    })
document
    .querySelector('#inc')
    .addEventListener('click', ()=>{
        incDispatch();
    });
document
    .querySelector('#dec')
    .addEventListener('click', ()=>{
        decDispatch();
    });
const update = () =>{
    document
        .querySelector('#counter')
        .textContent = store.getState();
}
store.subscribe(update);