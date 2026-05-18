import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, ArrowRight } from "lucide-react";
import { useState } from "react";

const copy = {
  pt: {
    eyebrow: "Contato",
    title: "Vamos conversar sobre seu próximo projeto",
    sub: "Resposta em até 24h por nossa equipe sênior.",
    name: "Nome",
    email: "Email corporativo",
    company: "Empresa",
    msg: "Como podemos ajudar?",
    send: "Enviar mensagem",
    or: "Ou fale diretamente",
  },
  en: {
    eyebrow: "Contact",
    title: "Let's talk about your next project",
    sub: "Reply within 24h by our senior team.",
    name: "Name",
    email: "Corporate email",
    company: "Company",
    msg: "How can we help?",
    send: "Send message",
    or: "Or reach us directly",
  },
};

export function Contact({ lang }: { lang: "pt" | "en" }) {
  const t = copy[lang];
  const [sent, setSent] = useState(false);

  return (
    <section id="contato" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary">{t.eyebrow}</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-gradient">{t.title}</h2>
          <p className="mt-4 text-muted-foreground text-lg">{t.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="lg:col-span-3 glass-strong rounded-3xl p-8 md:p-10 space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label={t.name} type="text" name="name" />
              <Field label={t.email} type="email" name="email" />
            </div>
            <Field label={t.company} type="text" name="company" />
            <Field label={t.msg} type="textarea" name="msg" />

            <button
              type="submit"
              className="group w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_40px_-5px_var(--cyan-glow)] transition-all"
            >
              {sent ? "✓" : t.send}
              {!sent && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{t.or}</p>
            {[
              { icon: MessageCircle, label: "WhatsApp", value: "+55 (11) 9 9999-9999", href: "https://wa.me/5511999999999" },
              { icon: Mail, label: "Email", value: "contato@lltconsultoria.com", href: "mailto:contato@lltconsultoria.com" },
              { icon: Linkedin, label: "LinkedIn", value: "/llt-consultoria", href: "#" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="glass rounded-2xl p-5 flex items-center gap-4 hover-lift group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{item.label}</div>
                    <div className="text-sm font-medium">{item.value}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type, name }: { label: string; type: string; name: string }) {
  if (type === "textarea") {
    return (
      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
        <textarea
          name={name}
          rows={4}
          className="mt-2 w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
        />
      </label>
    );
  }
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <input
        type={type}
        name={name}
        className="mt-2 w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </label>
  );
}
