import { baseUrl } from "../config"

export const getProducts = () => {
    return fetch(baseUrl+ "/product").then(response => {return response.json()})
}