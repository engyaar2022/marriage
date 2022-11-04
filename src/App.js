import React from "react";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Video from "./components/Video";

const App = () => {
  return (
    <div>
      <Navbar />
      <Heading />
      <Main />
      <Video />
      <Footer />
    </div>
  );
};

export default App;
