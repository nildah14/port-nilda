import { createFileRoute, Link } from "@tanstack/react-router";
import SnakeGame from "@/components/SnakeGame";
import { Home } from "lucide-react";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "404 — Página Não Encontrada | Ivanilda Braga" },
      { name: "description", content: "Página não encontrada no portfólio de Ivanilda Braga." },
    ],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <main className="bg-paper text-ink relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden p-6 md:p-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        {/* Título Principal 404 */}
        <h1 className="font-display text-center text-7xl font-extrabold tracking-tighter opacity-90 mix-blend-multiply sm:text-8xl md:text-9xl">
          <span className="inline-block origin-bottom-right -rotate-3 transform text-accent-pink">4</span>
          <span className="inline-block rotate-2 transform text-accent-yellow">0</span>
          <span className="inline-block origin-bottom-left -rotate-2 transform text-accent-blue">4</span>
        </h1>

        <div className="flex flex-col items-center gap-2">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            Ops! Essa página sumiu no meio do código... 🐍
          </h2>
          <p className="font-hand text-ink-soft max-w-md text-xl md:text-2xl">
            O caminho digitado não existe! Que tal jogar uma partida retro de Snake II enquanto se reconecta?
          </p>
        </div>

        {/* Jogo da Cobrinha (Snake II) */}
        <div className="mt-2">
          <SnakeGame />
        </div>

        {/* Botão de Retorno */}
        <div className="mt-4">
          <Link to="/" className="group">
            <span className="font-display text-ink bg-accent-yellow flex items-center gap-2 rounded-full border-2 border-transparent px-8 py-3.5 text-base font-semibold shadow-[4px_4px_0px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover:-rotate-2 group-hover:scale-105">
              <Home size={20} aria-hidden="true" />
              Voltar à Página Inicial
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
