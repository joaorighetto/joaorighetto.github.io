# ResultCard

Card de resultado no padrão 2×2: sobrelinha com a categoria e a fonte, título que é o próprio resultado, divisória e uma linha de contexto.

**O que o consumidor fornece**: categoria e fonte ("Eleições · TSE"), o número e a frase que o acompanha, e uma linha de contexto que diz como o número foi obtido.

**Anatomia**: `bg-raised`, borda `line`, raio `radius-lg`, padding `space-6`. Sobrelinha `label`/`accent`; título `h3-result` com o número em `accent` e `tabular-nums`; divisória `line`; contexto `small`/`ink-muted`.

**Regra dos números**

- Só números reais, que o leitor possa conferir na página do projeto. Exemplo real: "187 boletins de urna conferidos byte a byte com o TSE".
- Não arredonde para impressionar nem some projetos diferentes num número só.
- A grade acompanha a quantidade: 1 resultado em largura de texto, 2 em duas colunas, 4 em 2×2. Com 3, use 3 colunas no desktop. Nunca complete com cards vazios no site.
- O card tracejado (`pf-result--empty`) existe só nesta documentação, para mostrar a estrutura.

**Evite**

- Percentuais sem base ("100% de precisão"), contagens de horas, linhas de código ou clientes.
