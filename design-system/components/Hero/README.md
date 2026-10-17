# Hero

Topo centralizado que diz quem é e o que faz em uma frase, com o fim do título marcado como um marca-texto.

**O que o consumidor fornece**: sobrelinha (papel + foco, até 48 caracteres), título (até 70 caracteres, a parte final dentro de `<mark class="pf-mark">`), frase de apoio (até 140 caracteres), os dois botões e, opcionalmente, um selo com um resultado real.

**Anatomia**

- Fundo `bg` com brilho radial `accent-glow` atrás do texto. Padding vertical `space-16` no celular, `space-32`/`space-24` no desktop. Altura definida pelo conteúdo, nunca `100vh`.
- Sobrelinha em `overline` (mono, caixa-alta, `accent`) com um ponto de 6 px antes.
- Título em `display` (76 px) que desce a `display-sm` (44 px) no celular, largura máxima `hero-max`, `text-wrap: balance`.
- Marca-texto: `accent-highlight` como faixa de 12% a 92% da altura da linha, atrás de `ink`; quebra de linha com `box-decoration-break: clone`.
- Frase em `lead` na cor `ink-muted`, até 600 px de largura.
- Botões: "Ver projetos" (primário) e "Baixar currículo" (secundário), empilhados em largura total abaixo de 480 px.

**Faça**

- Marque só a expressão que carrega a promessa ("conferido com a fonte oficial"). Um `<mark>` por página.
- Use o selo abaixo dos botões só com um número real e verificável.

**Evite**

- Adjetivos sobre si mesmo ("apaixonado", "especialista"). O título descreve o trabalho.
- Imagem de fundo, foto ou ilustração no topo. A identidade vem do trabalho, nas seções seguintes.
