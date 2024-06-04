import React, { useState } from "react";
import styles from "./App.module.css";
import Input from "./components/Input";
import Buttons from "./components/Buttons";



function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText==='C')
      setCalVal("")
    else if(buttonText==='=')
      setCalVal(eval(calVal))
    else if(buttonText==='←')
      setCalVal(calVal.slice(0, -1));
    else
    setCalVal(calVal+buttonText)
  };

  return (
    <div className={styles.calculator}>
      <Input displayValue={calVal}></Input>
      <Buttons onButtonClick={onButtonClick}></Buttons>
    </div>
  );
}

export default App;
