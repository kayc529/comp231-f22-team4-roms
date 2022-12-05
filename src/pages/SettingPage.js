import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SettingPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: 'Restaurant Name',
    desc: 'Restaurant Description',
    openHour: 'Mon - Fri 9:00~21:00',
    isOpen: true,
  });

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

  const onSubmit = async (event) => {
    event.preventDefault();
    //await dispatch(editSetting(formData));
    //can do something after submitted
    navigate('/home');
  };

    return (
      <div className='container'>
        <h1 className='text-center'>Setting</h1>
        <div className='d-flex pb-4'>
          <a href='/' className='btn btn-outline-dark ms-auto me-3'>
            cancel
          </a>
          <button form='form-setting' className='btn btn-primary'>
            Save
          </button>
        </div>
        <form id='form-setting' onSubmit={onSubmit}>
          <div className='mb-3 row'>
            <label htmlFor='name' className='col-sm-2 col-form-label'>
              Name
            </label>
            <div className='col-sm-10'>
              <input
                id='name'
                name='name'
                onChange={handleInputChange}
                value={formData.name}
                type='text'
                className='form-control'
              />
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
                value={formData.desc}
                type='text'
                className='form-control'
                rows={5}
              />
            </div>
          </div>
          <div className='mb-3 row'>
            <label htmlFor='openHour' className='col-sm-2 col-form-label'>
              Open Hours
            </label>
            <div className='col-sm-10'>
              <textarea
                id='openHour'
                name='openHour'
                onChange={handleInputChange}
                value={formData.openHour}
                type='text'
                className='form-control'
                rows={5}
              />
            </div>
          </div>
          <div className='mb-3 row'>
            <label className='col-sm-2 col-form-label'>Status(open/close)</label>
            <div className='col-sm-10'>
              <div className='form-check form-switch'>
                <input
                  name='isOpen'
                  type='checkbox'
                  className='form-check-input'
                  onChange={handleInputChange}
                  defaultChecked={formData.isOpen}
                  autoComplete='off'
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  export default SettingPage;
  