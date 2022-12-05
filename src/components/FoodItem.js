import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartActions';

const FoodItem = ({ prop }) => {
    const dispatch = useDispatch();
    const { _id, image, name, price } = prop;

    // Cart
    const addMenuItemToCart = () => {
      console.log(prop);
      dispatch(addToCart(prop));
    };


    return (
      <div className="col-4 mb-4">
        <div className="card food-item">
            <div className="card-body">
                <a className="name pb-2" href={"/food-item/"+_id}>{name}</a>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="price">$ {price}</div>
                  <button onClick={addMenuItemToCart} className="btn btn-sm btn-outline-dark"><i className="bi bi-plus"></i></button>
                </div>
                
            </div>
        </div>
      </div>
    );
  };
  
  export default FoodItem;
  