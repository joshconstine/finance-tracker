import { createSlice } from "@reduxjs/toolkit";

export const recurringExpensesSlice = createSlice({
  name: "recurringExpenses",
  initialState: {
    recurringExpenses: [
      {
        name: "rent",
        ammount: 2995,
        day: "01",
      },
      {
        name: "gas",
        ammount: 500,
        day: "05",
      },
    ],
  },
  reducers: {
    addExpense: (state, action) => {
      state.recurringExpenses = [...state.recurringExpenses, action.payload];
    },
  },
});

export const { addExpense } = recurringExpensesSlice.actions;

// selectors
export const selectRecurringExpenses = (state) =>
  state.expenses.recurringExpenses;

export default recurringExpensesSlice.reducer;
