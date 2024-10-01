import axios from "axios";

export function getProducts() {
  return axios.get(`https://dummyjson.com/products`);
}
export function deleteProducts(id) {
  return axios.delete(`https://dummyjson.com/products/${id}`);
}
export function addProducts(value) {
  return axios.post(`https://dummyjson.com/products/add`,{data});
}
