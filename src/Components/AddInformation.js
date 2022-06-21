import { useRef } from "react";
import "./AddInformation.css";
const AddInformation = (props) => {
  const nameRef = useRef("");
  const ammountRef = useRef(0);
  const dayRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputType = document.getElementById("inputType").value;
    if (dayRef.current.value === "") {
      dayRef.current.value = new Date().getDate();
      console.log(dayRef.current.value);
    }
    if (dayRef.current.value.length === 1) {
      dayRef.current.value = 0 + dayRef.current.value;
    }

    const result = {
      name: nameRef.current.value,
      ammount: parseFloat(ammountRef.current.value),
      day: dayRef.current.value,
    };
    nameRef.current.value = "";
    ammountRef.current.value = "";
    dayRef.current.value = "";
    props.addValue(result, inputType);
  };

  return (
    <div>
      <h3>Add Recurring transactions</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="container">
          <div className="row">
            <label htmlFor="name">name</label>
            <input type="text" id="name" ref={nameRef} required></input>
          </div>
          <div className="row">
            <label htmlFor="ammount">ammount</label>
            <input type="text" id="ammount" ref={ammountRef} required></input>
          </div>
          <div className="row">
            <label htmlFor="day">day of the month</label>
            <input type="text" id="ammount" ref={dayRef}></input>
          </div>
          <div>
            <select id="inputType">
              <option value="expense">expense</option>
              <option value="income">income</option>
            </select>
          </div>
        </div>
        <button type="submit"> submit</button>
      </form>
    </div>
  );
};

export default AddInformation;
