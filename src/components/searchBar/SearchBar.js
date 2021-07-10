import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");

  function handleClickInput(event) {
    setSearchValue(event.target.value);
  }

  function handleClearClick() {
    setSearchValue("");
  }

  //const shouldDisplay=searchValue.length > 0;

const productFiltered=props.products.filter((product)=>{
return product.includes(searchValue);
})

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleClickInput} />
      <br />
     {/*{shouldDisplay && */}
      <button onClick={handleClearClick}>Clear</button>
     <ul>
        {productFiltered.map((product)=>{
      return <li key={product}>{product}</li>
        })
    }
     </ul>
    </div>
  );
  }