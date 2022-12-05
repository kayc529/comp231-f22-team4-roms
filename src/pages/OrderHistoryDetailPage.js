import { useParams } from 'react-router-dom';

const OrderHistoryDetailPage = () => {
    const ORDERS = [
        {orderNo: '0001', orderDate:'2022-11-11', orderType:'TAKEAWAY', price: '49.99'},
        {orderNo: '0002', orderDate:'2022-11-13', orderType:'DINEIN', price: '9.99'},
        {orderNo: '0003', orderDate:'2022-11-17', orderType:'TAKEAWAY', price: '29.99'},
        {orderNo: '0004', orderDate:'2022-11-19', orderType:'DINEIN', price: '99.99'},
        {orderNo: '0005', orderDate:'2022-11-23', orderType:'DINEIN', price: '399.99'},
        {orderNo: '0006', orderDate:'2022-11-29', orderType:'DINEIN', price: '199.99'}
      ];

    const params = useParams();
    let orderDetail = {
        orderNo: '',
        orderDate: '',
        orderType: '',
        price: ''
    };

    ORDERS.map((item, index) => {
        if(item.orderNo == params.id){
            orderDetail = item
            console.log(orderDetail);
        }
    });

    return (
      <div className="container">
        <h1 className='text-center pb-4'>Order History</h1>
        <div className='d-flex pb-4'>
            <a href='/order-history' className='btn btn-outline-dark ms-auto me-3'>
                <i className="bi bi-arrow-return-left"></i> cancel
            </a>
        </div>
        <div className="row">
          <div className="col-12">
            <div className='table-responsive'>
              <table className='table'>
                <tbody>
                    <tr>
                        <th width="200">Order No</th>
                        <td>{orderDetail.orderNo}</td>
                    </tr>
                    <tr>
                        <th>Order Date</th>
                        <td>{orderDetail.orderDate}</td>
                    </tr>
                    <tr>
                        <th>Order Type</th>
                        <td>{orderDetail.orderType}</td>
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
                        <td>$ {orderDetail.price}</td>
                    </tr>
                    <tr>
                        <th>Remark</th>
                        <td>Aliquip quis in aute eiusmod. Sint enim officia id fugiat. Mollit irure voluptate veniam aute. Nisi reprehenderit labore ipsum amet esse commodo est veniam ipsum non aliqua aute enim quis. In mollit pariatur reprehenderit minim cillum elit aliqua laboris cillum sint sunt laboris. Ex dolor veniam aliquip mollit quis. Excepteur enim culpa quis ipsum sunt consectetur do. Incididunt culpa adipisicing elit nisi.</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default OrderHistoryDetailPage;
  