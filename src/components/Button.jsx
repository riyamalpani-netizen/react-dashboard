function Button({ children, variant = "primary", className = "", type = "button", ...props }) {
  const baseClasses =
    "rounded font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

  const variantClasses = {
    primary:
      "px-4 py-2 bg-blue-500 text-white hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500",
    secondary:
      "px-4 py-2 bg-gray-200 text-slate-900 hover:bg-gray-300 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600",
    danger:
      "px-3 py-1 text-sm bg-red-500 text-white hover:bg-red-400 dark:bg-red-600 dark:hover:bg-red-500",
  };

  return (
    <button
      type={type}
      className={[baseClasses, variantClasses[variant], className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
