import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from '../utils/orderFetch';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Form from 'react-bootstrap/Form';



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
            <h2> 
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
                
                    {/* <div onChange={(e) => { setOrderStatus(e.target.value); onUpdateStatus(singleOrder, e.target.value) }} defaultChecked={orderStatus}>
                        
                    Accept  <input type="radio" value={"ACCEPTED"|| ""} name="radioStatus"
                    /> 
                Reject <input type="radio" value="REJECTED" name="radioStatus"  
                     />
                Completed <input type="radio" value="COMPLETED" name="radioStatus" 
                     />
                Cancel <input type="radio" value="CANCELED" name="radioStatus" 
                     />
                Pending <input type="radio" value="PENDING" name="radioStatus" />
                    
                    </div>  */}
                <div className="mb-3" defaultChecked={orderStatus} onChange={(e) => { setOrderStatus(e.target.value); onUpdateStatus(singleOrder, e.target.value) }} >
                    <Form.Check size="sm" inline height ="1" type={"radio"} label={"Accept"} id={"Accept"}value="ACCEPTED" name="radioStatus" />
                    <Form.Check inline type={"radio"} label={"Reject"} id={"Reject"} value="REJECTED" name="radioStatus" />
                    <Form.Check inline type={"radio"} label={"Complete"} id={"Complete"} value="COMPLETED" name="radioStatus" />
                    <Form.Check inline type={"radio"} label={"Cancel"} id={"Cancel"} value="CANCELED" name="radioStatus" />
                    <Form.Check inline type={"radio"}label={"Pending"} id={"Pending"} value="PENDING" name="radioStatus"/>
                 </div>
            </h2>
            {console.log(orderStatus)}
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