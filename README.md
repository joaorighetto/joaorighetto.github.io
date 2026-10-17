# joaorighetto.github.io

Portfólio de João Marcos Zuñeda Righetto: dados públicos coletados automaticamente e conferidos com a fonte oficial.

Site estático em [Astro](https://astro.build) + Tailwind CSS v4, publicado no GitHub Pages em <https://joaorighetto.github.io>.

## Rodar no computador

Requer Node 22.22 ou mais recente.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # confere tipos e schema (astro check) e gera dist/
npm run preview  # serve o dist/ gerado
```

## Publicar

Todo push na `main` dispara `.github/workflows/deploy.yml`, que roda o build e publica no GitHub Pages. Na primeira vez, em **Settings → Pages → Build and deployment**, escolha **Source: GitHub Actions**.

## Acrescentar um projeto

Um projeto é um arquivo Markdown. Criar o arquivo basta para ele aparecer na grade, no filtro e com página própria.

1. Crie `src/content/projetos/<endereco>.md`. O nome do arquivo vira o endereço: `mapa-curitiba.md` → `/projetos/mapa-curitiba/`.
2. Preencha o cabeçalho. O build falha com a mensagem do campo errado se algo não seguir o schema (`src/content.config.ts`).

```yaml
---
title: Mapa de votos de Curitiba por bairro   # até 60 caracteres
category: Dados públicos                      # Dados públicos · Automação · Sistemas (src/data/categorias.ts)
order: 4                                      # posição na grade: o mais forte em conferência primeiro
summary: Uma frase para o card, até 140 caracteres, sem números que não estejam na fonte.
lead: Frase de abertura da página do projeto. Siglas por extenso na primeira menção.
verification: como o resultado foi conferido, em uma frase.
status: Em desenvolvimento                    # opcional: só se ainda não estiver em uso
seal:                                         # opcional: só com fonte oficial externa
  label: 187 boletins conferidos byte a byte
  source: TSE
limits:                                       # obrigatório quando há selo
  title: O que esta conferência não garante
  items:
    - Um limite específico por item.
tags: [Python, Playwright]                    # 2 a 4, aparecem no card
stack: [Python, Playwright, QGIS]             # lista completa, na ficha da página
officialSource: Tribunal Superior Eleitoral (TSE)   # opcional
context: SAEP, Pirassununga/SP                # opcional
year: 2026                                    # opcional
links:                                        # opcionais; sem URL, o link não aparece
  code: https://github.com/joaorighetto/...
  demo: https://...
  data: https://...
media:
  kind: map                                   # map · diagram · table · capture
  src: mapa-curitiba/mapa.png                 # opcional, em src/assets/projetos/
  alt: A conclusão que a imagem mostra, não a aparência dela.
embed:                                        # opcional: mapa ou painel interativo na página
  kind: Mapa interativo                       # Mapa interativo · Painel
  title: Votos por bairro em Curitiba
  src: https://...
  staticImage: mapa-curitiba/mapa.png         # imagem mostrada antes de ativar
  staticAlt: Concentração maior na região central
  source: "Fonte: TSE · coletado em [data]"
  dataUrl: https://...                        # opcional, link "Baixar dados (CSV)"
  tall: true                                  # opcional: palco 4:3 em vez de 16:10
draft: false                                  # true esconde o projeto do site
---
```

3. Escreva o corpo com um bloco `##` por etapa. Cada `##` vira um bloco numerado (01, 02, 03), nesta ordem:

```markdown
## Problema

O que precisava ser resolvido.

## O que fiz

- Etapas reais, com verbos concretos.

## Como conferi

A ferramenta, a fonte e onde está o registro da conferência.
```

4. Mídia: coloque o arquivo em `src/assets/projetos/<endereco>/`. SVG entra no HTML e acompanha o tema claro/escuro (use `var(--accent)`, `var(--line-strong)` etc. nas cores). PNG, JPG e WebP são otimizados no build. Sem `src`, aparece um esquema de linha do tipo escolhido, sem dados.
5. Rode `npm run build` e confira a página em `npm run preview`.

Para usar componentes dentro do texto (por exemplo, mais de um mapa), use `.mdx` em vez de `.md`.

## Outros conteúdos

| O quê | Onde |
| --- | --- |
| Topo, ferramentas, títulos das seções, método, "sobre" e contato | `src/data/site.ts` |
| Cards de resultado (só números reais, com o projeto de origem) | `src/content/resultados.yaml` |
| Linha do tempo | `src/content/experiencia.yaml` (campo `order`: 1 é o mais recente) |
| Categorias do filtro | `src/data/categorias.ts` |
| Foto | `src/assets/foto.png` |
| Currículo | `public/curriculo-joao-marcos-righetto.pdf` (atualize o tamanho em `src/data/site.ts`) |
| Imagem de compartilhamento | `npm run og` gera `public/og.png` a partir de `scripts/og/og.html` |

## Design System

O visual vem de `design-system/` (fonte de verdade). Não invente cores, fontes nem espaçamentos fora dele.

- `src/styles/tokens.css` é cópia de `design-system/export/tokens.azul.css`, e `src/styles/global.css` é cópia de `design-system/export/tailwind.css`. Não edite à mão: mude o `tokens.json` do Design System, gere de novo e copie.
- `src/styles/components.css` traz as classes `pf-` de `design-system/components/bundle.css`, sem os seletores das pré-visualizações, mais alguns complementos do site no fim do arquivo.
- Cada componente do DS é um `.astro` em `src/components/`.
- JavaScript só onde o DS pede: menu do celular, filtro de projetos, copiar e-mail, pausa da faixa de ferramentas e ativação do mapa incorporado. Sem JavaScript, todo o conteúdo aparece e os chips do filtro levam a `/categoria/<slug>/`.
- Sem rastreadores nem analytics. As fontes são servidas pelo próprio site.
