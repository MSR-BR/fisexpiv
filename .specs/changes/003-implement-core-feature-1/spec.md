# 003 - Implement Core Feature 1

## Objective

Criar o modelo completo de página de prática e preencher uma prática piloto validada, servindo como referência para as demais.

## Requirements

- Implementar template completo com a ordem pedagógica definida.
- Criar schema de metadados para práticas.
- Estruturar uma prática piloto com conteúdo validado.
- Incluir referências e sinalizações de lacunas quando necessário.

## Acceptance Criteria

- Existe ao menos uma prática publicada no formato final esperado.
- Todas as seções obrigatórias aparecem de forma consistente.
- O conteúdo da prática piloto é rastreável a fontes fornecidas.
- O template pode ser reaproveitado para novas práticas sem retrabalho estrutural.

## Files to Modify

- `src/pages/praticas/[slug].astro`
- `src/components/practice/**`
- `src/content/practices/<slug>/**`
- `src/lib/content/**`
- `src/types/**`

## Tests to Run

- `npm run build`
- `npm run test`
- `npm run test:e2e`
- `npm run check:content`

## Completion Checklist

- [ ] Template de prática concluído
- [ ] Schema de conteúdo validado
- [ ] Prática piloto criada
- [ ] Referências registradas
- [ ] Lacunas sinalizadas corretamente
