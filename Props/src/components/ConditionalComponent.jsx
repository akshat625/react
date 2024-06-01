import React from "react";

function ConditionalComponent() {
  let message;
  const display = true;
//comment
  /*
  if (display) message = <h2>Display True</h2>;
  else message = <h2>Display False</h2>;
  return message;
  */

  return display ? <h2>Display True</h2> : <h2>Display False</h2>;
}

export default ConditionalComponent;
