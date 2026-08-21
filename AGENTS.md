# Diretrizes para Agentes / Desenvolvimento

## Edições Manuais e Estrutura do Código

- **Stack**: React 19, Vite, TypeScript, TanStack Start / Router e Tailwind CSS v4.
- **Roteamento**: Roteamento baseado em arquivos localizado em `src/routes/`. O layout raiz é `src/routes/__root.tsx`. O arquivo `routeTree.gen.ts` é gerado automaticamente pelo TanStack Router.
- **Estilos**: Estilos principais definidos em `src/styles.css`.
- **Scripts do Projeto**:
  - `npm run dev`: Inicia o servidor de desenvolvimento Vite.
  - `npm run build`: Executa o build de produção via Vite / Nitro.
  - `npm run lint`: Executa a verificação com ESLint.
  - `npm run format`: Formata os arquivos do projeto via Prettier.

