import React from 'react';
import { Link } from "react-router-dom";

const CartPage = () => {
    return (
      <div className="container">
        <div className="row">
            <div className="col-12" align="center" style={{backgroundColor:'gray', fontColor:'white'}}>MY CART</div>
            <hr></hr>
            <br></br>
            <div className="col-12"><b>Order Details</b></div> 
            <div className="col-12">&nbsp;</div>  
            <table border="1">
                <tr>&nbsp;</tr>
                <tr>
                    <td>
                        <div className="col-12">&nbsp;&nbsp;Jumbo Melted Cheese Burger, 2 pcs. $9.50</div>
                    </td>
                    <td align="center">
                        <button onClick="" style={{backgroundColor:'green', color:'white'}}> Add </button>
                    </td>
                    <td>
                        <button onClick="" style={{backgroundColor:'red'}}> Remove </button>
                    </td>
                </tr>
                <tr><td><hr></hr></td><td><hr></hr></td><td><hr></hr></td></tr>
                <tr>
                    <td>
                        <div className="col-12">&nbsp;&nbsp;Mango Almond Smoothie, 1 pc. $5.00</div>
                    </td>
                    <td align="center">
                        <button onClick="" style={{backgroundColor:'green'}}> Add </button>
                    </td>
                    <td>
                        <button onClick="" style={{backgroundColor:'red'}}> Remove </button>
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
                    <td align="center">
                        <button onClick="" style={{backgroundColor:'green'}}><Link to="/order"> Add More Items </Link> </button>
                    </td>
                </tr>
            </table>
        </div>
      </div>
    );
  };
  
  export default CartPage;