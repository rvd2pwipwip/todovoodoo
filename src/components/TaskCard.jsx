import "./TaskCard.css";

const TaskCard = ({ id, title, dueDate, priority, done }) => {
  return (
    <div key={id} className={`task-card priority-${priority.toLowerCase()}`}>
      <div className="title-container">
        <label htmlFor={id} className={done ? "done" : ""}>
          <span className="material-icons-rounded">
            {done ? "check_circle" : "radio_button_unchecked"}
          </span>
          <span className="task-title">{title}</span>
        </label>
      </div>
      <span className="info material-icons-rounded">info_outline</span>
      <p>{dueDate}</p>
      <span className="delete material-icons-rounded">delete_outline</span>
    </div>
  );
};

export default TaskCard;
