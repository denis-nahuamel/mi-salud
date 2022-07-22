/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import logo from './logo.svg';
import './App.css';

import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { getProducts } from './services/product-service';
import ListProducts from './pages/list-products-page';
import { productContainer } from './styles/product-style';
import AddProductDialog from "./pages/add-product-dialog";

function App() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  useEffect(()=> {
    getProducts().then(response => setProducts(response))
  },[])
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Product
      </Button>
      <AddProductDialog
        open={open}
        onClose={handleClose}
      />
      <div css={productContainer}>
        <ListProducts products={products} />
      </div>
    </>
  );
}

export default App;
