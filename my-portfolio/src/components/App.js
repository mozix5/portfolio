import React from "react";
import Footer from "./Footer";
import Idea from "./idea";
import Portfolio from "./Portfolio";
import About from "./About";
import Navigation from "./Navigation";
import GridComponents from "./GridComponents";
import '../App.css'
function App() {
  return (
    <div>
      <Navigation />
      <About />
      <GridComponents />
      <Portfolio />
      <Idea />
      <Footer />
    </div>
  );
}

export default App;
