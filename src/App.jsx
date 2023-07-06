import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RoutesApp from "./Routes";

import "./App.css";
import MoviesProvider from "./Context/Movies/MoviesProvider";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <MoviesProvider>
          <Header />
          <div className="main">
            <RoutesApp />
          </div>
          <Footer />
        </MoviesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
