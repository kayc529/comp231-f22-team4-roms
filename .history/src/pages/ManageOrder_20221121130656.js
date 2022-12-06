import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import OrderData from '../mockData/order-mock-data.json';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import ToogleButton from 'react-toggle-button';
import { isRouteErrorResponse } from 'react-router-dom';
import { Alert } from 'react-bootstrap';


const ManageOrder =()=>{
    const [searchInput, setSearchInput] = useState("");
    const [isAccepted, setIsAccepted] = useState(false);
    const [status, setStatus] = useState("")
    const [switchToggled, setSwitchToggled] = useState(false);     

    console.log(switchToggled);
    const onStatusChange = (switchToggled) => {
        if (switchToggled ===true)
        {
            OrderData.orderAccepted = true
            setStatus("Accepted")
            OrderData.Status = status;
        }
        else if (switchToggled ===false)
        {
            OrderData.orderAccepted = false
            setStatus("Not Accepted")
            OrderData.Status = status;
        }
        else {
            OrderData.Status = "Order placed"
        }
    }

    const onToogleSwitch = (id) => {  

        if (id === OrderData.orderID)
            {   setSwitchToggled(switchToggled => !switchToggled)
                return switchToggled
                console.log(switchToggled)
                onStatusChange(switchToggled)
            }    
        //console.log(switchToggled)
        }    

    // useEffect(()=> {
    //     onStatusChange(switchToggled);
    // }, );


    return (
        <div className='control-main'>
            <h2>Manage Order</h2>                
                    <label>Search by Order ID</label>
                        <input className="txtSearch" placeholder='i.e. 10001'
                        type="text"
                        onChange={(e) =>{setSearchInput(e.target.value)}}                     
                        />                    

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Item</th>
                        <th>Date Time</th>
                        <th>Total Price</th>
                        <th>Quantity</th>
                        <th>Accept Order?</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>               
                    {OrderData.filter((order)=> {
                    if (searchInput=="")
                        {
                        return order;
                        }  
                    else if (order.orderID==searchInput)
                        {
                        return order;
                        }                   
                    }).map((order)=> (              
                    <tr key={order.orderID}>
                        <td>{order.orderID}</td>
                        <td>{order.item}</td>
                        <td>{order.datatime}</td>
                        <td>$ {order.totalPrice}</td>
                        <td>{order.quantity}</td>
                        <td>
                            {/* <ToogleButton                      
                                
                            value={isAccepted}
                            inactiveLabel={" "}
                            activeLabel={"Accept"}
                            onToggle={(value) => {
                                order.orderAccepted
                                setIsAccepted(!value)
                            }}                            
      
                             /> */}
                            <BootstrapSwitchButton
                                checked={isAccepted}
                                width={75}                               
                                onlabel='Accept'
                                onstyle='success'
                                offlabel='No'
                                offstyle='danger'

                                onChange={                                   
                                    onToogleSwitch(order.orderID)     
                                }
                                
                                />
                                <h2> </h2>                                         
                             
                         </td>
                        <td>{status}</td>
                    </tr>                                        
                    ))
                }
                </tbody>
            </Table>
        </div>

    );


};

export default ManageOrder;