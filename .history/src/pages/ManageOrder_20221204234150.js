import React, {useState, useEffect} from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import ToogleButton from 'react-toggle-button';
import {Button, Table} from 'react-bootstrap';
import axios from '../utils/orderFetch';
import ViewOrder from './ViewOrder';
import { Link } from "react-router-dom";

const ManageOrder =()=>{
    const [orderData, setOrderData] = useState([]);
    // const orderStatus = Object.keys(orderData).map(function (key){
    //     return orderData[key].status});
    // const [orderState, setOrderState] = useState(orderStatus);
    const [searchKeyword, setSearchKeyword] = useState("");

    useEffect(()=>{
        const fetchData = async () =>{
            const result = await axios.get('/api/v1/orders/')
            const resultData = result.data.orders
            setOrderData(resultData)            
        }
        fetchData();
    }, []); 
        
    return (
        <div className='control-main'>
            
            <h2>Manage Order</h2>     
            
            <label> Search by Reference Number or Status </label>
                <input className="txtSearch" placeholder='e.g.: 637e6778 or Accepted'
                type="text"
                size={30}
                onChange={(e) =>{setSearchKeyword(e.target.value)}}                     
            />      
            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter by Date 
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item1" >All orders</a>
                <a class="dropdown-item2" >Today's orders</a>
                <a class="dropdown-item3" >Past orders</a>
            </div>
            </div>


            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>Reference Number</th>
                        <th>Order Type</th>
                        <th>Status</th>
                        <th>Pickup Time</th>
                        <th>Reserve Time</th>       
                        <th>View Order</th>                                      
                    </tr>
                </thead>
                
                <tbody>   
                {orderData.filter((order) => {
                    if (searchKeyword.length ===0){
                        return order;
                    }
                    
                    else if (order.referenceNumber == searchKeyword || order.status == searchKeyword.toUpperCase()){
                        return order;
                    }
                    }).map((order, i) => ( 
                    <tr key={i}>  

                        <td >{order.referenceNumber}
                        </td>
                        {order.orderType == "TAKE_OUT"? <td>Take Out</td>: <td>Dine In</td>}                                               
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
                    </tr>
                ))} 
                </tbody>
            </Table>
           
                
        </div>

    );


};

export default ManageOrder;