import React, { useState } from 'react'
import { useCart } from './Cartcontext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Banner from './banner';
function Checkout() {
    const{selectedItems}=useCart();
    const random=Math.floor(Math.random()*500);
    const navigate=useNavigate();
        return (
            <>
                <div className='checkIn'>
            <img width="30" height="30" id="backbutton"
    src="https://img.icons8.com/forma-light/50/left.png" alt="left" 
    onClick={()=>navigate('/')}/><span> <Banner/></span>
    </div>
    <h2>Selected Items</h2> 
    <div className='cartdiv divide'>
             {
            selectedItems.map((item)=>{
          return  <Card key={item.idCategory}> 
             
        <Card.Img variant="top" src={item.strCategoryThumb}  className='cardimg' /> 
                  
                    <Card.Body className='card-body'> 
                    <Card.Title>{item.strCategory}</Card.Title>
                   <Card.Text>Rs.129</Card.Text> 
                 </Card.Body>
               </Card>
             })
        }
            </div>
            <hr/>
            <h3>Order payment details</h3>
            {
                selectedItems.map((orderItem)=>{
                    const{idCategory,strCategory}=orderItem
                   return <div key={idCategory}>
                    <a style={{fontSize:"20px"}}>{strCategory}
                    </a>
                    <p style={{textAlign:"center"}}>{random}</p>
                    </div>
                })
             }
             <hr/>
            <h4>Order Total :{random*selectedItems.length} </h4>
            <Button variant="primary" onClick={()=>navigate("/order")}>
            Order</Button>
            </>
  )
}

export default Checkout;
