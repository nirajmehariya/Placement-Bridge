import React from "react";
import Header from "./Header";
import Home from "./Home";
import Features from "./Features";
import About from "./About";
import Footer from "./Footer";
import TransparentBar from "./TransparentBar";
import Contact from "./Contact";
import "../styles/MainPage.css";

const MainPage = () => {
  return (
    <>
      <Header />
      <main className="website-content__inner">
        <Home />
        <Features />
        <hr id="aboutus" />
        <About />
      </main>
      <TransparentBar />
      <main className="website-content__inner">
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
