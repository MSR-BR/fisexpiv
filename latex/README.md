## Fontes LaTeX

Os arquivos `.tex` das práticas ficam neste diretório.

Estrutura:

- `fontes/`: código-fonte LaTeX versionado no repositório;
- `public/downloads/praticas/`: PDFs finais usados pelo portal.

Para compilar localmente uma prática, use um diretório temporário de fontes do TeX, por exemplo:

```bash
mkdir -p .tmp/texmf-var
TEXMFVAR="$PWD/.tmp/texmf-var" pdflatex -interaction=nonstopmode -halt-on-error -output-directory /tmp latex/fontes/revisao.tex
```
