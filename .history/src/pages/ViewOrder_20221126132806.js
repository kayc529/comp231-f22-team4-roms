import React, {useState, useEffect} from 'react';
import {Button, Table} from 'react-bootstrap';
import axios from '../utils/orderFetch';

const ViewOrder = () =>{





    return (
    <div className='control-main'>
        <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>Reference Number</th>
                        <th>Order Type</th>
                        <th>Status</th>
                        <th>Pickup Time</th>
                        <th>Reserve Time</th>       
                        <th>View Order</th>              
                        <th>Accept Order?</th>
                    </tr>
                </thead>
 
                
                <tbody>   
                {orderData.filter((order) => {
                    if (searchKeyword==""){
                        return order;
                    }
                    else if (order.referenceNumber == searchKeyword || order.status == searchKeyword.toUpperCase()){
                        return order;
                    }
                    }).map((order, i) => ( 
                    <tr key={i}>  

                        <td >{order.referenceNumber}
                        </td>
                        <td >{order.orderType}
                        </td>
                        <td >{order.status}
                        </td>
                        <td >{order.pickupTime}
                        </td>
                        <td >{order.reserveTime}
                        </td>
                        <td >{<Button size="sm"> View </Button>}
                        </td>
                        <td> 
                        { <BootstrapSwitchButton                             
                                    checked={order.status}                                
                                    size= 'sm'                         
                                    onlabel='Yes'
                                    onstyle='success'
                                    offlabel=' '
                                    offstyle='secondary'
                                    onChange={ (evt) =>       

                                            {if (evt === true)
                                                {
                                                order.status = "ACCEPTED";
                                                setOrderState(order.status)
                                            }
                                            else if (evt === false) {
                                                order.status = "REJECTED";
                                                setOrderState(order.status)
                                            }
                                        }                               
                                    }                                       
                                /> } 
                        </td>
                    </tr>
                ))} 
                </tbody>
            </Table>


    </div>          
    );
}