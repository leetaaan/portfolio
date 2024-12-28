import React from "react";

import AnimRoutes from "./components/AnimRoutes";
import Header from "./components/Header";

import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  );
};

export default App;
