import {
  GET_BRANDS,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_FAILURE,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  UPDATE_FILTERS
} from './Types'

const initialState = {
  loading: false,
  products: [],
  brands: [],
  filter:{
    _page:1,
    _limit:9,
    name_like:'',
    gender:-1,
    sale_ne:false,
    rating:'All',
    price:[0,1000.0000],
    'brand.manufacturer_id':'All'
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BRANDS:
      return { ...state, loading: true }

    case GET_BRANDS_SUCCESS:
      return { ...state, loading: false, brands: action.payload }

    case GET_BRANDS_FAILURE:
      return { ...state, loading: false }

    case GET_PRODUCTS:
      return { ...state, loading: true }

    case GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload }

    case GET_PRODUCTS_FAILURE:
      return { ...state, loading: false }

    case UPDATE_FILTERS:
      return { ...state, filter:action.payload}
    default:
      return state;
  }
}
