import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-1 rounded-md border border-gray-100 bg-white p-1 shadow-sm">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleClick(option.value)}
          className={`cursor-pointer rounded-md border-none px-2 py-1.5 text-sm font-medium transition-all duration-300 hover:bg-blue-600 hover:text-blue-50 disabled:cursor-not-allowed ${
            option.value === currentFilter
              ? "bg-blue-600 text-gray-50"
              : "bg-white"
          }`}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
