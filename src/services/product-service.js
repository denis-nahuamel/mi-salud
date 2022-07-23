import { baseUrl } from "../config"

export const getProducts = () => {
    return fetch(baseUrl + "/product").then(response => { return response.json() })
}
export const addProduct = (product) => {
    return fetch(baseUrl + "/product", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.status === 422) return res.status;
        else return res.json();
    })
        .catch(error => console.error('Error:', error))
}