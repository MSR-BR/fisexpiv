# 002 - Implement MVP Foundation

## Objective

Construir a fundação do MVP: home, navegação central, catálogo de práticas e componentes reutilizáveis da experiência principal.

## Requirements

- Criar a home com apresentação do portal.
- Exibir a lista de práticas com status e tipo de material.
- Implementar componentes reutilizáveis para cards, alertas, blocos de conteúdo e navegação.
- Definir o fluxo de descoberta entre home e páginas de prática.
- Preservar a lógica de catálogo completo, com desbloqueio gradual ao longo do semestre.

## Acceptance Criteria

- O usuário consegue acessar a home e navegar para uma prática.
- A interface deixa claro onde estão materiais, simuladores e status.
- A estrutura visual é consistente em desktop e mobile.
- A home pode ser expandida sem reescrever a base.

## Files to Modify

- `src/pages/index.astro`
- `src/components/**`
- `src/layouts/**`
- `src/styles/**`
- `src/content/practices/**`

## Tests to Run

- `npm run build`
- `npm run test`
- `npm run test:e2e`

## Completion Checklist

- [x] Home implementada
- [x] Navegação global funcional
- [x] Catálogo de práticas renderizado
- [x] Componentes reutilizáveis criados
- [x] Responsividade verificada
