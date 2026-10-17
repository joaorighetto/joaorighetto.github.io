# ProjectDetail

Página de detalhe de projeto: problema, o que fiz, como conferi, limites e tecnologias, nessa ordem, com uma ficha lateral.

**O que o consumidor fornece**: categoria, título, frase de abertura, selo (se houver conferência), mídia principal, os quatro blocos de texto e a ficha (categoria, fonte oficial, ano, tecnologias, links).

**Estrutura**

1. Voltar ("Todos os projetos"), categoria, título (44 px), `lead`, selo.
2. Mídia principal no padrão do MediaFrame, em largura total do conteúdo; ou EmbedFrame para mapa ou painel interativo.
3. Coluna de texto (`prose-max`) com os blocos numerados 01–03 em `step` e títulos em `h3-result`. A numeração é real: a ordem conta a história do projeto.
4. **Limites** em caixa própria (`bg-alt`, borda `line-strong`, raio `radius-lg`): o que a conferência não garante. Todo projeto com selo tem este bloco.
5. Ficha lateral de 280 px a partir de 960 px, fixa ao rolar (`top: nav-height + 24px`); no celular vem depois do texto. Rótulos `label`/`ink-muted`, valores 15 px, tecnologias em caixas mono com raio `radius-sm`.
6. Termina com o CTABand.

**Escrita**

- Primeira pessoa, frases curtas, verbos concretos ("baixa", "compara", "registra").
- "Como conferi" diz a ferramenta, a fonte e onde está o registro da conferência.
- "Limites" é obrigatório e específico. É ele que torna o selo crível.

Os colchetes marcam informação a preencher; o texto do problema e dos limites é uma sugestão a revisar.
