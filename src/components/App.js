import "../styles.css";
import CountButtons from "../components/countButtons";
import SearchBar from "../components/searchBar/SearchBar";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2>
      <CountButtons increamentBy={2} bgColor={"blue"}/>
      <SearchBar />
    </div>
  );
}
