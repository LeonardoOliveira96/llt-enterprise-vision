import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { WhyUs } from "@/components/landing/WhyUs";
import { Visual } from "@/components/landing/Visual";
import { Team } from "@/components/landing/Team";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LLT Consultoria — Infraestrutura, Segurança e Tecnologia Enterprise" },
      {
        name: "description",
        content:
          "Consultoria de T.I corporativa especializada em DevOps, Sistemas Corporativos, ERP, Segurança Digital e Backup Empresarial.",
      },
      { property: "og:title", content: "LLT Consultoria — Tecnologia Enterprise" },
      {
        property: "og:description",
        content: "DevOps, ERP, Segurança Digital e Backup Empresarial de alta performance.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<"pt" | "en">("pt");
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <WhyUs lang={lang} />
        <Visual lang={lang} />
        <Team lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} setLang={setLang} />
    </div>
  );
}
