# Specification-Driven Development

Este projeto usa uma base de especificações antes de qualquer implementação da aplicação.

## Estrutura

- `shared/`: regras permanentes do projeto.
- `changes/`: mudanças incrementais, cada uma com escopo, critérios e validação.

## Fluxo de trabalho

1. Revisar os documentos em `shared/`.
2. Aprovar a próxima mudança em `changes/`.
3. Implementar apenas o escopo aprovado.
4. Validar com testes e checklist da mudança.
5. Atualizar a próxima mudança somente se o escopo mudar.

## Estado inicial

- O repositório está vazio além do controle de versão.
- A aplicação ainda não foi iniciada.
- A `Change 001` depende de aprovação explícita antes de começar.
