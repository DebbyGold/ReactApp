import React,{useState} from "react";

export extends function countButtons(props){

  const [counter, setCounter]=useState(0);

function handleClick(){
setCounter(counter+props.increamentBy);
}
return(
  <button onClick="{handleClick}>+{props.increamentBy}</button>
  <div>{counter}</div>
);
}