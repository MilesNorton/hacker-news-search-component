import * as React from "react";

import { connect } from "react-redux";
import { useState, useEffect } from "react";

import { RootState, buildQuery } from "@utils";
import { triggerDataFetch } from "@actions";
import {
  Pagination,
  FailedResult,
  SearchResult,
  Divider,
  Container,
  Segments,
} from "@components";
const MAX_PER_PAGE = 5; // can add a variable for changing the per page view value
const QUERY_URL = "https://hn.algolia.com/api/v1/search?";

const mapStateToProps = ({ SearchResult }: RootState) => {
  console.log(SearchResult);
  return {
    results: SearchResult.results,
    activePage: SearchResult.results ? SearchResult.results.page + 1 : 1,
    queriedTotalPages: SearchResult.results
      ? SearchResult.results.nbPages - 1
      : 1,
  };
};

const mapDispatchToProps = {
  triggerDataFetch: triggerDataFetch.request,
};

type IProps = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>;

function SearchClientView(props: IProps): JSX.Element {
  const {
    searchTerm,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearchChange,
  } = useStateChange(props);

  return (
    <>
      <Divider />
      <input
        // fluid
        onChange={handleSearchChange}
        // icon={<Icon name="search" inverted circular link />}
        placeholder="Search..."
      />
      <Divider />
      <Segments>
        {queriedResults(searchTerm, SearchResult, {
          results: props.results,
        })}
      </Segments>
      <Divider />
      <Container>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </Container>
      <Divider />
    </>
  );
}
function useStateChange(props: IProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage: number): void => {
    setCurrentPage(newPage); //reset current page on each search

    props.triggerDataFetch({
      url: buildQuery(
        QUERY_URL,
        [
          ["query", searchTerm],
          ["hitsPerPage", MAX_PER_PAGE.toString()],
          ["page", (newPage - 1).toString()],
        ],
        "=",
        "&"
      ),
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); //update search term text as the user is typing
    setCurrentPage(1); //reset current page on each search

    props.triggerDataFetch({
      url: buildQuery(
        QUERY_URL,
        [
          ["query", searchTerm],
          ["hitsPerPage", MAX_PER_PAGE.toString()],
          ["page", (currentPage - 1).toString()],
        ],
        "=",
        "&"
      ),
    });
  };

  useEffect(() => {
    setTotalPages(props.queriedTotalPages);
    return () => setTotalPages(1);
  }, [props]);

  return {
    searchTerm,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearchChange,
  };
}

const queriedResults = (
  searchTerm: string,
  SuccessComponent: typeof SearchResult,
  propsOnlyResults: Pick<IProps, "results">
): JSX.Element | JSX.Element[] => {
  if (searchTerm === "") {
    return <FailedResult errorString="Please search something." />;
  }

  return (
    <>
      {propsOnlyResults?.results?.hits?.length! > 0 ? (
        propsOnlyResults.results?.hits.map((hit, index) => (
          <SuccessComponent hit={hit} id={index} key={index} />
        ))
      ) : (
        <FailedResult errorString="No Results. Please try again." />
      )}
    </>
  );
};

// connect the store
export const SearchClient = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchClientView);
