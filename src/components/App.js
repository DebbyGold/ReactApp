import "../styles.css";
import countButtons from "../components/countButtons";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2>
      <countbuttons increamentBy={2} bgColor={"blue"}/>
    </div>
  );
}
