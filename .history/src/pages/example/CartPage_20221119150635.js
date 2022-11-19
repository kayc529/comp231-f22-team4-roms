import React from 'react';

const CartPage = () => {
    return (
      <div className="container">
        <div className="row">
            <div className="col-12" align="center">MY CART</div>
            <hr></hr>
            <br></br>
            <table border="1">
                <tr>&nbsp;</tr>
                <tr>
                    <td align>
                        <div className="col-12">Jumbo Melted Cheese Burger, 2 pcs. $9.50</div>
                    </td>
                    <td align="center">
                        <button onClick=""> Add </button>
                    </td>
                    <td>
                        <button onClick=""> Remove </button>
                    </td>
                </tr>
 
                <tr>&nbsp;</tr>
            </table>
            <table>
                <tr>&nbsp;</tr>
                <tr>
                    <td align="center">
                        <button onClick=""> Proceed to Check out </button>
                    </td>
                </tr>
            </table>
        </div>
      </div>
    );
  };
  
  export default CartPage;