import useSWR from "swr";
import ItemSearch from "./ItemSearch";

import { getWikiSearchResults } from "../api/wikiApi";

const ListSearch = ({ searchTerm }) => {
  const { isLoading, error, data } = useSWR(
    searchTerm ? searchTerm : null,
    getWikiSearchResults
  );

  let content;
  if (isLoading) content = <p>Loading...</p>;
  else if (error) content = <p>{error.message}</p>;
  else if (data?.query?.pages) {
    const results = data?.query?.pages;
    content = (
      <ul>
        {Object.values(results).map((result) => {
          return <ItemSearch key={result.pageid} result={result} />;
        })}
      </ul>
    );
  }

  return content;
};
export default ListSearch;
