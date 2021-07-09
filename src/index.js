import React from "react";
import ReactDOM from 'react-dom';
import Counter from "./counter";
import {createStore, bindActionCreators} from 'redux';
import reducer from "./reducer";
import * as actions from './actions';


const store = createStore(reducer);
const {dispatch} = store;

const {inc, dec, rnd} =
    bindActionCreators(actions, dispatch);

const update = () =>{
    ReactDOM.render(<Counter
            counter={store.getState()}
            inc = {inc}
            dec = {dec}
            rnd = {() => {
                const payload = Math.floor(Math.random() * 10);
                rnd(payload);
            }}

        />,
        document.getElementById('root')
    );
}
update();
store.subscribe(update);
