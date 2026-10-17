# EmbedFrame

Moldura para um mapa ou painel interativo incorporado, com título, link para abrir fora, área protegida contra rolagem acidental e linha de fonte.

**O que o consumidor fornece**: tipo (Mapa interativo, Painel), título, URL do conteúdo (`<iframe title="…" loading="lazy">`), imagem estática equivalente, fonte com data de coleta e, se houver, link para os dados brutos.

**Anatomia**

- Borda `line`, raio `radius-md`. Barra superior em `bg-alt` com rótulo `label`, título 15 px e "Abrir em nova aba".
- Palco 16:10 (`pf-embed__stage--4x3` para mapas mais altos), fundo `accent-soft` enquanto carrega.
- Rodapé `small`/`ink-muted`: "Fonte: … · coletado em …" e "Baixar dados (CSV)".

**Comportamento**

- No celular, o mapa começa coberto por um botão "Toque para interagir": sem isso, o dedo que rola a página fica preso no mapa. Ao tocar, o botão some e o iframe recebe o foco. Esc devolve o foco à página.
- Mostre primeiro a imagem estática; o iframe carrega só quando o leitor ativa (economiza dados no celular).
- O iframe tem `title` que descreve o conteúdo. A imagem estática tem `alt` com a conclusão principal do mapa ("Concentração maior na região central").

**Evite**: incorporar sem fonte e data; mapa em tela cheia no meio do texto; painel que exige login.
