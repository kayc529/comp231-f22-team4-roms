import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addMenuItem } from '../features/menu/menuSlice';

const AddMenuItemPage = () => {
  const { isLoading } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddMenuItem = async () => {
    let newMenuItem = {};
    //object format
    //{name:'some name', desc:'some dec', price:19.99, isAvailable:true}
    await dispatch(addMenuItem(newMenuItem));
    //can do something after the item is added
  };

  if (isLoading) {
    //return some UI or whatever
  }

  return <div>AddMenuItemPage</div>;
};

export default AddMenuItemPage;
