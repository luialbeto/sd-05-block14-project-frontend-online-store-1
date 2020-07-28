import React from 'react';
import './App.css';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div className="App">
      <ProductList />
      <ShoppingCart />
    </div>
  );
}

export default App;
