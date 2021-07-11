import "../styles.css";
import CountButtons from "../components/countButtons";
import SearchBar from "../components/searchBar/SearchBar";


export default function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <CountButtons increamentBy={2} bgColor={"blue"}/>
<h2>Search items in thelists lists</h2>
      <SearchBar products={[
  "tooth paste",
  "tooth brush",
"dental flux",
"mouth wash",
"mouth guard"

      ]}/>
<searchBar products={[
"motor bike",
"power bike",
"soccer ball"
]}/>
    </div>
  );
}
