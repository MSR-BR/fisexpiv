# 004 - Implement Core Feature 2

## Objective

Adicionar a infraestrutura de simuladores e blocos de aquisição/análise de dados ligados às práticas.

## Requirements

- Criar um padrão para anexar simuladores a práticas.
- Implementar componentes para parâmetros, tabelas e resultados.
- Permitir que a prática descreva claramente como o simulador se conecta ao experimento real.
- Suportar simuladores internos ou embeds externos aprovados.

## Acceptance Criteria

- Uma prática consegue exibir um simulador ou bloco equivalente sem quebrar o layout.
- O usuário entende o objetivo do simulador e suas limitações.
- Os componentes de dados são reutilizáveis.
- O conteúdo continua funcional sem depender obrigatoriamente do simulador.

## Files to Modify

- `src/components/simulator/**`
- `src/lib/simulators/**`
- `src/content/practices/<slug>/simulator/**`
- `src/pages/simuladores/[slug].astro`
- `src/styles/**`

## Tests to Run

- `npm run build`
- `npm run test`
- `npm run test:e2e`

## Completion Checklist

- [ ] Padrão de integração definido
- [ ] Componentes de simulador criados
- [ ] Componentes de aquisição/análise criados
- [ ] Uma integração piloto validada
- [ ] Degradação sem simulador verificada
