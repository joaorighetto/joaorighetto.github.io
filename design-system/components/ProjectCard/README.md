# ProjectCard

Card da grade de projetos: mídia do próprio trabalho, categoria, título, resumo, como foi conferido, tags e os links de código e demonstração.

**O que o consumidor fornece**

- `media`: imagem no padrão do MediaFrame, com `alt`.
- `category`: uma de Dados públicos · Automação · Sistemas (as mesmas dos FilterChips).
- `title`: o que o projeto faz, até 50 caracteres ("Coleta de boletins de urna").
- `summary`: uma frase, até 140 caracteres, sem números que não estejam na fonte.
- `verification` (opcional): como o dado foi conferido, uma frase. Quando existe, o card mostra o selo compacto e a linha "Como foi conferido".
- `tags`: 2 a 4 tecnologias ou fontes, em mono.
- `code` e `demo` (URLs). Sem URL, o link não aparece.

**Anatomia**

- `bg-raised`, borda `line`, raio `radius-lg`; hover: borda `line-strong`. Sem sombra.
- Corpo com padding `space-6` e gap `space-3`. Categoria em `label`/`accent`; título em `h3`; resumo em `body`/`ink-muted`.
- Divisória `line` antes das tags. Tags em `label` com `#` em `accent`.
- O título é o link principal para a página do projeto; "Código" e "Demonstração" são links secundários (`pf-btn--link`, 44 px de altura).

**Grade**: 1 coluna no celular, 2 a partir de 720 px, 3 a partir de 1024 px, gap `space-6`. Ordene pelo mais forte em conferência.

**Evite**

- Card inteiro clicável com links dentro: o leitor de tela anuncia tudo duas vezes.
- Resumo que repete o título. Selo em projeto sem conferência descrita.
