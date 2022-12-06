import React, {useState, useEffect} from 'react';
import {Button, Table} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from '../utils/orderFetch';

const ViewOrder = () =>{

    let params  = useParams();
    console.log(params.id)

    const [singleOrder, setSingleOrder] = useState({});
    const [orderItem, setOrderItem] = useState({});

    useEffect(()=>{
        const fetchData = async () =>{
            
            const result = await axios.get('/api/v1/orders/' + params.id);
            const resultData = result.data.order;
            //console.log(resultData);
            setSingleOrder(resultData)            
        }
        fetchData();
    }, []);

    useEffect(()=>{
        const fetchData = async () =>{
            
            const result = await axios.get('/api/v1/orders/' + params.id);
            const resultData = result.data.order.orderItems;
            //console.log(resultData);
            setSingleOrder(resultData)            
        }
        fetchData();
    }, []);
    
    console.log(singleOrder)

    return (
    <div className='control-main'>
        <h2> Reference Number: {singleOrder.referenceNumber}</h2>
        <h2> Status: {singleOrder.status}</h2>
        <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        
                        <th>Food item</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
 
                
                <tbody>   

                    <tr >  

                        <td >{singleOrder}
                        </td>
                        <td >{singleOrder.orderType}
                        </td>
                        <td >{singleOrder.status}
                        </td>
                    </tr>

                </tbody>
            </Table>


    </div>          
    );
}


export default ViewOrder;