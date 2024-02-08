import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to GYM",
      description: "Go to jim from 7-9",
      completed: false,
    },
    {
      title: "study DSA",
      description: "Go to study dsa from 9-11",
      completed: true,
    },
    {
      title: "Play With friends",
      description: "Valorant after 11 till 3",
      completed: true,
    },
  ]);

  function AddTodo() {
    // [1,2]
    // [...todos, 3] => [1,2,3]
    setTodos([
      ...todos,
      {
        title: "New random todo",
        description: "New random todo desc",
      },
    ]);
  }
  return (
    <div>
      <button onClick={AddTodo}>Add a random todo</button>
      {/* <Todo title={todos[0].title} description={todos[0].description}></Todo>
      <Todo title={todos[1].title} description={todos[1].description}></Todo> */}
      {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description}></Todo>;
      })}
    </div>
  );
}

// component
// function CustomButton(props) {
//   function onClickHandler() {
//     props.setCount(propscount + 1);
//   }
//   return <button onClick={onClickHandler}>Counter {props.count}</button>;
// }

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
    </div>
  );
}

export default App;
