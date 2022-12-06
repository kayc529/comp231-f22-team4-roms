import React from 'react';
import Table from 'react-bootstrap/Table';
import { MDBInputGroup, MDBInput, MDBIcon, MDBAlert, MDBBtn } from 'mdb-react-ui-kit';

const OrderControl =()=>{
    return (
        <div className='controlmain'>
            <h2>Manage Order</h2>
            <Table striped bordered hover variant="dark" striped="columns">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Item</th>
                        <th>Date Time</th>
                        <th>Total Price</th>
                        <th>Quantity</th>
                        <th>Accept / Reject Order</th>
                    </tr>
                </thead>
                <tbody>
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