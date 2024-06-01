import React from "react";
import { useState } from "react";

function MultiInput() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      Multiple Input
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
      </form>
    </div>
  );
}

export default MultiInput;
