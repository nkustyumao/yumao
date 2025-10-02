import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Project from "./components/Project";
import Footer from "./components/Footer";
import BadmintonBackground from "./components/BadmintonBackground";
import Note from "./components/Note";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BadmintonBackground />
              <main className="main-content">
                <Home scrollToSection={scrollToSection} />
                <About />
                <Education />
                <Project />
              </main>
            </>
          }
        />
        <Route path="/note" element={<Note />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
