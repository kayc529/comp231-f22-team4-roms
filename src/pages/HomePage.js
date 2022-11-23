import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMenuItems } from '../features/menu/menuSlice';

import FoodItem from '../components/FoodItem'

const HomePage = () => {
    const { menuItemList } = useSelector((state) => state.menu);
    const dispatch = useDispatch();

    //get menu list when the page is loaded
    useEffect(() => {
        getMenuItemList();
    }, []);

    const getMenuItemList = () => {
        dispatch(getAllMenuItems());
    };

    // Demo Data
    const FOODCATERGORY = [
        {name: "CLASSIC BREAKFASTS"},
        {name: "BENNYS"},
        {name: "DELUXE BREAKFASTS"},
        {name: "SIDES"}
    ]
    
    return (
      <div className="container-fluid">
        <h1 className="text-center py-4">Restaurant Name</h1>
        <div className="text-center pb-4">Adipisicing amet amet culpa cillum esse aliquip cupidatat. Ex commodo laborum quis ut. Est nulla nisi laborum cupidatat.
        </div>
        <div className="text-center pb-4">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-outline-dark">Dine In</button>
                <button type="button" className="btn btn-outline-dark">Take Away</button>
            </div>
        </div>

        <div className="row">
          <div className="col-2">
            {FOODCATERGORY.map((item, index) => {
                    return <div key={index} className="p-4">{item.name}</div>;
            })}
          </div>
          <div className="col-8">
            <div className='row'>
                {menuItemList.map((item, index) => {
                    return <FoodItem key={index} prop={item} />;
                })}
            </div>
          </div>
          <div className="col-2">Cart</div>
        </div>
      </div>
    );
  };
  
  export default HomePage;
  