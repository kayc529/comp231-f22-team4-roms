import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editMenuItem, getMenuItem } from '../features/menu/menuSlice';

const EditMenuItemPage = () => {
  const { isLoading, menuItem } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    _id: '',
    name: '',
    desc: '',
    price: '',
    isAvailable: true,
  });

  useEffect(() => {
    if (menuItem) {
      setFormData({
        _id: menuItem._id,
        name: menuItem.name,
        desc: menuItem.desc,
        price: menuItem.price,
        isAvailable: menuItem.isAvailable,
      });
    }
  }, [menuItem]);

  function handleInputChange(event) {
    const name = event.target.name;
    let value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;

    setFormData((formData) => {
      return {
        ...formData,
        [name]: value,
      };
    });
  }

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

  const onSubmit = async (event) => {
    event.preventDefault();
    //copy the original menu item first, and then update the fields
    // const updatedMenuItem = {
    //   name: event.target.elements.name.value,
    //   desc: event.target.elements.desc.value,
    // };
    console.log(formData);
    await dispatch(editMenuItem(formData));
    //can do something after submitted
    navigate('../menu-items');
  };

  if (isLoading) {
    //please replace with loader lol
    return <div>Loading</div>;
  }

  const ORDERTYPE = [{ name: 'Dinein' }, { name: 'Takeaway' }];

  return (
    <div className='container'>
      <h1 className='text-center'>Edit Menu Item</h1>
      <div className='d-flex pb-4'>
        <a href="/menu-items" className='btn btn-outline-dark ms-auto me-3'>cancel</a>
        <button form="form-menu-item" className='btn btn-primary'>Save</button>
      </div>
      <form id="form-menu-item" onSubmit={onSubmit}>
        <div className="mb-3 row">
          <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input id="name" name="name" onChange={handleInputChange} defaultValue={formData.name} type="text" className="form-control"/>
          </div>
        </div>
        <div className='mb-3 row'>
          <label htmlFor='desc' className='col-sm-2 col-form-label'>
            Description
          </label>
          <div className='col-sm-10'>
            <textarea
              id='desc'
              name='desc'
              onChange={handleInputChange}
              defaultValue={formData.desc}
              className='form-control'
              rows={5}
            ></textarea>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
          <div className="col-sm-4">
            <div className="input-group">
              <span className="input-group-text" id="price">$</span>
              <input id="price" name='price' onChange={handleInputChange} defaultValue={formData.price} type="text" className="form-control"/>
            </div>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="sortOrder" className="col-sm-2 col-form-label">Sort Order</label>
          <div className="col-sm-4">
            <input id="sortOrder" name='sortOrder' onChange={handleInputChange} type="number" className="form-control"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Status</label>
          <div className="col-sm-10">
            <div className="form-check form-switch">
              <input name='isAvailable' type="checkbox" className="form-check-input"
                onChange={handleInputChange}
                defaultChecked={menuItem.isAvailable} autoComplete="off"/>
            </div>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Category</label>
          <div className="col-sm-4">
            {ORDERTYPE.map((item, index) => {
              return (
                <div key={index} className="form-check">
                  <input id={"order-type-"+index} defaultValue={"category-"+index} onChange={handleInputChange} name="orderType" className="form-check-input" type="checkbox" />
                  <label htmlFor={"order-type-"+index} className="form-check-label">{item.name}</label>
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditMenuItemPage;
