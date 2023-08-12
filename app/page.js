"use client";

import React, { useState } from "react";
import SearchComponent from "./components/SearchComponent";
import ResultsComponent from "./components/ResultsComponent";

const Home = () => {
  const [allResults, setAllResults] = useState([]);
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(
        `https://gutendex.com/books?search=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      setAllResults(data);
      setResults(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Search App</h1>
      <SearchComponent onSearch={handleSearch} />
      <ResultsComponent allResults={allResults} results={results} />
    </div>
  );
};

export default Home;
