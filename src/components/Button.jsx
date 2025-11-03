import "./Button.css";

const Button = ({
  id = "pill",
  variant = "primary",
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  iconOnly,
  onClick,
  children,
  type = "button",
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      type={type}
      data-variant={variant}
      data-full-width={fullWidth}
      data-end-icon={endIcon ? true : undefined}
      data-start-icon={startIcon ? true : undefined}
      data-icon-only={iconOnly ? true : undefined}
      data-disabled={disabled ? true : undefined}
    >
      {startIcon && <span className="material-icons-rounded">{startIcon}</span>}
      {!iconOnly && <span>{children}</span>}
      {endIcon && <span className="material-icons-rounded">{endIcon}</span>}
    </button>
  );
};

export default Button;
