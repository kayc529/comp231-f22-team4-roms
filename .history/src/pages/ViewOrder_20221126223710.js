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
    const [toggle, setToggle] = useState();

    useEffect(()=>{

        const fetchData = async () =>{

            const result = await axios.get('/api/v1/orders/' + params.id);
            const resultData = await result.data.order;
            const resulItemtData = await result.data.order.orderItems;
             setSingleOrder(resultData);       
             setOrderItem(resulItemtData); 
             setOrderStatus(resultData.status)
             
             if (orderStatus === "ACCEPTED"){
                setToggle(true);
             }
             else {
                setToggle(false);
             }
             console.log("Initial status: " + orderStatus)            

             
            }           
            
            fetchData().then(()=>{
                let totalPrice=0;
                orderItem.forEach(item =>{
                   totalPrice = totalPrice + (item.menuItem.price * item.quantity)
                })
            
                setTotal(totalPrice);
            }

            );
    }, []);

    // const onToggle = () =>{
    //     setToggle(toggle => !toggle)
    // }
    
    const onUpdateStatus = async (item, st) =>
    {
            const result = await axios.patch('/api/v1/orders/' + item._id,
            {
                status: st
            })
            setSingleOrder(item)            
        }


    const onSubTotal = (qty, price) =>{
        (qty * price).toFixed(2);
        return (qty * price).toFixed(2);
    }

    const onToggleSwtich= () =>{
        if (orderStatus === true)
        {
            setToggle(true);
        }
        else {
            setToggle(false);
        }

    }

    return (

    <div className='control-main'>
        <h2> Reference Number: {singleOrder.referenceNumber}</h2>
        <h2> Status: {orderStatus}</h2>
        <h2> total: $ {total}</h2>
        <BootstrapSwitchButton                             
                                    checked={toggle}                                
                                    size= 'sm'                         
                                    onlabel='Yes'
                                    onstyle='success'
                                    offlabel='No'
                                    offstyle='secondary'
                                    onChange={ (evt) =>       

                                        {if (evt === true)
                                            {singleOrder.status = "ACCEPTED";
                                            setOrderStatus(singleOrder.status)
                                            onUpdateStatus(singleOrder, singleOrder.status)
                                            onToggleSwtich();
                                        }

                                        else if (evt === false) {
                                            singleOrder.status = "REJECTED";
                                            setOrderStatus(singleOrder.status);
                                            onUpdateStatus(singleOrder, singleOrder.status)
                                            //setToggle(evt);
                                            onToggleSwtich();
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
                    </tr>
                        
                )}
                </tbody>
            </Table>


    </div>          
    );
}


export default ViewOrder;