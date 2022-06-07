import {
  GET_BRANDS,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_FAILURE,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  UPDATE_FILTERS
} from './Types'
import { getBrands, getProducts } from './Services'

export const getBrandsAction = () => async dispatch => {
  dispatch({
    type: GET_BRANDS
  })
  try {
    const result = await getBrands()
    dispatch({
      type: GET_BRANDS_SUCCESS,
      payload: result
    })
  } catch (error) {
    dispatch({
      type: GET_BRANDS_FAILURE,
      payload: error
    })
  }
}


export const getProductsAction = (query = { _page: 1, _limit: 9 }) => async dispatch => {
  dispatch({
    type: GET_PRODUCTS
  })
  try {
    const result = await getProducts(query)
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: result
    })
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAILURE,
      payload: error
    })
  }
}

export const filterObjectAction = (filter) => dispatch => {
  dispatch({
    type:UPDATE_FILTERS,
    payload:filter
  })
}