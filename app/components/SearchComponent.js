"use client";

import React, { useState } from "react";

const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for something..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent;
