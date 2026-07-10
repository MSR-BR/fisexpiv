# Deployment Strategy

## Estratégia principal

Publicação como site estático, preferencialmente em uma plataforma com previews por branch.

## Opção recomendada

- **Vercel** para previews rápidos e deploy contínuo.

## Opções compatíveis

- GitHub Pages;
- Netlify;
- hospedagem institucional que sirva arquivos estáticos.

## Requisitos de publicação

- build determinístico;
- páginas estáticas geradas sem dependência de backend;
- assets organizados;
- revisão manual da home e da prática piloto em ambiente publicado.

## Fluxo sugerido

1. validar localmente;
2. gerar build;
3. publicar preview;
4. revisar conteúdo e navegação;
5. promover para produção.

## Observações

- O MVP não deve depender de API externa.
- Se algum simulador exigir processamento especial, ele deve ser isolado e avaliado antes de entrar em produção.
