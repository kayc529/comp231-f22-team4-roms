import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getStaff, editStaff } from '../features/staff/staffSlice';

const StaffEditPage = () =>
{
    const { isLoading, staff } = useSelector((state) => state.staff);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    useEffect(()=>{
      document.title = "Edit Staff";
       getStaffData();
    }, []);
  
    
    const [staffData, setStaffData] = useState({
      firstname: staff.firstname,
      lastname: staff.lastname,
      username: staff.username,
      password: staff.password,
      role: staff.role
    });      
  
  function handleInputChange(event) {
    const name = event.target.name;
    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    setStaffData(staffData => {
        return {
            ...staffData,
            [name]: value
        }
    })
  }

  const getStaffId = () => {
    const url = document.URL;
    const id = url.substring(url.lastIndexOf('/') + 1);
    return id;
  };

  const getStaffData = () => {
    const id = getStaffId();
    dispatch(getStaff(id));
  };

  const onEdit = async (event) => {
    event.preventDefault()
    const updatedStaff = staffData;
    await dispatch(editStaff(updatedStaff));
    navigate('../staffs');
  };
  
  if (isLoading) {
    return <div>Loading</div>;
  }
    
  function handleMessage()
    {
        if(message.length > 0)
        {
            return(
            <div id="messageArea" className="alert alert-danger">
                {message}
              </div>
            );
        }
  }

  return (
      <div className="container">
      <div className="row">

          <div className="col12" align="center">
            <div className="signup-container">
                <h1>Edit Staff</h1>
                
            {handleMessage()}

              <form noValidate className="signup-form" onSubmit ={onEdit}>
                <div className="form-group">
                  <label>First Name:</label>
                  <input className="form-control" type="text" name="firstname" id="firstname"
                    defaultValue={staffData.firstname}
                    onChange={handleInputChange}
                    placeholder="First Name" required />
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input className="form-control" type="text" name="lastname" id="lastname"
                    defaultValue={staffData.lastname}
                    onChange={handleInputChange}
                    placeholder="Last Name" required />
                </div>
                <div className="form-group">
                  <label>Username:</label>
                  <input type="text" className="form-control" id="username" name="username" required
                    defaultValue={staffData.username}
                    onChange={handleInputChange}
                    placeholder="Username" />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input type="password" className="form-control" id="password" name="password" required
                    defaultValue={staffData.password}
                    onChange={handleInputChange}
                    placeholder="Password" />
                </div>


                {/*MAYBE IN HERE NEED TO INCLUDE RADIO BUTTONS FOR WHAT TYPE OF USER??*/}
                    
                <div className="form-group" onChange={handleInputChange}>
                  <label>What type of user are you?</label>
                  <br />
                  <input type="radio" className="radio" name="role" value="SERVER" />
                  <label>Server</label>
                  <input type="radio" className="radio" name="role" value="chef" />
                  <label>Chef</label>
                  <input type="radio" className="radio" name="role" value="CS" />
                  <label>CS</label>
                  <input type="radio" className="radio" name="role" value="TECH_SUPPORT" /> <label>Tech Support</label>
                  <input type="radio" className="radio" name="role" value="MANAGER" />
                  <label>Manager</label>
                  <input type="radio" className="radio" name="role" value="OWNER" />
                  <label>Owner</label>
                </div>
                <br />

                <div>
                  <input className="btn btn-primary" type="submit" value="Update" />
                </div>

              </form>
              </div>
          </div>
      </div>
  </div>  
  );
};

export default StaffEditPage;
