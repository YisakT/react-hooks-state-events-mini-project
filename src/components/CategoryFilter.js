// import React from "react";

// function CategoryFilter() {
//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {/* render <button> elements for each category here */}
//     </div>
//   );
// }

// export default CategoryFilter;





// CategoryFilter.js
// import React, { useState } from "react";

// function CategoryFilter({ categories, onCategorySelect }) {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     onCategorySelect(category);
//   };

//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {categories.map((category) => (
//         <button
//           key={category}
//           onClick={() => handleCategoryClick(category)}
//           className={selectedCategory === category ? "selected" : ""}
//         >
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default CategoryFilter;

import React from "react";

function CategoryFilter({ categories, onCategorySelect, selectedCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) =>
        <button 
          key={category} 
          className={selectedCategory === category ? 'selected' : ''}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      )}
    </div>
  );
}

export default CategoryFilter;
