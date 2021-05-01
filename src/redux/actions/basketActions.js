import * as types from "./actionTypes";

export const addToCart= (payload)=>{
  return{
      type: types.ADD_TO_CART,
      payload
  }
}

export const removeItem=(payload)=>{
  return{
      type: types.REMOVE_ITEM,
      payload
  }
}

export const decreaseQuantity=(payload)=>{
  return{
      type: types.DECREASE_QUANTITY,
      payload
  }
}

export const increaseQuantity=(payload)=>{
  return{
      type: types.INCREASE_QUANTITY,
      payload
  }
}