import "./App.css";
import Banner from "./components/banner";
import Flashsale from "./components/flashsale";
import Menubutton from "./components/menubutton";
import Navlink from "./components/navlink";
import Searchbar from "./components/searchbar";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Banner></Banner>
        <div
          style={{
            width: "100%",
            background: "rgba(0,0,0,.03)",
          }}
        >
          <Navlink></Navlink>
        </div>
        <div>
          <Searchbar></Searchbar>
        </div>
        <div>
          <Menubutton></Menubutton>
        </div>
        <div>
          <Flashsale></Flashsale>
        </div>
      </div>
    </div>
  );
}

export default App;
