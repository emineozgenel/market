import * as types from './actionTypes'
import * as productApi from '../../api/productApi'
import { beginApiCall, apiCallError } from './apiStatusActions'

export function loadProductsSuccess (products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products }
}

export const loadProducts = (page = 1) => (dispatch, getState) => {
  const query = getFilter(getState().filter)
  dispatch(beginApiCall())
  return productApi
    .getProducts(page, query)
    .then(products => {
      products.page = page
      dispatch(loadProductsSuccess(products))
    })
    .catch(error => {
      dispatch(apiCallError(error))
      throw error
    })
}

export const setFilter = (filter) => dispatch => {
  dispatch({
    type: types.SET_FILTER,
    filter
  })
}
export const getFilter = (param) => {
  const { brand, tag, sort } = param || []
  const query = []
  if (brand && brand.length > 0) { query.push(buildSortedQuery('manufacturer', brand)) }
  if (tag && tag.length > 0) { query.push(buildSortedQuery('tags', tag)) }
  if (sort) { query.push(sort) }

  return query.join('&')
}

export const buildSortedQuery = (key, args) => {
  return args
    .map(item => {
      return window.encodeURIComponent(key) +
              '=' +
              window.encodeURIComponent(item)
    })
    .join('&')
}
