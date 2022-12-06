import React, {useState, useEffect, Suspense} from 'react';
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
            setOrderItem(resulItemtData);    
            console.log(resulItemtData[1].menuItem.price);
        }

        const calTotal =  () =>{
            
            // let sub = orderItem[0].quantity * orderItem[0].price;
            // console.log(sub);
            if(orderItem.length>0)

        for(let i=0; i <= orderItem.length; i++)
        {
            // let totalPrice = 0;
            // let sub = orderItem[i].quantity * orderItem[i].price;

            console.log(orderItem[1].menuItem.price);

            //  totalPrice = await totalPrice + sub;
            // console.log(total)
            // setTotal(total);
        }
    }
        fetchData();
        calTotal();
    }, []);

    //console.log(orderItem[1].menuItem.price);
    // useEffect(()=> {
        
    //         const calTotal = async () =>{
    //             // let sub = orderItem[0].quantity * orderItem[0].price;
    //             // console.log(sub);


    //         for(let i=0; i <= orderItem.length; i++)
    //         {
    //             // let totalPrice = 0;
    //             // let sub = orderItem[i].quantity * orderItem[i].price;

    //             console.log(orderItem[1].menuItem.price);

    //             //  totalPrice = await totalPrice + sub;
    //             // console.log(total)
    //             // setTotal(total);
    //         }
    //     }
    //     calTotal();
    // }, []);

    const onSubTotal = (qty, price) =>{
        (qty * price).toFixed(2);
        return (qty * price).toFixed(2);
    }


    
    //console.log(orderItem.length)

    return (

    <div className='control-main'>
        <h2> Reference Number: {singleOrder.referenceNumber}</h2>
        <h2> Status: {singleOrder.status}</h2>
        <h2> total: {total}</h2>
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