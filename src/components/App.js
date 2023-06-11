// import React from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

// function App() {
//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter />
//       <NewTaskForm />
//       <TaskList />
//     </div>
//   );
// }

// export default App;



// import React, { useState } from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

// function App() {
//   const [tasks, setTasks] = useState(TASKS);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const handleTaskDelete = (taskId) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };
  

//   const handleTaskFormSubmit = (newTask) => {
//     setTasks([...tasks, newTask]);
//   };

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//   };

//   const filteredTasks = selectedCategory === "All" ? tasks : tasks.filter((task) => task.category === selectedCategory);

//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter categories={CATEGORIES} onCategorySelect={handleCategorySelect} />
//       <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
//       <TaskList tasks={filteredTasks} onTaskDelete={handleTaskDelete} />
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState(TASKS.map(task => ({ ...task, id: uuidv4() })));
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleAddTask = (task) => {
    setTasks([...tasks, {...task, id: uuidv4()}]);
  };

  const filteredTasks = selectedCategory === 'All' 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategorySelect={setSelectedCategory} selectedCategory={selectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
