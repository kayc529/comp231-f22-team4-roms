import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import axios from '../utils/orderFetch';
import { Link } from "react-router-dom";
import moment from 'moment';

const ManageOrder =()=>{
    const [orderData, setOrderData] = useState([]);
    // const orderStatus = Object.keys(orderData).map(function (key){
    //     return orderData[key].status});
    // const [orderState, setOrderState] = useState(orderStatus);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [filterState, setFilterState] = useState();

    useEffect(()=>{
        const fetchData = async () =>{
            const result = await axios.get('/api/v1/orders/')
            const resultData = result.data.orders
            setOrderData(resultData)            
        }
        fetchData();
    }, []); 

    // console.log(moment(new Date()).format('ll'));
    // console.log("========================");

    console.log(moment(orderData.createdAt).format('l'))
    return (
        <div className='control-main'>
            
            <h2>Manage Order</h2>     
            
            <label> Search by Reference Number or Status </label>
                <input className="txtSearch" placeholder='e.g.: 637e6778 or Accepted'
                type="text"
                size={30}
                onChange={(e) =>{setSearchKeyword(e.target.value)}}                     
            />      


            <select className="filterDropdown"
                value={filterState}
                onChange={(e) => setFilterState(e.target.value)}
                defaultValue={filterState}
            >
                <option value="0">---Select Order by ---</option>
                <option value="all">All Orders</option>
                <option value="today">Today's Orders</option>
                <option value="pass">Past Orders</option>

                
            </select>

            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>Reference Number</th>
                        <th>Order Type</th>
                        <th>Status</th>
                        <th>Ordered Time</th>
                        <th>Reserved Time</th>       
                        <th>View Order</th>                                      
                    </tr>
                </thead>
                
                <tbody>   
                    {orderData.filter((order) => {
                        { console.log(order.createdAt) }
                    if (searchKeyword.length ===0 || filterState==="all"){
                        return order;
                    }
                    else if (filterState==="today") {
                        if (moment(new Date()).format('l') == moment(order.createdAt).format('l'))
                            {
                        return order;
                        }
                    }
                    
                    else if (order.referenceNumber == searchKeyword || order.status == searchKeyword.toUpperCase()){
                        return order;
                    }
                    }).map((order, i) => ( 
                    <tr key={i}>  

                        <td >{order.referenceNumber}
                        </td>
                        {order.orderType === "TAKE_OUT"? <td>Take Out</td>: <td>Dine In</td>}                                               
                        <td >{order.status}
                        </td>
                        <td >{moment(order.createdAt).format('lll')}
                        </td>
                        <td >{moment(order.reserveTime).format('lll')}
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