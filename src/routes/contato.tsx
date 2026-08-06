import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, MapPin, MessageCircle, Linkedin } from "lucide-react";
import fotoPortfolio from "@/assets/foto.portfolio.jpeg";

const contatoJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "name": "Contato — Ivanilda Rodrigues Braga",
      "description": "Entre em contato com Ivanilda Rodrigues Braga via WhatsApp, E-mail ou LinkedIn para projetos de Engenharia de Dados, Python e Mídias Sociais."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quais são as principais especialidades de Ivanilda Rodrigues Braga?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ivanilda Rodrigues Braga é graduanda em Ciência da Computação (5º semestre) especializada em Engenharia de Dados no Google Cloud Platform (BigQuery, Apache Airflow, Arquitetura Medallion), desenvolvimento em Python, SQL e Gestão de Mídias Sociais."
          }
        },
        {
          "@type": "Question",
          "name": "Como entrar em contato com Ivanilda Braga para projetos ou consultoria?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Você pode entrar em contato diretamente via WhatsApp no número (11) 93906-8230, enviar um e-mail para ivanildarodri8@gmail.com ou conectar-se no LinkedIn linkedin.com/in/ivanilda-braga."
          }
        },
        {
          "@type": "Question",
          "name": "Quais tecnologias de cloud e banco de dados são utilizadas nos projetos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Os projetos utilizam Google Cloud Platform (GCP), Google BigQuery, Apache Airflow (Cloud Composer), Python, SQL, Java e plataformas de hospedagem em nuvem como Vercel e GitHub."
          }
        }
      ]
    }
  ]
};

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Vamos Conversar — Contato de Ivanilda Braga" },
      {
        name: "description",
        content:
          "Fale com Ivanilda Rodrigues Braga: WhatsApp, e-mail e LinkedIn para oportunidades em Engenharia de Dados, Python e automação.",
      },
      { property: "og:title", content: "Vamos Conversar — Ivanilda Braga" },
      {
        property: "og:description",
        content: "WhatsApp, e-mail e LinkedIn para novas oportunidades e projetos de dados.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://ivanildabraga.dev/contato" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(contatoJsonLd),
      },
    ],
  }),
  component: Contato,
});

const contatos = [
  {
    label: "WhatsApp",
    valor: "(11) 93906-8230",
    href: "https://wa.me/5511939068230",
    Icon: MessageCircle,
    color: "bg-accent-green",
    rot: "-rotate-1",
  },
  {
    label: "E-mail",
    valor: "ivanildarodri8@gmail.com",
    href: "mailto:ivanildarodri8@gmail.com",
    Icon: Mail,
    color: "bg-accent-yellow",
    rot: "rotate-1",
  },
  {
    label: "LinkedIn",
    valor: "linkedin.com/in/ivanilda-braga",
    href: "https://linkedin.com/in/ivanilda-braga",
    Icon: Linkedin,
    color: "bg-accent-blue",
    rot: "rotate-1",
  },
  {
    label: "Localização",
    valor: "São Paulo — SP",
    href: null,
    Icon: MapPin,
    color: "bg-accent-pink",
    rot: "-rotate-1",
  },
];

