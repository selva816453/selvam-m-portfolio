import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CodingProfilesSection from "@/components/CodingProfilesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Deep Space Background */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-[#0a0a1a] via-[#0f0f2a] to-[#050510]" />
      
      {/* Nebula Effects */}
      <div className="fixed inset-0 -z-15 pointer-events-none overflow-hidden">
        {/* Purple nebula */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse-glow" />
        {/* Blue nebula */}
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-float" />
        {/* Cyan nebula */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-400/8 rounded-full blur-[100px] animate-float-delayed" />
        {/* Pink nebula */}
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[400px] bg-pink-500/5 rounded-full blur-[130px] animate-float-slow" />
        {/* Golden accent */}
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-amber-400/5 rounded-full blur-[80px] animate-pulse-glow" />
      </div>
      
      {/* Star field particles */}
      <ParticleBackground />
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CodingProfilesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
