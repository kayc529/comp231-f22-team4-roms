import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './features/example/exampleSlice';
import cartReducers from './features/cart/cartReducers';

//YOU MUST PUT THE REDUCER INSIDE THE STORE
//OR ELSE YOU CAN'T DISPATCH THEIR ACTIONS FROM ANY OF THE APP COMPONENTS
const store = configureStore({
  reducer: {
    example: exampleReducer,
    cart: cartReducers
  },
});

export default store;
