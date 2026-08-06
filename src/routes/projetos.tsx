import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Database, Cpu, Workflow, FileSpreadsheet, Code2, Server } from "lucide-react";

const projetosJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Projetos Realizados de Engenharia de Dados & Automação",
  "description": "Portfólio de projetos técnicos desenvolvidos por Ivanilda Rodrigues Braga no Google Cloud Platform, Apache Airflow, Python e automação de processos.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Pipelines de Dados GCP & Arquitetura Medallion",
      "description": "Pipelines de dados Batch e Streaming no GCP utilizando Python, SQL e BigQuery com camadas Bronze, Silver e Gold."
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Orquestração ETL/ELT com Apache Airflow",
      "description": "Gerenciamento de DAGs no Apache Airflow (Cloud Composer) para orquestração de fluxos ETL/ELT."
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Automações em Python & IA Generativa",
      "description": "Automações em Python, desenvolvimento assistido por Claude Code e versionamento CI/CD."
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Gestão de Ecossistemas Digitais & CRM",
      "description": "Automação GoHighLevel (GHL), WordPress, WhatsApp API e análise de KPIs."
    }
  ]
};

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos Realizados — Ivanilda Braga | Engenharia de Dados & GCP" },
      {
        name: "description",
        content:
          "Projetos técnicos de Ivanilda Braga: Pipelines de dados GCP Medallion, Apache Airflow, automações em Python, BigQuery e gestão de ecossistemas digitais.",
      },
      { property: "og:title", content: "Projetos Realizados — Ivanilda Braga" },
      {
        property: "og:description",
        content:
          "Engenharia de Dados, pipelines GCP Medallion, automações em Python, IA Generativa e gestão de sistemas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://ivanildabraga.dev/projetos" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(projetosJsonLd),
      },
    ],
  }),
  component: Projetos,
});

const projetosList = [
  {
    id: "gcp-pipelines",
    titulo: "Pipelines de Dados GCP & Arquitetura Medallion",
    subtitulo: "Engenharia de Dados & Cloud Data Warehousing",
    descricao:
      "Desenvolvimento e manutenção de pipelines de dados em lote (Batch) e em tempo real (Streaming) no Google Cloud Platform (GCP). Aplicação dos conceitos da Arquitetura Medallion (camadas Bronze, Silver e Gold) utilizando Python, SQL e BigQuery.",
    destaques: [
      "Processamento de grandes volumes de dados no Google BigQuery",
      "Modelagem de dados dividida em camadas de qualidade (Bronze, Silver, Gold)",
      "Garantia de consistência, integridade e governança de dados",
    ],
    tags: ["GCP", "BigQuery", "Python", "SQL", "Medallion Architecture"],
    color: "bg-accent-yellow",
    rot: "-rotate-1",
    Icon: Database,
  },
  {
    id: "airflow-etl",
    titulo: "Orquestração ETL/ELT com Apache Airflow",
    subtitulo: "Automação de Dags & Workflows Cloud",
    descricao:
      "Construção e gerenciamento de DAGs no Apache Airflow (Google Cloud Composer) para orquestração de fluxos complexos de extração, transformação e carga (ETL/ELT), integrando múltiplos sistemas operacionais.",
    destaques: [
      "Agendamento automático e monitoramento de falhas em DAGs",
      "Integração nativa com APIs externas e bases de dados relacionais/NōSQL",
      "Scripts customizados em Python para tratamento de exceções",
    ],
    tags: ["Apache Airflow", "Cloud Composer", "Python", "ETL/ELT", "GCP"],
    color: "bg-accent-blue",
    rot: "rotate-1",
    Icon: Workflow,
  },
  {
    id: "ia-automacao",
    titulo: "Automações em Python & IA Generativa",
    subtitulo: "Desenvolvimento Assistido & Produtividade de Código",
    descricao:
      "Criação de scripts em Python para automação de rotinas manuais e integração entre plataformas. Utilização de IA Generativa e desenvolvimento assistido (Claude Code) para otimização contínua de código e estruturação eficiente de dados.",
    destaques: [
      "Aceleração de entregas com Claude Code e LLMs",
      "Padronização e versionamento com Git, GitHub e GitLab CI/CD",
      "Refatoração focada em desempenho e legibilidade de código",
    ],
    tags: ["Python", "Claude Code", "IA Generativa", "GitLab CI/CD", "GitHub"],
    color: "bg-accent-green",
    rot: "rotate-1",
    Icon: Cpu,
  },
  {
    id: "crm-ecossistemas",
    titulo: "Gestão de Ecossistemas Digitais & CRM",
    subtitulo: "GoHighLevel, WordPress & Análise de KPIs",
    descricao:
      "Implementação e otimização de ecossistemas digitais de vendas e suporte via GoHighLevel (GHL) e WordPress. Automação de funis de marketing, gestão de leads e integração com canais de atendimento como WhatsApp.",
    destaques: [
      "Automação de respostas e nutrição de leads em tempo real",
      "Acompanhamento analítico de KPIs de desempenho operacional",
      "Otimização de páginas de conversão e rotinas operacionais",
    ],
    tags: ["GoHighLevel (GHL)", "WordPress", "WhatsApp API", "KPIs", "CRM"],
    color: "bg-accent-pink",
    rot: "-rotate-1",
    Icon: Server,
  },
  {
    id: "erp-governanca",
    titulo: "Governança Operacional, ERP & Gestão Fiscal",
    subtitulo: "Controle Logístico, XML/NF-e & Documentação Técnica",
    descricao:
      "Gestão completa de estoque (SKU/EAN) e faturamento fiscal através do sistema Futura Server (ERP). Elaboração de documentações técnicas e materiais visuais de apoio integrando Figma, Canva, Gamma e Google Workspace.",
    destaques: [
      "Emissão, entrada e conciliação rigorosa de notas fiscais (NF-e/NFC-e/XML)",
      "Controle de inventário e roteirização de entregas",
      "Documentação de processos e manuais de operação para equipes",
    ],
    tags: ["Futura Server (ERP)", "Fiscal & XML", "Figma", "Canva", "Governança"],
    color: "bg-card/90",
    rot: "rotate-1",
    Icon: FileSpreadsheet,
  },
];

