const IncomeTable = (props) => {
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
      <h5>total : {props.getTotal(props.incomes)}</h5>
    </>
  );
};

export default IncomeTable;
