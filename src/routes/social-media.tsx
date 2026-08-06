import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Share2, Wrench, LayoutGrid, ImagePlus, MessageCircle, Video, ExternalLink } from "lucide-react";
import dlFitnessImg from "@/assets/clientes/dl-fitness.jpeg";
import meryTavaresImg from "@/assets/clientes/merytavaress.png";
import ostramarImg from "@/assets/clientes/ostramar.png";
import oeconomicoImg from "@/assets/clientes/o economico.png";
import abtecImg from "@/assets/clientes/abtec.png";
import atacarejoImg from "@/assets/clientes/atacarejo.png";

const clientes = [
  {
    id: 1,
    titulo: "Deniloi | Moda Fitness",
    handle: "@dl.fitness.oficial",
    nicho: "Moda & Estilo de Vida",
    desc: "Criação de conteúdo visual, catálogo de produtos e posicionamento de marca no Instagram.",
    imagem: dlFitnessImg,
    href: "https://www.instagram.com/dl.fitness.oficial/",
    color: "bg-accent-yellow",
    rot: "-rotate-1",
  },
  {
    id: 2,
    titulo: "Méry Tavares | Espaço da Beleza",
    handle: "@merytavaress_",
    nicho: "Beleza & Cuidados Pessoais",
    desc: "Design de posts promocionais, carrosséis informativos e identidade visual para salão de beleza.",
    imagem: meryTavaresImg,
    href: "https://www.instagram.com/merytavaress_/",
    color: "bg-accent-blue",
    rot: "rotate-1",
  },
  {
    id: 3,
    titulo: "Ostramar | Frutos do Mar",
    handle: "@ostramaroficial",
    nicho: "Gastronomia & Alimentação",
    desc: "Artes gastronômicas, divulgação de produtos gourmets e campanhas de delivery.",
    imagem: ostramarImg,
    href: "https://www.instagram.com/ostramaroficial/",
    color: "bg-accent-green",
    rot: "-rotate-2",
  },
  {
    id: 4,
    titulo: "O Econômico / Atacadão",
    handle: "@todahoraatacarejo",
    nicho: "Atacado & Varejo",
    desc: "Artes promocionais diárias, encartes de ofertas e comunicação visual para supermercados.",
    imagem: oeconomicoImg,
    href: "https://www.instagram.com/todahoraatacarejo/",
    color: "bg-accent-pink",
    rot: "rotate-1",
  },
  {
    id: 5,
    titulo: "ABTEC | Tecnologia & Ensino",
    handle: "@abtec.oficial",
    nicho: "Educação & Tecnologia",
    desc: "Comunicação visual, peças publicitárias e artes para cursos e treinamentos.",
    imagem: abtecImg,
    href: null,
    color: "bg-accent-green",
    rot: "-rotate-1",
  },
  {
    id: 6,
    titulo: "Atacarejo das Ofertas",
    handle: "@atacarejo",
    nicho: "Comércio & Atacarejo",
    desc: "Identidade visual promocional e peças de engajamento do cliente.",
    imagem: atacarejoImg,
    href: null,
    color: "bg-accent-yellow",
    rot: "rotate-2",
  },
];

const socialMediaJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Gestão de Mídias Sociais & Criação de Conteúdo",
  "provider": {
    "@type": "Person",
    "name": "Ivanilda Rodrigues Braga"
  },
  "serviceType": "Social Media Management & Digital Marketing",
  "description": "Estratégia de marca, planejamento de conteúdo, design e gestão de comunidade nas redes Instagram, Facebook e TikTok utilizando Canva, Photoshop, Figma, CapCut e mLabs.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Ferramentas & Plataformas Gerenciadas",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gestão de Instagram, Facebook & TikTok"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Design & Edição de Vídeos (Reels/TikToks)"
        }
      }
    ]
  }
};

export const Route = createFileRoute("/social-media")({
  head: () => ({
    meta: [
      { title: "Social Media & Gestão de Conteúdo — Ivanilda Braga" },
      {
        name: "description",
        content:
          "Gestão de mídias sociais, criação de conteúdo, estratégia de marca e portfólio de clientes por Ivanilda Braga.",
      },
      { property: "og:title", content: "Social Media — Ivanilda Braga" },
      {
        property: "og:description",
        content:
          "Ferramentas de criação (Canva, Photoshop, Figma, CapCut, mLabs), plataformas (Instagram, Facebook, TikTok) e cases de clientes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://ivanildabraga.dev/social-media" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(socialMediaJsonLd),
      },
    ],
  }),
  component: SocialMedia,
});

