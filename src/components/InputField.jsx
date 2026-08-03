function InputField({ label, id, type = "text", value, onChange, placeholder, className = "", ...props }) {
  const baseClasses =
    "w-full rounded border px-3 py-2 bg-white border-gray-300 text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="space-y-1">
      {label ? (
        <label htmlFor={id} className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}
        </label>
      ) : null}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={[baseClasses, className].filter(Boolean).join(" ")}
        {...props}
      />
    </div>
  );
}

export default InputField;
