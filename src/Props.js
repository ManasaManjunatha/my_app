import React from 'react'
function Welcom(Props) {
  return(
    <div>
      <h1> welcome {Props.name}</h1>
    </div>
  )
}


function Props() {
  return (
    <div><Welcom name='akshu'/></div>
  )
}

export default Props
//rfce