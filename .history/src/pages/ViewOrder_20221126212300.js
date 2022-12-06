import React, {useState, useEffect, Suspense} from 'react';
import {Button, Table} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from '../utils/orderFetch';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';


const ViewOrder = () =>{

    let params  = useParams();

    const [singleOrder, setSingleOrder] = useState({});
    const [orderItem, setOrderItem] = useState([]);
    const [total, setTotal] = useState(0);
    const [orderStatus, setOrderStatus] = useState();    

    useEffect(()=>{

        const fetchData = async () =>{

            const result = await axios.get('/api/v1/orders/' + params.id);
            const resultData = await result.data.order;
            const resulItemtData = await result.data.order.orderItems;
             setSingleOrder(resultData);       
             setOrderItem(resulItemtData); 
            }

            fetchData().then(()=>{
                let totalPrice=0;
                orderItem.forEach(item =>{
                   totalPrice = totalPrice + (item.menuItem.price * item.quantity)
                })
            
                console.log(totalPrice);
                setTotal(totalPrice);
            }
            );
    }, []);

    const onUpdateStatus = async (item, st) =>
    {
            
            const result = await axios.patch('/api/v1/orders/' + item._id,
            {
                status: st
            })

            //console.log(result);
            
            //item.status = st;
            // const itemsClone =[...orderData];
            // const index = itemsClone.indexOf(item);
            // itemsClone[index] = {...orderData}
            setSingleOrder(item)
            console.log(item);
            
        }


    const onSubTotal = (qty, price) =>{
        (qty * price).toFixed(2);
        return (qty * price).toFixed(2);
    }


    return (

    <div className='control-main'>
        <h2> Reference Number: {singleOrder.referenceNumber}</h2>
        <h2> Status: {singleOrder.status}</h2>
        <h2> total: $ {total}</h2>
        <BootstrapSwitchButton                             
                                    checked={singleOrder.status}                                
                                    size= 'sm'                         
                                    onlabel='Yes'
                                    onstyle='success'
                                    offlabel='No'
                                    offstyle='secondary'
                                    onChange={ (evt) =>       

                                            {if (evt === true)
                                                {
                                                 singleOrder.status = "ACCEPTED";
                                                onUpdateStatus(singleOrder, singleOrder.status)
                                                setOrderStatus(singleOrder.status)
                                            }

                                            
                                            else if (evt === false) {
                                                singleOrder.status = "REJECTED";
                                                onUpdateStatus(singleOrder, singleOrder.status)
                                                setOrderStatus(singleOrder.status)
                                            }
                                        }                               
                                    }                                       
                                /> 
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