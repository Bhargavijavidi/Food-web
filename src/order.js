import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function Order() {
    const navigate=useNavigate()
  return (
    <div  style={{textAlign:"center"}}>
        <h1>Order Placed</h1>
        <br/>
        <Button variant="primary" onClick={()=>navigate("/")}>Back to Home</Button>
    </div>
  )
}

export default Order;
