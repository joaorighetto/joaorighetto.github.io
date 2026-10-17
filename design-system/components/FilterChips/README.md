# FilterChips

Linha de chips que filtra a grade de projetos por categoria: Todos · Dados públicos · Automação · Sistemas.

**O que o consumidor fornece**: as categorias (as mesmas do ProjectCard), o filtro ativo e a grade a filtrar.

**Anatomia**: pílulas de 44 px de altura, borda `line-strong`, fundo `bg-raised`, texto 15 px/500. Hover: borda `accent` e fundo `accent-soft`. Ativo: fundo `accent`, texto `on-accent`. Foco: anel `focus-ring`. Desabilitado: `disabled-bg` + `ink-disabled`.

**Comportamento**

- Botões com `aria-pressed` dentro de `role="group"` com `aria-label`. Seleção única; "Todos" é o padrão.
- Uma linha `aria-live="polite"` abaixo diz o que está sendo mostrado.
- No celular a linha rola na horizontal dentro do próprio contêiner (sem barra visível); a página nunca rola de lado.
- Filtrar não recarrega a página. No Astro, os cards recebem `data-category` e um script pequeno alterna `hidden`. Sem JavaScript, todos os projetos aparecem.

**Evite**

- Filtros com uma categoria vazia: esconda o chip, ou deixe desabilitado só se a categoria for ganhar projetos em breve.
- Mais de 5 categorias.
