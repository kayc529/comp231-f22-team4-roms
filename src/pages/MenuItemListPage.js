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
    <div className='container'>
      <h1 className='text-center'>Menu Items</h1>
      <div className='d-flex pb-4'>
        <button onClick={onAddMenuItem} className='btn btn-primary ms-auto'>Add Item</button>
      </div>
      <div className='table-responsive'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Desc</th>
              <th>Category</th>
              <th className='text-end'>Price</th>
              <th className='text-center' width="100">Status</th>
              <th className='text-end' width="200">Action</th>
            </tr>
          </thead>
          <tbody>
          {menuItemList.map((item, index) => {
            return (
              <tr key={item._id}>
                <td></td>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td></td>
                <td className='text-end'>$ {item.price}</td>
                <td className='text-center'>
                  { item.isAvailable 
                    ? <span className="badge rounded-pill bg-success">Active</span>
                    : <span className="badge rounded-pill bg-danger">Inactive</span>
                  }
                </td>
                <td className='text-end'>
                  <button onClick={() => onMenuItemDeleted(item._id)} className='btn btn-outline-danger me-3'>Delete</button>
                  <button onClick={() => onMenuItemSelected(item._id)} className='btn btn-outline-primary'>Edit</button>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuItemListPage;