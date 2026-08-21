# Portfólio Nilda

Landing Page e Portfólio profissional desenvolvido em React 19, Vite, TypeScript, TanStack Router e Tailwind CSS.

## 🚀 Desenvolvimento e Edições Manuais

Este projeto é mantido via edições manuais no código-fonte local, sem dependência de editores externos.

### Pré-requisitos

Para rodar e editar o projeto localmente, certifique-se de ter instalado:
- **Node.js** (versão 18 ou superior)
- **npm**, **yarn** ou **bun**

### Passo a Passo para Execução Local

1. **Clonar o repositório:**
   ```sh
   git clone <url-do-repositorio>
   cd <nome-do-repositorio>
   ```

2. **Instalar as dependências:**
   ```sh
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```
   Acesse a aplicação no navegador pelo endereço indicado pelo Vite (geralmente `http://localhost:5173`).

---

## 🛠️ Guia de Edições Manuais no Código

- **Páginas e Roteamento (`src/routes/`):**
  - O projeto utiliza o **TanStack Router / Start** para roteamento baseado em arquivos.
  - `src/routes/index.tsx`: Página inicial.
  - `src/routes/sobre.tsx`: Seção / página Sobre.
  - `src/routes/projetos.tsx`: Portfólio de projetos.
  - `src/routes/contato.tsx`: Seção e formulário de contato.
  - `src/routes/trajetoria.tsx` e `src/routes/social-media.tsx`: Páginas de trajetória e mídias sociais.
  - `src/routes/__root.tsx`: Shell e layout principal da aplicação.

- **Componentes e Interface (`src/components/`):**
  - Adicione ou edite componentes reutilizáveis na pasta `src/components/` e elementos UI primitivos em `src/components/ui/`.

- **Estilos (`src/styles.css`):**
  - Estilos globais e configurações de temas com Tailwind CSS estão definidos em `src/styles.css`.

- **Mídias e Imagens (`public/` e `src/assets/`):**
  - Fotos e ilustrações devem ser colocadas em `public/` ou `src/assets/` para serem importadas nos componentes.

---

## 📦 Processo de Build e Produção

Após realizar suas edições manuais, siga os passos abaixo para gerar e testar a build final:

1. **Verificar formatação e erros de lint:**
   ```sh
   npm run lint
   npm run format
   ```

2. **Gerar a build de produção:**
   ```sh
   npm run build
   ```
   Este comando executa a compilação do Vite e gera a versão otimizada da aplicação.

3. **Testar a build localmente:**
   ```sh
   npm run preview
   ```

4. **Hospedagem / Deploy:**
   - A build gerada está pronta para ser implantada em plataformas como Vercel, Netlify, Cloudflare Pages ou qualquer servidor Node.js/estático.

