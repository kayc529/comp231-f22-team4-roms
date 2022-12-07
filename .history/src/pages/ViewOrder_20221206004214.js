import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
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
    let stotal = 0;

    useEffect(()=>{

        const fetchData = async () =>{

            const result = await axios.get('/api/v1/orders/' + params.id);
            const resultData = await result.data.order;
            const resultItemtData = await result.data.order.orderItems;

            setSingleOrder(resultData);
            setOrderItem(resultItemtData); 
            setOrderStatus(resultData.status)
            

             if (resultData.status === "ACCEPTED"){
                setToggle(true);
             }
             else {
                setToggle(false);
            }
  
            resultItemtData.forEach((item) => {
                  stotal = stotal + (item.menuItem.price * item.quantity)
                  setTotal(stotal);
                });
            }           
            
            fetchData();
            
    }, []);

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

    return (

    <div className='control-main'>
        <h2> Reference Number: {singleOrder.referenceNumber}</h2>
        <h2> Status: {orderStatus} </h2>
            <h2> Accept Order?
                {/* <BootstrapSwitchButton                             
                                    checked={toggle}                                
                                    size= 'sm'                         
                                    onlabel='Yes'
                                    onstyle='success'
                                    offlabel='No'
                                    offstyle='danger'
                                    onChange={ (evt) =>       

                                        {if (evt === true)
                                            {singleOrder.status = "ACCEPTED";
                                            setOrderStatus(singleOrder.status)
                                            onUpdateStatus(singleOrder, singleOrder.status)
                                        }

                                        else if (evt === false) {
                                            singleOrder.status = "REJECTED";
                                            setOrderStatus(singleOrder.status);
                                            onUpdateStatus(singleOrder, singleOrder.status)
                                        }
                                        
                                    } 
                                }                               
                                                                           
            />  */}
                
                    <div onChange={(e) =>{setOrderStatus(e.target.value)}} >
                        
                        Accept  <input type="radio" value="ACCEPTED" name="radioStatus" checked={onUpdateStatus(singleOrder, singleOrder.status = "ACCEPTED")}/> 
                        Reject <input type="radio" value="REJECTED" name="radioStatus" checked={onUpdateStatus(singleOrder, singleOrder.status = "REJECTED")}></input>
                        Completed <input type="radio" value="COMPLETED" name="radioStatus" checked={onUpdateStatus(singleOrder, singleOrder.status = "COMPLETED")}></input>
                        Cancel <input type="radio" value="Canceled" name="radioStatus" checked={onUpdateStatus(singleOrder,singleOrder.status = "CANCELED")}></input>
                        Pending <input type="radio" value="Pending" name="radioStatus" checked={onUpdateStatus(singleOrder,singleOrder.status = "PENDING")}></input>

                        
                    
                    </div> 
         </h2>
        <h2> total: $ {total}</h2>
                                
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