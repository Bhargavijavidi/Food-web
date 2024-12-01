import React from 'react';
import './App.css';
import BasicExample from './example';
import Cart from './cart';
import {Routes,Route} from "react-router-dom"
import {CartProvider } from './Cartcontext';
import Checkout from './checkout';
import Order from './order';
function App() {
  return (
    <div className="App">
      <CartProvider>
      <Routes>
        <Route path="/" element={<BasicExample/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
      </CartProvider>
      
    </div>
  );
}

export default App;
