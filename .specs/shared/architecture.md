# Arquitetura do Projeto

## Objetivo

Criar um portal modular para a disciplina **Física Experimental IV - Instituto de Física - UFF**, com uma página central e páginas por prática, mantendo uma estrutura pedagógica consistente e espaço para simuladores interativos.

## Decisão tecnológica

### Stack proposta

- **Astro** como framework principal.
- **TypeScript** em modo estrito.
- **MDX** para conteúdo das práticas.
- **CSS modular + tokens globais** para identidade visual e manutenção.
- **Vitest** para utilitários e validações.
- **Playwright** para fluxos críticos de navegação.

### Justificativa

- O projeto é majoritariamente orientado a conteúdo, mas precisa suportar ilhas interativas para simuladores.
- Astro permite páginas rápidas, estrutura clara e componentes interativos somente onde necessário.
- MDX facilita revisão pedagógica, reaproveitamento de layouts e inclusão controlada de fórmulas, imagens, tabelas e blocos especiais.

## Arquitetura lógica

### Camadas

1. **Conteúdo**
   - textos das práticas;
   - metadados;
   - referências e materiais de apoio;
   - configuração de simuladores.

2. **Apresentação**
   - layouts;
   - componentes compartilhados;
   - navegação;
   - blocos reutilizáveis de prática.

3. **Domínio**
   - schema de conteúdo;
   - validação de metadados;
   - regras para citações;
   - organização de assets por prática.

4. **Interatividade**
   - simuladores;
   - controles de aquisição de dados;
   - tabelas e gráficos interativos;
   - exportação local de dados, se necessário na fase apropriada.

## Estrutura de pastas proposta

```text
/
  .specs/
    shared/
    changes/
  public/
    images/
    icons/
    downloads/
  src/
    components/
      layout/
      navigation/
      practice/
      simulator/
      ui/
    content/
      practices/
        README.md
        template/
    layouts/
    lib/
      content/
      citations/
      simulators/
      utils/
    pages/
      index.astro
      praticas/
        [slug].astro
      simuladores/
        [slug].astro
    styles/
    types/
  tests/
    unit/
    content/
    e2e/
  scripts/
    validate-content.mjs
    check-links.mjs
```

## Modelo de conteúdo

Cada prática deve ser representada por uma unidade de conteúdo independente, idealmente em uma pasta própria.

## Catálogo inicial de práticas

O portal deve nascer com o menu completo das práticas abaixo:

1. Revisão
2. Carga-massa
3. Radiação térmica
4. Stefan-Boltzmann
5. Efeito fotoelétrico
6. Espectroscopia
7. Difração
8. Diodos
9. Radioatividade

### Estado inicial planejado

- `Revisão`: habilitada na primeira etapa de conteúdo.
- `Carga-massa`: habilitada na primeira etapa de conteúdo.
- Demais práticas: visíveis no menu, mas desabilitadas até desenvolvimento ao longo do semestre.

### Estrutura esperada por prática

```text
src/content/practices/<slug>/
  index.mdx
  metadata.json
  assets/
  data/
  simulator/
```

### Seções obrigatórias por prática

1. Introdução teórica
2. Descrição do experimento
3. Roteiro experimental
4. Aquisição de dados
5. Análise e interpretação dos dados
6. Discussão
7. Conclusão
8. Perguntas conceituais e aplicadas
9. Referências e materiais de apoio

### Seções opcionais

- simulador;
- pré-laboratório;
- checklist de segurança;
- arquivos para download;
- resultados esperados apenas quando validados e pedagogicamente apropriados.

## Estratégia de simuladores

- Simuladores devem ser componentes isolados, sem contaminar o restante do conteúdo.
- Cada simulador precisa declarar:
  - objetivo pedagógico;
  - entradas controláveis;
  - saídas observáveis;
  - limitações;
  - vínculo com a prática correspondente.
- O MVP deve prever a arquitetura para simuladores, mas não precisa incluir todos de uma vez.

## Estratégia de conteúdo confiável

- Nenhum texto teórico, procedimento ou resultado deve ser inventado.
- Todo conteúdo deve ser derivado de material fornecido pelo usuário ou de fontes explicitamente aprovadas.
- Quando houver lacuna de informação, o sistema deve marcar o trecho como `Pendente de validação`.

## Acessibilidade e UX

- Navegação clara por práticas.
- Estrutura consistente entre páginas.
- Tipografia confortável para leitura longa.
- Bom funcionamento em desktop e mobile.
- Contraste adequado, navegação por teclado e sem dependência exclusiva de cor.
- Práticas desabilitadas devem comunicar claramente que ainda estão em preparação, sem parecer erro de navegação.

## Assunções explícitas

- O idioma principal da interface será **português do Brasil**.
- O primeiro ciclo de implementação focará na fundação do portal, não em preencher todas as práticas.
- O conteúdo final de cada prática dependerá de material de apoio fornecido e validado.
- A hospedagem pode ser totalmente estática no MVP.
- A identidade visual deve seguir a família dos projetos `termo` e `qm`, preservando o tom institucional, a ênfase editorial e a navegação por cards/menu.
- PDFs antigos, material teórico complementar e simuladores serão fornecidos progressivamente conforme cada prática entrar em desenvolvimento.

## Questões em aberto

- Volume e formato dos materiais fonte.
- Quais simuladores já existem e quais precisarão ser construídos.
