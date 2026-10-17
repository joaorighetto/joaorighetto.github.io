# Exportação

Tokens prontos para o site em Astro com Tailwind CSS v4 (o que `npx astro add tailwind` instala). A fonte de verdade é `tokens.json`; os arquivos em `export/` foram gerados dele. Se um token mudar aqui, gere os arquivos de novo em vez de editar à mão.

## Arquivos

| Arquivo deste sistema | Para onde vai no projeto Astro |
| --- | --- |
| `export/tokens.azul.css` **ou** `export/tokens.ambar.css` (a opção escolhida) | `src/styles/tokens.css` |
| `export/tailwind.css` | `src/styles/global.css` |
| `components/bundle.css` (opcional, referência das classes `pf-`) | `src/styles/components.css` |
| `fonts/*.woff2` (4 arquivos, subconjunto latino, OFL) | `public/fonts/` |

## Passo a passo

1. `npx astro add tailwind` e substitua o `src/styles/global.css` criado pelo `export/tailwind.css`.
2. Copie o arquivo de tokens da opção escolhida para `src/styles/tokens.css` e as fontes para `public/fonts/`.
3. No layout base: `import "../styles/global.css";`, `<html lang="pt-BR">` e, no `<head>`, pré-carregue a fonte de títulos: `<link rel="preload" href="/fonts/schibsted-grotesk-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>`.
4. Tema: claro por padrão, escuro pela preferência do sistema. Um botão de tema, se houver, grava `data-theme="light"` ou `"dark"` no `<html>`; não use a variante `dark:` do Tailwind, as variáveis já trocam.
5. As fontes ficam hospedadas no próprio site (sem Google Fonts em tempo de execução): nenhuma requisição a terceiros, o que simplifica a política de privacidade.

## Uso no Tailwind

- Cores: `bg-bg`, `bg-bg-alt`, `text-ink`, `text-ink-muted`, `border-line`, `border-line-strong`, `bg-accent`, `text-on-accent`, `hover:bg-accent-strong`, `bg-accent-soft`, `bg-band-bg`, `text-band-accent`, `outline-focus-ring`. A paleta padrão do Tailwind foi removida (`--color-*: initial`) para impedir cores fora do sistema.
- Texto: `text-display`, `text-h2`, `text-h3-result`, `text-h3`, `text-h4`, `text-lead`, `text-body`, `text-small`, `text-overline`, `text-label`, `text-step`, `text-code` (já com entrelinha, espaçamento e peso). Rótulos: `font-mono uppercase text-label text-accent`.
- Espaço: escala padrão de 4 px (`p-6` = 24 px = `space-6`, `py-24` = 96 px).
- Raios: `rounded-sm` 8, `rounded-md` 12, `rounded-lg` 16, `rounded-xl` 24, `rounded-pill`.
- Larguras: `max-w-content`, `max-w-prose`, `max-w-hero`. Movimento: `ease-expo`, `ease-quart`. Sombra: `shadow-nav`.

## export/tailwind.css

```css
/* Portfólio João Marcos · Tailwind CSS v4 (configuração em CSS, sem tailwind.config.js)
   src/styles/global.css do Astro. Pressupõe tokens.css importado antes (cores por tema). */
@import "tailwindcss";
@import "./tokens.css";

/* Não use a variante dark: — as variáveis do tokens.css já trocam de valor por tema. */

/* Cores: só as do sistema. Utilitários bg-bg, text-ink, border-line, bg-accent, text-accent-strong… */
@theme inline {
  --color-*: initial;
  --color-transparent: transparent;
  --color-current: currentColor;
  --color-bg: var(--bg);
  --color-bg-alt: var(--bg-alt);
  --color-bg-raised: var(--bg-raised);
  --color-ink: var(--ink);
  --color-ink-muted: var(--ink-muted);
  --color-ink-disabled: var(--ink-disabled);
  --color-line: var(--line);
  --color-line-strong: var(--line-strong);
  --color-disabled-bg: var(--disabled-bg);
  --color-accent: var(--accent);
  --color-accent-strong: var(--accent-strong);
  --color-accent-soft: var(--accent-soft);
  --color-accent-highlight: var(--accent-highlight);
  --color-accent-glow: var(--accent-glow);
  --color-on-accent: var(--on-accent);
  --color-band-bg: var(--band-bg);
  --color-band-ink: var(--band-ink);
  --color-band-muted: var(--band-muted);
  --color-band-line: var(--band-line);
  --color-band-dot: var(--band-dot);
  --color-band-accent: var(--band-accent);
  --color-link: var(--link);
  --color-focus-ring: var(--focus-ring);
}

@theme {
  --font-*: initial;
  --font-sans: "Schibsted Grotesk", "Segoe UI", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, Consolas, monospace;

  /* Escala tipográfica: text-display, text-h2, text-h3 … (clamp = celular → desktop) */
  --text-*: initial;
  --text-display: clamp(2.75rem, 1.9rem + 3.6vw, 4.75rem);
  --text-display--line-height: 1.02;
  --text-display--letter-spacing: -0.025em;
  --text-display--font-weight: 800;
  --text-h2: clamp(1.75rem, 1.4rem + 1.6vw, 2.25rem);
  --text-h2--line-height: 1.17;
  --text-h2--letter-spacing: -0.025em;
  --text-h2--font-weight: 800;
  --text-h3-result: 1.5rem;
  --text-h3-result--line-height: 1.25;
  --text-h3-result--letter-spacing: -0.015em;
  --text-h3-result--font-weight: 700;
  --text-h3: 1.25rem;
  --text-h3--line-height: 1.4;
  --text-h3--letter-spacing: -0.01em;
  --text-h3--font-weight: 700;
  --text-h4: 1rem;
  --text-h4--line-height: 1.5;
  --text-h4--font-weight: 700;
  --text-lead: clamp(1.125rem, 1.05rem + 0.35vw, 1.25rem);
  --text-lead--line-height: 1.5;
  --text-body: 1rem;
  --text-body--line-height: 1.625;
  --text-small: 0.875rem;
  --text-small--line-height: 1.57;
  --text-overline: 0.8125rem;
  --text-overline--line-height: 1.54;
  --text-overline--letter-spacing: 0.08em;
  --text-label: 0.75rem;
  --text-label--line-height: 1.33;
  --text-label--letter-spacing: 0.08em;
  --text-step: 0.875rem;
  --text-step--line-height: 1.43;
  --text-step--letter-spacing: 0.04em;
  --text-code: 0.875rem;
  --text-code--line-height: 1.57;

  /* Espaçamento: base de 4 px, igual ao padrão do Tailwind (p-4 = 16 px, p-6 = 24 px, py-24 = 96 px) */
  --spacing: 4px;

  --radius-*: initial;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-pill: 9999px;

  --shadow-*: initial;

  --ease-*: initial;
  --ease-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-quart: cubic-bezier(0.25, 1, 0.5, 1);

  --container-content: 1120px;
  --container-prose: 680px;
  --container-hero: 880px;
}

@utility shadow-nav { box-shadow: var(--shadow-nav); }

/* rounded-sm/md/lg/xl/pill · ease-expo/ease-quart · max-w-content/prose/hero */
```

## export/tokens.azul.css

O `tokens.ambar.css` tem a mesma forma; só mudam as variáveis de destaque.

