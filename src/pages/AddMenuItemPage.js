import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addMenuItem } from '../features/menu/menuSlice';

const AddMenuItemPage = () => {
  const { isLoading } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle form data
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: "",
    sortOrder: 0,
    isAvailable: true,
  });

  function handleInputChange(event) {
    const name = event.target.name;
    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    setFormData(formData => {
        return {
            ...formData,
            [name]: value
        }
    })
  }

  const onAddMenuItem = async () => {
    let newMenuItem = formData;
    //object format
    //{name:'some name', desc:'some dec', price:19.99, isAvailable:true}
    await dispatch(addMenuItem(newMenuItem));
    //can do something after the item is added
    navigate('../menu-items');
  };

  if (isLoading) {
    //return some UI or whatever
  }

  // Demo Data
  const FOODCATERGORY = [
    {name: "CLASSIC BREAKFASTS"},
    {name: "BENNYS"},
    {name: "DELUXE BREAKFASTS"},
    {name: "SIDES"}
  ]

  const ORDERTYPE = [
    {name: "Dinein"},
    {name: "Takeaway"}
  ]

  return (
    <div className='container'>
      <h1 className='text-center'>Add Menu Item</h1>
      <div className='d-flex pb-4'>
        <a href="/menu-items" className='btn btn-outline-dark ms-auto me-3'>cancel</a>
        <button onClick={onAddMenuItem} className='btn btn-primary'>Save</button>
      </div>
      <form>
        <div className="mb-3 row">
          <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input id="name" name="name" onChange={handleInputChange} defaultValue={formData.name} type="text" className="form-control"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="desc" className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <textarea id="desc" name="desc" onChange={handleInputChange} className="form-control" rows={5}></textarea>
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
            <input id="sortOrder" name='sortOrder' onChange={handleInputChange} defaultValue={formData.sortOrder} type="number" className="form-control"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Status</label>
          <div className="col-sm-10">
            <div className="form-check form-switch">
              <input name='isAvailable' type="checkbox" className="form-check-input"
                onChange={handleInputChange}
                defaultChecked={formData.isAvailable} autoComplete="off"/>
            </div>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Category</label>
          <div className="col-sm-4">
            {FOODCATERGORY.map((item, index) => {
              return (
                <div key={index} className="form-check">
                  <input id={"category-"+index} value={"category-"+index} onChange={handleInputChange} name="category" className="form-check-input" type="checkbox" />
                  <label htmlFor={"category-"+index} className="form-check-label">{item.name}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Category</label>
          <div className="col-sm-4">
            {ORDERTYPE.map((item, index) => {
              return (
                <div key={index} className="form-check">
                  <input id={"order-type-"+index} value={"category-"+index} onChange={handleInputChange} name="orderType" className="form-check-input" type="checkbox" />
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

export default AddMenuItemPage;
