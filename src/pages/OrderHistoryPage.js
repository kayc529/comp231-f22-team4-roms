import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders } from '../features/order/orderSlice';

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
                            <th className="text-center" width="150">Order No</th>
                            <th className="text-center" width="200">Order Date</th>
                            <th className="text-center" width="200">Order Type</th>
                            <th>Food Item</th>
                            <th className="text-end">Total price</th>
                            <th className='text-end' width="100">Action</th>
                        </tr>
                        <tr className='bg-light'>
                            <td><input name="filterOrderNo" type="text" className="form-control" placeholder="Order No"/></td>
                            <td><input name="filterOrderDate" type="text" className="form-control" placeholder="Order Date"/></td>
                            <td><select name="filterOrderType" className="form-control">
                                    <option value="ALL">All</option>
                                    <option value="DINEIN">Dine in</option>
                                    <option value="TAKEAWAY">Take away</option>
                                </select></td>
                            <td><input name="filterFoodItem" type="text" className="form-control" placeholder="Food Item"/></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                    {orderList.map((item, index) => {
                        return (
                        <tr key={index}>
                            <td className="text-center">{item.orderNo}</td>
                            <td className="text-center">{item.orderDate}</td>
                            <td></td>
                            <td></td>
                            <td className="text-end">$ {item.price}</td>
                            <td className="text-end"><a href={"/order-history/"+item.orderNo} className="btn btn-outline-primary">View</a></td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
  };
  
  export default OrderHistoryPage;
  