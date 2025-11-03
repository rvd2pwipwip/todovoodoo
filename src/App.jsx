import { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard";
import FilterButton from "./components/FilterButton";
import Button from "./components/Button";
import { getTodayDateFormatted, getWeekDateRange } from "./utils/dateUtils.js";
import {
  loadProjectsFromLocalStorage,
  saveProjectsToLocalStorage,
} from "./services/projectManager.js";

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        // When the app first mounts, check localStorage.
        const storedProjects = loadProjectsFromLocalStorage();
        // If there's data, use it.
        if (storedProjects) {
          setProjects(storedProjects);
          // If not, use the JSON file and save it to localStorage.
        } else {
          const response = await fetch("todoDB.json");
          if (!response.ok) {
            throw new Error(
              "Network response was not ok " + response.statusText
            );
          }
          const data = await response.json();
          console.log("Fetched data:", data);
          saveProjectsToLocalStorage(data); // Save fetched data to LocalStorage
          console.log("Called saveProjectsToLocalStorage");
          setProjects(data.projects);
        }
      } catch (error) {
        console.error(error);
      }
    }
    loadData();
  }, []);

  const tasks = projects.flatMap((project) => project.tasks);
  let filteredTasks = [];

  if (activeFilter === "All") {
    filteredTasks = tasks;
  } else if (activeFilter === "Today") {
    filteredTasks = tasks.filter((t) => t.dueDate === getTodayDateFormatted());
  } else if (activeFilter === "7 days") {
    const { start, end } = getWeekDateRange();
    filteredTasks = tasks.filter((t) => t.dueDate >= start && t.dueDate <= end);
  } else {
    const project = projects.find((p) => p.id === activeFilter);
    if (project) {
      filteredTasks = [...project.tasks];
    }
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
            isActive={activeFilter === "All"}
            onClick={() => setActiveFilter("All")}
          />
          <FilterButton
            id="today"
            icon="today"
            label="Today"
            isActive={activeFilter === "Today"}
            onClick={() => setActiveFilter("Today")}
          />
          <FilterButton
            id="7days"
            icon="date_range"
            label="7 days"
            isActive={activeFilter === "7 days"}
            onClick={() => setActiveFilter("7 days")}
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
          <h1 id="main-header">{activeFilter}</h1>
          <Button id="create-pill" startIcon="add">
            Add Task
          </Button>
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
