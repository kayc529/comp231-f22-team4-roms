import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../features/authentication/auth-service';
import { toast } from 'react-toastify';
import { getStaffRole } from '../utils/roleHelper';

const AddStaffPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const staffRole = getStaffRole();
  //only owner can add staff
  if (staffRole !== 'OWNER') {
    navigate('/ManageOrder');
  }

  useEffect(() => {
    document.title = 'Register';
  }, []);

  function onChangeUsername(event) {
    setUsername(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangeFirstName(event) {
    setFirstName(event.target.value);
  }

  function onChangeLastName(event) {
    setLastName(event.target.value);
  }

  function onChangeRole(event) {
    setRole(event.target.value);
  }

  function clearForm(event) {
    setUsername('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setRole('');
  }

  function handleSignUp(event) {
    event.preventDefault();

    if (!username || !password || !firstname || !lastname || !role) {
      alert('Please fill in all the required info');
      return;
    }

    const UserData = {
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      role: role,
    };

    AuthService.register(
      UserData.username,
      UserData.password,
      UserData.firstname,
      UserData.lastname,
      UserData.role
    ).then(
      (data) => {
        if (data.success) {
          navigate('/staffs');
          toast('Create Staff Successfully');
        } else {
          toast.error(data.message);
        }
      },
      (error) => {
        toast.error('Server Error!');
      }
    );
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col12' align='center'>
          <div className='signup-container'>
            <h1>Add New Staff</h1>
            <form noValidate className='signup-form' onSubmit={handleSignUp}>
              <div className='form-group'>
                <label>First Name:</label>
                <input
                  className='form-control'
                  type='text'
                  name='firstname'
                  id='firstname'
                  value={firstname}
                  onChange={onChangeFirstName}
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
                  value={lastname}
                  onChange={onChangeLastName}
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
                  value={username}
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
                  value={password}
                  onChange={onChangePassword}
                  placeholder='Password'
                />
              </div>

              <div className='form-group' onChange={onChangeRole}>
                <label>Type of User</label>
                <br />
                <fieldset id='roles'>
                  <input type='radio' name='role' value='SERVER' id='server' />
                  <label for='server' className='roles-label'>
                    Server
                  </label>
                  <input type='radio' name='role' value='CHEF' id='chef' />
                  <label for='chef' className='roles-label'>
                    Chef
                  </label>
                  <input
                    type='radio'
                    name='role'
                    value='MANAGER'
                    id='manager'
                  />
                  <label for='manager' className='roles-label'>
                    Manager
                  </label>
                  <input type='radio' name='role' value='OWNER' id='owner' />
                  <label for='owner' className='roles-label'>
                    Owner
                  </label>
                </fieldset>
              </div>
              <br />

              <div>
                <input
                  className='btn btn-primary'
                  type='submit'
                  value='Add Staff'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStaffPage;
