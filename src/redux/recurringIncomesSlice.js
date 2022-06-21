import { createSlice } from "@reduxjs/toolkit";

export const recurringIncomesSlice = createSlice({
  name: "recurringIncomes",
  initialState: {
    recurringIncomes: [
      {
        name: "work",
        ammount: 1200,
        day: "14",
      },
      {
        name: "plasma",
        ammount: 520,
        day: "07",
      },
      {
        name: "gi bill",
        ammount: 2850,
        day: "01",
      },
      {
        name: "VA",
        ammount: 3650,
        day: "01",
      },
    ],
  },
  reducers: {
    addIncome: (state, action) => {
      state.recurringIncomes = [...state.recurringIncomes, action.payload];
    },
  },
});

export const { addIncome } = recurringIncomesSlice.actions;

// selectors
export const selectRecurringIncomes = (state) => state.incomes.recurringIncomes;

export default recurringIncomesSlice.reducer;
