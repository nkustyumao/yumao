import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Project from "./components/Project";
import Footer from "./components/Footer";
import BadmintonBackground from "./components/BadmintonBackground";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      {/* 羽毛球背景動畫 */}
      <BadmintonBackground />

      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      <main className="main-content">
        <Home scrollToSection={scrollToSection} />
        <About />
        <Education />
        <Project />
      </main>

      <Footer />
    </div>
  );
}

export default App;
