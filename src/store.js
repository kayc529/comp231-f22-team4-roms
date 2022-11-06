import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './features/example/exampleSlice';

//YOU MUST PUT THE REDUCER INSIDE THE STORE
//OR ELSE YOU CAN'T DISPATCH THEIR ACTIONS FROM ANY OF THE APP COMPONENTS
const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

export default store;
