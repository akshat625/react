

import "bootstrap/dist/css/bootstrap.min.css";
// import React from "react";
import "./App.css";

function App() {
  let tools = ["Linux", "AWS", "Docker", "jenkins", "Kubernetes", "Ansible"];
  // let tools = [];

  return (
    /*
    // <React.Fragment>
    <>
      <h1>DevOps Tools</h1>
      <ul className="list-group lead">
        <li className="list-group-item">Linux</li>
        <li className="list-group-item">AWS</li>
        <li className="list-group-item">Docker</li>
        <li className="list-group-item">Kubernetes</li>
        <li className="list-group-item">Jenkins</li>
      </ul>
    </>
    // </React.Fragment>
*/

    /*
Inline Rendering: DIrectly inside JSX
    {items.map(item => <li key={item.id}>{item.name}</li>)}
Key Prop: Assign unique key for optimized re-renders
    <div key={item.id}>{item.name}</div>

    This is the alternate of loops
*/

    /* <>
      <h1>DevOps Tools</h1>
      <ul className="list-group lead">
        {tools.map((item) => (                      
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
*/

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /**
 Conditional Rendering: Displaying content based on certain conditions.Allows for dynamic user interfaces.
 use ternary operatiors  
 */
    <>
      <h1>DevOps Tools</h1>
      {/* using ternary operator */}
      {/* {tools.length == 0 ? <h3>No DevOps tools listed.</h3> : null}   */}
      {/* using logical  operator */}
      {tools.length === 0 && <h3>No DevOps tools listed.</h3>}
      <ul className="list-group lead">
        {tools.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
