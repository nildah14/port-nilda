import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportError } from "../lib/error-reporting";

import SnakeGame from "../components/SnakeGame";
import { Home } from "lucide-react";

function NotFoundComponent() {
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

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const globalJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ivanildabraga.dev/#person",
      "name": "Ivanilda Rodrigues Braga",
      "jobTitle": "Engenheira de Dados & Desenvolvedora Python",
      "description": "Estudante de Ciência da Computação (5º Semestre) com foco em Engenharia de Dados, pipelines GCP (BigQuery, Airflow, Medallion Architecture), automação em Python, SQL e mídias sociais.",
      "almaMater": {
        "@type": "EducationalOrganization",
        "name": "Universidade Cruzeiro do Sul"
      },
      "knowsAbout": [
        "Python",
        "SQL",
        "Google Cloud Platform (GCP)",
        "BigQuery",
        "Apache Airflow",
        "Medallion Architecture",
        "Git",
        "GitHub",
        "Vercel",
        "Social Media Management"
      ],
      "sameAs": [
        "https://linkedin.com/in/ivanilda-braga",
        "https://github.com/ivanildabraga"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://ivanildabraga.dev/#website",
      "url": "https://ivanildabraga.dev/",
      "name": "Ivanilda Braga — Portfólio de Dados & Tecnologia",
      "description": "Portfólio profissional de Ivanilda Rodrigues Braga: Engenharia de Dados, automações Python e gestão de mídias sociais.",
      "publisher": {
        "@id": "https://ivanildabraga.dev/#person"
      },
      "inLanguage": "pt-BR"
    }
  ]
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ivanilda Braga — Portfólio de Engenharia de Dados & Python" },
      { name: "description", content: "Portfólio profissional de Ivanilda Rodrigues Braga: Engenharia de Dados no GCP, automações em Python, SQL e mídias sociais." },
      { property: "og:title", content: "Ivanilda Braga — Engenharia de Dados & Python" },
      { property: "og:description", content: "Portfólio de Ivanilda Rodrigues Braga: Pipelines GCP Medallion, Apache Airflow, Python e Social Media." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&family=Caveat:wght@400;600&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(globalJsonLd),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
