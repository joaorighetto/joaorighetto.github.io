# ToolsStrip

Faixa escura com o nome das ferramentas em texto mono, rolando devagar; sem logos de marcas.

**O que o consumidor fornece**: 6 a 12 ferramentas que de fato usa no trabalho, com a grafia oficial ("MySQL / MariaDB", não "mysql").

**Anatomia**

- Fundo `band-bg` com grade de pontos `band-dot` a cada 24 px; bordas `band-line`. Rótulo em `label`/`band-accent`.
- Itens em mono 15 px `band-ink`, separados por ponto de 5 px em `band-accent`. Bordas laterais esmaecidas com máscara.
- A lista é duplicada para a volta contínua; a cópia leva `aria-hidden="true"`.

**Movimento**

- Uma volta em `duration-marquee` (48 s), linear. Pausa no hover.
- Botão "Pausar" (44 px) visível, exigido pela WCAG 2.2.2 para conteúdo que se move por mais de 5 s.
- Com `prefers-reduced-motion: reduce`: sem animação, sem máscara, a lista quebra em várias linhas, a cópia some e o botão também.

**Evite**: logos, ícones de marca, barras de nível ("Python 90%"), ferramentas que só foram testadas uma vez.
