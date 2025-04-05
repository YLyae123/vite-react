import React from 'react';
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import MisionVision from "./components/Mision_Vision";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import PreguntasFrecuentes from "./components/Preguntas";
import "./App.css";

function App() {
  return (
    <>
    <Banner />
      <Navbar />
      <MisionVision />
      <About id="about" />
      <Menu />
      <PreguntasFrecuentes id="faq" />
      <Contact id="contact" />
      <ScrollToTopButton />
    </>
  );
}

export default App;