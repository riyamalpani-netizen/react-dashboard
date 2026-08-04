function InputField({ label, id, type = "text", value, onChange, placeholder, className = "", ...props }) {
  return (
    <div className="input-field">
      {label ? (
        <label htmlFor={id} className="input-label">
          {label}
        </label>
      ) : null}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={["input-input", className].filter(Boolean).join(" ")}
        {...props}
      />
    </div>
  );
}

export default InputField;
