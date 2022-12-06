import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
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
        fetchData();
    },[]);

    console.log(searchInput);
    console.log(searchInput.referenceNumber)

    const onToogleSwitch = (acceptedStatus) => {
            console.log(Object.keys(acceptedStatus))
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
                        <th>Pickup Time</th>
                        <th>Reserve Time</th>
                        <th>Reserve Time</th>
                        <th>Status</th>
                        <th>Menu item</th>
                        <th>Quantity</th>
                        <th>Accept Order?</th>
                    </tr>
                </thead>
 
                
                <tbody>   
                    <tr>  
                { this.state.searchInput.map((order, i) => 
                    {console.log(order.referenceNumber)}
                    //<td key={i}>{order.referenceNumber}</td>
                    
                )} 
                    </tr>
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

                                {/* { <BootstrapSwitchButton                                
                                checked={order.isAccepted}                                
                                width={75}                               
                                onlabel='Yes'
                                onstyle='success'
                                offlabel='No'
                                offstyle='danger'
                                onChange={ (evt) =>            
                                    onToogleSwitch(evt)
                                    }  */}
                
        </div>

    );


};

export default ManageOrder;