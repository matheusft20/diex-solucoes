import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const handleClick = () => {
    window.open("https://wa.me/5562996806651?text=Olá! Vim através do site e gostaria de mais informações.", "_blank");
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: 1,
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50"
    >
      <Button
        size="icon"
        className="rounded-full shadow-2xl shadow-primary/50"
        onClick={handleClick}
        data-testid="button-whatsapp-float"
      >
        <MessageCircle className="text-primary-foreground" />
      </Button>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:block absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-card px-4 py-2 rounded-lg shadow-lg border border-card-border whitespace-nowrap"
      >
        <p className="text-sm font-medium text-foreground">
          Precisa de ajuda? Fale conosco!
        </p>
      </motion.div>
    </motion.div>
  );
}
