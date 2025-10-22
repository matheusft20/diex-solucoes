import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Zap, Smartphone, TrendingUp, Code, Palette, Shield } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Performance Otimizada",
    description: "Sites ultra-rápidos que carregam em menos de 2 segundos, proporcionando a melhor experiência para seus visitantes.",
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Design adaptável para todos os dispositivos - smartphones, tablets e desktops. Sua marca impecável em qualquer tela.",
  },
  {
    icon: TrendingUp,
    title: "Foco em Conversão",
    description: "Estratégias comprovadas de UX/UI para transformar visitantes em leads qualificados e aumentar suas vendas.",
  },
  {
    icon: Code,
    title: "Código Limpo",
    description: "Desenvolvimento profissional com as melhores práticas, garantindo manutenção fácil e escalabilidade.",
  },
  {
    icon: Palette,
    title: "Design Exclusivo",
    description: "Identidade visual única que reflete a essência da sua marca e se destaca da concorrência.",
  },
  {
    icon: Shield,
    title: "SEO Otimizado",
    description: "Estrutura otimizada para motores de busca, aumentando sua visibilidade no Google e atraindo mais clientes.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function BenefitsSection() {
  return (
    <section  id="benefits-section" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display" data-testid="text-benefits-title">
            <span className="text-primary">Soluções Digitais</span> que Fazem a Diferença
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-benefits-description">
            Desenvolvemos sites e landing pages com tecnologia de ponta e design estratégico para impulsionar seus resultados.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className="p-8 h-full transition-all duration-300 group bg-card/50 backdrop-blur-sm border-card-border hover-elevate"
                data-testid={`card-benefit-${index}`}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground" data-testid={`text-benefit-title-${index}`}>
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-benefit-description-${index}`}>
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
