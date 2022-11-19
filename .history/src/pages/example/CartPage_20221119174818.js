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
                        <button onClick="" style={{border:'none', borderRadius:'12px', backgroundColor:'green', color:'white', margin:'4px 2px', height:'45px', width:'300px'}}><Link style={{textDecoration:'none'}} to="/order"><div className="col-12" style={{color:'white'}}>Add More Items</div></Link></button>
                    </td>
                </tr>
                <tr>&nbsp;</tr>
            </table>
            <hr></hr>
            <div className="col-12" align="center" style={{backgroundColor:'#03A9F4', color:'white', fontSize:'20px'}}>Select Pick-up Time (For Take-away Customers only)</div>
            <div className="col-12">&nbsp;</div>
            <div className="col-12" align="center">
                <input type="radio" value="20" name="pick-up" />&nbsp;&nbsp;<b>In 20 minutes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>  
                <input type="radio" value="30" name="pick-up" />&nbsp;&nbsp;<b>In 30 minutes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                <input type="radio" value="45" name="pick-up" />&nbsp;&nbsp;<b>In 45 minutes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                <input type="radio" value="1" name="pick-up" />&nbsp;&nbsp;<b>In 1 hour&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> 
                <input type="radio" value="more" name="pick-up" />&nbsp;&nbsp;<b>More than 1 hour</b>             
            </div>
            <div className="col-12">&nbsp;</div>
            <hr></hr>
            <div className="col-12">&nbsp;</div>
            <div className="col-12">&nbsp;</div>
            <div className="col-12" align="center" style={{backgroundColor:'gray', color:'white', fontSize:'20px'}}>Select Dine-in Time (For Dine-in Customers only)</div>
            <div className="col-12">&nbsp;</div>
            <div className="col-12" align="center">
                <input type="radio" value="10" name="dine-in" />&nbsp;&nbsp;<b>10:00AM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>  
                <input type="radio" value="12" name="dine-in" />&nbsp;&nbsp;<b>12:00NN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                <input type="radio" value="2" name="dine-in" />&nbsp;&nbsp;<b>2:00PM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                <input type="radio" value="4" name="dine-in" />&nbsp;&nbsp;<b>4:00PM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> 
                <input type="radio" value="6" name="dine-in" />&nbsp;&nbsp;<b>6:00PM</b>             
            </div>
            <div className="col-12">&nbsp;</div>
            <hr></hr>
            <table>
                <tr>&nbsp;</tr>
                <tr>
                    <td align="center">
                        <button onClick="" style={{border:'none', borderRadius:'12px', backgroundColor:'green', color:'white', margin:'4px 2px', height:'45px', width:'300px'}}><Link style={{textDecoration:'none'}} to="/cart"><div className="col-12" style={{color:'white'}}>Proceed to Check out</div></Link></button>
                    </td>
                </tr>
                <tr>&nbsp;</tr>
            </table>
        </div>
      </div>
    );
  };
  
  export default CartPage;