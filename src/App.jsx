import { useState } from "react";
import todoData from "../todoDB.json";
import TaskCard from "./components/TaskCard";
import FilterButton from "./components/FilterButton";
import { getTodayDateFormatted, getWeekDateRange } from "./utils/dateUtils.js";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [projects] = useState(todoData.projects);
  const [tasks] = useState(todoData.projects[0].tasks);

  let filteredTasks = [];

  if (activeFilter === "all") {
    filteredTasks = tasks;
  }

  if (activeFilter === "today") {
    filteredTasks = tasks.filter((t) => t.dueDate === getTodayDateFormatted());
  }

  if (activeFilter === "7days") {
    const { start, end } = getWeekDateRange();
    filteredTasks = tasks.filter((t) => t.dueDate >= start && t.dueDate <= end);
  }

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

          {projects.map(
            (project) =>
              project.name !== "Unassigned" && (
                <FilterButton
                  id={project.id}
                  key={project.id}
                  icon="domain_verification"
                  label={project.name}
                  type="project"
                  isActive={activeFilter === project.id}
                  onClick={() => {
                    setActiveFilter(`${project.id}`);
                  }}
                  onEdit={() => {}}
                  onDelete={() => {}}
                />
              )
          )}
        </nav>
        <main className="main-content">
          {filteredTasks.map((task) => (
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
