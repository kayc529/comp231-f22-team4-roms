import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editMenuItem, getMenuItem } from '../features/menu/menuSlice';

const EditMenuItemPage = () => {
  const { isLoading, menuItem } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getMenuItemData();
  }, []);

  const getMenuItemIdFromUrl = () => {
    const url = document.URL;
    const id = url.substring(url.lastIndexOf('/') + 1);
    return id;
  };

  const getMenuItemData = () => {
    const menuItemId = getMenuItemIdFromUrl();
    dispatch(getMenuItem(menuItemId));
  };

  const onSubmit = async () => {
    //copy the original menu item first, and then update the fields
    //let updatedMenuItem = {...menuItem, name:'new name', desc:'new desc', price:99.99, isAvailable:false};
    //await dispatch(editMenuItem(updatedMenuItem));
    //can do something after submitted
  };

  if (isLoading) {
    //please replace with loader lol
    return <div>Loading</div>;
  }

  return (
    <div>
      {menuItem && (
        <div>
          <p>Name: {menuItem.name}</p>
          <p>Desc: {menuItem.desc}</p>
          <p>Price: {menuItem.price}</p>
          <p>isAvailable: {menuItem.isAvailable ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
};

export default EditMenuItemPage;
