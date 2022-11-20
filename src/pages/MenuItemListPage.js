import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteMenuItem, getAllMenuItems } from '../features/menu/menuSlice';

const MenuItemListPage = () => {
  const { menuItemList, isLoading } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //get menu list when the page is loaded
  useEffect(() => {
    getMenuItemList();
  }, []);

  const getMenuItemList = () => {
    dispatch(getAllMenuItems());
  };

  const onMenuItemDeleted = async (menuItemId) => {
    await dispatch(deleteMenuItem(menuItemId));
    //update the menu item list after an item is deleted
    getMenuItemList();
  };

  //navigate to edit menu page when an menu item is clicked
  const onMenuItemSelected = (menuItemId) => {
    navigate(`../edit-menu-item/${menuItemId}`);
  };

  //navigate to add menu page when the add menu item button is clicked
  const onAddMenuItem = () => {
    navigate('../add-menu-item');
  };

  const onUploadMenuItemImage = (menuItemId) => {
    navigate(`../upload-image/${menuItemId}`);
  };

  if (isLoading) {
    //please replace with loader lol
    return <div>Loading</div>;
  }

  return (
    <div>
      {menuItemList.map((item, index) => {
        return (
          <p key={item._id} onClick={() => onMenuItemSelected(item._id)}>
            {item.name}
          </p>
        );
      })}
    </div>
  );
};

export default MenuItemListPage;
