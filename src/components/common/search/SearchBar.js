import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import api from "@/src/api";

import { Search, Close } from "@material-ui/icons";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);

  const { questions } = api();

  const handleSearch = async () => {
    // Make query search
    questions.search(searchQuery);
    try {
      if (searchQuery !== "") {
        const res = await questions.search(searchQuery);
        console.log(res);
        if (res.status == 200) {
          setResults(res.data.questions);
          // Display answers
          setShowResults(true);
        }
      }
    } catch (error) {}
  };

  const handleResultClick = () => {
    // TODO: Redirect to selected result question
  }

  return (
    <Container>
      <QueryTextField
        aria-label="SearchQuery"
        name="SearchQuery"
        type="SearchQuery"
        placeholder="Buscar una pregunta..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <SearchIcon onClick={handleSearch} />
      {showResults && (
        <ResultsDropdown>
          <CloseIcon onClick={() => setShowResults(false)} />
          {results.map((result) => {
            return <Result onClick={() => handleResultClick(result)}>{result.title}</Result>;
          })}
        </ResultsDropdown>
      )}
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  ${tw`relative w-4/5 rounded-full p-6 my-4 md:my-6 border-solid border border-gray-300 flex justify-end items-center`}
  max-width: 80%;
`;

const QueryTextField = styled.input`
  ${tw`w-full h-full`};
`;

const SearchIcon = styled(Search)`
  ${tw`cursor-pointer`};
  color: ${(props) => props.theme.colors.pinkCyclamen.normal};
`;

const CloseIcon = styled(Close)`
  ${tw`cursor-pointer absolute z-10`};
  top: 10px;
  right: 10px;
  color: ${(props) => props.theme.colors.pinkCyclamen.normal};
`;

const ResultsDropdown = styled.div`
  ${tw`absolute w-full flex flex-col items-center rounded-lg border-solid border border-gray-300`};
  top: 80px;
  right: 0;
  left: 0;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const Result = styled.div`
  ${tw`w-full p-6 bg-white `};

  :hover {
    filter: brightness(96%);
  }
`;
