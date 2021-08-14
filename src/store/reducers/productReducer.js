import { ActionTypes } from '../constants/action-types';

const initialState = () => {
    return {
        products: [
            {
            id: 1,
            title: "Alabs",
            Category: "programmer", 
            }
        ],
    }
};

export const productReducer = (state = initialState(), {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}