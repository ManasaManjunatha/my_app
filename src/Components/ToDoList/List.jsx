import React, { useState } from 'react'
import Form from './Form';
function List() {
  const [toDos, setToDos] = useState([])
  const addToDo = (toDo) => {
    console.log(toDo);
    const toDosCopy = [...toDos]
    toDosCopy.push(toDo)
    setToDos(toDosCopy);
    console.log(toDos);
  }
  //...means splits n makes array
  const markAsCompleted = (name) => {
    const idx = toDos.findIndex(todo => todo.name === name)
    //=== means
    const toDosCopy = [...toDos];
    toDosCopy[idx].completed = !toDosCopy[idx].completed;
    setToDos(toDosCopy);
  }


  return (
    <div>
      <div>
        {
          toDos.map((toDo) => {
            return <p key={toDo.name} onClick={() => markAsCompleted(toDo.name)} className={toDo.completed ? "strike" : ""}>{toDo.name}</p>;
          })
        }
      </div>

      <Form addToDoCallBack={addToDo} /><h3>fruits names</h3>
      <ol>
        <li>mango</li>
        <li>banana</li>
        <li>orange</li>
      </ol>


    </div>
  )
}

export default List