import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import OrderData from '../mockData/order-mock-data.json';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

const OrderControl =()=>{
    const [searchInput, setSearchInput] = useState(OrderData);

    const onSearchChange = (val) => {
        console.log(val);
        const newData = OrderData.filter((order) =>
            order.orderID === val)
            setSearchInput(newData);
    };
    return (
        <div className='control-main'>
            <h2>Manage Order</h2>                
                    <label>Search by Order ID</label>
                        <input placeholder='i.e. 10001'
                        type="search"
                        onChange={(e) =>onSearchChange(e.target.value)}                        
                        />                    
                    
                    {/* <button className="btnsearch" onClick={onSearchChange}>Search </button>
                    <button className="btnAll" onClick={handleSubmit} >Show All Order</button>                 */}

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Item</th>
                        <th>Date Time</th>
                        <th>Total Price</th>
                        <th>Quantity</th>
                        <th>Accept / Reject Order</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
              
                    {OrderData.map((order)=> (              
                    <tr key={order.orderID}>
                        <td>{order.orderID}</td>
                        <td>{order.item}</td>
                        <td>{order.datatime}</td>
                        <td>$ {order.totalPrice}</td>
                        <td>{order.quantity}</td>
                        <td>
                            <BootstrapSwitchButton
                                checked='true'
                                width={75}                                
                                onlabel='Accept'
                                onstyle='success'
                                offlabel='Reject'
                                offstyle='danger'
                                // onChange={(checked: boolean) => {
                                //     this.setState({ isUserAdmin: checked })
                                // }}
                                />
                         </td>
                        <td>{order.Status}</td>
                    </tr>                                        
                    ))
                }
                </tbody>

            </Table>
        </div>

    );


};

export default OrderControl;