import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-production.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional production equipment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Creamos
          </span>
          <br />
          <span className="text-foreground">Experiencias</span>
          <br />
          <span className="text-foreground">Inolvidables</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up opacity-90">
          Productora audiovisual especializada en eventos corporativos, 
          videoclips musicales y producciones cinematográficas de alta calidad
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button size="lg" className="bg-gradient-accent hover:scale-105 transition-transform duration-300 shadow-glow">
            Ver Nuestros Proyectos
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Contactar
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;