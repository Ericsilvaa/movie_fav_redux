import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RoutesApp from "./Routes";

import "./App.css";



function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <Header />
          <div className="main">
            <RoutesApp />
          </div>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
