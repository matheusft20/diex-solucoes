import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import ecommerceImg from "@assets/generated_images/E-commerce_website_mockup_0d18ee4f.png";
import corporateImg from "@assets/generated_images/Corporate_website_mockup_1f68fa6a.png";
import landingImg from "@assets/generated_images/Landing_page_mockup_333e477d.png";
import responsiveImg from "@assets/generated_images/Responsive_design_showcase_10055a7d.png";
import restaurantImg from "@assets/generated_images/Restaurant_website_mockup_f42bf9d0.png";

const projects = [
  {
    title: "E-commerce Premium",
    category: "E-commerce",
    description: "Loja virtual completa com carrinho de compras, checkout seguro e painel administrativo.",
    image: ecommerceImg,
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    title: "Site Corporativo",
    category: "Corporate Sites",
    description: "Website institucional moderno para empresa de tecnologia com blog integrado.",
    image: corporateImg,
    tags: ["Next.js", "CMS", "SEO"],
  },
  {
    title: "Landing Page Conversão",
    category: "Landing Pages",
    description: "Landing page otimizada para conversão com formulários e analytics integrados.",
    image: landingImg,
    tags: ["React", "Analytics", "A/B Test"],
  },
  {
    title: "Portal Responsivo",
    category: "Landing Pages",
    description: "Portal de notícias com design adaptativo perfeito em todos os dispositivos.",
    image: responsiveImg,
    tags: ["Responsive", "PWA", "Mobile"],
  },
  {
    title: "Site Gastronômico",
    category: "Landing Pages",
    description: "Website elegante para restaurante com menu interativo e sistema de reservas.",
    image: restaurantImg,
    tags: ["UI/UX", "Reservas", "Menu Digital"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function PortfolioSection() {
  return (
    <section id="portfolio-section" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display" data-testid="text-portfolio-title">
            Nosso <span className="text-primary">Portfólio</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-portfolio-description">
            Projetos que transformaram a presença digital de nossos clientes e geraram resultados reais.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              data-testid={`card-portfolio-${index}`}
            >
              <Card className="overflow-hidden group transition-all duration-300 bg-card/50 backdrop-blur-sm border-card-border h-full hover-elevate">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <ExternalLink className="w-10 h-10 mx-auto mb-3" />
                      <p className="text-sm font-medium">Ver Detalhes</p>
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground" data-testid={`text-portfolio-title-${index}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`text-portfolio-description-${index}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
