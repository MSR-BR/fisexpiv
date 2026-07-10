# 001 - Create Project Structure

## Objective

Iniciar a base técnica do portal sem preencher conteúdo final, criando apenas a estrutura do projeto, configuração de ferramentas e esqueleto editorial.

## Requirements

- Inicializar o projeto com Astro e TypeScript.
- Criar a estrutura de pastas prevista em `architecture.md`.
- Configurar base de estilos, layouts e navegação mínima.
- Preparar suporte a MDX para conteúdo de práticas.
- Adicionar validações iniciais para metadados de práticas.
- Criar um catálogo inicial com as nove práticas no menu.
- Deixar apenas `Revisão` e `Carga-massa` habilitadas nesta etapa.
- Refletir a linguagem visual-base dos projetos de referência `termo` e `qm`.

## Acceptance Criteria

- O projeto instala e inicia localmente.
- Existe uma home placeholder coerente com o portal.
- Existe uma rota dinâmica prevista para páginas de prática.
- Existe um template ou layout reutilizável para práticas.
- Existe um local claro para conteúdo, assets e simuladores por prática.
- O menu mostra todas as práticas definidas pelo usuário.
- As práticas não priorizadas aparecem como indisponíveis ou em preparação.

## Files to Modify

- `package.json`
- `astro.config.*`
- `tsconfig.json`
- `src/**`
- `public/**`
- `tests/**`
- `scripts/**`

## Tests to Run

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run test`

## Completion Checklist

- [x] Projeto inicializado
- [x] Estrutura de pastas criada
- [x] MDX configurado
- [x] Layout base criado
- [x] Navegação mínima criada
- [x] Testes básicos executados
