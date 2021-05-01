import { sumItems } from './basketReducer';
const storage = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [];

const initialState = {
  products: [],
  basket: storage,
  ...sumItems(storage),
  apiCallsInProgress: 0
}
export default initialState;
