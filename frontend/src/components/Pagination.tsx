import React from "react";
import classNames from "classnames";

interface PaginationProps {
  total_page: number;
  current_page: number;
  changePage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  total_page,
  current_page,
  changePage,
  nextPage,
  prevPage,
}) => {
  return (
    <div className="flex justify-center items-center gap-2 my-5">
      <button
        onClick={prevPage}
        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-[#D8EBFE]"
      >
        Previous
      </button>
      {Array(total_page)
        .fill(0)
        .map((_, index) => {
          const pageNumber = index + 1;
          const isActive = current_page === pageNumber;
          return (
            <div key={index}>
              <button
                onClick={() => changePage(pageNumber)}
                className={classNames(
                  "py-2 px-4 leading-tight  hover:bg-[#D8EBFE] hover:text-gray-700 rounded-lg",
                  {
                    "bg-[#D8EBFE] text-gray-700": isActive,
                    "bg-gray-200 text-gray-800": !isActive,
                  }
                )}
              >
                {pageNumber}
              </button>
            </div>
          );
        })}
      <button
        onClick={nextPage}
        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-[#D8EBFE]"
      >
        Next
      </button>
    </div>
  );
};
