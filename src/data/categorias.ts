// Categorias dos projetos (as mesmas nos FilterChips e no ProjectCard). No máximo 5.
// Categoria nova: acrescente aqui; o schema, os chips e as páginas /categoria/… seguem sozinhos.
export const categorias = [
  { nome: 'Dados públicos', slug: 'dados-publicos' },
  { nome: 'Automação', slug: 'automacao' },
  { nome: 'Sistemas', slug: 'sistemas' },
] as const;

export type Categoria = (typeof categorias)[number]['nome'];

export const nomesCategorias = categorias.map((c) => c.nome) as [Categoria, ...Categoria[]];

export const slugDaCategoria = (nome: Categoria) => categorias.find((c) => c.nome === nome)!.slug;
