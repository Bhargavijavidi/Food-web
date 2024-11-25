import React,{createContext, useContext, useState} from "react";
const cartcontext=createContext();
export const CartProvider=({children})=>{
    const[selectedItems,setSelectedItems]=useState([]);
const addItemtocart=(item)=>{
    setSelectedItems((prevItems)=>[...prevItems,item])
}
  return <cartcontext.Provider value={{selectedItems,addItemtocart}}>
     {children}
    </cartcontext.Provider>
}
export const useCart=()=>{
    return useContext(cartcontext)
}