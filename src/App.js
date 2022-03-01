import "./App.css";
import React from "react";
import AppComponent from "./components/index";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <AppComponent.Header />
      <AppComponent.Navbar />
      <AppComponent.About />
      <AppComponent.Experience />
      <AppComponent.Education />
      <AppComponent.Projects />
      <AppComponent.Contact />
      <AppComponent.Footer />
    </React.Fragment>
  );
}

export default App;
