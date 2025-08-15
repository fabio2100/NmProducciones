import Hero from "@/components/Hero";
import ProjectCarousel from "@/components/ProjectCarousel";
import EventsGrid from "@/components/EventsGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProjectCarousel />
      <EventsGrid />
      <Footer />
    </div>
  );
};

export default Index;
