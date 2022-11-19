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
                    <td>
                        <img src={require('./burger.jpg')} alt="burger" height="300" width="450" />
                    </td>
                    <td>
                    <img src={require('./smoothie.jpg')} alt="smoothie" height="300" width="450" />
                    </td>
                </tr>
            </table>


        </div>
      </div>
    );
  };
  
  export default OrderOnlinePage;