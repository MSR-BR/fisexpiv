# 006 - Export or Deployment

## Objective

Preparar o MVP para publicação em ambiente estático com processo claro de preview e produção.

## Requirements

- Configurar build final de produção.
- Documentar o fluxo de preview e publicação.
- Validar o comportamento da home e da prática piloto no ambiente publicado.
- Garantir compatibilidade com a plataforma escolhida.

## Acceptance Criteria

- O projeto gera um build publicável.
- Existe um fluxo de deploy documentado.
- O ambiente publicado preserva navegação, conteúdo e assets.
- O time consegue repetir a publicação com baixa fricção.

## Files to Modify

- `package.json`
- configuração de deploy da plataforma escolhida
- `.specs/shared/deployment-strategy.md`
- documentação operacional do projeto

## Tests to Run

- `npm run build`
- preview da plataforma de deploy
- revisão manual pós-publicação

## Completion Checklist

- [ ] Build final validado
- [ ] Fluxo de preview definido
- [ ] Estratégia de produção documentada
- [ ] Publicação piloto revisada
