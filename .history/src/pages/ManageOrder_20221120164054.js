import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import data from '../mockData/order-mock-data.json';

const OrderControl =()=>{
    const [orders, setOrder] = useState(data);
    const [searchInput, setSearchInput] = useState(data);
    const handleSubmit = (val) => {        
        setSearchInput(val);
        //alert(`Submitting search ${search}`)
    };

    return (
        <div className='control-main'>
            <h2>Manage Order</h2>
                <form onSubmit={handleSubmit}>
                    <label>Search by Order ID</label>
                        <input placeholder='ie. 10001'
                        type="text"
                        value={searchInput}
                        onChange={e =>handleSubmit(e.target.value)}
                        />                    
                    <input type="submit" value="Submit"/>
                </form>

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
                    {orders.map(()=> 
                                        <tr>
                                        <td>1</td>
                                        <td>Fish and Chips</td>
                                        <td>Nov 20, 2022 </td>
                                        <td>$10</td>
                                        <td>2</td>
                                        <td></td>
                                    </tr>
                    
                    )}
                    <tr>
                        <td>1</td>
                        <td>Fish and Chips</td>
                        <td>Nov 20, 2022 </td>
                        <td>$10</td>
                        <td>2</td>
                        <td></td>
                    </tr>
                </tbody>

            </Table>
        </div>

    );


};

export default OrderControl;