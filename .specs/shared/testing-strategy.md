# Testing Strategy

## Objetivo

Garantir que o portal seja confiável tecnicamente e pedagogicamente antes de expandir conteúdo.

## Camadas de teste

### 1. Validação estrutural

- build sem erros;
- rotas geradas corretamente;
- metadados obrigatórios presentes em cada prática.

### 2. Testes automatizados

- utilitários e schemas com Vitest;
- navegação principal com Playwright;
- verificação de links internos e assets.

### 3. Revisão de conteúdo

- checklist por prática;
- revisão de consistência entre seções;
- confirmação de citações e origem do material.

### 4. Validação de simuladores

- carregamento do componente;
- consistência entre entradas e saídas;
- alinhamento com o objetivo pedagógico declarado;
- comportamento aceitável em desktop e mobile quando aplicável.

### 5. Acessibilidade mínima

- headings em ordem lógica;
- navegação por teclado;
- contraste adequado;
- textos alternativos para imagens relevantes.

## Critérios de saída do MVP

- home funcional;
- template de prática funcional;
- ao menos uma prática piloto validada;
- infraestrutura pronta para expansão controlada;
- sem conteúdo inventado mascarado como final.
