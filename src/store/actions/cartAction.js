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
import { 
    collection, 
    getDocs, 
    doc, 
    setDoc, 
    getDoc, 
    deleteDoc, 
    updateDoc 
} from 'firebase/firestore';
import nextId from 'react-id-generator';

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

export const addProductToCart = (new_cart_item) => async (dispatch) => {
    const newItemId = nextId()

    try{
        dispatch({ type : CART_ITEM_ADD_REQUEST })

        const cartItemRef = doc(db, 'cart', newItemId)
        const docSnap = await getDoc(cartItemRef)

        if(docSnap.exists()){
            const existItem = docSnap.data()
            alert(existItem.title + 'is already in your cart')
            dispatch({ type : CART_ITEM_ADD_FAIL })
        } else {
            console.log('No such document yet')
            await setDoc(doc(db, 'cart', newItemId), {
                id : newItemId,
                title : new_cart_item.title,
                price : new_cart_item.price,
                image : new_cart_item.image,
                qtyInCart : 1
            })
            alert('Item' + new_cart_item.title + 'was added in your added')
            dispatch({ type : CART_ITEM_ADD_SUCCESS, payload : new_cart_item })
        }
    }catch(err){
        alert('Failed to add' + new_cart_item)
        dispatch({
            type : CART_ITEM_ADD_FAIL,
            payload : (err.response && err.response.data.message)
                ? err.response.data.message
                :err.message
        })
    }


}