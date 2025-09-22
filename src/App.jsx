import TaskCard from "./components/TaskCard";
import FilterButton from "./components/FilterButton";

function App() {
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
            isActive={true}
            onClick={() => {}}
          />
          <FilterButton
            id="today"
            icon="today"
            label="Today"
            isActive={false}
            onClick={() => {}}
          />
          <FilterButton
            id="7days"
            icon="date_range"
            label="7 days"
            isActive={false}
            onClick={() => {}}
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
          <TaskCard
            id="1"
            title="Task 1"
            dueDate="2025-01-01"
            priority="High"
            done={true}
          />
          <TaskCard
            id="2"
            title="Task 2"
            dueDate="2025-01-02"
            priority="Medium"
            done={false}
          />
          <TaskCard
            id="3"
            title="Task 3"
            dueDate="2025-01-03"
            priority="Low"
            done={false}
          />
        </main>
      </div>
    </>
  );
}

export default App;
