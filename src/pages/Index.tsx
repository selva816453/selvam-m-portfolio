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
    <main className="min-h-screen bg-[#030308] overflow-x-hidden relative">
      {/* Pure Dark Background */}
      <div className="fixed inset-0 -z-20 bg-[#030308]" />
      
      {/* Subtle Gradient Overlay */}
      <div className="fixed inset-0 -z-19 bg-gradient-to-br from-[#0a0a15]/50 via-transparent to-[#05050a]/50" />
      
      {/* Animated Glow Effects */}
      <div className="fixed inset-0 -z-15 pointer-events-none overflow-hidden">
        {/* Primary cyan glow - top right */}
        <div 
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
            animation: 'pulse-glow 8s ease-in-out infinite'
          }}
        />
        {/* Secondary violet glow - bottom left */}
        <div 
          className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)',
            animation: 'pulse-glow 10s ease-in-out infinite 2s'
          }}
        />
        {/* Accent glow - center */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 60%)',
            animation: 'pulse-glow 12s ease-in-out infinite 4s'
          }}
        />
      </div>
      
      {/* Animated grid pattern */}
      <div 
        className="fixed inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gradient-shift 20s linear infinite'
        }}
      />
      
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
