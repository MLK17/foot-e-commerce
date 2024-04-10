import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slice/User";

const store = configureStore({
  reducer: {
    User: UserReducer,
  },
});

export default store;
