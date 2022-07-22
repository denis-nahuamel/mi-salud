import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getProducts } from './services/product-service';
import ListProducts from './pages/list-products-page';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(()=> {
    getProducts().then(response => setProducts(response))
  },[])
  return (
    <div className="App">
      <ListProducts products={products} />
    </div>
  );
}

export default App;
