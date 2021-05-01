import { handleResponse, handleError } from './apiUtils'

const baseUrl = process.env.REACT_APP_API_URL + 'products'

export function getProducts (page = 1, query = '') {
  return fetch(`${baseUrl}?_page=${page}&_limit=16&${query}`)
    .then(handleResponse)
    .catch(handleError)
}
