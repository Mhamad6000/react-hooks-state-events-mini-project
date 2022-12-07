import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasksList, setTasksList] = useState(TASKS);
  const [filterdList, setFilterdList] = useState(tasksList);
  function filterTheList(event) {
    if (event.target.value === "All") {
      setFilterdList(tasksList);
    } else {
      setFilterdList(
        tasksList.filter((onetask) => onetask.category === event.target.value)
      );
    }
    event.target.parentNode.childNodes.forEach((element) => {
      element.classList.remove("selected");
    });
    event.target.classList.add("selected");
  }
  function onTaskFormSubmit(object) {
    if (filterdList !== undefined) {
      filterdList.length > 1
        ? setFilterdList([...filterdList, object])
        : setFilterdList([...filterdList, object]);
      setTasksList([...filterdList, object]);
    }
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterTheList={filterTheList} />
      <NewTaskForm
        tasksList={tasksList}
        setTasksList={setTasksList}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filterdList} setTasksList={setFilterdList} />
    </div>
  );
}

export default App;
