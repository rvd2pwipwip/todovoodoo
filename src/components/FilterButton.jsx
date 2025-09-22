import "./FilterButton.css";

const FilterButton = ({
  id,
  icon,
  label,
  isActive,
  onClick,
  type = "filter",
  onEdit,
  onDelete,
}) => {
  return (
    <>
      <button
        id={id}
        //   className={`filter-button ${isActive ? "active" : ""}`}  not needed because we are using aria-selected
        onClick={onClick}
        role="tab"
        aria-selected={isActive}
        aria-controls={id}
      >
        <span className="material-icons-rounded">{icon}</span>
        <span>{label}</span>
        {type === "project" && (
          <div className="project-actions">
            <button
              className="action-button edit"
              onClick={onEdit}
              aria-label="Edit project"
            >
              <span className="material-icons-rounded">edit</span>
            </button>
            <button
              className="action-button delete"
              onClick={onDelete}
              aria-label="Delete project"
            >
              <span className="material-icons-rounded">delete</span>
            </button>
          </div>
        )}
      </button>
    </>
  );
};

export default FilterButton;
