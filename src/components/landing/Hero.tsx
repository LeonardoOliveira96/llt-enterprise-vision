import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";

const copy = {
  pt: {
    badge: "Consultoria T.I Enterprise",
    title1: "Infraestrutura, Segurança e",
    title2: "Tecnologia",
    title3: "para Empresas Modernas",
    sub: "Consultoria especializada em DevOps, Sistemas Corporativos, ERP, Segurança Digital e Backup Empresarial.",
    cta1: "Solicitar Consultoria",
    cta2: "Conhecer Soluções",
    scroll: "Explorar",
  },
  en: {
    badge: "Enterprise IT Consulting",
    title1: "Infrastructure, Security and",
    title2: "Technology",
    title3: "for Modern Enterprises",
    sub: "Specialized consulting in DevOps, Corporate Systems, ERP, Digital Security and Enterprise Backup.",
    cta1: "Request Consulting",
    cta2: "Explore Solutions",
    scroll: "Scroll",
  },
};

export function Hero({ lang }: { lang: "pt" | "en" }) {
  const t = copy[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-[15%] w-72 h-72 rounded-full bg-primary/20 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-accent/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/60"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: (i % 5) * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs tracking-wide text-muted-foreground">{t.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-[88px] font-semibold leading-[1.02] tracking-tight"
        >
          <span className="text-foreground/90">{t.title1}</span>
          <br />
          <span className="text-gradient-cyan">{t.title2}</span>{" "}
          <span className="text-foreground/90">{t.title3}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {t.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium px-7 py-3.5 rounded-full hover:shadow-[0_0_40px_-5px_var(--cyan-glow)] transition-all duration-300"
          >
            {t.cta1}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#servicos"
            className="glass inline-flex items-center gap-2 text-foreground font-medium px-7 py-3.5 rounded-full hover:bg-white/5 transition-all"
          >
            {t.cta2}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{t.scroll}</span>
        <div className="relative w-5 h-8 rounded-full border border-border flex justify-center pt-1.5">
          <span className="w-1 h-1.5 rounded-full bg-primary animate-scroll-indicator" />
        </div>
      </motion.div>
    </section>
  );
}
