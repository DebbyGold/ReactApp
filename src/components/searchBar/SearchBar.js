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

const shouldDisplay=searchValue.length>0;

  return(
     <div>
       <input type="text" value={searchValue} onChange={handleClickInput}/>
       <br/>
<button type="text" >Search</button>
{shouldDisplay && <button onClick={handleClearClick}>Clear</button>}
     </div>
  );
}