const IncomeTable = (props) => {
  const sum = props.incomes.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.ammount;
  }, 0);

  return (
    <>
      <h1>incomes</h1>
      {props.incomes.map((elem, index) => {
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

export default IncomeTable;
