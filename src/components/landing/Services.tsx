import { motion } from "framer-motion";
import { Server, Network, Database, ShieldCheck, HardDrive } from "lucide-react";

const services = {
  pt: [
    {
      icon: Server,
      title: "DevOps",
      desc: "Automação completa do ciclo de entrega de software.",
      items: ["Automação", "CI/CD", "Docker", "Kubernetes", "Cloud Infrastructure"],
    },
    {
      icon: Network,
      title: "Sistemas Corporativos",
      desc: "Integrações e performance para operações críticas.",
      items: ["Integrações", "APIs", "Infraestrutura", "Performance", "Monitoramento"],
    },
    {
      icon: Database,
      title: "ERP Empresarial",
      desc: "Implantação e otimização de processos de ponta a ponta.",
      items: ["Implantação", "Customização", "Integração", "Otimização"],
    },
    {
      icon: ShieldCheck,
      title: "Segurança da Informação",
      desc: "Proteção corporativa em todas as camadas.",
      items: ["Hardening", "Firewall", "Controle de Acesso", "Monitoramento"],
    },
    {
      icon: HardDrive,
      title: "Backup e Continuidade",
      desc: "Garantia de operação contínua e proteção de dados.",
      items: ["Backup Automatizado", "Disaster Recovery", "Alta Disponibilidade"],
    },
  ],
  en: [
    {
      icon: Server,
      title: "DevOps",
      desc: "Full automation of the software delivery lifecycle.",
      items: ["Automation", "CI/CD", "Docker", "Kubernetes", "Cloud Infrastructure"],
    },
    {
      icon: Network,
      title: "Corporate Systems",
      desc: "Integrations and performance for mission-critical operations.",
      items: ["Integrations", "APIs", "Infrastructure", "Performance", "Monitoring"],
    },
    {
      icon: Database,
      title: "Enterprise ERP",
      desc: "End-to-end deployment and process optimization.",
      items: ["Deployment", "Customization", "Integration", "Optimization"],
    },
    {
      icon: ShieldCheck,
      title: "Information Security",
      desc: "Corporate protection across all layers.",
      items: ["Hardening", "Firewall", "Access Control", "Monitoring"],
    },
    {
      icon: HardDrive,
      title: "Backup & Continuity",
      desc: "Continuous operation and data protection.",
      items: ["Automated Backup", "Disaster Recovery", "High Availability"],
    },
  ],
};

const headings = {
  pt: { eyebrow: "Serviços", title: "Soluções de tecnologia de alto padrão", sub: "Atuamos como parceiros estratégicos da sua operação." },
  en: { eyebrow: "Services", title: "High-end technology solutions", sub: "We act as a strategic partner of your operation." },
};

export function Services({ lang }: { lang: "pt" | "en" }) {
  const h = headings[lang];
  const list = services[lang];

  return (
    <section id="servicos" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary">{h.eyebrow}</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-gradient">{h.title}</h2>
          <p className="mt-4 text-muted-foreground text-lg">{h.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative glass rounded-2xl p-7 hover-lift overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <Icon className="w-5 h-5 text-primary" />
                  <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-5">{s.desc}</p>

                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
