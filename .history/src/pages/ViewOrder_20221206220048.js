import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from '../utils/orderFetch';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

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
        <div className='d-grid gap-2' style={{ padding: "10px" }} >
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>Reference Number: {singleOrder.referenceNumber}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Status: {orderStatus}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                        <div className="mb-2" onChange={(e) => { setOrderStatus(e.target.value); onUpdateStatus(singleOrder, e.target.value) }} >
                            <Form.Check  inline height ="1" type={"radio"} label={"Accept"} id={"Accept"}value="ACCEPTED" name="radioStatus" />
                            <Form.Check inline type={"radio"} label={"Reject"} id={"Reject"} value="REJECTED" name="radioStatus" />
                            <Form.Check inline type={"radio"} label={"Complete"} id={"Complete"} value="COMPLETED" name="radioStatus" />
                            <Form.Check inline type={"radio"} label={"Cancel"} id={"Cancel"} value="CANCELED" name="radioStatus" />
                            <Form.Check inline type={"radio"}label={"Pending"} id={"Pending"} value="PENDING" name="radioStatus"/>
                        </div>        
                    </Card.Subtitle>
                    <Card.Text> Total: $ {total} </Card.Text>
                </Card.Body>
            </Card>         
            
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
                        <td> {item.menuItem.name} </td>
                        <td>{item.quantity} </td>
                        <td >$ {onSubTotal(item.quantity, item.menuItem.price)} </td> 
                    </tr>     
                )}
            </tbody>
        </Table>
    </div>          
    );
}


export default ViewOrder;