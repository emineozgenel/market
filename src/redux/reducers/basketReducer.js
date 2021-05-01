import * as types from '../actions/actionTypes'
import initialState from './initialState'

const Storage = (basket) => {
  localStorage.setItem('basket', JSON.stringify(basket.length > 0 ? basket : []))
}

export const sumItems = basket => {
  Storage(basket)
  const itemCount = basket.reduce((total, product) => total + product.quantity, 0)
  const total = basket.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
  return { itemCount, total }
}

export default function basketReducer (state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      if (!state.basket.find(item => item.slug === action.payload.slug)) {
        state.basket.push({
          ...action.payload,
          quantity: 1
        })
      }

      return {
        ...state,
        ...sumItems(state.basket)
      }
    case types.REMOVE_ITEM:
      return {
        ...state,
        ...sumItems(state.basket.filter(item => item.slug !== action.payload.slug)),
        basket: [...state.basket.filter(item => item.slug !== action.payload.slug)]
      }
    case types.INCREASE_QUANTITY:
      state.basket[state.basket.findIndex(item => item.slug === action.payload.slug)].quantity++
      return {
        ...state,
        ...sumItems(state.basket),
        basket: [...state.basket]
      }
    case types.DECREASE_QUANTITY:
      state.basket[state.basket.findIndex(item => item.slug === action.payload.slug)].quantity--
      return {
        ...state,
        ...sumItems(state.basket),
        basket: [...state.basket]
      }
    default:
      return state
  }
}
