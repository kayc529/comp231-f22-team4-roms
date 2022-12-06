import React, {useState, useEffect} from 'react';
import {Button, Table} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from '../utils/orderFetch';

const ViewOrder = () =>{

    let params  = useParams();

    const [singleOrder, setSingleOrder] = useState({});
    const [orderItem, setOrderItem] = useState([]);
    const [total, setTotal] = useState(0);
    const [subtotal, setSubTotal] = useState(0);


    useEffect(()=>{
        const fetchData = async () =>{
            
            const result = await axios.get('/api/v1/orders/' + params.id);
            const resultData = result.data.order;
            const resulItemtData = result.data.order.orderItems;
            setSingleOrder(resultData);       
            console.log(resultData);
            setOrderItem(resulItemtData);    
        }
        fetchData();
    }, []);


    const onSubTotal = (qty, price) =>{
        (qty * price).toFixed(2);
        return (qty * price).toFixed(2);
    }

    // const onTotal = () => {
        
    //     for(let i=0; i = orderItem.length; i++)
    //     {
    //         let total = 0;
    //         let subTotal = orderItem.quantity * orderItem.menuItem.price;
    //         total = total + subTotal;
    //         console.log(total)

    //     }
    // };
    // setTotal => ()
    
    //console.log(orderItem.length)

    return (
    <div className='control-main'>
        <h2> Reference Number: {singleOrder.referenceNumber}</h2>
        <h2> Status: {singleOrder.status}</h2>
        <h2> Total: {}</h2>
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
                        <td >$ {onSubTotal(item.quantity, item.menuItem.price)}
                        </td> 
                        {/* <td>{setTotal(total + onSubTotal(item.quantity, item.menuItem.price))}</td> */}
                    </tr>
                )}
                </tbody>
            </Table>


    </div>          
    );
}


export default ViewOrder;