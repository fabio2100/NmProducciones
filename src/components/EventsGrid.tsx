import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Camera } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Concierto Benéfico - Fundación Esperanza",
    type: "Musical",
    date: "15 Dic 2024",
    location: "Teatro Principal",
    attendees: "2,500",
    services: ["Grabación Multi-cámara", "Streaming", "Post-producción"],
    status: "Completado"
  },
  {
    id: 2,
    title: "Lanzamiento de Producto - TechCorp",
    type: "Corporativo",
    date: "28 Nov 2024",
    location: "Centro de Convenciones",
    attendees: "800",
    services: ["Video Promocional", "Cobertura Completa", "Edición Rápida"],
    status: "Completado"
  },
  {
    id: 3,
    title: "Boda de Ensueño - Familia García",
    type: "Social",
    date: "10 Nov 2024",
    location: "Hacienda San Miguel",
    attendees: "150",
    services: ["Ceremonia", "Recepción", "Drone", "Same Day Edit"],
    status: "Completado"
  },
  {
    id: 4,
    title: "Festival Gastronómico Internacional",
    type: "Gastronómico",
    date: "22 Oct 2024",
    location: "Plaza Central",
    attendees: "5,000",
    services: ["Documentario", "Redes Sociales", "Entrevistas"],
    status: "Completado"
  },
  {
    id: 5,
    title: "Conferencia Médica - Innovación 2025",
    type: "Académico",
    date: "18 Ene 2025",
    location: "Universidad Nacional",
    attendees: "1,200",
    services: ["Transmisión en Vivo", "Grabación", "Contenido Digital"],
    status: "Próximo"
  },
  {
    id: 6,
    title: "Fashion Week - Diseñadores Emergentes",
    type: "Moda",
    date: "25 Feb 2025",
    location: "Centro de Diseño",
    attendees: "600",
    services: ["Runway Coverage", "Backstage", "Highlights Reel"],
    status: "Próximo"
  }
];

const getStatusColor = (status: string) => {
  return status === "Completado" ? "bg-green-500/20 text-green-400 border-green-500/30" : "bg-blue-500/20 text-blue-400 border-blue-500/30";
};

const getTypeColor = (type: string) => {
  const colors: { [key: string]: string } = {
    Musical: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    Corporativo: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Social: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    Gastronómico: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    Académico: "bg-green-500/20 text-green-400 border-green-500/30",
    Moda: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
  };
  return colors[type] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
};

const EventsGrid = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="bg-gradient-accent bg-clip-text text-transparent">Eventos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Una muestra de los eventos que hemos producido y los próximos proyectos en los que estaremos trabajando
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card 
              key={event.id} 
              className="bg-gradient-card border-border hover:shadow-glow transition-all duration-500 group hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-3">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className={getTypeColor(event.type)}>
                    {event.type}
                  </Badge>
                  <Badge variant="outline" className={getStatusColor(event.status)}>
                    {event.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{event.attendees}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Camera className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Servicios:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {event.services.map((service, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-secondary/80">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsGrid;