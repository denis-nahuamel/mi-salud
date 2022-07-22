/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getProducts } from './services/product-service';
import ListProducts from './pages/list-products-page';
import { productContainer } from './styles/product-style';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(()=> {
    getProducts().then(response => setProducts(response))
  },[])
  return (
    <div css={productContainer}>
      <ListProducts products={products} />
    </div>
  );
}

export default App;
