import * as types from './Type';

export function increment() {
    return {
        type:types.INCREMENT
    };
}

export function decrement() {
    return {
        type: types.DECREMENT
    };
}

export function setDiff(value) {
    return {
        type:types.SET_DIFF,
        diff:value
    };
}