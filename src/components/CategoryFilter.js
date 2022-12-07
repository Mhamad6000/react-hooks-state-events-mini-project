import React from "react";

function CategoryFilter({ categories, filterTheList }) {
  function addSelected(event) {
    event.target.classList.add("selected");
    filterTheList(event.target.value);
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories !== undefined &&
        categories.map((category) => {
          return (
            <button key={category} value={category} onClick={filterTheList}>
              {category !== null ? category : "nop"}
            </button>
          );
        })}
    </div>
  );
}

export default CategoryFilter;
