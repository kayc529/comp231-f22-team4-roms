import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import ToogleButton from 'react-toggle-button';
import { Button } from 'react-bootstrap';
import axios from '../utils/orderFetch';


const ManageOrder =()=>{
    const [orderData, setOrderData] = useState([]);
    const orderStatus = Object.keys(orderData).map(function (key){
        return orderData[key].status});
    const [orderState, setOrderState] = useState(orderStatus);

    // useEffect(()=>{
    //     const fetchData = async () =>{
    //         const result = await fetch('http://localhost:4000/api/v1/orders')
    //         const jsonResult = await result.json();

    //         setOrderData(jsonResult.orders)
    //     }
    //     fetchData();
    // },[]);

    useEffect(()=>{
        const fetchData = async () =>{
            const result = await axios.get('/api/v1/orders/')
            const resultData = result.data
            setOrderData(resultData)
            
        }
        fetchData();
    }, []); 

    console.log(orderData);

    const onToogleSwitch = (acceptedStatus) => {
            console.log(Object.keys(acceptedStatus))
        };   
        
    return (
        <div className='control-main'>
            
            <h2>Manage Order</h2>                
                    <label>Search by Order ID</label>
                        <input className="txtSearch" placeholder='i.e. 10001'
                        type="text"
                        onChange={(e) =>{setOrderData(e.target.value)}}                     
                        />                    

            <Table striped bordered hover variant="dark">
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
                {Array(orderData).map((order, i) => ( 
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
                        <td >{<button> View </button>}
                        </td>
                        <td> 
                        { <BootstrapSwitchButton name="toogle"                             
                                    checked={order.status}                                
                                    width={75}                               
                                    onlabel='Yes'
                                    onstyle='success'
                                    offlabel=' '
                                    offstyle='danger'
                                    onChange={ (evt) =>       

                                            {if (evt === true)
                                                {
                                                order.status = "ACCEPTED";
                                                setOrderState(order.status)
                                                console.log(orderState, order.referenceNumber)
                                            }
                                            else if (evt === false) {
                                                order.status = "REJECTED";
                                                setOrderState(order.status)
                                                console.log(orderState, order.referenceNumber)
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