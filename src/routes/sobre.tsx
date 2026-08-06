import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, GraduationCap } from "lucide-react";
import fotoPortfolio from "@/assets/foto.portfolio.jpeg";
import LogoLoop, { LogoItem } from "@/components/ui/LogoLoop";
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiAnthropic,
  SiFigma,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiGithub,
  SiPostgresql,
  SiGooglebigquery,
  SiInstagram,
  SiFacebook,
  SiTiktok,
} from "react-icons/si";
import { FaJava, FaCss3Alt } from "react-icons/fa6";
import { VscCode } from "react-icons/vsc";

const techLogos: LogoItem[] = [
  { node: <VscCode className="text-[#007ACC]" />, title: "VS Code", ariaLabel: "VS Code" },
  { node: <FaJava className="text-[#007396]" />, title: "Java", ariaLabel: "Java" },
  { node: <SiJavascript className="text-[#F7DF1E]" />, title: "JavaScript", ariaLabel: "JavaScript" },
  { node: <SiPython className="text-[#3776AB]" />, title: "Python", ariaLabel: "Python" },
  { node: <SiHtml5 className="text-[#E34F26]" />, title: "HTML5", ariaLabel: "HTML5" },
  { node: <FaCss3Alt className="text-[#1572B6]" />, title: "CSS3", ariaLabel: "CSS3" },
  { node: <SiAnthropic className="text-[#D97706]" />, title: "Claude Code", ariaLabel: "Claude Code" },
  { node: <SiFigma className="text-[#F24E1E]" />, title: "Figma", ariaLabel: "Figma" },
  { node: <SiReact className="text-[#61DAFB]" />, title: "React", ariaLabel: "React" },
  { node: <SiNextdotjs className="text-black" />, title: "Next.js", ariaLabel: "Next.js" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", ariaLabel: "TypeScript" },
  { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", ariaLabel: "Tailwind CSS" },
  { node: <SiVercel className="text-black" />, title: "Vercel", ariaLabel: "Vercel" },
  { node: <SiGithub className="text-black" />, title: "GitHub", ariaLabel: "GitHub" },
  { node: <SiPostgresql className="text-[#4169E1]" />, title: "SQL", ariaLabel: "SQL" },
  { node: <SiGooglebigquery className="text-[#669DF6]" />, title: "BigQuery", ariaLabel: "BigQuery" },
  { node: <SiInstagram className="text-[#E4405F]" />, title: "Instagram", ariaLabel: "Instagram" },
  { node: <SiFacebook className="text-[#1877F2]" />, title: "Facebook", ariaLabel: "Facebook" },
  { node: <SiTiktok className="text-black" />, title: "TikTok", ariaLabel: "TikTok" },
];

const sobreJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Ivanilda Rodrigues Braga",
    "jobTitle": "Engenheira de Dados & Desenvolvedora Python",
    "description": "Graduanda em Ciência da Computação (5º semestre) com sólida base acadêmica em lógica de programação, algoritmos e engenharia de dados. Experiência com Python, SQL, GCP (BigQuery, Airflow), automação e mídias sociais.",
    "educationalBackground": "Ciência da Computação (5º semestre) - Universidade Cruzeiro do Sul",
    "knowsAbout": ["Python", "SQL", "BigQuery", "Apache Airflow", "GCP", "GitHub", "Vercel", "React", "TypeScript"]
  }
};

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Mim — Ivanilda Braga | Engenharia de Dados & Python" },
      {
        name: "description",
        content:
          "Ivanilda Rodrigues Braga: graduanda em Ciência da Computação (5º semestre) especialista em Engenharia de Dados, Python, SQL, GCP e automações em nuvem.",
      },
      { property: "og:title", content: "Sobre Mim — Ivanilda Braga" },
      {
        property: "og:description",
        content:
          "Perfil profissional, competências técnicas e trajetória de Ivanilda Braga em Engenharia de Dados, Python e GCP.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://ivanildabraga.dev/sobre" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(sobreJsonLd),
      },
    ],
  }),
  component: Sobre,
});

const competencias = [
  {
    titulo: "Tecnologia & Dados",
    texto:
      "Python, Java e SQL, consultas e manipulação de dados, estruturas de dados e lógica de programação avançada.",
    color: "bg-accent-yellow",
    rot: "-rotate-1",
  },
  {
    titulo: "Web & Suporte",
    texto:
      "Conceitos de redes, sistemas operacionais e desenvolvimento web básico com HTML5 e CSS3.",
    color: "bg-accent-blue",
    rot: "rotate-1",
  },
  {
    titulo: "Análise & Problemas",
    texto:
      "Perfil analítico e proativo, focado em otimização de processos, tratamento de dados operacionais e suporte a sistemas.",
    color: "bg-accent-green",
    rot: "rotate-1",
  },
  {
    titulo: "Gestão & Organização",
    texto:
      "Gestão de processos dinâmicos, controle logístico, conferência rigorosa de dados e comunicação interpessoal eficiente.",
    color: "bg-accent-pink",
    rot: "-rotate-1",
  },
];

