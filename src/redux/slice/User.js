import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../services/User";

export const initialState = {
  error: null,
  user: null,
  message: "",
  isLoading: false,
  status: "idle",
};

export const getUserByEmail = createAsyncThunk(
  "user",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await User.getUserByEmail(email);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue({
          message: error.response.data.message,
          status: error.response.status,
        });
      } else {
        return rejectWithValue({ message: error.toString(), status: null });
      }
    }
  }
);

export const UserSlice = createSlice({
  name: "User",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUserByEmail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserByEmail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.message = action.payload.message;
      })
      .addCase(getUserByEmail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

export const selectUser = (state) => state.User.user;
export const selectUserStatus = (state) => state.User.status;
export const selectError = (state) => state.User.error;

export default UserSlice.reducer;
