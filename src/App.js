import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import IncomeTable from "./IncomeTable";

function App() {
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    fillIncomes();
  }, []);

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

  return (
    <div className="App">
      <header>Finance Tracker</header>
      <IncomeTable incomes={incomes} />
    </div>
  );
}

export default App;
