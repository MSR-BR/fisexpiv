# 005 - Testing and Validation

## Objective

Endurecer a qualidade técnica e editorial do portal antes da publicação inicial.

## Requirements

- Consolidar testes automatizados.
- Criar checklists de revisão de conteúdo.
- Validar acessibilidade básica e integridade de links.
- Garantir que práticas e simuladores críticos passem por revisão manual.

## Acceptance Criteria

- Existe uma rotina clara de validação antes do deploy.
- Os testes cobrem navegação principal e validações essenciais.
- O processo editorial consegue detectar conteúdo sem fonte ou incompleto.
- O portal está apto para revisão final de publicação.

## Files to Modify

- `tests/**`
- `scripts/**`
- `src/**`
- `.specs/shared/testing-strategy.md`

## Tests to Run

- `npm run test`
- `npm run test:e2e`
- `npm run check:content`
- `npm run check:links`
- `npm run build`

## Completion Checklist

- [ ] Testes automatizados consolidados
- [ ] Validações de conteúdo criadas
- [ ] Verificação de links criada
- [ ] Checklist editorial definido
- [ ] Revisão manual crítica executada
