import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getStaff, editStaff } from '../features/staff/staffSlice';
import { getStaffRole } from '../utils/roleHelper';

const StaffEditPage = () => {
  const { isLoading, staff } = useSelector((state) => state.staff);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstname, SetFirstname] = useState('');
  const [lastname, SetLastname] = useState('');
  const [username, SetUsername] = useState('');
  const [password, SetPassword] = useState('');
  const [role, SetRole] = useState('');
  const { id } = useParams();

  const staffRole = getStaffRole();
  //only owner can see staff list
  if (staffRole !== 'OWNER') {
    navigate('/ManageOrder');
  }

  useEffect(() => {
    document.title = 'Edit Staff';
    setStaffData();
  }, []);

  function setStaffData() {
    dispatch(getStaff(id))
      .then((response) => {
        console.log(staff);
        SetFirstname(response.payload.staff.firstname);
        SetLastname(response.payload.staff.lastname);
        SetUsername(response.payload.staff.username);
        SetPassword(response.payload.staff.password);
        SetRole(response.payload.staff.role);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function onChangeFirstname(event) {
    SetFirstname(event.target.value);
  }

  function onChangeLastname(event) {
    SetLastname(event.target.value);
  }

  function onChangeUsername(event) {
    SetUsername(event.target.value);
  }

  function onChangePassword(event) {
    SetPassword(event.target.value);
  }

  function onChangeRole(event) {
    SetRole(event.target.value);
  }

  const onEdit = async (event) => {
    event.preventDefault();
    const updatedStaff = {
      id: id,
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password,
      role: role,
    };
    await dispatch(editStaff(updatedStaff));
    navigate('../staffs');
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col12' align='center'>
          <div className='signup-container'>
            <h1>Edit Staff</h1>
            <form noValidate className='signup-form' onSubmit={onEdit}>
              <div className='form-group'>
                <label>First Name:</label>
                <input
                  className='form-control'
                  type='text'
                  name='firstname'
                  id='firstname'
                  defaultValue={firstname}
                  onChange={onChangeFirstname}
                  placeholder='First Name'
                  required
                />
              </div>
              <div className='form-group'>
                <label>Last Name:</label>
                <input
                  className='form-control'
                  type='text'
                  name='lastname'
                  id='lastname'
                  defaultValue={lastname}
                  onChange={onChangeLastname}
                  placeholder='Last Name'
                  required
                />
              </div>
              <div className='form-group'>
                <label>Username:</label>
                <input
                  type='text'
                  className='form-control'
                  id='username'
                  name='username'
                  required
                  defaultValue={username}
                  onChange={onChangeUsername}
                  placeholder='Username'
                />
              </div>
              <div className='form-group'>
                <label>Password:</label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  required
                  defaultValue={password}
                  onChange={onChangePassword}
                  placeholder='Password'
                />
              </div>

              {/*MAYBE IN HERE NEED TO INCLUDE RADIO BUTTONS FOR WHAT TYPE OF USER??*/}

              <div className='form-group' onChange={onChangeRole}>
                <label>What type of user are you?</label>
                <br />
                <input
                  type='radio'
                  className='radio'
                  name='role'
                  value='SERVER'
                  checked={role == 'SERVER'}
                  onChange={SetRole}
                />
                <label>Server</label>
                <input
                  type='radio'
                  className='radio'
                  name='role'
                  value='CHEF'
                  checked={role == 'CHEF'}
                  onChange={SetRole}
                />
                <label>Chef</label>
                <input
                  type='radio'
                  className='radio'
                  name='role'
                  value='CS'
                  checked={role == 'CS'}
                  onChange={SetRole}
                />
                <label>CS</label>
                <input
                  type='radio'
                  className='radio'
                  name='role'
                  value='TECH_SUPPORT'
                  checked={role == 'TECH_SUPPORT'}
                  onChange={SetRole}
                />
                <label>Tech Support</label>
                <input
                  type='radio'
                  className='radio'
                  name='role'
                  value='MANAGER'
                  checked={role == 'MANAGER'}
                  onChange={SetRole}
                />
                <label>Manager</label>
                <input
                  type='radio'
                  className='radio'
                  name='role'
                  value='OWNER'
                  checked={role == 'OWNER'}
                  onChange={SetRole}
                />
                <label>Owner</label>
              </div>
              <br />

              <div>
                <input
                  className='btn btn-primary'
                  type='submit'
                  value='Update'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffEditPage;
