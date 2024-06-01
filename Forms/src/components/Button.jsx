import React from "react";
import { useState } from "react";

function Button() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function handleSubmit(e){
      e.preventDefault();       //Prevents default behaviour of the react of page refreshing
      console.log(name);        //prints the name
  }

  return (
    <div>
      Submit
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <br />
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />
        <br />
        <button onClick={(e)=>handleSubmit(e)}>Add</button>
      </form>
      
      <br />
      <br />
      <br />
    </div>
  );
}

export default Button;
