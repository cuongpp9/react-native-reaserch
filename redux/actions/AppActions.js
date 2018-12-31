import *as types from '../types/ActionType';

export const onSearchItems = (name) => {
    return {
        type: types.SEARCH_STORES,
        name
    }
}
