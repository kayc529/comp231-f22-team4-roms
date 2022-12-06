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
    
    //console.log(orderItem[1].menuItem.name)
        //console.log(orderItem[1].menuItem.name)

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

                         <td >{orderItem.map((item) =>
                            <p>{item}</p>
                         )}
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