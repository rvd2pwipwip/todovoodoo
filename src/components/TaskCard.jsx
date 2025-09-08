const TaskCard = ({ title, dueDate, priority, done }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{dueDate}</p>
      <p>{priority}</p>
      <p>{done ? "Completed" : "Pending"}</p>
    </div>
  );
};

export default TaskCard;
