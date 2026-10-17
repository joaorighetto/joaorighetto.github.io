// Textos fixos da página inicial. Projetos, resultados e experiência ficam em src/content/.
export const site = {
  nome: 'João Marcos',
  nomeCompleto: 'João Marcos Zuñeda Righetto',
  papel: 'Python, automação e dados públicos',
  descricao:
    'Desenvolvedor Python: dados públicos coletados automaticamente e conferidos com a fonte oficial. Coletas, automações e sistemas que entregam dado verificado em formato útil.',
  email: 'jm_zr@icloud.com',
  github: 'https://github.com/joaorighetto',
  curriculo: { href: '/curriculo-joao-marcos-righetto.pdf', rotulo: 'Baixar currículo (PDF, 89 KB)' },
};

export const hero = {
  overline: 'Python · automação · dados públicos',
  title: 'Dados públicos coletados automaticamente e <mark class="pf-mark">conferidos com a fonte oficial</mark>',
  lead: 'Construo coletas, automações e sistemas que entregam dado verificado em formato útil.',
};

export const ferramentas = [
  'Python', 'Playwright', 'Django', 'PostgreSQL', 'HTMX', 'pytest',
  'GitHub Actions', 'Google Apps Script', 'QGIS', 'asn1tools',
];

export const secoes = {
  projetos: {
    label: 'Projetos',
    title: 'Projetos com dado <span class="pf-hl">conferido</span>',
    lead: 'Cada projeto mostra o código, a demonstração quando houver e como o resultado foi conferido.',
  },
  resultados: { label: 'Resultados', title: 'Números que você pode <span class="pf-hl">conferir</span>' },
  metodo: { label: 'Método', title: 'Coletar, conferir e <span class="pf-hl">entregar</span>' },
  sobre: { label: 'Sobre', title: 'Python a serviço do <span class="pf-hl">dado público</span>' },
  experiencia: { label: 'Experiência', title: 'Trabalho e <span class="pf-hl">formação</span>' },
};

export const passos: [{ title: string; text: string }, { title: string; text: string }, { title: string; text: string }] = [
  { title: 'Coletar', text: 'Baixar da fonte oficial de forma automática e retomável.' },
  { title: 'Conferir', text: 'Comparar com a fonte e com os totais oficiais antes de usar.' },
  { title: 'Entregar', text: 'Transformar em tabela, mapa ou aviso no formato de quem vai usar.' },
];

export const sobre = {
  fotoAlt: 'João Marcos Zuñeda Righetto, retrato',
  paragrafo:
    'Desenvolvedor Python com foco em coleta automatizada e validação de dados públicos. Chefio o almoxarifado do SAEP, a autarquia de água e esgoto de Pirassununga, onde automatizei a integração entre o sistema de gestão, planilhas e formulários usados no dia a dia. Formado em Análise e Desenvolvimento de Sistemas, com inglês fluente após cerca de cinco anos de trabalho no Reino Unido.',
  itens: [
    { title: 'Conferência com a fonte oficial', text: 'O dado só é usado depois de comparado com a origem.' },
    { title: 'Automação que roda no dia a dia', text: 'Rotinas em uso real, não só demonstrações.' },
    { title: 'Código aberto quando possível', text: 'Repositórios públicos com instruções para rodar.' },
    { title: 'Desenvolvimento assistido por IA', text: 'Regras de negócio, testes e revisão sob minha responsabilidade.' },
  ],
};

export const contato = {
  title: 'Vamos conversar sobre <span class="pf-hl">dados públicos</span>',
  text: 'Respondo por e-mail. O código dos projetos está no GitHub.',
};
