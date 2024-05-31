import React from 'react'

export default function Fruits() {

const fruits=[
    {name:"Apple", emoji:"🍎"},
    {name:"Banana", emoji:"🍌"},
    {name:"Mango", emoji:"🥭"},
    {name:"Orange", emoji:"🍊"},
    {name:"Grape", emoji:"🍇"}
];

  return (
    <div>
      <ul>
    {fruits.map((fruit)=> (
        <li key={fruit.name}>{fruit.name} {fruit.emoji}</li>
    ))}

      </ul>
    </div>
  )
}
