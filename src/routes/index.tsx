import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, User, FlaskConical, Mail, Share2 } from "lucide-react";
import fotoPortfolio from "@/assets/foto.portfolio.jpeg";
import willImg from "@/assets/WILL.png";
import setaImg from "@/assets/seta.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfólio Criativo — Design que salta aos olhos" },
      {
        name: "description",
        content:
          "Portfólio criativo de design visual: trabalhos selecionados, experimentos no laboratório e contato para novos projetos.",
      },
      { property: "og:title", content: "Portfólio Criativo — Design que salta aos olhos" },
      {
        property: "og:description",
        content:
          "Portfólio criativo de design visual: trabalhos selecionados, experimentos e contato.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const botoes = [
  {
    href: "/projetos",
    label: "Projetos Realizados",
    Icon: Briefcase,
    color: "bg-accent-yellow",
    pos: "top-[10%] left-[5%] md:left-[15%]",
    anim: "animate-float-1",
    hoverRot: "group-hover:-rotate-3",
  },
  {
    href: "/sobre",
    label: "Sobre Mim",
    Icon: User,
    color: "bg-accent-blue",
    pos: "top-[12%] right-[5%] md:right-[18%]",
    anim: "animate-float-2",
    hoverRot: "group-hover:rotate-3",
  },
  {
    href: "/social-media",
    label: "Social Media",
    Icon: Share2,
    characterImg: setaImg,
    imgStyle: "pointer-events-none absolute -left-24 top-1 z-40 h-16 w-auto md:-left-36 md:top-2 md:h-24 object-contain drop-shadow-[2px_4px_6px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-110",
    color: "bg-accent-yellow",
    pos: "top-[48%] right-[4%] md:right-[12%]",
    anim: "animate-float-3",
    hoverRot: "group-hover:-rotate-2",
  },
  {
    href: "/trajetoria",
    label: "Conheça Minha Trajetória",
    Icon: FlaskConical,
    characterImg: willImg,
    imgStyle: "pointer-events-none absolute -left-20 -top-6 z-40 h-36 w-auto md:-left-28 md:-top-8 md:h-48 object-contain drop-shadow-[3px_6px_10px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105",
    color: "bg-accent-green",
    pos: "bottom-[28%] left-[6%] md:left-[16%]",
    anim: "animate-float-3",
    hoverRot: "group-hover:rotate-2",
  },
  {
    href: "/contato",
    label: "Vamos Conversar",
    Icon: Mail,
    color: "bg-accent-pink",
    pos: "bottom-[16%] right-[8%] md:right-[15%]",
    anim: "animate-float-1",
    hoverRot: "group-hover:-rotate-2",
  },
];

function Index() {
  return (
    <main className="bg-paper text-ink relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden p-6 md:p-12">
      <h1 className="font-display text-center text-[12vw] leading-[0.85] font-extrabold tracking-tighter opacity-90 mix-blend-multiply md:text-[10rem]">
        <span className="block origin-bottom-right -rotate-2 transform">OLÁ,</span>
        <span className="text-ink-soft ml-12 block rotate-1">PESSOAL</span>
      </h1>



      {/* Retrato central */}
      <div className="relative z-20 -mt-4 md:-mt-8">
        <div className="sticker-effect relative">
          <div className="clip-paper relative h-[320px] w-[240px] overflow-hidden md:h-[440px] md:w-[330px]">
            <img
              src={fotoPortfolio}
              alt="Retrato da designer"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]" />
          </div>
        </div>

      </div>

      {/* Botões flutuantes */}
      {botoes.map(({ href, label, Icon, characterImg, imgStyle, color, pos, anim, hoverRot }) => {
        const inner = (
          <div className="relative inline-flex items-center">
            {characterImg && (
              <img
                src={characterImg}
                alt=""
                className={imgStyle || "pointer-events-none absolute -left-16 -top-8 z-40 h-20 w-auto object-contain"}
              />
            )}
            <span
              className={`font-display text-ink flex items-center gap-2 rounded-full border-2 border-transparent px-6 py-3 text-sm font-semibold shadow-[4px_4px_0px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[6px_6px_0px_rgba(0,0,0,0.2)] md:text-base ${color} ${hoverRot}`}
            >
              <Icon size={18} aria-hidden="true" />
              {label}
            </span>
          </div>
        );
        const cls = `group absolute z-30 ${pos} ${anim}`;
        return href.startsWith("/") ? (
          <Link key={label} to={href} className={cls}>
            {inner}
          </Link>
        ) : (
          <a key={label} href={href} className={cls}>
            {inner}
          </a>
        );
      })}

      {/* Recado adesivo */}
      <div className="animate-float-2 absolute right-6 bottom-6 z-40 hidden rotate-3 md:right-12 md:bottom-12 md:block">
        <div className="bg-note font-hand text-ink-soft relative w-40 p-4 text-center text-xl leading-tight shadow-[2px_2px_6px_rgba(0,0,0,0.1)]">
          <div className="bg-pin border-pin-edge absolute -top-3 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border shadow-sm" />
          Chegou até aqui?
        </div>
      </div>
    </main>
  );
}
