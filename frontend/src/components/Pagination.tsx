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
    <div className="flex justify-center items-center gap-2">
      <button
        onClick={prevPage}
        className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg"
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
                  "border border-gray-300   py-2 px-3 leading-tight  hover:bg-gray-100 hover:text-gray-700 ",
                  {
                    "bg-gray-400 text-gray-700": isActive,
                    "bg-white text-gray-500": !isActive,
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
        className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg"
      >
        Next
      </button>
    </div>
  );
};
