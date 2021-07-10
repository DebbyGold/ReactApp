import React, { useState } from "react";
import "./SearchBar.css";

const products = [
  "tooth paste",
  "tooth brush",
  "mouth wash",
  "mouth guard",
  "dental flux"
];

export default function SearchBars(props) {
  const [searchValue, setSearchValue] = useState("");

  function handleClickInput(event) {
    setSearchValue(event.target.value);
  }

  function handleClearClick() {
    setSearchValue("");
  }

  const shouldDisplay=searchValue.length > 0;

const productFiltered=products.filter((product)=>{
return product.includes("tooth")
}
)

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleClickInput} />
      <br />
      {shouldDisplay && <button onClick={handleClearClick}>Clear</button>}
     <ul>
        {productFiltered.map((product)=>{
      return <li key={product}>{product}</li>
        })
    }
     </ul>
    </div>

  );
}
