import * as React from "react";
import {
  Pagination as PaginationSemantic,
  PaginationProps,
} from "semantic-ui-react";

interface IProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (
    event: React.MouseEvent<HTMLAnchorElement>,
    data: PaginationProps
  ) => void;
}

export const Pagination: React.FunctionComponent<IProps> = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => (
  <PaginationSemantic
    ellipsisItem={null}
    firstItem={null}
    lastItem={null}
    siblingRange={1}
    boundaryRange={0}
    activePage={currentPage}
    totalPages={totalPages}
    onPageChange={handlePageChange}
  />
);
