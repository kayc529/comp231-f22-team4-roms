const CategoryListPage = () => {
    const userList = [];

    const onCategoryDeleted = () => {

    };

    return (
        <div className='container'>
        <h1 className='text-center'>Category List</h1>
        <div className='d-flex pb-4'>
          <a href="/category-form" className='btn btn-primary ms-auto'><i className="bi bi-plus-lg"></i> Add Category</a>
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
            <tr>
                  <td>Demo</td>
                  <td></td>
                  <td className='text-end'>
                    <button onClick={() => onCategoryDeleted(1)} className='btn btn-outline-danger me-3'><i className="bi bi-trash3"></i></button>
                    <a className='btn btn-outline-primary' href={"/category-form/"+1}><i className="bi bi-pencil"></i></a>
                  </td>
                </tr>
            {userList.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td></td>
                  <td className='text-end'>
                    <button onClick={() => onCategoryDeleted(item._id)} className='btn btn-outline-danger me-3'><i className="bi bi-trash3"></i></button>
                    <a className='btn btn-outline-primary' href={"/category-form/"+item._id}><i className="bi bi-pencil"></i></a>
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
  
  export default CategoryListPage;
  