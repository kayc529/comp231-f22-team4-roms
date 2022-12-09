import { useSelector, useDispatch } from 'react-redux';

const CheckoutPage = ({ order }) => {
    // order
    let sampleOrder = {"selectedTime": "2022-12-01 20:13:00", "orderType": "Dine in"}

    
    let cart;
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
    } else {
        cart = [];
    }

    let subtotal = cart.reduce((subtotal, item) =>  subtotal = subtotal + item.price * item.count , 0 )

    return (
      <div className="container">
        <div className="row pt-5">
          <h1>Checkout</h1>
          <div className="col-12">
            <div className="table-responsive">
              <table className="table">
                <thead>
                    <tr>
                      <th>Item</th>
                      <th></th>
                      <th width="200" className='text-center'>Amount</th>
                      <th width="100"></th>
                    </tr>
                </thead>
                <tbody>
                {cart.map((item, index) => (
                  <tr key={index} className="col-12">
                    <td>Image</td>
                    <td>{item.name}</td>
                    <td className='text-center'>{item.count}</td>
                    <td className='text-end'>$ {item.price}</td>
                  </tr>
                ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td rowSpan={3} colSpan={2}>
                      Order Type: {sampleOrder.orderType}<br/>
                      Select Time: {sampleOrder.selectedTime}
                    </td>
                    <td className='text-end'>Subtotal : </td>
                    <td className='text-end'>{(Math.round(subtotal * 100) / 100).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className='text-end'>Tax : </td>
                    <td className='text-end'>{(Math.round(subtotal * 0.15 * 100) / 100).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className='text-end'>Total : </td>
                    <td className='text-end'>{(Math.round(subtotal * 1.15 * 100) / 100).toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex">
              <button type="button" className="btn btn-outline-dark ms-auto me-3">Back</button>
              <button type="button" className="btn btn-dark">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CheckoutPage;
  