import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { addOrder } from '../features/order/orderSlice';

const CheckoutPage = ({ order }) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // order type
  let orderType = "";
  if (localStorage.getItem('orderType') == 'DINE_IN'){
    orderType = "Dine in";
  }else{
    orderType = "Take out";
  }
  //let sampleOrder = {"selectedTime": "2021-12-01 20:13:00", "orderType": orderType}
  let selectedTime = localStorage.getItem('selectedTime');
  
  // Summery
  let cart;
  let subtotal = 0;
  let tax = 0.15;
  let total = 0;

  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'))
    cart.forEach(cartItem => {
      subtotal += cartItem.count * cartItem.price
    });
    total = subtotal * (1+tax);
  } else {
    cart = [];
  }

  const onAddOrder = async () => {
    let newOrder;
    if (localStorage.getItem('orderType') == 'DINE_IN') {
      newOrder = {
        orderType : 'DINE_IN', 
        reserveTime : selectedTime,
        total : total,
        items : cart
      }
    } else {
      newOrder = {
        orderType : 'TAKE_OUT', 
        pickupTime : selectedTime,
        total : total,
        items : cart
      }
    }
    
    await dispatch(addOrder(newOrder));
    localStorage.removeItem("cart");
    localStorage.removeItem("selectedTime");
    //can do something after the item is added
    //navigate('../menu-items');
  };

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
                  <th width="100" className='text-center'>Unit</th>
                  <th width="100"></th>
                </tr>
              </thead>
              <tbody>
              {cart.map((item, index) => (
                <tr key={index} className="col-12">
                  <td><i className="bi bi-image"></i></td>
                  <td>{item.name}</td>
                  <td className='text-center'>{item.count}</td>
                  <td className='text-end'>$ {item.price}</td>
                </tr>
              ))}
              </tbody>
              <tfoot>
                <tr>
                  <td rowSpan={3} colSpan={2}>
                    Order Type: {orderType}<br/>
                    Select Time: {selectedTime}
                  </td>
                  <td className='text-end'>Subtotal : </td>
                  <td className='text-end'>{(Math.round(subtotal * 100) / 100).toFixed(2)}</td>
                </tr>
                <tr>
                  <td className='text-end'>Tax : </td>
                  <td className='text-end'>{(Math.round(subtotal * tax * 100) / 100).toFixed(2)}</td>
                </tr>
                <tr>
                  <td className='text-end'>Total : </td>
                  <td className='text-end'>{(Math.round(subtotal * (1+tax) * 100) / 100).toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex">
            <a href="/cart" className="btn btn-outline-dark ms-auto me-3">Back</a>
            <button onClick={onAddOrder} type="button" className="btn btn-dark">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
