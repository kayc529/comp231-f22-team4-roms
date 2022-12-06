import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';

const OrderControl =()=>{
    const [search, setInput] = useState("");
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting search ${search}`)
    }
    return (
        <div className='controlmain'>
            <h2>Manage Order</h2>
                <form onSubmit={handleSubmit}>
                    <label>Search by Order ID
                    <input
                    type="text"
                    value={search}
                    onChange={e =>hasSelectionSupport(e.target.value)}
                    />                    
                    </label> 
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