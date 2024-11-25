import React from 'react';
import './App.css';
import BasicExample from './example';
import Cart from './cart';
import {Routes,Route} from "react-router-dom"
import {CartProvider } from './Cartcontext';
function App() {
  return (
    <div className="App">
     
      <CartProvider>
      <Routes>
        <Route path="/" element={<BasicExample/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </CartProvider>
      
    </div>
  );
}

export default App;
