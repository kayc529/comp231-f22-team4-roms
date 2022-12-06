import React, {useState, useEffect, use} from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import ToogleButton from 'react-toggle-button';
import {Button, Table} from 'react-bootstrap';
import axios from '../utils/orderFetch';
import ViewOrder from './ViewOrder';
import { Link } from "react-router-dom";

const ManageOrder =()=>{
    const [orderData, setOrderData] = useState([]);
    const orderStatus = Object.keys(orderData).map(function (key){
        return orderData[key].status});
    const [orderState, setOrderState] = useState(orderStatus);
    const [searchKeyword, setSearchKeyword] = useState("");

    useEffect(()=>{
        const fetchData = async () =>{
            const result = await axios.get('/api/v1/orders/')
            const resultData = result.data.orders
            setOrderData(resultData)
            
        }
        fetchData();
    }, []); 

    const onUpdateStatus = async (item, st) =>
    {
            
            const result = await axios.patch('/api/v1/orders/' + item._id,
            {
                status: st
            })

            //console.log(result);
            
            //item.status = st;
            // const itemsClone =[...orderData];
            // const index = itemsClone.indexOf(item);
            // itemsClone[index] = {...orderData}
            setOrderData(item)
            console.log(item);
            
        }
        
    return (
        <div className='control-main'>
            
            <h2>Manage Order</h2>                
                    <label> Search by Reference Number or Status </label>
                        <input className="txtSearch" placeholder='e.g.: 637e6778 or Accepted'
                        type="text"
                        size={30}
                        onChange={(e) =>{setSearchKeyword(e.target.value)}}                     
                        />                    

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
                        <td> 
                            <Link to={`../ViewOrder/${order._id}`}> 
                                <Button size="sm">View </Button>
                            </Link>
                        </td>
                        <td> 
                        { <BootstrapSwitchButton                             
                                    checked={Boolean}                                
                                    size= 'sm'                         
                                    onlabel='Yes'
                                    onstyle='success'
                                    offlabel=' '
                                    offstyle='secondary'
                                    onChange={ (evt) =>       

                                            {if (evt === true)
                                                {
                                                order.status = "ACCEPTED";
                                                onUpdateStatus(order, order.status)
                                                setOrderState(evt)
                                            }
                                            else if (order.status = "ACCEPTED"){
                                                return evt === false;

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


};

export default ManageOrder;