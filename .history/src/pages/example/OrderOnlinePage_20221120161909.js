import React from 'react';
import { Link } from "react-router-dom";

const OrderOnlinePage = () => {

    function add1() {
        let x = +document.getElementById('a').value
        let y = 1;
        let z = x + y;
        document.getElementById('a').value = z;
    }
    function subtract1() {
        let x = +document.getElementById('a').value
        let y = 1;
        let z = x - y;
        document.getElementById('a').value = z;
    }
    function add2() {
        let x = +document.getElementById('b').value
        let y = 1;
        let z = x + y;
        document.getElementById('b').value = z;
    }
    function subtract2() {
        let x = +document.getElementById('b').value
        let y = 1;
        let z = x - y;
        document.getElementById('b').value = z;
    }
    function add3() {
        let x = +document.getElementById('c').value
        let y = 1;
        let z = x + y;
        document.getElementById('c').value = z;
    }
    function subtract3() {
        let x = +document.getElementById('c').value
        let y = 1;
        let z = x - y;
        document.getElementById('c').value = z;
    }
    function add4() {
        let x = +document.getElementById('d').value
        let y = 1;
        let z = x + y;
        document.getElementById('d').value = z;
    }
    function subtract4() {
        let x = +document.getElementById('d').value
        let y = 1;
        let z = x - y;
        document.getElementById('d').value = z;
    }

    return (
      <div className="container">
        <div className="row">
        <div className="col-12" align="center" style={{backgroundColor:'black', color:'white', fontSize:'25px'}}><b>ORDER ONLINE</b></div>
            <hr></hr>
            <br></br>
            <div className="col-12" align="center"><b>Featured Items</b></div>
            <table border="1">
                <tr>&nbsp;</tr>
                <tr>
                    <td align="center">
                        <img src={require('./burger.jpg')} alt="burger" height="300" width="450" />
                        <div className="col-12" align="center"><b>Jumbo Melted Cheese Burger</b></div>
                        <div className="col-12" align="center"><b>$4.75</b></div>
                        <input onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }}} id='a'
                        />
                        &nbsp;&nbsp;<button onClick={() =>add1()} style={{border:'none', borderRadius:'12px', backgroundColor:'#04AA6D', color:'white', margin:'4px 2px', height:'35px', width:'50px'}}> Add </button><button onClick={() =>subtract1()} style={{border:'none', borderRadius:'12px', backgroundColor:'red', color:'white', margin:'4px 2px', height:'35px', width:'90px'}}> Remove </button>
                    </td>
                    <td align="center">
                        <img src={require('./smoothie.jpg')} alt="smoothie" height="300" width="450" />
                        <div className="col-12" align="center"><b>Mango Almond Smoothie</b></div>
                        <div className="col-12" align="center"><b>$5.00</b></div>
                        <input onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }}} id='b'
                        />
                        &nbsp;&nbsp;<button onClick={() =>add2()} style={{border:'none', borderRadius:'12px', backgroundColor:'#04AA6D', color:'white', margin:'4px 2px', height:'35px', width:'50px'}}> Add </button><button onClick={() =>subtract2()} style={{border:'none', borderRadius:'12px', backgroundColor:'red', color:'white', margin:'4px 2px', height:'35px', width:'90px'}}> Remove </button>
                    </td>
                </tr>
                <tr>&nbsp;</tr>
                <tr>
                    <td align="center">
                        <img src={require('./pizza.jpg')} alt="pizza" height="300" width="450" />
                        <div className="col-12" align="center"><b>Regular Size Margherita</b></div>
                        <div className="col-12" align="center"><b>$11.99</b></div>
                        <input onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }}} id='c'
                        />
                        &nbsp;&nbsp;<button onClick={() =>add3()} style={{border:'none', borderRadius:'12px', backgroundColor:'#04AA6D', color:'white', margin:'4px 2px', height:'35px', width:'50px'}}> Add </button><button onClick={() =>subtract3()} style={{border:'none', borderRadius:'12px', backgroundColor:'red', color:'white', margin:'4px 2px', height:'35px', width:'90px'}}> Remove </button>
                    </td>
                    <td align="center">
                        <img src={require('./sausage.jpg')} alt="sausage" height="300" width="450" />
                        <div className="col-12" align="center"><b>6 Pieces Family Hungarian Sausage</b></div>
                        <div className="col-12" align="center"><b>$14.50</b></div>
                        <input onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }}} id='d'
                        />
                        &nbsp;&nbsp;<button onClick={() =>add4()} style={{border:'none', borderRadius:'12px', backgroundColor:'#04AA6D', color:'white', margin:'4px 2px', height:'35px', width:'50px'}}> Add </button><button onClick={() =>subtract4()} style={{border:'none', borderRadius:'12px', backgroundColor:'red', color:'white', margin:'4px 2px', height:'35px', width:'90px'}}> Remove </button>
                    </td>
                </tr>
                <tr>&nbsp;</tr>
            </table>
            <table>
                <tr>&nbsp;</tr>
                <tr>
                    <td align="center">
                        <button onClick="" style={{border:'none', borderRadius:'12px', backgroundColor:'green', color:'white', margin:'4px 2px', height:'45px', width:'300px'}}><Link style={{textDecoration:'none'}} to="/cart"><div className="col-12" style={{color:'white'}}>View My Cart</div></Link></button>
                    </td>
                </tr>
            </table>
        </div>
      </div>
    );
  };

  export default OrderOnlinePage;