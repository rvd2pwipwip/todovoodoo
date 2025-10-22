import { useState } from "react";
import todoData from "../todoDB.json";
import TaskCard from "./components/TaskCard";
import FilterButton from "./components/FilterButton";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [tasks] = useState(todoData.projects[0].tasks);

  return (
    <>
      <header id="app-header">
        <i className="material-icons-rounded">inventory</i>Todo Voodoo
      </header>
      <div className="content">
        <nav className="sidebar" role="tablist">
          <FilterButton
            id="all"
            icon="inbox"
            label="All tasks"
            isActive={activeFilter === "all"}
            onClick={() => setActiveFilter("all")}
          />
          <FilterButton
            id="today"
            icon="today"
            label="Today"
            isActive={activeFilter === "today"}
            onClick={() => setActiveFilter("today")}
          />
          <FilterButton
            id="7days"
            icon="date_range"
            label="7 days"
            isActive={activeFilter === "7days"}
            onClick={() => setActiveFilter("7days")}
          />
          <FilterButton
            id="project"
            icon="domain_verification"
            label="Project"
            type="project"
            isActive={false}
            onClick={() => {}}
            onEdit={() => {}}
            onDelete={() => {}}
          />
        </nav>
        <main className="main-content">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              dueDate={task.dueDate}
              priority={task.priority}
              done={task.done}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
