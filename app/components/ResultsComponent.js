import React from "react";

const ResultsComponent = ({ results, allResults }) => {
  console.log(results);
  console.log(allResults);
  return (
    <div>
      {results.map((data) => (
        <div>{data.title}</div>
      ))}
      {allResults?.count}
    </div>
  );
};

export default ResultsComponent;
