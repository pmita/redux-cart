import {
    CART_LIST_REQUEST,
    CART_LIST_SUCCESS, 
    CART_LIST_FAIL,
    CART_ITEM_ADD_REQUEST,
    CART_ITEM_ADD_SUCCESS,
    CART_ITEM_ADD_FAIL,
    CART_ITEM_REMOVE_REQUEST,
    CART_ITEM_REMOVE_SUCCESS,
    CART_ITEM_REMOVE_FAIL,
    CART_ITEM_UPDATE_REQUEST,
    CART_ITEM_UPDATE_SUCCESS,
    CART_ITEM_UPDATE_FAIL
} from '../actions/constants/cartConstant';

export const listCartItemsReducer = (state={ cartItems : []}, action) => {
    switch(action.type){
        case CART_LIST_REQUEST:
            return {
                loading : true,
                cartItems : []
            };
        case CART_LIST_SUCCESS:
            return {
                loading : false,
                cartItems : action.payload
            };
        case CART_LIST_FAIL:
            return {
                loading : false,
                error : action.payload
            };
        case CART_ITEM_ADD_REQUEST:
            return state;
        case CART_ITEM_ADD_SUCCESS:
            return state;
        case CART_ITEM_ADD_FAIL:
            return state;
        case CART_ITEM_REMOVE_REQUEST:
            return state;
        case CART_ITEM_REMOVE_SUCCESS:
            return state;
        case CART_ITEM_REMOVE_FAIL:
            return state;
        case CART_ITEM_UPDATE_REQUEST:
            return state;
        case CART_ITEM_UPDATE_SUCCESS:
            return state;
        case CART_ITEM_UPDATE_FAIL:
            return state;
        default:
            return state;
    }
}