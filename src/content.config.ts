import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';
import { nomesCategorias } from './data/categorias';

// Um projeto = um arquivo .md ou .mdx em src/content/projetos/. O nome do arquivo vira o endereço:
// boletins-urna.md → /projetos/boletins-urna/. Veja o README para o passo a passo.
const projetos = defineCollection({
  loader: glob({ base: './src/content/projetos', pattern: '**/[^_]*.{md,mdx}' }),
  schema: z
    .object({
      title: z.string().max(60),
      category: z.enum(nomesCategorias),
      /** Ordem na grade: o mais forte em conferência primeiro. */
      order: z.number().int(),
      /** Uma frase para o card, sem números que não estejam na fonte. */
      summary: z.string().max(140),
      /** Frase de abertura da página do projeto. */
      lead: z.string().max(240),
      /** Situação do projeto, quando não está em uso (ex.: "Em desenvolvimento"). Aparece no card e na página. */
      status: z.string().max(40).optional(),
      /** Como o resultado foi conferido (linha "Como foi conferido" do card). */
      verification: z.string().max(200),
      /** Selo "Conferido": só quando há fonte oficial externa e a página descreve a conferência. */
      seal: z.object({ label: z.string().max(48), source: z.string().max(24) }).optional(),
      /** Bloco "Limites": obrigatório quando há selo. */
      limits: z.object({ title: z.string().max(60), items: z.array(z.string()).min(1) }).optional(),
      /** 2 a 4 tags no card. */
      tags: z.array(z.string()).min(2).max(4),
      /** Lista completa de tecnologias, na ficha da página. */
      stack: z.array(z.string()).min(1),
      officialSource: z.string().optional(),
      context: z.string().optional(),
      year: z.number().int().optional(),
      links: z
        .object({ code: z.url().optional(), demo: z.url().optional(), data: z.url().optional() })
        .default({}),
      /** Mídia do card e do topo da página (padrão MediaFrame). Sem `src`, aparece um esquema ilustrativo do tipo. */
      media: z.object({
        kind: z.enum(['map', 'diagram', 'table', 'capture']),
        /** Arquivo em src/assets/projetos/ (SVG entra inline e segue o tema; PNG/JPG/WebP é otimizado). */
        src: z.string().optional(),
        alt: z.string(),
      }),
      /** Mapa ou painel interativo na página do projeto (EmbedFrame). */
      embed: z
        .object({
          kind: z.enum(['Mapa interativo', 'Painel']),
          title: z.string(),
          src: z.url(),
          staticImage: z.string(),
          staticAlt: z.string(),
          source: z.string(),
          dataUrl: z.url().optional(),
          tall: z.boolean().default(false),
        })
        .optional(),
      draft: z.boolean().default(false),
    })
    .refine((p) => !p.seal || p.limits, {
      message: 'Projeto com selo precisa do bloco "limits" (ProjectDetail/README).',
      path: ['limits'],
    }),
});

// Cards de resultado: só números reais, que o leitor confere na página do projeto.
const resultados = defineCollection({
  loader: file('src/content/resultados.yaml'),
  schema: z.object({
    order: z.number().int(),
    label: z.string(),
    number: z.string(),
    text: z.string(),
    context: z.string(),
    project: reference('projetos'),
  }),
});

// Linha do tempo, do mais recente para o mais antigo (`order` 1 primeiro).
const experiencia = defineCollection({
  loader: file('src/content/experiencia.yaml'),
  schema: z.object({
    order: z.number().int(),
    period: z.string(),
    current: z.boolean().default(false),
    title: z.string(),
    org: z.string(),
    text: z.string().optional(),
  }),
});

export const collections = { projetos, resultados, experiencia };
