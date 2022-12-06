import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import OrderData from '../mockData/order-mock-data.json';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import ToogleButton from 'react-toggle-button';


const ManageOrder =()=>{
    const [searchInput, setSearchInput] = useState("");

    const [acceptedState, setAcceptedState] = useState(Array.from(OrderData.isAccepted))
    //const [acceptedState, setAcceptedState] = useState(Array.from(OrderData), () =>false)
    const [status, setStatus] = useState("")

    console.log(`Initial: ${acceptedState}`);

    // const oID = Object.keys(OrderData).map(function (key, index){
    //     return OrderData[key].orderID;
        
    // });
    // console.log(oID);
    const onToogleSwitch = (id) => {

        console.log(`Initial: ${acceptedState}`);
        if ( OrderData.orderID==id ){      

        setAcceptedState(acceptedState => !acceptedState)
        }
        
        // const newOpenState = [...acceptedState];
        // newOpenState[id] = value ?? !newOpenState[id];
        // setAcceptedState(newOpenState);
        // setAcceptedState(prev => prev.map((e,j)=>
        //     ({...e, isAccepted: id ===j ? !e.isAccepted : e.isAccepted})
        // ));       
    };
        // setAcceptedState({
        //     ...acceptedState,
        //     [id]: !acceptedState[id],
        // });
        // console.log(`Updated: ${id}, ${acceptedState}`);   
        

        // if ( OrderData.orderID==id ){       
        //         setAcceptedState(acceptedState => !acceptedState)
        //         OrderData.isAccepted = acceptedState;
        //         console.log(id)
        //         console.log("From 1:" + OrderData.isAccepted)
        //         return acceptedState
        //     }  
        //     else {
        //         console.log(id)  
        //         console.log("From 2:" + acceptedState)
        //         return acceptedState
        //         //onStatusChange(switchToggled)
        // }    
      




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
                    }).map((order, i)=> (              
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
                                // onChange={() =>  {             
                                //     onToogleSwitch(order.orderID)     
                                //     }              
                                // }
                                onChange={() => onToogleSwitch(order.orderID, order.isAccepted)}
                                
                                /> }
                                <h2> {order.orderID}</h2>                                         
                             
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