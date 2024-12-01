import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from './Cartcontext';
import { useNavigate } from 'react-router-dom';
import Banner from './banner';
function Cart() {
  const navigate=useNavigate();
  const{selectedItems,setSelectedItems}=useCart();
  const[items,setitems]=useState(selectedItems);
  const handleremove=(idRemove)=>{
    const newItems=items.filter((eachItem)=>
      eachItem.idCategory!==idRemove)
      setitems(newItems); 
      setSelectedItems(newItems);
  }

    return ( <>
    <div className='checkIn'>
            <img width="30" height="30" id="backbutton"
    src="https://img.icons8.com/forma-light/50/left.png" alt="left" 
    onClick={()=>navigate('/')}/><span> <Banner/></span>
    </div>
    <h2>Selected Items</h2> 
    <div className='cartdiv'> 
    { items.length===0? 
    (<h1>0 items in cart</h1>):(
      items.map((item) =>
        (<Card key={item.idCategory} className='cartcard'> 
        <Card.Img variant="top" src={item.strCategoryThumb}  className='cardimg' /> 
        <Card.Body className='card-body'> 
        <Card.Title>{item.strCategory}</Card.Title>
         <Card.Text className="card-text"> {item.strCategoryDescription}
     </Card.Text> <Card.Text>Rs.129</Card.Text> 
     <Button variant="primary" onClick={()=>handleremove(item.idCategory)}>
     Remove</Button>
     </Card.Body></Card>)))}
     </div>
       </>)
}

export default Cart;
