const ExpenseTable = (props) => {
  return (
    <>
      <h1>expenses</h1>
      {props.expenses.map((elem, index) => {
        return (
          <div key={index}>
            <span>
              {elem.name} - {elem.ammount}
            </span>
          </div>
        );
      })}
      <h5>total : {props.getTotal(props.expenses)}</h5>
    </>
  );
};

export default ExpenseTable;
