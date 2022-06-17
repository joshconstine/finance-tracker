const ExpenseTable = (props) => {
  const sum = props.expenses.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.ammount;
  }, 0);

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
      <h5>total : {sum}</h5>
    </>
  );
};

export default ExpenseTable;
