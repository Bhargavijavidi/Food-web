import React from 'react';
import Card from 'react-bootstrap/Card';
import { useCart } from './Cartcontext';
function Cart() {
  const{selectedItems}=useCart();
    return ( <>
    <h2>Selected Items</h2> 
  {
    <div className='cartdiv'> 
    {(selectedItems.map((item) =>
        <Card key={item.idCategory} className='cartcard'> 
        <Card.Img variant="top" src={item.strCategoryThumb}  className='cardimg' /> 
        <Card.Body className='card-body'> 
        <Card.Title>{item.strCategory}</Card.Title>
         <Card.Text className="card-text"> {item.strCategoryDescription}
     </Card.Text> <Card.Text>Rs.129</Card.Text> 
     </Card.Body></Card>
     ))}
     </div>
        }
       </>)
}

export default Cart;
