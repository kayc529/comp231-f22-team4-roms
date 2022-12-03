import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './features/example/exampleSlice';
import cartReducers from './features/cart/cartReducers';
import menuReducer from './features/menu/menuSlice';
import staffReducer from './features/staff/staffSlice';


//YOU MUST PUT THE REDUCER INSIDE THE STORE
//OR ELSE YOU CAN'T DISPATCH THEIR ACTIONS FROM ANY OF THE APP COMPONENTS
const store = configureStore({
  reducer: {
    example: exampleReducer,
    cart: cartReducers,
    menu: menuReducer,
    staff: staffReducer
  },
});

export default store;
