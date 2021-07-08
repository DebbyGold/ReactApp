import React, {useState} from "react";
import "./SearchBar.css";

export default function SearchBar(){

  const [searchValue, setSearchValue]=useState("search goes here");

function handleClickInput(event){
 setSearchValue(searchValue+event.target.value);
}

  return(
     <div>
       <input type="text" value={searchValue} onChange={handleClickInput}/>
     </div>
  );
}