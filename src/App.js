import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import CategoryList from './components/CategoryList';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';


function App() {
  return (
    <div className="App">
      <SearchBar />
      <ProductList />
      <CategoryList />
      <ShoppingCart />
    </div>
  );
}

export default App;
