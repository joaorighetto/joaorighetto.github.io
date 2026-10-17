# SectionHeader

Abre cada seção com um rótulo mono, um título alinhado à esquerda cuja última palavra ou expressão vai em `accent`, e uma frase opcional.

**O que o consumidor fornece**: rótulo (1–2 palavras), título (até 60 caracteres) com a expressão final em `<span class="pf-hl">`, frase de apoio opcional (até 160 caracteres) e, se a página for uma sequência, o número.

**Anatomia**

- Título `h2` (36 px; `h2-sm` 28 px no celular), peso 800, alinhado à esquerda, largura máxima `prose-max`.
- Rótulo `label` em `accent`. Com número: `step` ("02") + traço de 24 px em `line-strong` + rótulo.
- Distância até o conteúdo: `space-8` no celular, `space-12` no desktop.

**Numeração: quando usar**

- Use 01, 02, 03 só quando a ordem informa algo: as seções da página inicial seguem o percurso Projetos → Método → Sobre → Experiência, e a numeração ajuda a navegar no celular.
- Não numere seções avulsas (página de projeto, 404).

**Evite**

- Destacar uma palavra que não é o assunto ("Projetos com dado *conferido*" sim; "Meus *projetos*" não).
- Duas cores de destaque no mesmo título.
