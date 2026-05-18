import { motion } from "framer-motion";
import { Activity, Cloud, Cpu, Database, Shield } from "lucide-react";

const copy = {
  pt: {
    eyebrow: "Soluções",
    title: "Infraestrutura visível, gerenciável, escalável",
    sub: "Dashboards, monitoramento e telemetria que dão clareza total sobre sua operação.",
  },
  en: {
    eyebrow: "Solutions",
    title: "Infrastructure that is visible, manageable, scalable",
    sub: "Dashboards, monitoring and telemetry that give total clarity over your operation.",
  },
};

export function Visual({ lang }: { lang: "pt" | "en" }) {
  const c = copy[lang];

  return (
    <section id="solucoes" className="relative py-32 px-6 overflow-hidden">
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative glass-strong rounded-3xl p-6 md:p-10 overflow-hidden"
        >
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Main dashboard */}
            <div className="lg:col-span-2 glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">System Overview</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Live</span>
                </div>
              </div>

              {/* Chart */}
              <svg viewBox="0 0 600 200" className="w-full h-40">
                <defs>
                  <linearGradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.78 0.16 220)" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="oklch(0.78 0.16 220)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[40, 80, 120, 160].map((y) => (
                  <line key={y} x1="0" x2="600" y1={y} y2={y} stroke="currentColor" strokeOpacity="0.05" />
                ))}
                <motion.path
                  d="M0,160 C60,140 100,90 160,100 C220,110 260,50 320,70 C380,90 420,40 480,55 C540,70 580,30 600,40 L600,200 L0,200 Z"
                  fill="url(#chartGrad)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                <motion.path
                  d="M0,160 C60,140 100,90 160,100 C220,110 260,50 320,70 C380,90 420,40 480,55 C540,70 580,30 600,40"
                  fill="none"
                  stroke="oklch(0.78 0.16 220)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: "easeOut" }}
                />
              </svg>

              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                {[
                  { l: "CPU", v: "42%" },
                  { l: "Memory", v: "68%" },
                  { l: "Network", v: "1.2Gb/s" },
                ].map((m) => (
                  <div key={m.l}>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.l}</div>
                    <div className="font-display text-xl font-semibold mt-1">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Side cards */}
            <div className="flex flex-col gap-5">
              <div className="glass rounded-2xl p-5">
                <Cloud className="w-4 h-4 text-primary mb-3" />
                <div className="text-xs text-muted-foreground">Cloud Nodes</div>
                <div className="font-display text-2xl font-semibold mt-1">128</div>
                <div className="mt-3 flex gap-1">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 h-6 rounded-sm bg-primary/30"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: [0.3, 0.7, 0.4, 0.9, 0.6][i % 5] }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      style={{ transformOrigin: "bottom" }}
                    />
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-5 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-[10px] text-emerald-400">SECURE</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { i: Database, l: "DB Cluster" },
                    { i: Cpu, l: "Compute" },
                    { i: Cloud, l: "Storage" },
                  ].map((row, i) => {
                    const Icon = row.i;
                    return (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Icon className="w-3 h-3" /> {row.l}
                        </span>
                        <span className="text-emerald-400">●</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
