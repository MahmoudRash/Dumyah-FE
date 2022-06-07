import axios from 'axios'
import { parseUrlQuery } from './ApiHelpers'

export const getBrands = () => {
  return axios('http://localhost:5000/api/v1/brands', {
    headers: {
      'Authorization': 'Basic eW91cmxvZ2luOnlvdXJwYXNzd29yZA==',
    },
  })
    .then(res => {
      return res?.data
    })
    .catch(e => {
      return Promise.reject(e)
    })
}

export const getProducts = (query) => {
  return axios(`http://localhost:5000/api/v1/products${parseUrlQuery(query)}`, {
    headers: {
      'Authorization': 'Basic eW91cmxvZ2luOnlvdXJwYXNzd29yZA=='
    }
  })
    .then(res => {
      return res?.data
    })
    .catch(e => {
      return Promise.reject(e)
    })
}
