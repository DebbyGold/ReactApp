import React from "react";
import "./Button.css";

export default function Button(props){
return(
<div style={{background:"yellow",padding:"15px",borderRadius:"20px"}}>
{props.children}
</div>
);
}