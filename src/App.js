import "./App.css";
import { useEffect, useState } from "react";
import AddInformation from "./AddInformation";
import Table from "./table";
import Calendar from "./Calendar";

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

  const getTotal = (ary) => {
    return ary.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.ammount;
    }, 0);
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
        day: "01",
      },
      {
        name: "gas",
        ammount: 500,
        day: "05",
      },
    ];
    setExpenses(baseExpenses);
  };
  const getEvents = () => {
    const date = new Date().toISOString().slice(0, 8);
    let events = [];
    expenses.forEach((curr) => {
      events.push({
        title: curr.name,
        date: `${date}${curr.day}`,
        color: "red",
      });
    });
    return events;
  };

  return (
    <div className="App">
      <header>Finance Tracker</header>

      <Table type="incomes" list={incomes} getTotal={getTotal} />
      <Table type="expenses" list={expenses} getTotal={getTotal} />
      <AddInformation addValue={addValue} />
      <Calendar events={getEvents()} />
    </div>
  );
}

export default App;
