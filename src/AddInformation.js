import { useRef } from "react";

const AddInformation = (props) => {
  const nameRef = useRef("");
  const ammountRef = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputType = document.getElementById("inputType").value;
    const result = {
      name: nameRef.current.value,
      ammount: parseFloat(ammountRef.current.value),
    };
    nameRef.current.value = "";
    ammountRef.current.value = "";
    props.addValue(result, inputType);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name">name</label>
      <input type="text" id="name" ref={nameRef} required></input>
      <label htmlFor="ammount">ammount</label>
      <input type="text" id="ammount" ref={ammountRef} required></input>
      <select id="inputType">
        <option value="income">income</option>
        <option value="expense">expense</option>
      </select>
      <button type="submit"> submit</button>
    </form>
  );
};

export default AddInformation;
