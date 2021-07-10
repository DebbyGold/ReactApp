import React, { useState } from "react";
import "./SearchBar.css";

const products = [
  "tooth paste",
  "tooth brush",
  "mouth wash",
  "mouth guard",
  "mouth flux"
];

export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("search goes here");

  function handleClickInput(event) {
    setSearchValue(searchValue + event.target.value);
  }

  function handleClearClick() {
    setSearchValue("");
  }

  const shouldDisplay=searchValue.length > 0;

const productFilter = props.products.filter((product) => {
 return product.includes(searchValue);
})

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleClickInput} />
      <br />
      <button type="text">Search</button>
      {shouldDisplay && <button onClick={handleClearClick}>Clear</button>}
productFilter
      <ul>
        {productFilter.map((product) => { 
        return <li key={product}>{product}</li>
        })
      }
      </ul>
    </div>
  );
}
