import { combineReducers, legacy_createStore } from "redux";
import data from "../src/assets/data";

// Action
export const addToCart = ( options, quantity, id ) => {
    return {
        type: 'addToCart',
        payload: { options, quantity, id }
    }
}

export const removeFromCart = (id) => {
    return {
        type: 'removeFromCart',
        payload: {id}
    }
}

// Reducer
// state = App.jsx가면 볼 수 있음
const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'addToCart':
            return [...state, action.payload];
        case 'removeFromCart':
            return state.filter(el => action.payload.id !== el.id);
        default:
            return state;
    }
}

const menuReducer = (state = data.menu, action) => {
    return state;
}

// combineReducer
const rootReducer = combineReducers({ cartReducer, menuReducer })

// Store
export const store = legacy_createStore(rootReducer)