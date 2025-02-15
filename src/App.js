import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ResumeSection from "./components/ResumeSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div>
      <main className="bg-white text-gray-900">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ResumeSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
