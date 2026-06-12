import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

import { fetchMeals } from "../api/api";
import { Meal, DataState } from "../types/types";

export const getMeals = createAsyncThunk(
  "data/getMeals",
  async () => {
    const response = await fetchMeals();
    return response.meals;
  }
);

const initialState: DataState<Meal> = {
  data: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(getMeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getMeals.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      .addCase(getMeals.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ||
          "Failed to fetch data";
      });
  },
});

export default dataSlice.reducer;