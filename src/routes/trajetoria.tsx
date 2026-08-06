import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Briefcase, GraduationCap, Award, Calendar, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/trajetoria")({
  head: () => ({
    meta: [
      { title: "Conheça Minha Trajetória — Ivanilda Braga | Experiência & Carreira" },
      {
        name: "description",
        content:
          "Trajetória profissional e acadêmica de Ivanilda Rodrigues Braga: Engenharia de Dados, Automação, Gestão de Operações e Ciência da Computação.",
      },
      { property: "og:title", content: "Conheça Minha Trajetória — Ivanilda Braga" },
      {
        property: "og:description",
        content: "Histórico profissional, cargos, formação e evolução de competências em tecnologia e dados.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Trajetoria,
});

const experiencias = [
  {
    cargo: "Assistente de Projetos Digitais & Automação",
    empresa: "OOWE COMPANY",
    periodo: "01/2026 – 07/2026",
    descricao:
      "Foco em engenharia de dados, automações inteligentes e governança de processos no Google Cloud Platform.",
    responsabilidades: [
      "Desenvolvimento e manutenção de pipelines de dados (Batch e Streaming) no GCP com Python, SQL e BigQuery (Arquitetura Medallion).",
      "Orquestração de fluxos ETL/ELT e automações utilizando Apache Airflow (Google Cloud Composer) e scripts Python.",
      "Gestão de ecossistemas digitais e CRM via GoHighLevel (GHL) e WordPress, otimizando processos operacionais e KPIs.",
      "Uso de IA Generativa e desenvolvimento assistido (Claude Code) para estruturação de dados e otimização de código.",
      "Controle de versão e CI/CD com Git, GitHub e GitLab CI/CD no VS Code.",
      "Documentação técnica integrando Figma, Canva, Gamma e Google Workspace com foco em governança.",
    ],
    color: "bg-accent-yellow",
    rot: "-rotate-1",
    badge: "Mais Recente",
  },
  {
    cargo: "Gerente Geral",
    empresa: "AP COSTA",
    periodo: "2023 – 2026",
    descricao:
      "Gestão completa de operações, processos fiscais, estoque ERP, CRM de vendas e liderança de equipe.",
    responsabilidades: [
      "Gestão Logística e Operacional: Supervisão de recebimento, conferência, armazenagem e expedição de mercadorias.",
      "Gestão Fiscal e Faturamento: Emissão, conferência e entrada de notas fiscais (NF-e/NFC-e/XML) cumprindo exigências contábeis.",
      "Gestão de Estoque: Controle de inventário, reposição, código de barras (SKU/EAN) e classificação via sistema Futura Server (ERP).",
      "CRM e Marketing Digital: Automação de marketing, gestão de leads, funis de vendas e atendimento via GoHighLevel e WhatsApp.",
      "Gestão de Frota, Compras e Liderança: Roteirização de entregas, negociação comercial com fornecedores e treinamento de equipe.",
    ],
    color: "bg-accent-blue",
    rot: "rotate-1",
  },
  {
    cargo: "Operador de Loja",
    empresa: "Assaí Atacadista",
    periodo: "2022 – 2023",
    descricao:
      "Atuação em rotinas operacionais e atendimento em ambiente de alta rotatividade sob metas desafiadoras.",
    responsabilidades: [
      "Suporte e esclarecimento de dúvidas para garantir a melhor experiência do cliente.",
      "Organização estratégica de mercadorias, controle de estoque e inventários.",
      "Controle de qualidade e auditoria de validade em câmaras frias e gôndolas.",
      "Cumprimento rigoroso de normas de segurança alimentar e higiene.",
    ],
    color: "bg-accent-green",
    rot: "rotate-1",
  },
  {
    cargo: "Atendente e Operador de Caixa",
    empresa: "Shopping 10",
    periodo: "2020 – 2022",
    descricao:
      "Atendimento ao público, conciliação financeira de vendas e suporte operacional.",
    responsabilidades: [
      "Registro de compras e conciliação de pagamentos em múltiplas formas eletrônicas e dinheiro.",
      "Abertura, controle de troco e fechamento de caixa com conferência rigorosa de valores.",
      "Emissão de notas fiscais e organização do ponto de venda.",
      "Suporte no desenvolvimento de ações promocionais e campanhas internas.",
    ],
    color: "bg-accent-pink",
    rot: "-rotate-1",
  },
];

const conquistas = [
  "Construção prática de pipelines ETL/ELT no GCP (BigQuery, Apache Airflow)",
  "Fluência em automação de tarefas repetitivas e manipulação de dados com Python",
  "Experiência sólida na integração de ERPs, CRMs (GoHighLevel) e sistemas de faturamento fiscal",
  "Inglês intermediário focado em leitura técnica e documentação de código",
];

function Trajetoria() {
  return (
    <main className="bg-paper text-ink min-h-screen w-full overflow-x-hidden px-6 py-10 md:px-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        {/* Cabeçalho */}
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-display text-[11vw] leading-[0.85] font-extrabold tracking-tighter opacity-90 mix-blend-multiply md:text-[4.8rem]">
              <span className="block -rotate-1">CONHEÇA MINHA</span>
              <span className="text-ink-soft ml-6 block rotate-1">TRAJETÓRIA</span>
            </h1>
            <p className="font-hand text-ink-soft mt-3 text-2xl md:text-3xl">
              Evolução contínua: da gestão de processos à Engenharia de Dados
            </p>
          </div>

          <Link to="/" className="group shrink-0">
            <span className="font-display text-ink bg-accent-yellow flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-[4px_4px_0px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover:-rotate-2 group-hover:scale-105 md:text-base">
              <ArrowLeft size={18} aria-hidden="true" />
              Voltar ao Início
            </span>
          </Link>
        </div>

        {/* Bloco Formação Acadêmica */}
        <div className="border-card-edge bg-card/90 mt-10 rounded-sm border p-6 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <GraduationCap size={28} className="text-ink shrink-0" />
            <div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                Formação Acadêmica & Base Técnica
              </h2>
              <p className="font-hand text-ink-soft text-xl">
                Ciência da Computação — Universidade Cruzeiro do Sul (Cursando o 5º Semestre)
              </p>
            </div>
          </div>
          <p className="text-ink-soft mt-3 text-base leading-relaxed">
            Sólida formação em lógica de programação, estruturas de dados, algoritmos, redes de computadores e sistemas operacionais. Foco de estudo prático voltado para Engenharia de Dados, Linguagens de Programação (Python, SQL, Java) e Cloud Computing.
          </p>
        </div>

        {/* Linha do Tempo de Experiência */}
        <div className="mt-14">
          <h2 className="font-display flex items-center gap-3 text-3xl font-bold">
            <Briefcase size={26} />
            Experiência Profissional
          </h2>

          <div className="relative mt-8 space-y-8 pl-4 md:pl-6 border-l-4 border-black/20">
            {experiencias.map((exp, index) => (
              <div key={exp.cargo + index} className="relative group">
                {/* Marcador da linha do tempo */}
                <div className="bg-accent-yellow border-2 border-black absolute -left-[27px] md:-left-[35px] top-6 h-6 w-6 rounded-full shadow-sm" />

                <article
                  className={`${exp.color} ${exp.rot} border-card-edge rounded-sm border p-6 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:rotate-0 hover:scale-[1.01]`}
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-2xl font-bold">{exp.cargo}</h3>
                        {exp.badge && (
                          <span className="bg-paper text-ink border-black/20 font-display rounded-full border px-3 py-0.5 text-xs font-bold shadow-xs">
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <p className="font-hand text-ink-soft text-xl font-semibold">
                        {exp.empresa}
                      </p>
                    </div>

                    <div className="font-display bg-paper/90 text-ink flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold shadow-xs w-fit">
                      <Calendar size={14} />
                      {exp.periodo}
                    </div>
                  </div>

                  <p className="text-ink-soft mt-3 text-base leading-relaxed">
                    {exp.descricao}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.responsabilidades.map((resp, idx) => (
                      <li key={idx} className="text-ink flex items-start gap-2 text-sm md:text-base">
                        <CheckCircle2 size={16} className="mt-1 shrink-0 opacity-70" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Diferenciais & Competências Chave */}
        <div className="mt-14">
          <h2 className="font-display flex items-center gap-3 text-3xl font-bold">
            <Award size={26} />
            Diferenciais & Perfil
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {conquistas.map((item, idx) => (
              <div
                key={idx}
                className="bg-note font-hand text-ink-soft rounded-sm p-5 text-xl shadow-[3px_3px_6px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Rodapé CTA */}
        <div className="mt-16 flex justify-center">
          <div className="bg-note font-hand text-ink-soft relative max-w-md p-6 text-center text-2xl leading-tight shadow-[3px_3px_8px_rgba(0,0,0,0.12)] -rotate-1">
            <div className="bg-pin border-pin-edge absolute -top-3 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border shadow-sm" />
            Gostou da minha jornada? Vamos trocar uma ideia!
            <div className="mt-3">
              <Link
                to="/contato"
                className="font-display text-ink bg-accent-yellow inline-flex items-center gap-2 rounded-full px-5 py-2 text-base font-bold shadow-[3px_3px_0px_rgba(0,0,0,0.15)] transition-transform hover:scale-105"
              >
                Entrar em Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
