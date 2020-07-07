import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { useRouter } from "next/router";

import api from "@/src/api";

import Filter from "./Filter";
import { Search, Close } from "@material-ui/icons";

const SearchBar = () => {
  const Router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);

  const { questions } = api();

  const handleSearch = async (event) => {
    // Make query search
    try {
      if (event.key && event.key != "Enter") throw new Error();

      if (searchQuery !== "") {
        const res = await questions.search(searchQuery);
        if (res.status == 200) {
          setResults(res.data.questions);
          // Display answers
          setShowResults(true);
        }
      }
    } catch (error) {}
  };

  const handleResultClick = (result) => {
    Router.push(`/question/${result.id}`);
  };

  return (
    <Container>
      <SearchIcon onClick={(e) => handleSearch(e)} />
      <QueryTextField
        onKeyPress={handleSearch}
        aria-label="SearchQuery"
        name="SearchQuery"
        type="SearchQuery"
        placeholder="Buscar una pregunta..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Filter />
      {showResults && (
        <ResultsDropdown>
          <CloseIcon onClick={() => setShowResults(false)} />
          {results.map((result) => {
            return (
              <Result key={result.id} onClick={() => handleResultClick(result)}>
                {result.title}
              </Result>
            );
          })}
        </ResultsDropdown>
      )}
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  ${tw`relative w-4/5 rounded-md h-12 p-6 my-4 md:my-6 border-solid border border-gray-300 flex justify-end items-center`}
  max-width: 80%;
`;

// const Filter = styled.div`
//   ${tw`relative inline-block text-left m-4 text-pink-500`}
// `;

const QueryTextField = styled.input`
  ${tw`w-full`};
`;

const SearchIcon = styled(Search)`
  ${tw`cursor-pointer m-4`};
  color: ${(props) => props.theme.colors.pinkCyclamen.normal};
`;

const CloseIcon = styled(Close)`
  ${tw`cursor-pointer absolute z-10`};
  top: 10px;
  right: 10px;
  color: ${(props) => props.theme.colors.pinkCyclamen.normal};
`;

const ResultsDropdown = styled.div`
  ${tw`absolute shadow-md w-full bg-white flex flex-col items-center rounded-b-md border-solid border border-gray-300`};
  min-height: 5rem;
  top: 47px;
  right: 0;
  left: 0;
  /* box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); */
`;

const Result = styled.div`
  ${tw`w-full p-6 bg-white cursor-pointer`};

  :hover {
    filter: brightness(96%);
  }
`;
