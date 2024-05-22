import "bootstrap/dist/css/bootstrap.min.css";
// import React from "react";
import "./App.css";

function App() {
  let tools = ["Linux", "AWS", "Docker","jenkins","Kubernetes","Ansible"];

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


    <>
      <h1>DevOps Tools</h1>
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
