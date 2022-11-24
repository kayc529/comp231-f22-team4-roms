import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMenuItem } from '../features/menu/menuSlice';

const FoodDetailPage = () => {
  const dispatch = useDispatch();

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

  return (
    <div className="container">
      <h1>Food Name</h1>
      <div className="card">
        <div className="row">
          <div className="col-8">
            This is an image
          </div>
          <div className="col-4 p-4">
            <div class="pb-3 d-flex"><a className="btn btn-outline-dark ms-auto" href="/"><i className="bi bi-arrow-return-left"></i> cancel</a></div>
            <div class="pb-3">This is food description</div>
            <div class="pb-3">$ 0</div>
            <div class="pb-3"><button className="btn btn-outline-dark"><i class="bi bi-cart"></i> Add to Cart</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailPage;