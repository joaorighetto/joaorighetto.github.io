# VerifiedSeal

Selo em pílula que afirma que o dado foi conferido com a fonte oficial; é a assinatura do portfólio e só aparece onde a conferência aconteceu e está descrita.

**O que o consumidor fornece**: o texto (padrão "Conferido com a fonte oficial"), a sigla da fonte (TSE, IBGE, Portal da Transparência…) e, opcionalmente, um link para o trecho "Como conferi" do projeto ou para a seção Método.

**Variantes**

- Completo: no topo da página de projeto e no Hero (com um resultado real no lugar do texto padrão).
- Compacto (`pf-seal--compact`, só "Conferido"): ao lado da categoria no ProjectCard.
- Sobre faixa escura (`pf-seal--band`): no bloco final.

**Anatomia**: pílula `accent-soft` com borda `accent` de 1 px; círculo `accent` com check `on-accent`; texto `accent-strong` 14 px/600; fonte em `label`/`ink-muted` depois de um ponto.

**Regras**

- Um selo afirma um fato. Use só quando a página do projeto disser como foi conferido e quais os limites.
- Não use em projetos de sistema sem fonte externa: "Sistema de almoxarifado" não leva selo.
- O check sozinho não é o significado: o texto "Conferido" está sempre presente (cor não é a única pista).
