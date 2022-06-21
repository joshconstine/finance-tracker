import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import recurringIncomesReducer from "./recurringIncomesSlice";
import recurringExpensesReducer from "./recurringExpensesSlice";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    user: userReducer,
    incomes: recurringIncomesReducer,
    expenses: recurringExpensesReducer,
    middleware: [logger],
  },
});
