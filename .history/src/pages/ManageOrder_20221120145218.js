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
                        <th>Date Time</th>
                    </tr>

                </thead>
            </Table>
        </div>

    );


};

export default OrderControl;