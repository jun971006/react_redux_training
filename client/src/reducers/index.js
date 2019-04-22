import * as types from '../actions/Type';

import { combineReducers } from 'redux';
import counter from './counter';
//import ui from './ui';
//import { INCREMENT } from '../actions/Type';

export default combineReducers({
    counter
});
// const Initialstate = {
//     value:0,
//     diff:1
// }

// const counter = (state = Initialstate, action) => {
//     switch(action.type){
//         case types.INCREMENT:
//             return Object.assign({}, state, {
//                 value:state.value + state.diff
//             });
//         case types.DECREMENT:
//             return Object.assign({}, state, {
//                 value:state.value - state.diff
//             });
//         case types.SET_DIFF:
//             return Object.assign({}, state, {
//                 diff:action.diff
//             });
//         default:
//             return state;
//     }
// }