import { PRODUCTS, FILTER_BY_NAME } from '../actions';

const initialState = null;

const changeProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS:
            return {
                ...state,
                ...action.payload,
            };
        /* case FILTER_BY_NAME:
            return {
                ...state,
                ...action.payload,
            }; */
        default:
            return state;
    }
};

export default changeProductsReducer;
