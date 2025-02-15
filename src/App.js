import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";
import SkillsSection from "./components/SkillsSection";
import ResumeSection from "./components/ResumeSection";
import ClientTestimonialSection from "./components/ClientTestimonialSection";
import PortfolioSection from "./components/PortfolioSection";
import ResearchSection from "./components/ResearchSection";
import FreelanceBanner from "./components/FreelanceBanner";
import AwardSection from "./components/AwardSection";
import ExtraCurricularSection from "./components/ExtraCurrcularSection";
import CertificationSection from "./components/CertificationSection";
import SoftSkillsSection from "./components/SoftSkillsSection";
import HobbiesAndLanguages from "./components/HobbiesAndLanguages";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div>
      <main className="bg-white text-gray-900">
        <Navbar />
        <HeroSection />
        <AboutSection />
        {/* <StatsSection /> */}
        <SkillsSection />
        <ResumeSection />
        {/* <ClientTestimonialSection /> */}
        <PortfolioSection />
        {/* <ResearchSection /> */}
        {/* <FreelanceBanner /> */}
        {/* <ExtraCurricularSection /> */}
        {/* <AwardSection /> */}
        {/* <CertificationSection /> */}
        {/* <SoftSkillsSection /> */}
        {/* <HobbiesAndLanguages /> */}
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