const diferenciais = [
  "Python com foco em automação e manipulação de dados",
  "SQL, BigQuery e Java",
  "Domínio de GitHub, Vercel e plataformas de hospedagem em nuvem",
  "Português nativo | Inglês intermediário (leitura técnica)",
  "Aprendizado rápido, raciocínio lógico e resiliência",
];

const techLogosCol1 = techLogos.slice(0, 10);
const techLogosCol2 = techLogos.slice(10);

function Sobre() {
  return (
    <main className="bg-paper text-ink min-h-screen w-full overflow-x-hidden px-6 py-10 md:px-12 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-stretch md:gap-16">
        {/* Foto e Loop de Tecnologias à esquerda */}
        <div className="flex shrink-0 flex-col items-center gap-6 md:sticky md:top-12 md:w-[280px] md:items-start">
          <div className="sticker-effect relative">
            <div className="clip-paper relative h-[320px] w-[240px] overflow-hidden md:h-[380px] md:w-[280px]">
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

          {/* Loop Vertical de Tecnologias iniciando em Principais Competências e terminando em Aprendizado Rápido */}
          <div className="mt-6 flex h-[620px] w-[240px] flex-col items-center justify-start overflow-hidden md:h-[790px] md:w-[280px]">
            <span className="font-display text-ink-soft mb-3 text-xs font-bold uppercase tracking-wider">
              Tecnologias & Ferramentas
            </span>
            <div className="relative flex h-full w-full items-center justify-center gap-8 overflow-hidden">
              <LogoLoop
                logos={techLogosCol1}
                speed={45}
                direction="up"
                logoHeight={48}
                gap={28}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#f7f5f0"
                ariaLabel="Tecnologias e ferramentas - Coluna 1"
              />
              <LogoLoop
                logos={techLogosCol2}
                speed={38}
                direction="down"
                logoHeight={48}
                gap={28}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#f7f5f0"
                ariaLabel="Tecnologias e ferramentas - Coluna 2"
              />
            </div>
          </div>
        </div>

        {/* Textos à direita */}
        <div className="flex-1">
          <h1 className="font-display text-[13vw] leading-[0.85] font-extrabold tracking-tighter opacity-90 mix-blend-multiply md:text-[5.5rem]">
            <span className="block -rotate-1">SOBRE</span>
            <span className="text-ink-soft ml-8 block rotate-1">MIM</span>
          </h1>

          <p className="font-hand text-ink-soft mt-4 text-2xl md:text-3xl">
            Ivanilda Rodrigues Braga — dados, código e curiosidade
          </p>

          <div className="border-card-edge bg-card/70 mt-8 rounded-sm border p-6 shadow-[3px_3px_0px_rgba(0,0,0,0.08)] backdrop-blur-sm">
            <h2 className="font-display flex items-center gap-2 text-xl font-bold md:text-2xl">
              Resumo profissional
            </h2>
            <p className="text-ink-soft mt-3 leading-relaxed">
              Graduanda em Ciência da Computação (5º semestre) com sólida base acadêmica em
              lógica de programação, estruturas de dados, algoritmos, redes e sistemas
              operacionais. Tenho competências práticas em Python, SQL e manipulação de bases
              de dados, aliando raciocínio analítico a uma trajetória com forte vivência em
              resolução de problemas, tratamento de fluxos de informações e gestão de
              processos dinâmicos. Estou motivada a atuar na área de Dados, aplicando
              conhecimentos em extração, tratamento e estruturação de informações para apoiar
              soluções tecnológicas eficientes.
            </p>
          </div>

          <h2 className="font-display mt-12 text-2xl font-bold md:text-3xl">
            Principais competências
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {competencias.map((c) => (
              <div
                key={c.titulo}
                className={`${c.color} ${c.rot} rounded-sm p-5 shadow-[4px_4px_0px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]`}
              >
                <h3 className="font-display text-lg font-bold">{c.titulo}</h3>
                <p className="text-ink-soft mt-2 text-sm leading-relaxed">{c.texto}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display mt-12 text-2xl font-bold md:text-3xl">
            Formação acadêmica
          </h2>
          <div className="border-card-edge bg-card/70 mt-5 rounded-sm border p-6 shadow-[3px_3px_0px_rgba(0,0,0,0.08)]">
            <h3 className="font-display flex items-center gap-2 text-lg font-bold">
              <GraduationCap size={20} aria-hidden="true" />
              Ciência da Computação
            </h3>
            <p className="font-hand text-ink-soft mt-1 text-xl">
              Universidade Cruzeiro do Sul — cursando o 5º semestre
            </p>
            <p className="text-ink-soft mt-3 text-sm leading-relaxed">
              Projetos relevantes: construção de pipelines ETL no GCP (BigQuery/Airflow),
              automações com Python e IA, e controle de versão via Git/GitLab.
            </p>
          </div>

          <h2 className="font-display mt-12 text-2xl font-bold md:text-3xl">Diferenciais</h2>
          <ul className="mt-5 space-y-3">
            {diferenciais.map((d) => (
              <li
                key={d}
                className="bg-note font-hand text-ink-soft rounded-sm px-4 py-2 text-xl shadow-[2px_2px_6px_rgba(0,0,0,0.1)]"
              >
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
