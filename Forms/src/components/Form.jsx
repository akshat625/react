// import React from "react";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  return (
    <div>
      Single Input
      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
      </form>
      <br /><br /><br />
    </div>
  );
}

export default Form;
