import React from "react";

function Task({ task, removeTask }) {
  return (
    <div className="task">
      <div className="label">
        {task !== undefined ? task.category : "text!"}
      </div>
      <div className="text">{task !== undefined ? task.text : "category!"}</div>
      <button className="delete" onClick={() => removeTask(task)}>
        X
      </button>
    </div>
  );
}

export default Task;
