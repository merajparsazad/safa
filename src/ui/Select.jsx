function Select({ options, value, onChange, type = "default", ...props }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`rounded-md bg-white px-4 py-2.5 text-sm font-medium shadow-sm outline-none ${
        type === "white" ? "border border-gray-100" : "border border-gray-300"
      }`}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
