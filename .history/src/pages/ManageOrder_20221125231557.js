import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
//import OrderData from '../mockData/order-mock-data.json';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import ToogleButton from 'react-toggle-button';


const ManageOrder =()=>{
    const [searchInput, setSearchInput] = useState([]);
    // const oAccpeptedStatus = Object.keys(OrderData).map(function (key){
    //     return OrderData[key].isAccepted;
    // });
    // const [acceptedState, setAcceptedState] = useState(oAccpeptedStatus) 
    useEffect(()=>{
        const fetchData = async () =>{
            const result = await fetch('http://localhost:4000/api/v1/orders')
            const jsonResult = await result.json();

            setSearchInput(jsonResult)
        }
        // fetch('/api/v1/orders').then(res=>{
        //     if (res.ok){
        //         return res.json()
        //     }
        // }).then(jsonResponse => console.log(jsonResponse.))
        fetchData();
    },[]);

    console.log(searchInput);

    const onToogleSwitch = (acceptedStatus) => {
            console.log(acceptedStatus)
        };   
        
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
                        <th>Reference Number</th>
                        <th>Order Type</th>
                        <th>Status</th>
                        <th>Date Time</th>
                        <th>Total Price</th>
                        <th>Quantity</th>
                        <th>Accept Order?</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>               
                    {/* {searchInput.filter((order)=> {
                    if (searchInput=="")
                        {
                        return order;
                        }  
                    else if (order.orderID==searchInput)
                        {
                        return order;
                        }                   
                    }).map((order, i)=> (               */}
                    {searchInput.map((order, i) => 
                    <tr key={i}>
                        <td>{order._id}</td>
                        <td>{order.referenceNumber}</td>
                        <td>{order.orderType}</td>
                        <td>$ {order.status}</td>
                        {/* <td>{order.reserveTime}</td> */}
                        <td>
                            { <BootstrapSwitchButton                                
                                checked={order.isAccepted}                                
                                width={75}                               
                                onlabel='Yes'
                                onstyle='success'
                                offlabel='No'
                                offstyle='danger'
                                onChange={ (evt) =>            
                                    onToogleSwitch(evt)
                                    }              
                                
                                // onChange={() => 
                                   
                                //     setAcceptedState(acceptedState => !acceptedState)}
                                
                                /> }
                                {/* <h2> The switch is {toggled ? "on" : "off"} </h2>  */}
                         </td>
                        <td></td>
                    </tr>                                        
                    )
                }
                </tbody>
            </Table>
            {/* <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Accept Order?</th>
                        
                    </tr>
                </thead>

                <tbody>
                    
                    {oAccpeptedStatus.map((a, i) => (
                        <tr key={i}>
                            <td>
                                { <BootstrapSwitchButton                                
                                checked={a}                                
                                width={75}                               
                                onlabel='Yes'
                                onstyle='success'
                                offlabel='No'
                                offstyle='danger'
                                // onChange={() =>  {             
                                //     onToogleSwitch(order.orderID)     
                                //     }              
                                // }
                                onChange={() => setToggle(a => !a)}
                                
                                /> } 
                                </td>         
                                             
                        </tr>
                    ))}                    
                </tbody>
                                            
                </Table> */}
                
        </div>

    );


};

export default ManageOrder;