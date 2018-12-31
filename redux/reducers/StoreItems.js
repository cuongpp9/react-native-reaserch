import *as types from "../types/ActionType";
import dataItems from '../utilitys/Index'

const initialState = dataItems;

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_STORES:
            console.log('vao reducer', action.name);
            const searchItem = [];
            state.map((item) => {
                item.description == action.name ? searchItem.push(item) : '';
            });
            console.log(searchItem);
            state = searchItem.length > 0 ? searchItem : initialState;
            return state;

        default: return state;
    }
};