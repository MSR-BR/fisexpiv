# Física Experimental IV - UFF

Portal modular para a disciplina Física Experimental IV, com home central, catálogo de práticas, páginas por experimento e suporte progressivo a simuladores e materiais complementares.

## Estado atual

- Fundação técnica em Astro + TypeScript + MDX
- Menu com todas as práticas do semestre
- `Revisão` e `Carga-massa` habilitadas
- Demais práticas marcadas como em preparação

## Comandos

```bash
npm install
npm run dev
npm run build
npm run test
```

## Publicação

- O projeto está preparado para publicação automática no GitHub Pages via GitHub Actions.
- Em repositórios públicos, o GitHub disponibiliza métricas básicas em `Insights > Traffic`, com janela dos últimos 14 dias.

## Analytics

- O portal aceita Cloudflare Web Analytics por meio da variável `PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN`.
- Use `.env.example` como referência para criar sua configuração local.
- O acesso a cada prática aparece naturalmente no painel da Cloudflare pelas rotas do portal, por exemplo:
  - `/praticas/revisao/`
  - `/praticas/carga-massa/`
- Os cliques em PDF e simuladores são registrados por rotas internas de rastreamento, por exemplo:
  - `/acessos/pdf/revisao/principal/`
  - `/acessos/pdf/carga-massa/principal/`
  - `/acessos/simulador/revisao/tinkercad/`
  - `/acessos/simulador/carga-massa/ufc/`
- Essas rotas redirecionam automaticamente para o destino final e permitem usar o próprio Cloudflare Web Analytics para contar os cliques sem depender de backend.

## Especificações

Consulte [`.specs/README.md`](.specs/README.md) para o fluxo orientado a especificações.
