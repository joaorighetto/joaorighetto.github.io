Sistema visual do portfólio de João Marcos Zuñeda Righetto, desenvolvedor Python com foco em automação de processos e dados públicos. Quem lê é chefe de gabinete e deputado avaliando um candidato, quase sempre no celular. O tom é sóbrio, técnico e confiável; o diferencial que o desenho precisa sustentar é **dado coletado automaticamente e conferido com a fonte oficial**.

## Decisão pendente: cor de destaque

O sistema traz duas opções completas, cada uma com tema claro e escuro. Troque o tema na página para comparar; todos os componentes mudam juntos.

| Opção | Claro | Escuro | Leitura |
| --- | --- | --- | --- |
| **Azul institucional** (temas `claro-azul`, `escuro-azul`) | `accent` #1d4fb8 · `accent-strong` #163d8f | `accent` #86abff | Documento oficial, carimbo, caneta azul. Mais neutro e mais esperado no setor público. |
| **Âmbar sóbrio** (temas `claro-ambar`, `escuro-ambar`) | `accent` #995605 · `accent-strong` #7a4204 | `accent` #f0b45a | Marca-texto de quem revisa documento. Mais memorável; o marca-texto do topo fica literal. |

Os neutros são os mesmos nas duas. Escolhida a opção, apague os dois temas da outra e use o arquivo de exportação correspondente (seção Exportação).

## Conteúdo e tom

- Português do Brasil, primeira pessoa no singular, frases curtas e verbos concretos: "baixa", "compara", "registra", "entrega".
- Todo número tem fonte e pode ser conferido na página do projeto. Exemplo real: "187 boletins de urna conferidos byte a byte com o TSE".
- Nada inventado: sem depoimentos, clientes, percentuais sem base ou contagem de horas. Onde falta informação, a pré-visualização usa colchetes ("[ano]") e o site não publica o item.
- Sem adjetivos sobre si mesmo ("apaixonado", "especialista"). O trabalho descreve a pessoa.
- Títulos em caixa normal (só a primeira letra e nomes próprios em maiúscula). Rótulos mono em caixa-alta via CSS, escritos normalmente no HTML.
- Siglas de órgãos por extenso na primeira menção da página de projeto ("Tribunal Superior Eleitoral (TSE)").
- Sem emoji.

## Fundamentos visuais

**Cor.** Fundo `bg`, alternando seções com `bg-alt`. Texto `ink`; secundário `ink-muted`. Bordas sempre de 1 px em `line`; controles em `line-strong`. O destaque `accent` vai na última palavra ou expressão de cada título, nos rótulos mono e nos ícones; `accent-strong` em links, hover do primário e foco. Texto sobre preenchimento de destaque é sempre `on-accent`, nunca branco fixo. As faixas escuras usam `band-bg`, `band-ink`, `band-muted` e `band-accent` (o equivalente da menta da referência) nos dois temas. Não há cores de status: o significado vem de texto e ícone.

**Tipografia.** Schibsted Grotesk (variável, 400–900) para títulos e texto; IBM Plex Mono (400/500/600) para rótulos. Títulos em 800 com espaçamento −2,5% (`display`, `h2`); subtítulos em 700 (`h3-result`, `h3`, `h4`). Corpo `body` 16/26 e nunca menor no celular; `small` 14 px só para fonte, legenda e metadado. Rótulos `overline`, `label` e `step` em mono caixa-alta. Linhas de texto até `prose-max` (680 px, ~68 caracteres). Títulos com `text-wrap: balance`.

**Marca-texto.** Só no H1 do topo, uma vez por página: `accent-highlight` atrás de `ink`, ocupando de 12% a 92% da altura da linha.

**Espaço e grade.** Base de 4 px (`space-1` a `space-32`, nomes iguais aos múltiplos do Tailwind). Conteúdo até `container-max` (1120 px). Gutter lateral `space-4` no celular e `space-6` a partir de 768 px. Seções com `space-16` no celular e `space-24` no desktop. Grade de cards: 1 → 2 (720 px) → 3 colunas (1024 px), gap `space-6`. Títulos de seção alinhados à esquerda; só o topo e o bloco final são centralizados.

**Raios.** `radius-lg` (16 px) em cards; `radius-pill` em botões, chips e selo; `radius-md` (12 px) em molduras de mapa e botão de menu; `radius-xl` (24 px) no bloco final e na foto; `radius-sm` (8 px) em capturas e código.

