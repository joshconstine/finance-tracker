import "./Table.css";

const Table = (props) => {
  return (
    <div className="table">
      <h1>{props.type}</h1>
      <h5>total : {props.getTotal(props.list)}</h5>
      {props.list.map((elem, index) => {
        return (
          <div key={index}>
            <span>
              {elem.name} - {elem.ammount}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
