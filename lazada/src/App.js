import "./App.css";
import Banner from "./components/banner";
import Carousel from "./components/carousel";
import Category from "./components/category";
import Collection from "./components/collection";
import Flashsale from "./components/flashsale";
import Footer from "./components/footer";
import Menubutton from "./components/menubutton";
import Navlink from "./components/navlink";
import Searchbar from "./components/searchbar";
import { TiSocialYoutube } from "react-icons/ti";
import Productforu from "./components/productforu";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Banner></Banner>
        <div
          className="content"
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
          <Carousel></Carousel>
        </div>
        <div style={{ background: "#f5f5f5" }}>
          <Menubutton></Menubutton>
          <Flashsale></Flashsale>
          <Collection></Collection>
          <Category></Category>
          <Productforu></Productforu>
        </div>
        <div className="App_footer" style={{ background: "#f5f5f5" }}>
          <Footer></Footer>
        </div>
        <div className="about_us">
          <div className="about_us_item">
            <span className="about_us_item1">
              <p>Lazada Southeast Asia</p>
              <div>
                <a href="#">
                  <TiSocialYoutube size={30} />
                </a>
                <a href="#">
                  <TiSocialYoutube size={30} />
                </a>{" "}
                <a href="#">
                  <TiSocialYoutube size={30} />
                </a>{" "}
                <a href="#">
                  <TiSocialYoutube size={30} />
                </a>{" "}
                <a href="#">
                  <TiSocialYoutube size={30} />
                </a>
              </div>
            </span>
          </div>
          <div className="about_us_item">
            <p>Follow us</p>
            <div>
              <a href="#">
                <TiSocialYoutube size={30} />
              </a>
              <a href="#">
                <TiSocialYoutube size={30} />
              </a>{" "}
              <a href="#">
                <TiSocialYoutube size={30} />
              </a>{" "}
              <a href="#">
                <TiSocialYoutube size={30} />
              </a>{" "}
              <a href="#">
                <TiSocialYoutube size={30} />
              </a>
            </div>
          </div>
          <div className="about_us_item">© Lazada 2022</div>
        </div>
      </div>
    </div>
  );
}

export default App;
