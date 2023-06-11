// import React from "react";

// function TaskList() {
//   return (
//     <div className="tasks">
//       {/* display a list of tasks using Task component */}
//     </div>
//   );
// }

// export default TaskList;



// TaskList.js
// import React from "react";
// import Task from "./Task";

// function TaskList({ tasks, onTaskDelete }) {
//   return (
//     <div className="tasks">
//       {tasks.map((task) => (
//         <Task key={task.id} task={task} onTaskDelete={onTaskDelete} />
//       ))}
//     </div>
//   );
// }

// export default TaskList;

import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">
      {tasks.map(task => 
        <Task key={task.id} task={task} onDelete={onDelete} />
      )}
    </div>
  );
}

export default TaskList;
