import React, {useState} from "react";
import "./SearchBar.css";

export default function SearchBar(){

  const [searchValue, setSearchValue]=useState("search goes here");

function handleClickInput(event){
 setSearchValue(searchValue+event.target.value);
}

function handleClearClick(){
setSearchValue("");
}

  return(
     <div>
       <input type="text" value={searchValue} onChange={handleClickInput}/>
       <br/>
<button onClick={handleClearClick}>Clear</button>
     </div>
  );
}