const ferramentas = [
  { nome: "Canva", desc: "Design ágil & artes promocionais", color: "bg-accent-yellow", rot: "-rotate-1" },
  { nome: "CapCut", desc: "Edição de vídeos curtos & Reels/TikToks", color: "bg-accent-blue", rot: "rotate-1" },
  { nome: "Trello", desc: "Organização do calendário editorial", color: "bg-accent-green", rot: "-rotate-1" },
  { nome: "Figma", desc: "Prototipagem visual & layouts de redes", color: "bg-accent-pink", rot: "rotate-1" },
  { nome: "Photoshop", desc: "Tratamento de imagens & manipulação", color: "bg-card/90", rot: "-rotate-1" },
  { nome: "Freepik", desc: "Recursos gráficos & elementos vetoriais", color: "bg-accent-yellow", rot: "rotate-1" },
  { nome: "Pinterest", desc: "Pesquisa de tendências & moodboards", color: "bg-accent-blue", rot: "-rotate-1" },
  { nome: "mLabs", desc: "Agendamento & gestão de métricas", color: "bg-accent-green", rot: "rotate-1" },
];

const plataformas = [
  {
    nome: "Instagram",
    foco: "Reels, Carrosséis informativos, Stories diários e identidade visual marcante.",
    color: "bg-accent-pink",
    rot: "-rotate-1",
    Icon: ImagePlus,
  },
  {
    nome: "Facebook",
    foco: "Gestão de comunidade, posts institucionais, eventos e campanhas de anúncios.",
    color: "bg-accent-blue",
    rot: "rotate-1",
    Icon: MessageCircle,
  },
  {
    nome: "TikTok",
    foco: "Vídeos dinâmicos, tendências de áudio, roteirização criativa e engajamento jovem.",
    color: "bg-accent-yellow",
    rot: "-rotate-1",
    Icon: Video,
  },
];

const clientesPlaceholder = [
  { id: 1, titulo: "Cliente / Marca #01", nicho: "Moda & Estilo de Vida", color: "bg-accent-yellow", rot: "-rotate-1" },
  { id: 2, titulo: "Cliente / Marca #02", nicho: "Tecnologia & Serviços", color: "bg-accent-blue", rot: "rotate-1" },
  { id: 3, titulo: "Cliente / Marca #03", nicho: "Gastronomia & Alimentação", color: "bg-accent-green", rot: "-rotate-2" },
  { id: 4, titulo: "Cliente / Marca #04", nicho: "Saúde & Bem-Estar", color: "bg-accent-pink", rot: "rotate-1" },
  { id: 5, titulo: "Cliente / Marca #05", nicho: "Educação & Cursos", color: "bg-card/90", rot: "-rotate-1" },
  { id: 6, titulo: "Cliente / Marca #06", nicho: "E-Commerce & Varejo", color: "bg-accent-yellow", rot: "rotate-2" },
];

