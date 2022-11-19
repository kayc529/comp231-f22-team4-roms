import React from 'react';
import { Link } from "react-router-dom";

const OrderOnlinePage = () => {
    return (
      <div className="container">
        <div className="row">
        <div className="col-12" align="center" style={{backgroundColor:'gray', color:'white', fontSize:'25px'}}><b>ORDER ONLINE</b></div>
            <hr></hr>
            <br></br>
            <div className="col-12" align="center"><b>Featured Items</b></div>
            <table border="1">
                <tr>&nbsp;</tr>
                <tr>
                    <td align="center">
                        <img src={require('./burger.jpg')} alt="burger" height="300" width="450" />
                        <div className="col-12" align="center">Jumbo Melted Cheese Burger</div>
                        <div className="col-12" align="center">$4.75</div>
                        <input onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }}}
                        />
                        &nbsp;&nbsp;<button onClick=""> Add </button> <button onClick=""> Remove </button>
                    </td>
                    <td align="center">
                        <img src={require('./smoothie.jpg')} alt="smoothie" height="300" width="450" />
                        <div className="col-12" align="center">Mango Almond Smoothie</div>
                        <div className="col-12" align="center">$5.00</div>
                        <input onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }}}
                        />
                        &nbsp;&nbsp;<button onClick=""> Add </button> <button onClick=""> Remove </button>
                    </td>
                </tr>
                <tr>&nbsp;</tr>
                <tr>
                    <td align="center">
                        <img src={require('./pizza.jpg')} alt="pizza" height="300" width="450" />
                        <div className="col-12" align="center">Regular Size Margherita</div>
                        <div className="col-12" align="center">$11.99</div>
                        <input onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }}}
                        />
                        &nbsp;&nbsp;<button onClick=""> Add </button> <button onClick=""> Remove </button>
                    </td>
                    <td align="center">
                        <img src={require('./sausage.jpg')} alt="sausage" height="300" width="450" />
                        <div className="col-12" align="center">6 Pieces Family Hungarian Sausage</div>
                        <div className="col-12" align="center">$14.50</div>
                        <input onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }}}
                        />
                        &nbsp;&nbsp;<button onClick=""> Add </button> <button onClick=""> Remove </button>
                    </td>
                </tr>
                <tr>&nbsp;</tr>
            </table>
            <table>
                <tr>&nbsp;</tr>
                <tr>
                    <td align="center">
                        <button onClick="" style={{border:'none', borderRadius:'12px', backgroundColor:'green', color:'white', margin:'4px 2px', height:'45px', width:'300px'}}><Link style={{textDecoration:'none'}} to="/cart"><div className="col-12" style={{color:'white'}}>View My Cart</div></Link></button>
                    </td>
                </tr>
            </table>
        </div>
      </div>
    );
  };
  
  export default OrderOnlinePage;