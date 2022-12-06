import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import MockData from '../mockData/order-mock-data.json';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

const OrderControl =(val)=>{
    const [orders, setOrder] = useState(MockData);
    const [searchInput, setSearchInput] = useState(MockData);
    const [orderAccepted, setOrderAccepted] = useState(true);

    const handleSubmit = (val) => {        
        setSearchInput(val);
        //alert(`Submitting search ${search}`)
    };
    const handleShowAll =() =>{

    }
    const handleAccept = (state) => {
        setOrderAccepted(state);
    };     

    return (
        <div className='control-main'>
            <h2>Manage Order</h2>
                
                    <label>Search by Order ID</label>
                        <input placeholder='ie. 10001'
                        type="text"
                        value={searchInput}
                        //onChange={e =>handleSubmit(e.target.value)}
                        onChange={e =>handleSubmit(e.target.value)}
                        />                    
                    
                    {/* <button className="btnsearch" onClick={handleSubmit}>Search </button> */}
                    <button className="btnAll" onClick={handleSubmit} >Show All Order</button>
                

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
                    
                    {/* {MockData.filter((val) => {
                        if (searchInput==""){
                                return val
                            }
                        else if (val.orderID.include(searchInput)){
                            return val
                            }                        
                    }).map((val)=> {
                        return (
                    <tr>
                        <td>{val.orderID}</td>
                        <td>{val.item}</td>
                        <td>{val.datatime}</td>
                        <td>$ {val.totalPrice}</td>
                        <td>{val.quantity}</td>
                        <td>

                            <BootstrapSwitchButton
                                checked='false'
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
                        <td>{val.Status}</td>
                    </tr>                                        
                    );
                        })} */}

                    MockData.map((val)=> {
                        return (
                    <tr>
                        <td>{val.orderID}</td>
                        <td>{val.item}</td>
                        <td>{val.datatime}</td>
                        <td>$ {val.totalPrice}</td>
                        <td>{val.quantity}</td>
                        <td>

                            <BootstrapSwitchButton
                                checked='false'
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
                        <td>{val.Status}</td>
                    </tr>                                        
                    );
                        })}

                </tbody>

            </Table>
        </div>

    );


};

export default OrderControl;