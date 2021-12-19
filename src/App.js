import "./App.css";
import { LoaderComp } from "./components/GlobalComp/Loading.Pages";
import { Routes } from "./routes/Router";
import { Test } from "./routes/Test";
import TestArpit from "./routes/Test.arpit";

function App() {
  return (
    <div className="App">
      {/* <Routes /> */}
      {/* <Test /> */}

      <Test />

      {/* <LoaderComp /> */}
      {/* <TestArpit /> */}
    </div>
  );
}

export default App;
