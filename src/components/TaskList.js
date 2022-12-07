import React, { useState } from "react";
import Task from "./Task.js";
function TaskList({ tasks, setTasksList }) {
  function removeTask(taskToRemove) {
    setTasksList(tasks.filter((task) => task.text !== taskToRemove.text));
  }
  return (
    <div className="tasks">
      {tasks !== undefined &&
        tasks.map((task) => {
          return <Task task={task} key={task.text} removeTask={removeTask} />;
        })}
    </div>
  );
}

export default TaskList;
