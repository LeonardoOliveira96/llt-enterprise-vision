import { Linkedin, Github, Twitter } from "lucide-react";

const copy = {
  pt: {
    tag: "Consultoria T.I corporativa de alta performance",
    nav: ["Serviços", "Soluções", "Sobre", "Contato"],
    rights: "Todos os direitos reservados.",
  },
  en: {
    tag: "High-performance corporate IT consulting",
    nav: ["Services", "Solutions", "About", "Contact"],
    rights: "All rights reserved.",
  },
};

export function Footer({ lang, setLang }: { lang: "pt" | "en"; setLang: (l: "pt" | "en") => void }) {
  const c = copy[lang];
  return (
    <footer className="relative border-t border-border mt-20">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg opacity-90" />
                <div className="absolute inset-[2px] bg-background rounded-[6px] flex items-center justify-center">
                  <span className="text-[11px] font-display font-bold tracking-tighter text-gradient-cyan">LLT</span>
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-semibold text-sm">LLT</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Consultoria</span>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm">{c.tag}</p>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">Menu</div>
            <ul className="space-y-2.5">
              {c.nav.map((n) => (
                <li key={n}>
                  <a href={`#${n.toLowerCase()}`} className="text-sm text-foreground/80 hover:text-primary transition">
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
              {lang === "pt" ? "Idioma" : "Language"}
            </div>
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setLang("pt")}
                className={`text-xs px-3 py-1.5 rounded-full glass ${lang === "pt" ? "text-primary" : "text-muted-foreground"}`}
              >
                🇧🇷 PT
              </button>
              <button
                onClick={() => setLang("en")}
                className={`text-xs px-3 py-1.5 rounded-full glass ${lang === "en" ? "text-primary" : "text-muted-foreground"}`}
              >
                🇺🇸 EN
              </button>
            </div>
            <div className="flex gap-3">
              {[Linkedin, Github, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-primary transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} LLT Consultoria. {c.rights}</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
