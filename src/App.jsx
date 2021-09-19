import { Route } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";

//pages
import HomePage from "./pages/Home.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";   //here we have gobally installed react slick's css fle


  function App(){
    return (
      <>
     <DefaultHOC path="/" exact component={HomePage} />
      </>
    );
  };

export default App;

