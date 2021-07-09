import React, { useState } from "react";
import "./SearchBar.css";

const product = [
  "tooth paste",
  "tooth brush",
  "mouth wash",
  "mouth guard",
  "mouth flux"
];

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("search goes here");

  function handleClickInput(event) {
    setSearchValue(searchValue + event.target.value);
  }

  function handleClearClick() {
    setSearchValue("");
  }

  const shouldDisplay = searchValue.length > 0;

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleClickInput} />
      <br />
      <button type="text">Search</button>
      {shouldDisplay && <button onClick={handleClearClick}>Clear</button>}

      <ul>
        const products.map((product) = { 
          <li key={product}>{product}</li>
          });
          
      </ul>
    </div>
  );
}
