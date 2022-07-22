import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getProducts } from './services/product-service';

function App() {
  useEffect(()=> {
    getProducts().then(response => console.log("response", response))
  },[])
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
