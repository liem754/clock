import ListSearch from "../componets/List";
import { useState } from "react";
import SearchInput from "../componets/SearchInput";
import useDebounce from "../hooks/useDoube";

function Search() {
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchValue = useDebounce(searchValue, 1000);

  return (
    <div className="bg-white">
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="absolute"></div>
      <ListSearch searchTerm={debouncedSearchValue} />
    </div>
  );
}

export default Search;
