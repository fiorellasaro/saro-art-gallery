import React, {createContext, useReducer} from "react";
import { CART_RETRIEVE_REQUEST, CART_RETRIEVE_SUCCESS } from "../utils/constants";

export const Store = createContext();

function reducer (state, action){
    switch(action.type){
        case CART_RETRIEVE_REQUEST:
            return{
                ...state,
                cart: {loading: true},

            };
        case CART_RETRIEVE_SUCCESS:
             return{
                ...state,
                cart: {loading: false, data: action.payload},
                };
        default:
            return state;
    }
};

const initialState = {
    cart: {loading: true},
    order: null,
};

export function StoreProvider(props){
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value= {value}>{props.children}</Store.Provider>
}