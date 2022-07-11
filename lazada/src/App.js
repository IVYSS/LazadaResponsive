import "./App.css";
import Banner from "./components/banner";
import Navlink from "./components/navlink";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Banner></Banner>
        <div
          className="navlink"
          style={{
            width: "100%",
            position: "relative",
            margin: 0,
            marginTop: 0,
            padding: 0,
            background: "rgba(0,0,0,.03)",
          }}
        >
          <Navlink></Navlink>
        </div>
      </div>
    </div>
  );
}

export default App;
