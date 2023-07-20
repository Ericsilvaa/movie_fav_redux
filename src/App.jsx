import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RoutesApp from "./Routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ToastContainer limit={3} autoClose={1500} />
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
