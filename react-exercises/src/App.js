import React from "react";
import TodoList from "./components/TodoList";

function App() {
  const renderList = (items, remove) => {
    return items.map((item, index) => { return (<li key={index} index={index}>{item} <button onClick={() => remove(index)}>Delete</button></li>) })
  }
  
  return (
    <>
      <TodoList render={renderList} />
    </>
  );
}

export default App;
