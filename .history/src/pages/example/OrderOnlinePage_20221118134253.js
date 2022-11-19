import React from 'react';

const OrderOnlinePage = () => {
    return (
      <div className="container">
        <div className="row">
            <div className="col-12" align="center">ORDER ONLINE</div>
            <hr></hr>
            <br></br>
            <div className="col-12" align="center">Featured Items</div>
            <table border="1">
                <tr>
                    <td align="center">
                        <img src={require('./burger.jpg')} alt="burger" height="300" width="450" />
                        <div className="col-12" align="center">Jumbo Melted Cheese Burger</div>
                        <div className="col-12" align="center">$5.00</div>
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
                <tr>
                    <td align="center">
                        <img src={require('./burger.jpg')} alt="burger" height="300" width="450" />
                        <div className="col-12" align="center">Jumbo Melted Cheese Burger</div>
                        <div className="col-12" align="center">$5.00</div>
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
            </table>
        </div>
      </div>
    );
  };
  
  export default OrderOnlinePage;