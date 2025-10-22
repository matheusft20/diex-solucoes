import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiInstagram, SiFacebook, SiLinkedin } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5562996806651", "_blank");
  };

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-card-border py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 font-display">
              <span className="text-primary">DIEX</span> Soluções Digitais
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Desenvolvemos sites e landing pages que transformam visitantes em clientes. Tecnologia, design e estratégia para o sucesso do seu negócio.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center transition-colors hover-elevate"
                data-testid="link-instagram"
              >
                <SiInstagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center transition-colors hover-elevate"
                data-testid="link-facebook"
              >
                <SiFacebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center transition-colors hover-elevate"
                data-testid="link-linkedin"
              >
                <SiLinkedin className="w-5 h-5 text-primary" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-foreground">Serviços</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="transition-colors cursor-pointer hover-elevate" data-testid="link-service-landing">
                Landing Pages
              </li>
              <li className="transition-colors cursor-pointer hover-elevate" data-testid="link-service-corporate">
                Sites Corporativos
              </li>
              <li className="transition-colors cursor-pointer hover-elevate" data-testid="link-service-ecommerce">
                E-commerce
              </li>
              <li className="transition-colors cursor-pointer hover-elevate" data-testid="link-service-portfolio">
                Portfólios Online
              </li>
              <li className="transition-colors cursor-pointer hover-elevate" data-testid="link-service-seo">
                Otimização SEO
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-foreground">Contato</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <button 
                  onClick={handleWhatsAppClick}
                  className="transition-colors text-left hover-elevate"
                  data-testid="link-footer-phone"
                >
                  (62) 99680-6651
                </button>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:contato@diex.digital" 
                  className="transition-colors hover-elevate"
                  data-testid="link-footer-email"
                >
                  contato@diex.digital
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Goiânia, GO - Brasil</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} DIEX Soluções Digitais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
