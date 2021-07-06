import {createStore} from 'redux';
const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = (payload) => ({type: 'RND', payload});
const reducer = (state = 0, action) =>{
    switch (action.type){
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RND':
            return state + action.payload;
        default:
            return state;
    }
}

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