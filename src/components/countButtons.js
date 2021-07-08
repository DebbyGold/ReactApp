import React,{useState} from "react";
import "../styles/globalCss.css";

export default function CountButtons(props){
  const [counter, setCounter]=useState(0);

function handleClick(){
setCounter(counter+props.increamentBy);
}

const styles={
background:props.bgColor,
color:"#fff"
}

return(
<div>
  <button style={styles} onClick={handleClick}>+{props.increamentBy}</button>
  <div>{counter}</div>
</div>
);
}