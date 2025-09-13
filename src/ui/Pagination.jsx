import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex w-full items-center justify-between text-base">
      <p className="ms-3">
        نمایش{" "}
        <span className="font-semibold">
          {(currentPage - 1) * PAGE_SIZE + 1}{" "}
        </span>
        تا{" "}
        <span className="font-semibold">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}{" "}
        </span>
        از <span className="font-semibold">{count}</span> نتیجه
      </p>

      <div className="flex gap-3">
        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className={`flex cursor-pointer items-center justify-center gap-1.5 rounded-md px-3 py-1.5 font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${
            currentPage === pageCount
              ? "bg-gray-50"
              : "bg-blue-600 text-blue-50 hover:bg-blue-700"
          }`}
        >
          <TbChevronRight className="h-5 w-5" />
          <span>بعدی</span>
        </button>

        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`flex cursor-pointer items-center justify-center gap-1.5 rounded-md px-3 py-1.5 font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${
            currentPage === 1
              ? "bg-gray-50"
              : "bg-blue-600 text-blue-50 hover:bg-blue-700"
          }`}
        >
          <span>قبلی</span>
          <TbChevronLeft className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
