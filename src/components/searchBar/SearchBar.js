import React, { useState } from "react";
import "./SearchBar.css";

const products = [
  "tooth paste",
  "tooth brush",
  "mouth wash",
  "mouth guard",
  "mouth flux"
];

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  function handleClickInput(event) {
    setSearchValue(event.target.value);
  }

  function handleClearClick() {
    setSearchValue("");
  }

  const shouldDisplay=searchValue.length > 0;



  return (
    <div>
      <input type="text" value={searchValue} onChange={handleClickInput} />
      <br />
      {shouldDisplay && <button onClick={handleClearClick}>Clear</button>}
     <ul>
        {products.map((product)=>{
      return <li key={product}>{product}</li>
      })
    }
     </ul>
    </div>

  );
}
