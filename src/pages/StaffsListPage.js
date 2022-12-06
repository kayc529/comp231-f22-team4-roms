import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteStaff, getAllStaffs } from '../features/staff/staffSlice';

const StaffsListPage = () => {

  const { staffsList, isLoading } = useSelector((state) => state.staff);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
        document.title = "Staff List";
        getStaffsList();
  }, []);
  
  const getStaffsList = () => {
    dispatch(getAllStaffs());
  };

  function confirmDelete(staffId)
  {
      if(!window.confirm("Are You Sure?"))
      {
          return;
      }
      onStaffDeleted(staffId);
  }

  const onStaffDeleted = async (staffId) => {
    await dispatch(deleteStaff(staffId));
    getStaffsList();
  };

  const onStaffSelected = (staffId) => {
    navigate(`./edit/${staffId}`);
  };

  const onAddStaff = () => {
    navigate('/signup');
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
        <div className="container">
            <div className="row">
                <div className='d-flex pb-4'>
                  <button onClick={() => onAddStaff()}  className='btn btn-primary ms-auto'><i className="bi bi-plus-lg"></i> Add Staff</button>
                </div>
                <div className="col table-responsive">
                    <table id="contactList" className="table table-dark table-hover table-striped table-bordered">
                        <thead>
                              <tr>
                                <th scope="col" className="text-center">#</th>
                                <th className="text-center align-middle" scope="col">Role</th>
                                <th className="text-center align-middle" scope="col">First Name</th>
                                <th className="text-center align-middle" scope="col">Last Name</th>
                                <th className="text-center align-middle" scope="col">Username</th>
                                <th className="text-center align-middle" scope="col">Edit Staff</th>
                                <th className="text-center align-middle" scope="col">Delete Staff</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staffsList && staffsList.map((staff, index) =>{
                                  return(
                                          <tr key="{index}">
                                              <th scope="row" className="text-center">{index + 1}</th>
                                              <td className="text-center">{ staff.role }</td>
                                              <td className="text-center">{ staff.firstname }</td>
                                              <td className="text-center">{ staff.lastname }</td>
                                              <td className="text-center">{ staff.username }</td>
                                              <td className="text-center"><button onClick={()=>{onStaffSelected(staff._id)}} className="btn btn-primary btn-sm edit"><i className="fa-solid fa-pen-to-square"></i> Edit</button></td>
                                              <td className="text-center"><button onClick={()=>{confirmDelete(staff._id)}} className="btn btn-danger btn-sm delete"><i className="fa-solid fa-trash-can"></i> Delete</button></td>
                                          </tr>
                                  );
                                })
                              }
                        </tbody>
                    </table>
                </div> 
            </div>
        </div>  
  );
};

export default StaffsListPage;