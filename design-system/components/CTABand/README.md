# CTABand

Bloco final escuro, centralizado, com o convite ao contato, o e-mail visível e copiável e o link do GitHub. Substitui o formulário da referência.

**O que o consumidor fornece**: título (até 50 caracteres, a expressão final em `<span class="pf-hl">`), uma frase, o e-mail e a URL do perfil no GitHub.

**Anatomia**

- `band-bg` com pontos `band-dot`, padding `space-16` (celular) / `space-24` (desktop). No tema escuro a faixa fica mais escura que a página e ganha borda `band-line`.
- Sobrelinha `overline`/`band-accent`; título em `h2` (44 px no desktop) `band-ink` com destaque `band-accent`; frase `band-muted`.
- Linhas de contato em pílula com borda `band-line`, 56 px de altura, valor em mono 15 px, selecionável.
- Botão "Copiar e-mail" (`pf-btn--band`): fundo `band-accent`, texto `band-bg`. Ao copiar, o rótulo vira "Copiado" por 2 s e uma região `role="status"` anuncia. Se a cópia falhar, o texto é selecionado e a mensagem orienta Ctrl+C.

**Regras**

- O e-mail aparece escrito por extenso, sempre. `mailto:` é conveniência, não o único caminho.
- Um bloco destes por página, o último antes do rodapé.

**Evite**: formulário, redes sociais que não usa para trabalho, "Vamos tomar um café?".

E-mail e usuário do GitHub na pré-visualização são marcadores a substituir.
