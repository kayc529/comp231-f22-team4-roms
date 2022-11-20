import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { uploadMenuItemImage, getMenuItem } from '../features/menu/menuSlice';

const UploadMenuItemImagePage = () => {
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

  const onSubmitImage = async () => {
    //still don't know what your image data will look like lol
    let imageData = {};
    await dispatch(uploadMenuItemImage(menuItem._id, imageData));
    //can do something after the image is uploaded
  };

  if (isLoading) {
    //please replace with loader lol
    return <div>Loading</div>;
  }

  return <div>UploadMenuItemImagePage</div>;
};

export default UploadMenuItemImagePage;