```css
/* Portfólio João Marcos · tokens (Azul institucional)
   Gerado de tokens.json do Design System. Não edite à mão: mude o tokens.json e gere de novo.
   Tema: claro por padrão; escuro por preferência do sistema; data-theme="light|dark" no <html> força. */

@font-face {
  font-family: "Schibsted Grotesk";
  src: url("/fonts/schibsted-grotesk-latin-wght-normal.woff2") format("woff2");
  font-weight: 400 900; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "IBM Plex Mono";
  src: url("/fonts/ibm-plex-mono-latin-400-normal.woff2") format("woff2");
  font-weight: 400; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "IBM Plex Mono";
  src: url("/fonts/ibm-plex-mono-latin-500-normal.woff2") format("woff2");
  font-weight: 500; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "IBM Plex Mono";
  src: url("/fonts/ibm-plex-mono-latin-600-normal.woff2") format("woff2");
  font-weight: 600; font-style: normal; font-display: swap;
}

:root {
  color-scheme: light;
  --bg: #ffffff;
  --bg-alt: #f3f6f9;
  --bg-raised: #ffffff;
  --ink: #0e1726;
  --ink-muted: #4b5768;
  --ink-disabled: #97a2b0;
  --line: #e1e7ee;
  --line-strong: #7d8a9b;
  --disabled-bg: #eef1f5;
  --accent: #1d4fb8;
  --accent-strong: #163d8f;
  --accent-soft: #eaf0fb;
  --accent-highlight: #1d4fb824;
  --accent-glow: #1d4fb81f;
  --on-accent: #ffffff;
  --band-bg: #0a0f14;
  --band-ink: #e6ecf2;
  --band-muted: #9aa8b7;
  --band-line: #1c2733;
  --band-dot: #ffffff1a;
  --band-accent: #9dbcff;
  --link: var(--accent-strong);
  --focus-ring: var(--accent-strong);
  --shadow-nav: 0 1px 0 #e1e7ee, 0 8px 24px -16px rgba(14,23,38,0.18);
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    color-scheme: dark;
    --bg: #0b1117;
    --bg-alt: #111a22;
    --bg-raised: #0f171f;
    --ink: #e6ecf2;
    --ink-muted: #9aa8b7;
    --ink-disabled: #566476;
    --line: #223040;
    --line-strong: #66768a;
    --disabled-bg: #16202a;
    --accent: #86abff;
    --accent-strong: #b3caff;
    --accent-soft: #14223a;
    --accent-highlight: #86abff33;
    --accent-glow: #86abff1a;
    --on-accent: #0b1117;
    --band-bg: #05080c;
    --band-ink: #e6ecf2;
    --band-muted: #9aa8b7;
    --band-line: #1c2733;
    --band-dot: #ffffff14;
    --band-accent: #9dbcff;
    --link: var(--accent-strong);
    --focus-ring: var(--accent-strong);
    --shadow-nav: 0 1px 0 #223040;
  }
}

:root[data-theme="dark"] {
  color-scheme: dark;
  --bg: #0b1117;
  --bg-alt: #111a22;
  --bg-raised: #0f171f;
  --ink: #e6ecf2;
  --ink-muted: #9aa8b7;
  --ink-disabled: #566476;
  --line: #223040;
  --line-strong: #66768a;
  --disabled-bg: #16202a;
  --accent: #86abff;
  --accent-strong: #b3caff;
  --accent-soft: #14223a;
  --accent-highlight: #86abff33;
  --accent-glow: #86abff1a;
  --on-accent: #0b1117;
  --band-bg: #05080c;
  --band-ink: #e6ecf2;
  --band-muted: #9aa8b7;
  --band-line: #1c2733;
  --band-dot: #ffffff14;
  --band-accent: #9dbcff;
  --link: var(--accent-strong);
  --focus-ring: var(--accent-strong);
  --shadow-nav: 0 1px 0 #223040;
}

:root {
  --font-text: "Schibsted Grotesk", "Segoe UI", system-ui, sans-serif;
  --font-label: "IBM Plex Mono", ui-monospace, Consolas, monospace;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  --space-32: 128px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-pill: 9999px;
  --container-max: 1120px;
  --prose-max: 680px;
  --hero-max: 880px;
  --nav-height: 64px;
  --touch-min: 44px;
  --border-width: 1px;
  --ease-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 600ms;
  --duration-marquee: 48s;
  --shadow-none: none;
}
```
