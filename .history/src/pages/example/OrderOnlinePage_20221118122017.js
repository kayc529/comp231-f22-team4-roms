import burger from '/public/burger.jpg';

const OrderOnlinePage = () => {
    return (
      <div className="container">
        <div className="row">
            <div className="col-12" align="center">ORDER ONLINE</div>
            <img src={burger} alt="burger" />

            <hr></hr>
        </div>
      </div>
    );
  };
  
  export default OrderOnlinePage;