# MediaFrame

Moldura única para o material do próprio trabalho (mapa, diagrama, tabela, captura) no topo dos cards: proporção fixa, fundo tingido e a peça com borda fina.

**O que o consumidor fornece**: a imagem (`<img>` com `alt` descritivo, ou SVG com `role="img"` e `aria-label`) e o tipo (`pf-media--map`, `pf-media--diagram` ou nenhum para tabela e captura).

**Regras gerais**

- Proporção 16:10 em todos os cards, para as linhas da grade alinharem. Na página de projeto, a mídia pode usar a proporção natural (até 4:3 para mapas).
- Fundo `accent-soft` (o "fundo tingido" da referência), padding `space-4`, borda inferior `line`.
- A peça fica sobre `bg-raised` com borda `line` de 1 px e raio `radius-sm`.

**Por tipo**

- **Mapa**: preenche a moldura (`object-fit: cover`, centralizado). Coroplético em uma só matiz, com 4 intensidades de `accent`. Legenda sempre visível no próprio mapa. No card, o mapa é imagem estática; o interativo fica na página do projeto (EmbedFrame).
- **Diagrama de fluxo**: sem borda nem fundo próprio (`object-fit: contain`), direto sobre o tingido. Caixas em `bg-raised` com borda `line-strong`, decisão em losango com borda `accent`, saída final em `accent`, setas em `line-strong`, rótulos em mono 10–12 px.
- **Trecho de tabela**: recorte do canto superior esquerdo (`object-position: top left`), cabeçalho em `bg-alt` e mono caixa-alta, valores em mono `ink`, coluna de status com pílula `accent` a 12%. Mostre 4–6 linhas; nunca a tabela inteira.
- **Captura de sistema**: recorte do canto superior esquerdo, sem moldura de navegador falsa além de uma barra simples. Apague nomes de pessoas, CPF, matrícula e qualquer dado pessoal antes de publicar.

**Evite**

- Fotos genéricas, ícones grandes ou ilustrações em estilo cartum.
- Texto pequeno ilegível como peça principal: se o que importa é um número, use o ResultCard.
- Mapas em arco-íris ou com verde e vermelho como única diferença.
