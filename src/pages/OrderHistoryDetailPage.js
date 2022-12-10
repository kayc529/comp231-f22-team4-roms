import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOrder, deleteOrder } from '../features/order/orderSlice';

const OrderHistoryDetailPage = () => {
  const { order } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderType = ['DINE_IN', 'TAKE_OUT'];
  const orderStatus = ['PENDING', 'ACCEPTED', 'REJECTED', 'COMPLETED', 'CANCELED'];

  //get order list when the page is loaded
  useEffect(() => {
      getOrderData();
  }, []);

  const getOrderIdFromUrl = () => {
    const url = document.URL;
    const id = url.substring(url.lastIndexOf('/') + 1);
    return id;
  };

  const getOrderData = () => {
    const orderId = getOrderIdFromUrl();
    dispatch(getOrder(orderId));
  };

  const onDelete = async (event) => {
    const orderId = getOrderIdFromUrl();
    await dispatch(deleteOrder(orderId));
    navigate('../order-history');
  };

  const onOrderTypeChanged = () => {

  };

  const onOrderStatusChanged = () => {

  };

  let isLoggedIn = false;
  return (
    <div className="container">
      <h1 className='text-center pb-4'>Order History</h1>
      <div className='d-flex pb-4'>
        <a href='/order-history' className='btn btn-outline-dark ms-auto me-3'>
          <i className="bi bi-arrow-return-left"></i> cancel
        </a>
        <button className='btn btn-dark'>Update</button>
      </div>
      <div className="row">
        <div className="col-12">
          <div className='table-responsive'>
            <table className='table'>
              <tbody>
                <tr>
                  <th width="200">Order No</th>
                  <td>{order.referenceNumber}</td>
                </tr>
                <tr>
                  <th>Order Date</th>
                  <td>{order.reserveTime && 'Reserve Time: ' + order.reserveTime}
                      {order.pickupTime && 'Pickup Time: ' + order.pickupTime}</td>
                </tr>
                <tr>
                  <th width="200">Last update</th>
                  <td>{order.updatedAt }</td>
                </tr>
                <tr>
                  <th>Order Type</th>
                  <td>
                    {orderType.map((orderType, index) => {
                      return (
                        <div key={index} className="form-check">
                          <input className="form-check-input" type="radio" name="orderType" id={"orderType"+index} value={order.orderType} checked={order.orderType === orderType} onChange={onOrderTypeChanged}/>
                          <label className="form-check-label" htmlFor={"orderType"+index}>{orderType}</label>
                        </div>
                      )
                    })}
                  </td>
                </tr>
                <tr>
                  <th>Order status</th>
                  <td>
                    {orderStatus.map((orderStatus, index) => {
                      return (
                        <div key={index} className="form-check">
                          <input className="form-check-input" type="radio" name="orderStatus" id={"orderStatus"+index} checked={order.status === orderStatus} onChange={onOrderStatusChanged}/>
                          <label className="form-check-label" htmlFor={"orderStatus"+index}>{orderStatus}</label>
                        </div>
                      )
                    })}</td>
                </tr>
                <tr>
                  <th>Food Item</th>
                  <td>
                      <div>Item 1</div>
                      <div>Item 2</div>
                      <div>Item 3</div>
                      <div>Item 4</div>
                  </td>
                </tr>
                <tr>
                  <th>Total Price</th>
                  <td>$</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='d-flex'>
            <button onClick={onDelete} className='ms-auto btn btn-outline-danger'>Delete Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryDetailPage;
