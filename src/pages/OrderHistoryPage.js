import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders } from '../features/order/orderSlice';
import { format } from 'date-fns'

const OrderHistoryPage = () => {
    const { orderList } = useSelector((state) => state.order);
    const dispatch = useDispatch();

    //get order list when the page is loaded
    useEffect(() => {
        getOrderList();
    }, []);

    const getOrderList = () => {
        dispatch(getAllOrders());
    };

    return (
        <div className='container'>
            <h1 className='text-center pb-4'>Order History</h1>
            <div className='table-responsive'>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th className="text-center" width="1">Order No</th>
                            <th className="text-center">Date</th>
                            <th className="text-center" width="120">Order Type</th>
                            <th className="text-center" width="120">Status</th>
                            <th className="text-end">Total</th>
                            <th className='text-end' width="100">Action</th>
                        </tr>
                        {/* <tr className='bg-light'>
                            <td><input name="filterOrderDate" type="text" className="form-control" placeholder="Order Date"/></td>
                            <td></td>
                            <td><select name="filterOrderType" className="form-control">
                                    <option value="ALL">All</option>
                                    <option value="DINEIN">Dine in</option>
                                    <option value="TAKEAWAY">Take away</option>
                                </select></td>
                            <td><input name="filterStatus" type="text" className="form-control" placeholder="status"/></td>
                            <td></td>
                            <td></td>
                        </tr> */}
                    </thead>
                    <tbody>
                    {orderList.map((item, index) => {
                        return (
                        <tr key={index}>
                            <td className="text-center">{item.referenceNumber}</td>
                            <td className="text-center">
                                {item.pickupTime && 'Pickup : ' + item.pickupTime}
                                {item.reserveTime && 'Reserve : ' + format(new Date(item.reserveTime), 'MMM d, h:mm a')}
                            </td>
                            <td className='text-center'>{item.orderType}</td>
                            <td className='text-center'>{item.status}</td>
                            <td className="text-end">$ </td>
                            <td className="text-end"><a href={"/order-history/"+item._id} className="btn btn-outline-primary">View</a></td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            {orderList.length}
        </div>
    );
  };
  
  export default OrderHistoryPage;
  