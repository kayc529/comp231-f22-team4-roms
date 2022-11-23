const FoodItem = ({ prop }) => {
    const { name, price } = prop;
  
    return (
      <div className="col-4 mb-4">
        <div className="card">
            <div className="card-body">
                {name}<br/>
                $ {price}
            </div>
        </div>
      </div>
    );
  };
  
  export default FoodItem;
  