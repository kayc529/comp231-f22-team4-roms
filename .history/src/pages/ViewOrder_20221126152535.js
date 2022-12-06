import React, {useState, useEffect} from 'react';
import {Button, Table} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from '../utils/orderFetch';

const ViewOrder = () =>{

    let params  = useParams();
    console.log(params)

    const [singleOrder, setSingleOrder] = useState();

    useEffect(()=>{
        const fetchData = async () =>{
            
            const result = await axios.get('/api/v1/orders/' + params)
            const resultData = result.data.orders

                setSingleOrder(singleOrder)
            
            
            console.log(singleOrder)
        }
        fetchData();
    }, []);


    return (
    <div className='control-main'>
        <h2> Reference Number: {}</h2>
        <h2> Status: {}</h2>
        <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>Reference Number</th>
                        <th>Food item</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
 
                
                {/* <tbody>   
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
                       
                        </td>
                    </tr>
                ))} 
                </tbody> */}
            </Table>


    </div>          
    );
}


export default ViewOrder;