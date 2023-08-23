import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import FineReducer from "./FineReducer";

const store = configureStore({
  reducer: {
    users: userReducer,
    find: FineReducer
  }
})
export default store