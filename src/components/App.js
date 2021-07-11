import "../styles.css";
import CountButtons from "../components/countButtons";
import SearchBar from "../components/searchBar/SearchBar";
import Button from "../components/Button/Button";
import React, {useState,useEffect} from "react";


export default function App(){

const [productState, setProductState]=useState([]);

useEffect(()=>{
fetch('https://fakestoreapi.com/products')
             .then(res=>res.json())
                                      .then((productArray)=>{
                                      const newProductState=productArray.map((product)=>{
return product.title;
                                      }
                                      )
setProductState(newProductState);
                                    })
},[])

  return (
    <div className="App">
<Button />
      <h1>Counter</h1>
      <CountButtons increamentBy={2} bgColor={"blue"}/>
<h2>Search items in thelists lists</h2>
      <SearchBar products={productState}/>
{/*
<SearchBar products={[
"motor bike",
"power bike",
"soccer ball"
]}/>*/}
    </div>
  );
}
