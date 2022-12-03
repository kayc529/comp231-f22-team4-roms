import customFetch from '../../utils/customFetch';

export const getAllStaffsThunk = async (url, thunkAPI) => {
  try {
    const res = await customFetch.get(url);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getStaffThunk = async (url, thunkAPI) => {
  try {
    const res = await customFetch.patch(url);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const editStaffThunk = async (url, updatedStaff, thunkAPI) => {
  try {
    const res = await customFetch.patch(url, updatedStaff);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteStaffThunk = async (url, thunkAPI) => {
  try {
    const res = await customFetch.delete(url);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};