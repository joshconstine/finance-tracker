const Table = (props) => {
  return (
    <>
      <h1>{props.type}</h1>
      {props.list.map((elem, index) => {
        return (
          <div key={index}>
            <span>
              {elem.name} - {elem.ammount}
            </span>
          </div>
        );
      })}
      <h5>total : {props.getTotal(props.list)}</h5>
    </>
  );
};

export default Table;
