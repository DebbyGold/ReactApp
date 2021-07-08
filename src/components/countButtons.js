import React,{useState} from "react";

export default function CountButtons(props){

  const [counter, setCounter]=useState(0);

function handleClick(){
setCounter(counter+props.increamentBy);
}
return(
<div>
  <button onClick={handleClick}>+{props.increamentBy}</button>
  <div>{counter}</div>
</div>
);
}