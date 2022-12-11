import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ADD_TO_CART } from '../features/cart/cartConstants';
import { addToCart, deleteFromCart } from '../features/cart/cartActions';
import DatePicker from "react-datepicker";
import {setMinutes, setHours} from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';

const Cart = () => {
    let navigate = useNavigate();
    const { cart } = useSelector(
        (state) => state.cart
    );
    const dispatch = useDispatch();
  
    function toggleOrderType()
    {
      if(localStorage.getItem('orderType') == 'DINE_IN')
      {
        return(
          "Dine in"
        );
      }
      else
      {
        return(
          "Take out"
        );
      }
    }
  
    const changeQuantity = (e, menuItem) => {
		let cart;
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
        } else {
            cart = [];
        }

        cart.forEach(item => {
			if (item._id === menuItem._id) {
				item.count = e.target.value;
			}
		});

		localStorage.setItem('cart', JSON.stringify(cart));

		dispatch({
			type: ADD_TO_CART,
			payload:  cart,
		});
    };
    
    const handleMenu = evt => {
        navigate('/');
    };

  const handleCheckout = evt => {
      if (new Date() > setHours(setMinutes(now, 30), 22)) {
        toast("Restaurant Closed!")
      } else {
        navigate('/checkout');
      }
    };
    
    const handlePrevious = evt => {
        navigate(-1);
    };
    
    const handleHome = evt => {
        navigate('/');
    };
    
    const [now, setTime] = useState(new Date());
    localStorage.setItem('selectedTime', now);
    function onChangeOrderTime(date)
    {
      setTime(date); 
      localStorage.setItem('selectedTime', date);
    }
  
  return (
    <Stack gap={3}>
      <section className='cartPage'>
            <div id="cartList" className="container-fluid">
                <div className="row bg-light p-3">
                    <div className="col display-5 fw-bold">
                        My Cart
                    </div>
                </div>
                <div className="row p-3">
                    {cart.map((item, index) => (
                        <div key={index} className="cartItem">
                            <div className="itemDetails row align-items-center">
                                <div className="col-2 ">
                                    <img className='img-fluid w-100 img-thumbnail'
                                        src={`/${item.imageUrl}`}
                                        alt={`item: ${item.name}`}
                                    />
                                </div>
                                <div className="col-2">
                                    <Link
                                        to={`/food-item/${item._id}`}>{item.name}
                                    </Link>
                                </div>
                                <div className="col-2">
                                    ${item.price.toFixed(2)}
                                </div>
                                <div className="col-3">
                                    <input className="form-control" type='number' min='1'
                                        value={item.count}
                                        onChange={e =>
                                            changeQuantity(
                                                e, item
                                            )
                                        }
                                    />
                                </div>
                                <div className="col-3">
                                    <button type='button' className='btn btn-danger btn-sm'
                                        onClick={() =>
                                            dispatch(
                                                deleteFromCart(item)
                                            )
                                        }>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>			
                    ))}
                </div>
                  <div className="row p-3">
                    <div className="col fw-bold">
                        Total: $
                        {
                            cart.reduce(
                                (accumulator, cartItem) =>
                                        accumulator + cartItem.count * cartItem.price,0
                            ).toFixed(2)
                        }
                    </div>
                  </div>
                  <div className="row p-3">
                    <div className="col d-grid gap-2">
                        <button className='btn btn-success btn-lg btn-block'
								onClick={handleMenu}>
								Add More Items
                        </button>
                    </div>
                </div>
            </div>
            <div id="cartTime" className="container-fluid">
                <div className="row bg-light p-3">
                    <div className="col display-5 fw-bold">
                        { toggleOrderType() }
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col">
                        Select time
                    </div>
                  </div>
                  <div className="row p-3">
                      <div className="col">
                          <DatePicker
                                className='form-control'
                                selected={now}
                                minTime={Date.now()} 
                                maxTime={setHours(setMinutes(now, 30), 22)} 
                                onChange={(date) => onChangeOrderTime(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={30}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                            />
                    </div>
                </div>
            </div>
            <div id="cartAction" className="container-fluid">
                <div className="row p-3">
                    <div className="col d-grid gap-2">
                        <button className='btn btn-success btn-lg btn-block'
                            onClick={handleCheckout}>
                            Proceed to Check out
                        </button>
                        <button className='btn btn-primary btn-lg btn-block'
                            onClick={handlePrevious}>
                            Back to Previous page
                        </button>
                        <button className='btn btn-dark btn-lg btn-block'
                            onClick={handleHome}>
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>    
		</section>
    </Stack>
  );
};

export default Cart;