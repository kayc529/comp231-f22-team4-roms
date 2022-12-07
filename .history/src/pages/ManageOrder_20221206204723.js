import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import axios from '../utils/orderFetch';
import { Link } from "react-router-dom";
import moment from 'moment';
import Dropdown from 'react-bootstrap/Dropdown';

const ManageOrder =()=>{
    const [orderData, setOrderData] = useState([]);
    // const orderStatus = Object.keys(orderData).map(function (key){
    //     return orderData[key].status});
    // const [orderState, setOrderState] = useState(orderStatus);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [filterState, setFilterState] = useState("all");
    

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


            <select className="filterDropdown"
                value={filterState}
                onChange={(e) => setFilterState(e.target.value)}
                //defaultValue={filterState}
            >
                <option value="all">All Orders</option>
                <option value="today">Today's Orders</option>
                <option value="past">Past Orders</option>
            </select>

            <DropdownButton id="dropdown-basic-button"

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
                        let todayF = moment(new Date()).format("YYYY-MM-DD")

                        if (filterState == "all") {
                             if (order.referenceNumber == searchKeyword || order.status == searchKeyword.toUpperCase())
                                return order;
                            else if (searchKeyword.length===0)
                                return order;
                        }             
                        else if (filterState == "today" && todayF.valueOf() == (moment(order.createdAt).format("YYYY-MM-DD").valueOf())) {

                             if (order.referenceNumber == searchKeyword || order.status == searchKeyword.toUpperCase())
                                 return order;
                             else if (searchKeyword.length === 0)
                                return order;
                        }
                        else if (filterState == "past" && todayF.valueOf() > (moment(order.createdAt).format("YYYY-MM-DD").valueOf())) {
                            
                             if (order.referenceNumber == searchKeyword || order.status == searchKeyword.toUpperCase())
                                 return order;
                             else if (searchKeyword.length === 0)
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