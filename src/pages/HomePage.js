import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMenuItems } from "../features/menu/menuSlice";

import FoodItem from "../components/FoodItem";

const HomePage = () => {
  const { menuItemList } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const orderTypeList = ["Dine in", "Take out"];

  let i = 0;

  if (!localStorage.getItem("orderType")) {
    localStorage.setItem("orderType", "DINE_IN");
  }

  //get menu list when the page is loaded
  useEffect(() => {
    getMenuItemList();
  }, []);

  const getMenuItemList = () => {
    dispatch(getAllMenuItems());
  };

  const filter = (orderType) => {
    localStorage.setItem("orderType", orderType);
    if (localStorage.getItem("cart")) {
      localStorage.removeItem("cart");
    }
    getMenuItemList();
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center py-4">Restaurant Name</h1>
      <div className="text-center pb-4">
        Adipisicing amet amet culpa cillum esse aliquip cupidatat. Ex commodo
        laborum quis ut. Est nulla nisi laborum cupidatat.
      </div>
      <div className="text-center pb-4">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            onClick={() => filter("DINE_IN")}
            type="button"
            className={
              localStorage.getItem("orderType") === "DINE_IN"
                ? "btn btn-dark"
                : "btn btn-outline-dark"
            }
          >
            Dine in
          </button>
          <button
            onClick={() => filter("TAKE_OUT")}
            type="button"
            className={
              localStorage.getItem("orderType") === "TAKE_OUT"
                ? "btn btn-dark"
                : "btn btn-outline-dark"
            }
          >
            Take out
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
            {menuItemList.map((item, index) => {
              if (localStorage.orderType === "DINE_IN" && item.isDineIn) {
                return <FoodItem key={index} prop={item} />;
              } else if (
                localStorage.orderType === "TAKE_OUT" &&
                item.isTakeOut
              ) {
                return <FoodItem key={index} prop={item} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
