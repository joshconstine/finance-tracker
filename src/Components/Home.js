import "./Home.css";
import { useEffect, useState } from "react";
import AddInformation from "./AddInformation";
import Table from "./Table.js";
import Calendar from "./Calendar";
import { useDispatch, useSelector } from "react-redux";
import {
  addIncome,
  selectRecurringIncomes,
} from "../redux/recurringIncomesSlice";
import { selectRecurringExpenses } from "../redux/recurringExpensesSlice";
function Home() {
  // const [incomes, setIncomes] = useState([]);
  const expenses = useSelector(selectRecurringExpenses);
  const incomes = useSelector(selectRecurringIncomes);
  // console.log(incomes);

  useEffect(() => {}, []);

  const getTotal = (ary) => {
    return ary.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.ammount;
    }, 0);
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

    incomes.forEach((curr) => {
      events.push({
        title: curr.name,
        date: `${date}${curr.day}`,
        color: "green",
      });
    });
    return events;
  };

  return (
    <div className="App">
      <header>Finance Tracker</header>
      <h1>Recurring transactions</h1>
      <div className="fincanceContainer">
        <Table type="Income" list={incomes} getTotal={getTotal} />
        <Table type="Expense" list={expenses} getTotal={getTotal} />
      </div>
      <AddInformation />
      <Calendar events={getEvents()} />
    </div>
  );
}

export default Home;
