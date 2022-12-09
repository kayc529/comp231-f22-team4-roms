import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllOrdersThunk
} from './orderThunk';

const initialState = {
  orderList: [],
  order: {},
  isLoading: false,
  errorMsg: '',
};

export const getAllOrders = createAsyncThunk(
  'orders/getAllOrders',
  async (_, thunkAPI) => {
    return getAllOrdersThunk('/orders', thunkAPI);
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  isLoading: false,
  errorMsg: '',
});

export default orderSlice.reducer;