import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const CategoryFormPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    let title = "-";

    // check getCategory(params.id) not empty instead of params.id
    if(params.id){
        // edit
        title = "Edit Category";
        // setFormData category
    }else{
        // add
        title = "Add Category";
    }

    const [formData, setFormData] = useState({
        _id: '',
        name: '',
        desc: '',
        sortOrder: 0,
        isAvailable: true,
    });

    // 
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

        // check getCategory(params.id) not empty instead of params.id
        if(params.id){
            // edit
            //await dispatch(editCategory(formData));
            //navigate('/home');
        }else{
            // add
            //await dispatch(addCategory(formData));
            //navigate('/home');
        }
      };

    return (
        <div className='container'>
            <h1 className='text-center'>{title}</h1>
            <div className='d-flex pb-4'>
                <a href='/category' className='btn btn-outline-dark ms-auto me-3'>
                    <i className="bi bi-arrow-return-left"></i> cancel
                </a>
                <button form='form-menu-item' className='btn btn-primary'>
                    <i className="bi bi-save"></i> save
                </button>
            </div>
            <form id='form-menu-item' onSubmit={onSubmit}>
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
                        />
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label htmlFor='sortOrder' className='col-sm-2 col-form-label'>
                        Sort Order
                    </label>
                    <div className='col-sm-10'>
                        <input
                        id='sortOrder'
                        name='sortOrder'
                        onChange={handleInputChange}
                        value={formData.sortOrder}
                        type='number'
                        className='form-control'
                        />
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label className='col-sm-2 col-form-label'>Status</label>
                    <div className='col-sm-10'>
                        <div className='form-check form-switch'>
                        <input
                            name='isAvailable'
                            type='checkbox'
                            className='form-check-input'
                            onChange={handleInputChange}
                            defaultChecked={formData.isAvailable}
                            autoComplete='off'
                        />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CategoryFormPage;