**Bordas e elevação.** A separação vem de borda `line` e de fundos alternados. A única sombra é `shadow-nav`, na barra depois que a página rola. Hover de card muda a borda para `line-strong`; nada sobe nem cresce.

**Faixas escuras.** Ferramentas e bloco final. Fundo `band-bg` com grade de pontos `band-dot` a cada 24 px e bordas `band-line`. No tema escuro a faixa fica mais escura que a página, para continuar marcando o fim.

**Topo.** Fundo `bg` com brilho radial `accent-glow` atrás do título. É o único gradiente do sistema.

**Movimento.** `ease-expo` cubic-bezier(.16, 1, .3, 1) para entradas e menu; `ease-quart` cubic-bezier(.25, 1, .5, 1) para hover. Durações `duration-fast` 150 ms, `duration-base` 250 ms, `duration-slow` 600 ms. Uma entrada por seção, a partir de um estado visível (nada começa com opacidade zero). Com `prefers-reduced-motion: reduce`, nada se move: a faixa de ferramentas para e vira lista.

## Imagens do trabalho

A referência usa ilustrações em estilo cartum; aqui não. O visual vem de mapas, diagramas de fluxo, trechos de tabela e capturas de sistemas, sempre no padrão do **MediaFrame**: proporção 16:10 nos cards, fundo `accent-soft`, padding `space-4`, a peça sobre `bg-raised` com borda `line` e raio `radius-sm`.

- **Mapas**: coroplético em uma só matiz (4 intensidades de `accent`), legenda dentro do mapa, fonte e data de coleta sempre abaixo. No card, imagem estática; o interativo vai na página do projeto dentro do **EmbedFrame**, coberto por "Toque para interagir" no celular.
- **Diagramas**: caixas `bg-raised` com borda `line-strong`, decisão em losango com borda `accent`, resultado em `accent`, setas `line-strong`, rótulos mono. Sem sombra, sem 3D.
- **Tabelas**: recorte de 4 a 6 linhas, cabeçalho mono caixa-alta em `bg-alt`. Se o ponto é um número, use o **ResultCard**.
- **Capturas**: canto superior esquerdo, sem dado pessoal (nome, CPF, matrícula) e sem dado interno do órgão que não seja público.
- Exporte SVG quando possível; PNG em 2× com no máximo 300 KB. Todo arquivo tem `alt` que diz a conclusão, não a aparência ("Concentração maior na região central", não "mapa azul").

## Iconografia

Ícones de linha desenhados na grade de 24 px, traço 1,75 px, pontas e junções arredondadas, cor `currentColor`. Conjunto atual: seta, download, check, código, envelope, menu, fechar, link externo, copiar, pausar, tocar, mão. Se precisar de mais, use Lucide (licença ISC) com o mesmo traço. Sem logos de marcas, inclusive na faixa de ferramentas e no link do GitHub (que usa o ícone de código). Ícone decorativo leva `aria-hidden="true"`; ícone sozinho num botão leva `aria-label` no botão.

## Acessibilidade

- Contraste AA verificado nos quatro temas: texto ≥ 4,5:1 sobre os fundos citados em cada token; bordas de controle e anel de foco ≥ 3:1.
- Foco visível em todo elemento interativo: contorno sólido de 2 px em `focus-ring` com afastamento de 2 px; nas faixas escuras, `band-accent`. Nunca `outline: none` sem substituto.
- Área de toque mínima `touch-min` (44 × 44 px) em botões, chips, links de card, botão de menu e linhas do menu (52 px).
- Cor nunca é a única pista: o selo diz "Conferido", o chip ativo usa `aria-pressed`, o item atual da linha do tempo tem marcador preenchido e texto "atual".
- Estrutura: um `h1` por página; seções com `h2`; `aria-current` no link ativo; `scroll-margin-top` nas âncoras por causa da barra fixa.
- Animação contínua (faixa de ferramentas) tem botão de pausa e para com `prefers-reduced-motion`.
- Iframe sempre com `title`; mapa com imagem estática alternativa e link para os dados.

## Componentes

Os componentes são HTML + CSS puros (classes `pf-` em `components/bundle.css`), sem dependência de React, para virar componentes `.astro`. Cada um tem pré-visualização com os estados e um guia de uso. Seletores `[data-state="hover|focus|active"]` existem só para as pré-visualizações e podem ser removidos no site.

Ordem da página inicial: Navbar → Hero → ToolsStrip → SectionHeader + FilterChips + ProjectCard → ResultCard → ProcessSteps → About → Timeline → CTABand. Página de projeto: Navbar → ProjectDetail → CTABand.
