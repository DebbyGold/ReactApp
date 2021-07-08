import "../styles.css";
import CountButtons from "../components/countButtons";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Edit to sCe some magic happen!</h2>
      <CountButtons increamentBy={2} bgColor={"blue"}/>
    </div>
  );
}
