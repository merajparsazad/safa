import { useState } from "react";
import { TbSearch } from "react-icons/tb";

function SearchBar() {
  const [query, setQuery] = useState("");

  function handleSearch() {
    if (!query.trim()) return;

    // ADD SEARCH FUNCTION
  }

  function handleKeyDown(e) {
    if (!query.trim()) return;

    e.key === "Enter" && handleSearch();
  }

  return (
    <div className="relative flex-grow">
      <div
        className="absolute inset-y-0 start-0 flex items-center ps-3"
        onClick={handleSearch}
      >
        <TbSearch className="h-5 w-5 cursor-pointer text-gray-300 duration-200 hover:text-gray-500" />
      </div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full rounded-md border-2 border-gray-300 bg-white p-2.5 ps-10 text-sm text-gray-600 duration-200 focus:border-blue-500 focus:ring-blue-500 focus:outline-0"
        placeholder="جستجوی خدمات، کسب‌وکار، یا نام پزشک..."
        required
      />
    </div>
  );
}

export default SearchBar;
