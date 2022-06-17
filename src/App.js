import "./App.css";
import { useEffect, useState } from "react";
import IncomeTable from "./IncomeTable";
import ExpenseTable from "./ExpenseTable";
import AddInformation from "./AddInformation";

function App() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fillIncomes();
    fillExpenses();
  }, []);

  const addValue = (obj, type) => {
    if (type === "income") {
      setIncomes([...incomes, obj]);
    }
    if (type === "expense") {
      setExpenses([...expenses, obj]);
    }
  };

  const fillIncomes = () => {
    const baseIncomes = [
      {
        name: "work",
        ammount: 1200,
      },
      {
        name: "plasma",
        ammount: 520,
      },
      {
        name: "gi bill",
        ammount: 2850,
      },
      {
        name: "VA",
        ammount: 3650,
      },
      {
        name: "rent",
        ammount: 1350,
      },
    ];
    setIncomes(baseIncomes);
  };
  const fillExpenses = () => {
    const baseExpenses = [
      {
        name: "rent",
        ammount: 2995,
      },
      {
        name: "gas",
        ammount: 500,
      },
    ];
    setExpenses(baseExpenses);
  };

  return (
    <div className="App">
      <header>Finance Tracker</header>
      <IncomeTable incomes={incomes} />
      <ExpenseTable expenses={expenses} />
      <AddInformation addValue={addValue} />
    </div>
  );
}

export default App;
