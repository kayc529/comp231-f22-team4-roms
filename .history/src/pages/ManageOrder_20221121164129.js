import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import OrderData from '../mockData/order-mock-data.json';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import ToogleButton from 'react-toggle-button';


const ManageOrder =()=>{
    const [searchInput, setSearchInput] = useState("");
    const [acceptedState, setAcceptedState] = useState(false);
    const [status, setStatus] = useState("")
    //const [switchToggled, setSwitchToggled] = useState(false);     

    
    const onStatusChange = (switchToggled) => {
        if (switchToggled ===true)
        {
            OrderData.orderAccepted = true
            setStatus("Accepted")
            OrderData.Status = status;
        }
        else if (switchToggled ===false)
        {
            OrderData.orderAccepted = false
            setStatus("Not Accepted")
            OrderData.Status = status;
        }
        else {
            OrderData.Status = "Order placed"
        }
    }

    const onToogleSwitch = (id) => {  

        console.log(`Initial: ${acceptedState}`)

        if (id === OrderData.orderID){       
                setAcceptedState(acceptedState => !acceptedState)
                OrderData.isAccepted = acceptedState;
                console.log(id)
                console.log(acceptedState)
                return acceptedState
            }  
            else {
                console.log(id)  
                console.log(acceptedState)
                return acceptedState
                //onStatusChange(switchToggled)
        }    
    }

    

    // useEffect(()=> {
    //     // fetch(OrderData)
    //     // .then((response)=>
    //     // setIsAccepted(response.isAccepted));
    //     console.log(OrderData)

    //     //onStatusChange(switchToggled);

    // },[] );


    return (
        <div className='control-main'>
            <h2>Manage Order</h2>                
                    <label>Search by Order ID</label>
                        <input className="txtSearch" placeholder='i.e. 10001'
                        type="text"
                        onChange={(e) =>{setSearchInput(e.target.value)}}                     
                        />                    

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Item</th>
                        <th>Date Time</th>
                        <th>Total Price</th>
                        <th>Quantity</th>
                        <th>Accept Order?</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>               
                    {OrderData.filter((order)=> {
                    if (searchInput=="")
                        {
                        return order;
                        }  
                    else if (order.orderID==searchInput)
                        {
                        return order;
                        }                   
                    }).map((order)=> (              
                    <tr key={order.orderID}>
                        <td>{order.orderID}</td>
                        <td>{order.item}</td>
                        <td>{order.datatime}</td>
                        <td>$ {order.totalPrice}</td>
                        <td>{order.quantity}</td>
                        <td>
                            {/* <ToogleButton                      
                            
                            value={acceptedState}
                            inactiveLabel={" "}
                            activeLabel={"Accept"}
                            onChange={            
                                onToogleSwitch(order.orderID)     
                            }                            
      
                             /> */}
                            { <BootstrapSwitchButton                                
                                checked={acceptedState}                                
                                width={75}                               
                                onlabel='Yes'
                                onstyle='success'
                                offlabel='No'
                                offstyle='danger'
                                onChange={(checked = {acceptedState}  ) =>  {             
                                    onToogleSwitch(order.orderID)     
                                }              
                            }
                                /> }
                                <h2> {}</h2>                                         
                             
                         </td>
                        <td>{status}</td>
                    </tr>                                        
                    ))
                }
                </tbody>
            </Table>
        </div>

    );


};

export default ManageOrder;