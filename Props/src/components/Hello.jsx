/*
import React from 'react'

function Hello(props) {
  return (
    <div>
     <h1>Hello {props.name}</h1>  
    </div>
  )
}

export default Hello
*/

//...........................................................................................................
/*
import React from 'react'

function Hello(props) {
  return (
    <div>
     <h1>{props.message} {props.name}</h1>  
    </div>
  )
}

export default Hello
*/

//...........................................................................................................

//Destructing Props
/*
import React from 'react'

function Hello(props) {

    const {name,message} = props        //Destructuring
  return (
    <div>
      <h1>{message} {name}</h1> 
    </div>
  )
}

export default Hello
*/

//...........................................................................................................

import React from 'react'

function Hello({name,message}) {        //Destructuring 

       
  return (
    <div>
      <h1>{message} {name}</h1> 
    </div>
    
  )
}

export default Hello

