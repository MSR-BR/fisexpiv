# Coding Standards

## Princípios

- Preferir simplicidade estrutural.
- Manter forte separação entre conteúdo, layout e interatividade.
- Evitar acoplamento entre páginas de práticas.
- Escrever código legível antes de otimizar.

## TypeScript

- Usar modo estrito.
- Não usar `any` sem justificativa documentada.
- Centralizar tipos compartilhados em `src/types/`.
- Validar metadados e conteúdo com schemas sempre que possível.

## Astro e componentes

- Componentes pequenos e com responsabilidade única.
- Layouts em `src/layouts/`.
- Componentes de prática em `src/components/practice/`.
- Interatividade somente onde gerar valor pedagógico real.

## Conteúdo

- Cada prática deve ser autocontida.
- Não misturar conteúdo validado com rascunhos sem sinalização.
- Trechos pendentes devem usar marcação explícita.
- Referências e notas devem seguir as regras de `citation-rules.md`.

## Estilo

- Preferir nomes de arquivo descritivos.
- Manter comentários raros e úteis.
- Evitar lógica duplicada entre páginas de práticas.
- Criar utilitários apenas quando houver reuso real.

## Qualidade

- Toda feature deve ter critérios de aceitação rastreáveis à sua change.
- Todo componente novo deve ser testável.
- Todo simulador deve ter um plano de validação mínima.

## Não fazer

- Não inventar dados experimentais.
- Não embutir textos longos diretamente em componentes quando puderem viver no conteúdo.
- Não introduzir bibliotecas sem necessidade clara.
