import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("Pass the tests");
  const [selectedCategory, setSelectedCategory] = useState("Code");
  function updateTaskText(event) {
    setTaskText(event.target.value);
  }
  function updateSelectedCategory(event) {
    setSelectedCategory(event.target.value);
  }
  return (
    <form
      className="new-task-form"
      onSubmit={(event) => {
        event.preventDefault();
        onTaskFormSubmit({ category: selectedCategory, text: taskText });
      }}
    >
      <label>
        Details
        <input type="text" name="text" onChange={updateTaskText} />
      </label>
      <label>
        Category
        <select name="category" onChange={updateSelectedCategory}>
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
