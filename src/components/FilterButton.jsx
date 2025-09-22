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
            <span
              className="action-button edit"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(id);
              }}
              role="button"
              tabIndex={0}
              aria-label="Edit project"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  e.stopPropagation();
                  onEdit(id);
                }
              }}
            >
              <span className="material-icons-rounded">edit</span>
            </span>
            <span
              className="action-button delete"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(id);
              }}
              role="button"
              tabIndex={0}
              aria-label="Delete project"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  e.stopPropagation();
                  onDelete(id);
                }
              }}
            >
              <span className="material-icons-rounded">delete</span>
            </span>
          </div>
        )}
      </button>
    </>
  );
};

export default FilterButton;
