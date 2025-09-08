import TaskCard from "./components/TaskCard";

function App() {
  return (
    <>
      <h1>TODO VOODOO</h1>
      <TaskCard
        title="Task 1"
        dueDate="2025-01-01"
        priority="High"
        done={false}
      />
      <TaskCard
        title="Task 2"
        dueDate="2025-01-02"
        priority="Medium"
        done={false}
      />
      <TaskCard
        title="Task 3"
        dueDate="2025-01-03"
        priority="Low"
        done={false}
      />
    </>
  );
}

export default App;
