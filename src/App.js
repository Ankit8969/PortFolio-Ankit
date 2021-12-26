import React, { useState } from "react";
import About from "./components/about";
import Coding from "./components/coding";
import MainPage from "./components/mainpage";
import Project from "./components/project";
import Footer from "./components/footer";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <MainPage show={show} setShow={setShow} />
      <About />
      <Project />
      <Coding />
      <Footer />
    </>
  );
};

export default App;