function Contato() {
  return (
    <main className="bg-paper text-ink min-h-screen w-full overflow-x-hidden px-6 py-10 md:px-12 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:gap-16">
        {/* Foto à esquerda */}
        <div className="flex shrink-0 flex-col items-center gap-8 md:sticky md:top-16 md:h-fit md:items-start">
          <div className="sticker-effect relative">
            <div className="clip-paper relative h-[320px] w-[240px] overflow-hidden md:h-[420px] md:w-[310px]">
              <img
                src={fotoPortfolio}
                alt="Retrato de Ivanilda Rodrigues Braga"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]" />
            </div>
          </div>

          <Link to="/" className="group">
            <span className="font-display text-ink bg-accent-yellow flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-[4px_4px_0px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover:-rotate-2 group-hover:scale-105 md:text-base">
              <ArrowLeft size={18} aria-hidden="true" />
              Voltar ao Início
            </span>
          </Link>
        </div>

        {/* Textos à direita */}
        <div className="flex-1">
          <h1 className="font-display text-[12vw] leading-[0.85] font-extrabold tracking-tighter opacity-90 mix-blend-multiply md:text-[5.5rem]">
            <span className="block -rotate-1">VAMOS</span>
            <span className="text-ink-soft ml-8 block rotate-1">CONVERSAR</span>
          </h1>

          <p className="font-hand text-ink-soft mt-4 text-2xl md:text-3xl">
            Aberta a oportunidades em Dados, Python e automação
          </p>

          <div className="border-card-edge bg-card/70 mt-8 rounded-sm border p-6 shadow-[3px_3px_0px_rgba(0,0,0,0.08)] backdrop-blur-sm">
            <p className="text-ink-soft leading-relaxed">
              Sou estudante de Ciência da Computação com foco em Engenharia de Dados e
              Python. Se você procura alguém para construir pipelines, automatizar rotinas ou
              organizar informações de verdade, me manda uma mensagem — respondo rapidinho.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contatos.map(({ label, valor, href, Icon, color, rot }) => {
              const conteudo = (
                <div
                  className={`${color} ${rot} h-full rounded-sm p-5 shadow-[4px_4px_0px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:rotate-0 hover:scale-[1.03]`}
                >
                  <h2 className="font-display flex items-center gap-2 text-lg font-bold">
                    <Icon size={18} aria-hidden="true" />
                    {label}
                  </h2>
                  <p className="text-ink-soft mt-2 text-sm break-words">{valor}</p>
                </div>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {conteudo}
                </a>
              ) : (
                <div key={label}>{conteudo}</div>
              );
            })}
          </div>

          {/* Seção FAQ Estruturada para AEO & RAG */}
          <div className="mt-14">
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              Perguntas Frequentes & Respostas Diretas
            </h2>
            <div className="mt-6 space-y-4">
              <div className="border-card-edge bg-card/80 rounded-sm border p-5 shadow-[3px_3px_0px_rgba(0,0,0,0.08)]">
                <h3 className="font-display text-lg font-bold">
                  Quais são as principais especialidades de Ivanilda Rodrigues Braga?
                </h3>
                <p className="text-ink-soft mt-2 text-sm leading-relaxed">
                  Ivanilda Rodrigues Braga é graduanda em Ciência da Computação (5º semestre) especializada em Engenharia de Dados no Google Cloud Platform (BigQuery, Apache Airflow, Arquitetura Medallion), desenvolvimento em Python, SQL e Gestão de Mídias Sociais.
                </p>
              </div>
              <div className="border-card-edge bg-card/80 rounded-sm border p-5 shadow-[3px_3px_0px_rgba(0,0,0,0.08)]">
                <h3 className="font-display text-lg font-bold">
                  Como entrar em contato com Ivanilda Braga para projetos ou consultoria?
                </h3>
                <p className="text-ink-soft mt-2 text-sm leading-relaxed">
                  Você pode entrar em contato diretamente via WhatsApp no número (11) 93906-8230, enviar um e-mail para ivanildarodri8@gmail.com ou conectar-se no LinkedIn em linkedin.com/in/ivanilda-braga.
                </p>
              </div>
              <div className="border-card-edge bg-card/80 rounded-sm border p-5 shadow-[3px_3px_0px_rgba(0,0,0,0.08)]">
                <h3 className="font-display text-lg font-bold">
                  Quais tecnologias de cloud e banco de dados são utilizadas nos projetos?
                </h3>
                <p className="text-ink-soft mt-2 text-sm leading-relaxed">
                  Os projetos utilizam Google Cloud Platform (GCP), Google BigQuery, Apache Airflow (Cloud Composer), Python, SQL, Java e plataformas de hospedagem em nuvem como Vercel e GitHub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
