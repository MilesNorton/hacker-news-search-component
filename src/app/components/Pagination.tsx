import * as React from "react";
// import RcPagination from "rc-pagination";
import { CustomPagination } from "@components";

interface IProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

export const Pagination: React.FunctionComponent<IProps> = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => (
  <CustomPagination>
    {currentPage > 1 && <a onClick={() => handlePageChange(1)}>{"<<"}</a>}
    {currentPage > 1 && (
      <a onClick={() => handlePageChange(currentPage - 1)}>{"<"}</a>
    )}

    {currentPage > 2 && (
      <a onClick={() => handlePageChange(currentPage - 1)}>{currentPage - 1}</a>
    )}
    <a className="selected">{currentPage}</a>
    {totalPages !== currentPage && (
      <a onClick={() => handlePageChange(currentPage + 1)}>{currentPage + 1}</a>
    )}

    {totalPages !== currentPage && (
      <a onClick={() => handlePageChange(currentPage + 1)}>{">"}</a>
    )}
    {totalPages !== currentPage && (
      <a onClick={() => handlePageChange(totalPages)}>{">>"}</a>
    )}
  </CustomPagination>
);
