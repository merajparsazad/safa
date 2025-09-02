function Form({ type = "regular", children, ...props }) {
  return (
    <form
      {...props}
      className={`overflow-hidden text-xl ${type === "regular" ? "rounded-xl border border-gray-100 bg-white px-14 py-9" : ""} ${type === "modal" ? "w-[80rem]" : ""} `}
    >
      {children}
    </form>
  );
}

export default Form;