function SocialMedia() {
  return (
    <main className="bg-paper text-ink min-h-screen w-full overflow-x-hidden px-6 py-10 md:px-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        {/* Cabeçalho */}
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-display text-[11vw] leading-[0.85] font-extrabold tracking-tighter opacity-90 mix-blend-multiply md:text-[4.8rem]">
              <span className="block -rotate-1">SOCIAL MEDIA</span>
              <span className="text-ink-soft ml-6 block rotate-1">& CONTEÚDO</span>
            </h1>
            <p className="font-hand text-ink-soft mt-3 text-2xl md:text-3xl">
              Criação de conteúdo, estratégia visual e gestão de comunidades
            </p>
          </div>

          <Link to="/" className="group shrink-0">
            <span className="font-display text-ink bg-accent-yellow flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-[4px_4px_0px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover:-rotate-2 group-hover:scale-105 md:text-base">
              <ArrowLeft size={18} aria-hidden="true" />
              Voltar ao Início
            </span>
          </Link>
        </div>

        {/* Seção Ferramentas */}
        <div className="mt-12">
          <h2 className="font-display flex items-center gap-3 text-3xl font-bold">
            <Wrench size={26} />
            Ferramentas de Trabalho
          </h2>
          <p className="text-ink-soft mt-2 text-base">
            Softwares e plataformas utilizadas no dia a dia para planejamento, design, edição e agendamento:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ferramentas.map((f) => (
              <div
                key={f.nome}
                className={`${f.color} ${f.rot} border-card-edge rounded-sm border p-5 shadow-[4px_4px_0px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:rotate-0 hover:scale-[1.03]`}
              >
                <h3 className="font-display text-xl font-bold">{f.nome}</h3>
                <p className="text-ink-soft mt-1 text-sm leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Seção Plataformas Gerenciadas */}
        <div className="mt-14">
          <h2 className="font-display flex items-center gap-3 text-3xl font-bold">
            <Share2 size={26} />
            Plataformas Gerenciadas
          </h2>
          <p className="text-ink-soft mt-2 text-base">
            Canais de comunicação social com estratégia focada no público-alvo e posicionamento de marca:
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {plataformas.map((p) => {
              const IconComp = p.Icon;
              return (
                <div
                  key={p.nome}
                  className={`${p.color} ${p.rot} border-card-edge rounded-sm border p-6 shadow-[5px_5px_0px_rgba(0,0,0,0.14)] transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]`}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-paper text-ink rounded-full border border-black/10 p-2.5 shadow-sm">
                      <IconComp size={22} aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-2xl font-bold">{p.nome}</h3>
                  </div>
                  <p className="text-ink-soft mt-3 text-sm leading-relaxed">{p.foco}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Seção Portfólio de Clientes & Cases Reais */}
        <div className="mt-16">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h2 className="font-display flex items-center gap-3 text-3xl font-bold">
              <LayoutGrid size={26} />
              Portfólio de Clientes & Cases
            </h2>
            <span className="font-hand text-ink-soft text-xl">
              Projetos e marcas atendidas em mídias sociais
            </span>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clientes.map((c) => (
              <div
                key={c.id}
                className={`${c.color} ${c.rot} border-card-edge relative flex flex-col justify-between rounded-sm border p-5 shadow-[4px_4px_0px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-black/10 pb-3">
                    <span className="font-display text-xs font-bold uppercase tracking-wider opacity-70">
                      Case #{c.id < 10 ? `0${c.id}` : c.id}
                    </span>
                    <span className="font-mono text-xs font-semibold opacity-80">{c.handle}</span>
                  </div>
                  <h3 className="font-display mt-3 text-xl font-bold">{c.titulo}</h3>
                  <p className="font-hand text-ink-soft text-lg">{c.nicho}</p>
                </div>

                {/* Imagem da arte original do cliente ajustada ao tamanho real */}
                <div className="my-4 flex w-full items-center justify-center overflow-hidden rounded border border-black/10 bg-paper/50 p-2 shadow-inner">
                  <img
                    src={c.imagem}
                    alt={`Arte e design para ${c.titulo}`}
                    className="h-auto w-full object-contain rounded transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <p className="text-ink-soft mb-4 text-sm font-medium leading-relaxed">
                  {c.desc}
                </p>

                <div className="flex justify-end">
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-paper text-ink font-display flex items-center gap-1.5 rounded-full border border-black/10 px-4 py-1.5 text-xs font-bold shadow-xs transition-transform hover:scale-105 active:scale-95"
                    >
                      <span>Ver no Instagram</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="bg-paper/80 text-ink-soft font-display rounded-full border border-black/10 px-3 py-1 text-xs font-semibold shadow-xs">
                      Arte de Mídia Social
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rodapé CTA */}
        <div className="mt-16 flex justify-center">
          <div className="bg-note font-hand text-ink-soft relative max-w-md p-6 text-center text-2xl leading-tight shadow-[3px_3px_8px_rgba(0,0,0,0.12)] rotate-1">
            <div className="bg-pin border-pin-edge absolute -top-3 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border shadow-sm" />
            Quer levar a sua marca para o próximo nível nas redes?
            <div className="mt-3">
              <Link
                to="/contato"
                className="font-display text-ink bg-accent-yellow inline-flex items-center gap-2 rounded-full px-5 py-2 text-base font-bold shadow-[3px_3px_0px_rgba(0,0,0,0.15)] transition-transform hover:scale-105"
              >
                Fale Comigo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
