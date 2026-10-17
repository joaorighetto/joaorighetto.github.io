# ProcessSteps

Três passos numerados 01–03, ligados por setas, que explicam o método: coletar → conferir → entregar.

**O que o consumidor fornece**: exatamente 3 passos, cada um com verbo no infinitivo, uma frase de até 120 caracteres e um esquema simples.

**Anatomia**

- Lista ordenada (`<ol>`); as setas são `aria-hidden`. Desktop (≥ 860 px): três cards na mesma linha com setas entre eles; celular: empilhados, setas apontando para baixo.
- Card: `bg-raised`, borda `line`, raio `radius-lg`, padding `space-6`. Esquema numa área `accent-soft` de 96 px de altura, traço `accent` de 1,5 px, sem preenchimento.
- Número em `step` (mono `accent`), título `h3`, texto `body`/`ink-muted`.

**Esquemas**: desenhos de linha que mostram a operação (arquivos indo para uma pasta, duas listas lado a lado comparadas, um painel com barras). Nada de personagens ou cenas.

**Texto de referência**

1. Coletar: "Scripts baixam os dados direto da fonte oficial e registram a data e a origem de cada arquivo."
2. Conferir: "Cada dado é comparado com a publicação oficial. Divergência é registrada, não corrigida em silêncio."
3. Entregar: "Planilha, painel ou relatório, com a origem de cada número e os limites declarados."

**Evite**: usar para listas que não são sequência; mais de 3 passos.
