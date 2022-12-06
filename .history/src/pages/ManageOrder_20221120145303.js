import React from 'react';
import Table from 'react-bootstrap/Table';

const OrderControl =()=>{
    return (
        <div className='controlmain'>
            <h2>Manage Order</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Item</th>
                        <th>Date Time</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Accept / Reject Order</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
                <tr>

                </tr>
            </Table>
        </div>

    );


};

export default OrderControl;