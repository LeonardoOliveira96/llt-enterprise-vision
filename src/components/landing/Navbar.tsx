import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const links = [
  { label: { pt: "Serviços", en: "Services" }, href: "#servicos" },
  { label: { pt: "Soluções", en: "Solutions" }, href: "#solucoes" },
  { label: { pt: "Sobre", en: "About" }, href: "#sobre" },
  { label: { pt: "Contato", en: "Contact" }, href: "#contato" },
];

export function Navbar({ lang, setLang }: { lang: "pt" | "en"; setLang: (l: "pt" | "en") => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg opacity-90" />
            <div className="absolute inset-[2px] bg-background rounded-[6px] flex items-center justify-center">
              <span className="text-[11px] font-display font-bold tracking-tighter text-gradient-cyan">LLT</span>
            </div>
            <div className="absolute inset-0 bg-primary/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-semibold text-sm tracking-tight">LLT</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Consultoria</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {l.label[lang]}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="glass rounded-full p-1 flex items-center gap-0.5 text-xs">
            <button
              onClick={() => setLang("pt")}
              className={`px-2.5 py-1 rounded-full transition-all ${
                lang === "pt" ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              🇧🇷 PT
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-full transition-all ${
                lang === "en" ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              🇺🇸 EN
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
