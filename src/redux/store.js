import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    user: userReducer,
    middleware: [logger],
  },
});
