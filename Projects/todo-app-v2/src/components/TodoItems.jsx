import React from "react";
import AddItem from "./AddItem";

function TodoItems({ todoItems }) {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <AddItem todoDate={item.date} todoName={item.name}></AddItem>
      ))}
    </div>
  );
}

export default TodoItems;
