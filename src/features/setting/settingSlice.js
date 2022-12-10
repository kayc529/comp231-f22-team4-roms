import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSettingThunk, updateSettingThunk } from "./settingThunk";

const initialState = {
  setting: {},
  isLoading: false,
  errorMsg: "",
};

export const getSetting = createAsyncThunk(
  "setting/getSetting",
  async (_, thunkAPI) => {
    return getSettingThunk("/setting", thunkAPI);
  }
);

export const updateSetting = createAsyncThunk(
  "setting/updateSetting",
  async (settingToUpdate, thunkAPI) => {
    return updateSettingThunk("/setting", settingToUpdate, thunkAPI);
  }
);

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducer: {},
  extraReducers: {
    //GET SETTING
    [getSetting.pending]: (state) => {
      state.isLoading = true;
    },
    [getSetting.fulfilled]: (state, { payload }) => {
      const { setting } = payload;
      state.isLoading = false;
      state.setting = setting;
    },
    [getSetting.rejected]: (state) => {
      state.isLoading = false;
    },
    //UPDATE SETTING
    [updateSetting.pending]: (state) => {
      state.isLoading = true;
    },
    [updateSetting.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [updateSetting.rejected]: (state) => {
      state.isLoading = false;
    }
  },
});

export default settingSlice.reducer;
