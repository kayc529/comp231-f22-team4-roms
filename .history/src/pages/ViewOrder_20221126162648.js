import React, {useState, useEffect} from 'react';
import {Button, Table} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from '../utils/orderFetch';

const ViewOrder = () =>{

    let params  = useParams();

    const [singleOrder, setSingleOrder] = useState({});
    const [orderItem, setOrderItem] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            
            const result = await axios.get('/api/v1/orders/' + params.id);
            const resultData = result.data.order.orderItems;
            const resulItemtData = result.data.order.orderItems;
            //console.log(resulItemtData);
            setSingleOrder(resultData)       
            setOrderItem(resulItemtData)    
        }
        fetchData();
    }, []);

    // useEffect(()=>{
    //     const fetchData = async () =>{
            
    //         const result = await axios.get('/api/v1/orders/' + params.id);
    //         const resultData = result.data.order.orderItems;
    //         console.log(resultData);
    //     }
    //     fetchData();
    // }, []);
    
    console.log(orderItem)

    return (
    <div className='control-main'>
        <h2> Reference Number: {singleOrder.referenceNumber}</h2>
        <h2> Status: {singleOrder.status}</h2>
        //<h2> Total: {singleOrder.status}</h2>
        <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        
                        <th>Food item</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
 
                
                <tbody>   
                {orderItem.map((item, index) =>
                    <tr key={index}> 
                         <td>
                            {item.menuItem.name}
                        </td>
                        <td >{item.quantity}
                        </td>
                        <td>$ {item.quantity * item.menuItem.price}
                        </td> 
                    </tr>
                )}
                </tbody>
            </Table>


    </div>          
    );
}


export default ViewOrder;