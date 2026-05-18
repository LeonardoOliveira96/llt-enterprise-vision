import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const copy = {
  pt: {
    eyebrow: "Equipe",
    title: "Especialistas por trás da operação",
    sub: "Engenheiros sêniores com experiência em ambientes corporativos de missão crítica.",
  },
  en: {
    eyebrow: "Team",
    title: "Specialists behind the operation",
    sub: "Senior engineers with experience in mission-critical corporate environments.",
  },
};

const team = [
  {
    name: "Thiago Guimarães",
    role: { pt: "DevOps Sênior", en: "Senior DevOps" },
    initials: "TG",
    tags: ["Kubernetes", "CI/CD", "Cloud"],
  },
  {
    name: "Luiz Gustavo",
    role: { pt: "DevOps Sênior", en: "Senior DevOps" },
    initials: "LG",
    tags: ["Infra", "Automação", "Observabilidade"],
  },
  {
    name: "Leonardo Oliveira",
    role: { pt: "Desenvolvedor Fullstack Sênior", en: "Senior Fullstack Developer" },
    initials: "LO",
    tags: ["React", "Node.js", "APIs"],
  },
];

export function Team({ lang }: { lang: "pt" | "en" }) {
  const c = copy[lang];

  return (
    <section id="equipe" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary">{c.eyebrow}</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-gradient">{c.title}</h2>
          <p className="mt-4 text-muted-foreground text-lg">{c.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative glass rounded-2xl p-7 hover-lift overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-44 h-44 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative flex items-start gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center shrink-0">
                  <span className="font-display font-semibold text-lg text-gradient-cyan">
                    {member.initials}
                  </span>
                  <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-md opacity-0 group-hover:opacity-60 transition-opacity" />
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <h3 className="font-semibold text-base leading-tight">{member.name}</h3>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-primary/80">
                    {member.role[lang]}
                  </div>
                </div>
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition shrink-0"
                  aria-label={`LinkedIn ${member.name}`}
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="relative flex flex-wrap gap-1.5">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary/90 border border-primary/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
