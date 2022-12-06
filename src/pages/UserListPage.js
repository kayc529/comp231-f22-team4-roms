const UserListPage = () => {
    const userList = [];

    const onUserDeleted = () => {

    };

    return (
        <div className='container'>
        <h1 className='text-center'>User List</h1>
        <div className='d-flex pb-4'>
          <a href="/signup" className='btn btn-primary ms-auto'><i className="bi bi-plus-lg"></i> Add User</a>
        </div>
        <div className='table-responsive'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th className='text-end' width="200">Action</th>
              </tr>
            </thead>
            <tbody>
            {userList.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td></td>
                  <td className='text-end'>
                    <button onClick={() => onUserDeleted(item._id)} className='btn btn-outline-danger me-3'><i className="bi bi-trash3"></i></button>
                    <a className='btn btn-outline-primary' href={"/user-form/"+item._id}><i className="bi bi-pencil"></i></a>
                  </td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default UserListPage;
  