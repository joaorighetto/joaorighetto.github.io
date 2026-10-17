# Navbar

Barra fixa no topo com o nome à esquerda, as âncoras das seções no centro e o botão "Contato" à direita; abaixo de 900 px, os links vão para um menu.

**O que o consumidor fornece**: a lista de links (até 5, na ordem das seções da página), o link ativo (`aria-current`) e o destino do botão de contato (âncora `#contato`).

**Anatomia**

- Altura `nav-height` (64 px), fundo `bg-raised`, borda inferior `line`. Ganha `shadow-nav` só depois que a página rola (`data-scrolled="true"`, um `IntersectionObserver` no topo resolve).
- Logo: só tipografia. Sigla "JMZR" em `label` na cor `accent` + nome em 800. Não há logotipo desenhado.
- Links: 15 px, `ink-muted`; hover com fundo `bg-alt` em pílula; ativo em `ink`. Cada link tem 44 px de altura.
- Botão: `pf-btn--primary pf-btn--sm` com ícone de envelope no círculo.
- Celular: botão de menu 44 × 44 com borda `line-strong` e raio `radius-md`. O painel abre abaixo da barra, com links de 52 px de altura separados por `line` e o botão "Contato" em largura total.

**Comportamento do menu**

- `<button aria-expanded aria-controls>` alterna o `hidden` do painel e troca o rótulo ("Abrir menu" / "Fechar menu").
- Fecha com Esc, ao tocar num link e ao passar de 900 px. O foco volta para o botão ao fechar.
- Abertura: `duration-base` com `ease-expo`; sem animação com `prefers-reduced-motion`.
- Âncoras das seções usam `scroll-margin-top: calc(var(--nav-height) + 16px)` para o título não ficar embaixo da barra.

**Evite**

- Mais de 5 links ou links para fora do site na barra (GitHub vai no bloco final).
- Esconder a barra ao rolar: no celular, o leitor perde o caminho de volta.
