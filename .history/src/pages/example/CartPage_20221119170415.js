import React from 'react';
import { Link } from "react-router-dom";

const CartPage = () => {
    return (
      <div className="container">
        <div className="row">
            <div className="col-12" align="center" style={{backgroundColor:'gray', color:'white', fontSize:'25px'}}><b>MY CART</b></div>
            <hr></hr>
            <br></br>
            <div className="col-12"><b>Order Details</b></div>
            <hr></hr>
            <table border="1">
                <tr>&nbsp;</tr>
                <tr>
                    <td>
                        <div className="col-12">&nbsp;&nbsp;Jumbo Melted Cheese Burger, 2 pcs. $9.50</div>
                    </td>
                    <td align="center">
                        <button onClick="" style={{border:'none', borderRadius:'12px', backgroundColor:'#04AA6D', color:'white', margin:'4px 2px', height:'45px', width:'100px'}}> Edit </button>
                    </td>
                    <td>
                        <button onClick="" style={{border:'none', borderRadius:'12px', backgroundColor:'red', color:'white', margin:'4px 2px', height:'45px', width:'100px'}}> Remove </button>
                    </td>
                </tr>
                <tr><td><hr></hr></td><td><hr></hr></td><td><hr></hr></td></tr>
                <tr>
                    <td>
                        <div className="col-12">&nbsp;&nbsp;Mango Almond Smoothie, 1 pc. $5.00</div>
                    </td>
                    <td align="center">
                        <button onClick="" style={{border:'none', borderRadius:'12px', backgroundColor:'#04AA6D', color:'white', margin:'4px 2px', height:'45px', width:'100px'}}> Edit </button>
                    </td>
                    <td>
                        <button onClick="" style={{border:'none', borderRadius:'12px', backgroundColor:'red', color:'white', margin:'4px 2px', height:'45px', width:'100px'}}> Remove </button>
                    </td>
                </tr>
                <tr><td><hr></hr></td><td><hr></hr></td><td><hr></hr></td></tr>
                <tr>
                    <td>
                        <div className="col-12"><b>&nbsp;&nbsp;Total: $14.50</b></div>
                    </td>
                </tr>               
                <tr>&nbsp;</tr>
            </table>
            <table>
                <tr>&nbsp;</tr>
                <tr>
                    <td>
                        <button onClick="" style={{border:'none', borderRadius:'12px', backgroundColor:'green', color:'white', margin:'4px 2px', height:'45px', width:'300px'}}><Link to="/order"><div className="col-12" style={{color:'white'}}>Add More Items</div></Link></button>
                    </td>
                </tr>
                <tr>&nbsp;</tr>
            </table>
            <hr></hr>
            <div className="col-12" align="center" style={{backgroundColor:'gray', color:'white', fontSize:'20px'}}><b>Select Pick-up Time</b></div>
        </div>
      </div>
    );
  };
  
  export default CartPage;