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
} from './constants/cartConstant';
import db from '../../firebase/config';
import { collection, getDocs, doc, setDoc, getDoc, deleteDoc, updateDoc } from 'firebase/firestore';

export const listCartItems = () => async (dispatch) => {
    let cartData = []

    async function getCartItem(db){
        const cartCollection = collection(db, 'cart')
        const cartSnapshot = await getDocs(cartCollection)
        const cartList = await cartSnapshot.docs.map(doc => doc.data())
        return cartList
    }

    try{
        dispatch({ type : CART_LIST_REQUEST })

        cartData = await getCartItem(db)

        dispatch({ type : CART_LIST_SUCCESS, payload : cartData })
    } catch(err){
        dispatch({ 
            type : CART_LIST_FAIL, 
            payload : (err.response && err.response.data.message)
                ? err.response.data.message
                :err.message
        })
    }
}