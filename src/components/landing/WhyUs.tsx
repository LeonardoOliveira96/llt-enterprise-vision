import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Zap, Lock, TrendingUp, Headphones, Settings2 } from "lucide-react";

const copy = {
  pt: {
    eyebrow: "Por que escolher",
    title: "Engenharia que sustenta operações de classe mundial",
    pillars: [
      { icon: Zap, t: "Performance", d: "Arquiteturas otimizadas para alta carga." },
      { icon: Lock, t: "Segurança", d: "Proteção em todas as camadas." },
      { icon: TrendingUp, t: "Escalabilidade", d: "Crescimento sem fricção." },
      { icon: Headphones, t: "Suporte Especializado", d: "Time sênior à disposição." },
      { icon: Settings2, t: "Soluções Sob Medida", d: "Cada projeto tratado como único." },
    ],
    metrics: [
      { value: 99.99, suffix: "%", label: "Uptime garantido" },
      { value: 180, suffix: "+", label: "Projetos entregues" },
      { value: 15, suffix: "min", label: "Tempo médio de resposta" },
      { value: 24, suffix: "/7", label: "Disponibilidade" },
    ],
  },
  en: {
    eyebrow: "Why choose us",
    title: "Engineering that powers world-class operations",
    pillars: [
      { icon: Zap, t: "Performance", d: "Architectures optimized for heavy load." },
      { icon: Lock, t: "Security", d: "Protection across every layer." },
      { icon: TrendingUp, t: "Scalability", d: "Growth without friction." },
      { icon: Headphones, t: "Specialized Support", d: "Senior team always available." },
      { icon: Settings2, t: "Tailored Solutions", d: "Each project treated as unique." },
    ],
    metrics: [
      { value: 99.99, suffix: "%", label: "Guaranteed uptime" },
      { value: 180, suffix: "+", label: "Delivered projects" },
      { value: 15, suffix: "min", label: "Avg. response time" },
      { value: 24, suffix: "/7", label: "Availability" },
    ],
  },
};

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  const display = value % 1 === 0 ? Math.floor(n) : n.toFixed(2);
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function WhyUs({ lang }: { lang: "pt" | "en" }) {
  const c = copy[lang];
  return (
    <section id="sobre" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary">{c.eyebrow}</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-gradient">{c.title}</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {c.pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 hover-lift"
              >
                <Icon className="w-5 h-5 text-primary mb-4" />
                <h3 className="font-semibold mb-1.5">{p.t}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.d}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="glass-strong rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {c.metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="font-display text-4xl md:text-5xl font-semibold text-gradient-cyan">
                  <Counter value={m.value} suffix={m.suffix} />
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
