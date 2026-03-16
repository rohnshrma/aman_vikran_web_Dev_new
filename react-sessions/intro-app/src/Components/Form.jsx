import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("default text");

  const changeHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h2>{name}</h2>
      <form>
        <div className="form-group">
          <input
            onChange={changeHandler}
            type="text"
            name=""
            id=""
            className="form-control"
          />
        </div>
        <button className="btn btn-dark">SUBMIT</button>
      </form>
    </div>
  );
};

export default Form;
