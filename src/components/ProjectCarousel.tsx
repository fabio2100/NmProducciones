import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import musicImage from "@/assets/project-music.jpg";
import corporateImage from "@/assets/project-corporate.jpg";
import festivalImage from "@/assets/project-festival.jpg";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Francisco Suarez",
    description: "Seminario de actuación frente a cámara para uno de los artistas más reconocidos de la región",
    image: musicImage,
    category: "Seminario",
    year: "Julio 2024"
  },
  {
    id: 2,
    title: "Evento Corporativo - Tech Summit",
    description: "Cobertura integral del evento tecnológico más importante del año",
    image: corporateImage,
    category: "Corporativo",
    year: "2024"
  },
  {
    id: 3,
    title: "Festival de Cine Internacional",
    description: "Documentación y transmisión en vivo del prestigioso festival cinematográfico",
    image: festivalImage,
    category: "Festival",
    year: "2023"
  }
];

const ProjectCarousel = () => {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) {
      return
    }

    let interval: NodeJS.Timeout

    const startAutoplay = () => {
      clearInterval(interval)
      interval = setInterval(() => {
        api.scrollNext()
      }, 5000)
    }

    // Iniciar el autoplay
    startAutoplay()

    // Escuchar cuando el usuario interactúa manualmente
    const handleSelect = () => {
      startAutoplay() // Reiniciar el contador cuando hay interacción manual
    }

    api.on('select', handleSelect)

    return () => {
      clearInterval(interval)
      api.off('select', handleSelect)
    }
  }, [api])

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Seminarios <span className="bg-gradient-accent bg-clip-text text-transparent">Pasados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre algunos de nuestros trabajos más recientes y las producciones que nos han definido como líderes en el sector
          </p>
        </div>

        <Carousel 
          setApi={setApi}
          className="w-full max-w-5xl mx-auto" 
          opts={{ 
            align: "start", 
            loop: true 
          }}
        >
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-2">
                  <Card className="bg-gradient-card border-border hover:shadow-glow transition-all duration-500 group">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                            {project.category}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="outline" className="bg-background/90 text-foreground border-border">
                            {project.year}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 text-foreground">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-secondary border-border hover:bg-accent" />
          <CarouselNext className="bg-secondary border-border hover:bg-accent" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectCarousel;