import { useState } from 'react';

const OrderHistoryPage = () => {
    const ORDERS = [
        {orderNo: '0001', orderDate:'2022-11-11', orderType:'TAKEAWAY', price: '49.99'},
        {orderNo: '0002', orderDate:'2022-11-13', orderType:'DINEIN', price: '9.99'},
        {orderNo: '0003', orderDate:'2022-11-17', orderType:'TAKEAWAY', price: '29.99'},
        {orderNo: '0004', orderDate:'2022-11-19', orderType:'DINEIN', price: '99.99'},
        {orderNo: '0005', orderDate:'2022-11-23', orderType:'DINEIN', price: '399.99'},
        {orderNo: '0006', orderDate:'2022-11-29', orderType:'DINEIN', price: '199.99'}
      ];

    const [orderData, setOrderData] = useState({
        _id: '',
        orderNo: '',
        orderDate: '',
        orderType: '',
        price: '',
    });

    // setOrderData((orderData) => {
    //     return{
    //         ...orderData, ORDERS
    //     }
    // });

    const [filterData, setFilterData] = useState({
        filterOrderNo: '',
        filterOrderDate: '',
        desc: '',
        sortOrder: 0,
        isAvailable: true,
    });

    function handleInputChange(event) {
        const name = event.target.name;
        let value =
            event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value;

        setFilterData((filterData) => {
            return {
            ...filterData,
            [name]: value,
            };
        });

        updateOrderData(filterData);
    }

    function updateOrderData(filterData){
        console.log(filterData);
    }

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
                            <td><input name="filterOrderNo" type="text" onChange={handleInputChange} className="form-control" placeholder="Order No"/></td>
                            <td><input name="filterOrderDate" type="text" onChange={handleInputChange} className="form-control" placeholder="Order Date"/></td>
                            <td><select name="filterOrderType" onChange={handleInputChange} className="form-control">
                                    <option value="ALL">All</option>
                                    <option value="DINEIN">Dine in</option>
                                    <option value="TAKEAWAY">Take away</option>
                                </select></td>
                            <td><input name="filterFoodItem" type="text" onChange={handleInputChange} className="form-control" placeholder="Food Item"/></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                    {ORDERS.map((item, index) => {
                        
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
  