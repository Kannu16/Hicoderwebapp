import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Section from "./Components/Section";
import AboutHc from "./Components/AboutHc";
import Webcounter from "./Components/Webcounter";
import Whychoose from "./Components/Whychoose";
import WhattoLearn from "./Components/WhattoLearn";
import Partner from "./Components/Partner";
import News from "./Components/News";
import Footer from "./Components/Footer";
import Testimonal from "./Components/Testimonal";

const App = () => {
  return (
    <>
    <div className="hero-container">
      <Header />
       <Navbar />
       <Section />
       <AboutHc />
       <Webcounter />
       <Whychoose />
       <WhattoLearn />
       <Testimonal />
       <Partner />
       <News />
       <Footer />

    </div>

    </>
  );
};

export default App;
