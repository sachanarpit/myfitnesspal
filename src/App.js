import "./App.css";
import { LoaderComp } from "./components/GlobalComp/Loading.Pages";
import { Routes } from "./routes/Router";
import { Test } from "./routes/Test";

function App() {
  return (
    <div className="App">
      <Routes />
      {/* <Test /> */}
      {/* <LoaderComp /> */}
    </div>
  );
}

export default App;
