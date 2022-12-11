import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { uploadMenuItemImage, getMenuItem } from '../features/menu/menuSlice';

const UploadMenuItemImagePage = () => {
  const { isLoading, menuItem } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState('');

  // base64
  console.log(image);

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

  function handleFileChange(event) {
    const image = event.target.files[0];

    // transform file
    if(image){
      const fileReader = new FileReader();
      fileReader.readAsDataURL(image);
      fileReader.onloadend = () => {
        setImage(fileReader.result);
      };
    }else{
      setImage("");
    }
  }

  const onSubmitImage = async () => {
    let imageData = image;
    await dispatch(uploadMenuItemImage(menuItem._id, imageData));
    //can do something after the image is uploaded
  };

  if (isLoading) {
    //please replace with loader lol
    return <div>Loading</div>;
  }

  return (
    <div className="container">
      <h1 className="text-center">Upload Image</h1>
      <div className="d-flex pb-4">
        <a href="/menu-items" className="btn btn-outline-dark ms-auto me-3">
          cancel
        </a>
        <button form="form-upload-image" className="btn btn-primary">
          Save
        </button>
      </div>
      <form id="form-upload-image" onSubmit={onSubmitImage}>
      <div className="mb-3 row">
          <label htmlFor="name" className="col-sm-2">
            Menu Item
          </label>
          <div className="col-sm-10">{menuItem.name}</div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Image
          </label>
          <div className="col-sm-10">
            { image && 
                <img src={image} alt="image" className="img-thumbnail mb-3"/>
            }
            <input
              name="image"
              onChange={ handleFileChange }
              type="file"
              accept='image/jpeg, image/png'
              className="form-control"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadMenuItemImagePage;