function Projetos() {
  return (
    <main className="bg-paper text-ink min-h-screen w-full overflow-x-hidden px-6 py-10 md:px-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        {/* Cabeçalho */}
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-display text-[11vw] leading-[0.85] font-extrabold tracking-tighter opacity-90 mix-blend-multiply md:text-[4.8rem]">
              <span className="block -rotate-1">PROJETOS</span>
              <span className="text-ink-soft ml-6 block rotate-1">REALIZADOS</span>
            </h1>
            <p className="font-hand text-ink-soft mt-3 text-2xl md:text-3xl">
              Engenharia de Dados, Automação Cloud & Soluções Digitais
            </p>
          </div>

          <Link to="/" className="group shrink-0">
            <span className="font-display text-ink bg-accent-yellow flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-[4px_4px_0px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover:-rotate-2 group-hover:scale-105 md:text-base">
              <ArrowLeft size={18} aria-hidden="true" />
              Voltar ao Início
            </span>
          </Link>
        </div>

        {/* Banner de destaque */}
        <div className="border-card-edge bg-card/80 mt-10 rounded-sm border p-6 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-xl font-bold md:text-2xl">
              Stack Principal & Foco Técnico
            </h2>
          </div>
          <p className="text-ink-soft mt-2 text-base leading-relaxed">
            Especializada no desenvolvimento de pipelines de dados eficientes, automação de processos complexos com Python e IA, além da integração contínua de ecossistemas digitais e sistemas de gestão.
          </p>
        </div>

        {/* Lista de projetos */}
        <div className="mt-12 space-y-8">
          {projetosList.map((p) => {
            const IconComp = p.Icon;
            return (
              <article
                key={p.id}
                className={`${p.color} ${p.rot} border-card-edge relative rounded-sm border p-6 md:p-8 shadow-[5px_5px_0px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:rotate-0 hover:scale-[1.01]`}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="bg-paper text-ink rounded-full border-2 border-black/10 p-3 shadow-sm">
                      <IconComp size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold md:text-3xl">
                        {p.titulo}
                      </h3>
                      <p className="font-hand text-ink-soft text-xl font-semibold">
                        {p.subtitulo}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-ink-soft mt-4 leading-relaxed text-base md:text-lg">
                  {p.descricao}
                </p>

                {/* Destaques */}
                <div className="mt-5 space-y-2">
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider opacity-80">
                    Principais Entregas & Atividades:
                  </h4>
                  <ul className="space-y-1">
                    {p.destaques.map((item, idx) => (
                      <li key={idx} className="text-ink flex items-start gap-2 text-sm md:text-base">
                        <span className="text-ink font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Badges / Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-paper text-ink border-ink/20 font-display rounded-full border px-3 py-1 text-xs font-semibold shadow-[2px_2px_0px_rgba(0,0,0,0.1)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Rodapé adesivo de encerramento */}
        <div className="mt-16 flex justify-center">
          <div className="bg-note font-hand text-ink-soft relative max-w-md p-6 text-center text-2xl leading-tight shadow-[3px_3px_8px_rgba(0,0,0,0.12)] rotate-1">
            <div className="bg-pin border-pin-edge absolute -top-3 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border shadow-sm" />
            Precisa de pipelines de dados ou automações sob medida?
            <div className="mt-3">
              <Link
                to="/contato"
                className="font-display text-ink bg-accent-yellow inline-flex items-center gap-2 rounded-full px-5 py-2 text-base font-bold shadow-[3px_3px_0px_rgba(0,0,0,0.15)] transition-transform hover:scale-105"
              >
                <Code2 size={18} />
                Fale Comigo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
