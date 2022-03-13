import "./App.css";
// import { Heingt } from "./components/Headingt";
import List from "./components/List";

function App() {
  return (
    <div className="app">
      <h3>Mobile Operating System</h3>
      {/* <Heingt title={"saurabh"} /> */}

      <List color={["Android", "Blackberry", "iphone", "Windows Pone"]} />
      <h3>Mobile Manufacturers</h3>
      <List color={["Android", "Blackberry", "iphone", "Windows Pone"]} />
    </div>
  );
}

export default App;
