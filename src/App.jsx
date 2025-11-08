import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />   {/* ✅ Make sure this is here */}
    </>
  );
};

export default App;
