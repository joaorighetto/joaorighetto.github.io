# Button

Três níveis de ação: primário em pílula com ícone, secundário com borda e link em texto.

**Quando usar**

- `primary`: a ação para a qual a seção existe. No máximo um por tela visível ("Ver projetos" no topo, "Copiar e-mail" no bloco final usa a variante `pf-btn--band`).
- `secondary`: alternativa ao primário, ao lado dele ("Baixar currículo").
- `link`: ações dentro de cards e listas ("Código", "Demonstração"). Nunca sozinho como chamada principal.

**O que o consumidor fornece**: o rótulo (verbo no infinitivo ou substantivo curto, sem ponto final), o destino (`<a href>`) ou a ação (`<button type="button">`) e o ícone.

**Anatomia**

- Altura mínima 48 px (`pf-btn--sm`: 44 px). Padding horizontal `space-6`. Raio `radius-pill`. Rótulo em `body-strong`.
- Primário: fundo `accent`, texto `on-accent`; o ícone fica num círculo `on-accent` de 36 px com a seta em `accent`. Hover: fundo `accent-strong` e a seta anda 3 px (`ease-expo`, `duration-base`).
- Secundário: fundo `bg-raised`, borda `line-strong`, texto `ink`. Hover: borda `ink`, fundo `bg-alt`.
- Link: texto `link`, sublinhado aparece no hover. Área de toque de 44 px de altura.
- Foco: contorno de 2 px `focus-ring` com afastamento de 2 px, igual em todas as variantes.
- Desabilitado: fundo `disabled-bg`, texto `ink-disabled`, `cursor: not-allowed`, sem movimento.

**Faça**

- Use `<a>` para navegar (inclusive "Baixar currículo", com `download` e o tamanho do arquivo no texto: "Baixar currículo (PDF, 120 KB)").
- Mantenha os dois botões do topo lado a lado no desktop e empilhados em largura total abaixo de 480 px.

**Evite**

- Dois primários na mesma faixa de tela.
- Desabilitar "Demonstração" quando não houver demonstração: prefira não mostrar o link. O estado desabilitado é para ações temporariamente indisponíveis.
- Ícones sem função: a seta indica avanço, o download indica arquivo.
