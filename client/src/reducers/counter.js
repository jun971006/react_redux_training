//import * as types from '../actions/Type';
import {increment, decrement, setDiff} from '../actions/index';
import { combineReducers } from 'redux';
const initialState = {
    number:0,
    diff:1
};

const counter = (state = initialState, action) => {
    switch(action.type){
        case increment:
            return Object.assign({}, state, {
                number: state.value + state.diff
            });
        case decrement:
            return Object.assign({}, state, {
                number: state.value - state.diff
            });
        case setDiff:
            return Object.assign({}, state, {
                number: action.diff
            });
        default:
        return state;
    }
}

export default counter;