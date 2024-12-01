import React from 'react';
import Card from 'react-bootstrap/Card';
import { useCart } from './Cartcontext';
import { useNavigate } from 'react-router-dom';
function Cart() {
  const navigate=useNavigate();
  const{selectedItems}=useCart();
    return ( <>
    <img width="30" height="30" id="backbutton"
    src="https://img.icons8.com/forma-light/50/left.png" alt="left" onClick={()=>navigate('/')}/>
    <h2>Selected Items</h2> 
    <div className='cartdiv'> 
    { selectedItems.length===0? 
    (<h1>0 items in cart</h1>):(
      selectedItems.map((item) =>
        (<Card key={item.idCategory} className='cartcard'> 
        <Card.Img variant="top" src={item.strCategoryThumb}  className='cardimg' /> 
        <Card.Body className='card-body'> 
        <Card.Title>{item.strCategory}</Card.Title>
         <Card.Text className="card-text"> {item.strCategoryDescription}
     </Card.Text> <Card.Text>Rs.129</Card.Text> 
     </Card.Body></Card>)       ))}
     </div>
       </>)
}

export default Cart;
