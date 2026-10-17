// Corpo do projeto em Markdown → blocos numerados do ProjectDetail.
// Cada "## Título" vira <section> com o número 01, 02… em .pf-step e o título em .pf-h3-result,
// levando junto tudo o que vem depois dele até o próximo "##".

const slug = (texto) =>
  texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const textoDe = (no) =>
  no.type === 'text' ? no.value : (no.children ?? []).map(textoDe).join('');

export default function rehypeSecoes() {
  return (arvore) => {
    const saida = [];
    let atual = null;
    let n = 0;
    for (const no of arvore.children) {
      if (no.type === 'element' && no.tagName === 'h2') {
        n += 1;
        no.properties = { ...no.properties, id: no.properties?.id ?? slug(textoDe(no)), className: ['pf-h3-result'] };
        atual = {
          type: 'element', tagName: 'section', properties: {},
          children: [
            { type: 'element', tagName: 'span', properties: { className: ['pf-step'] }, children: [{ type: 'text', value: String(n).padStart(2, '0') }] },
            no,
          ],
        };
        saida.push(atual);
      } else if (atual) {
        if (!(no.type === 'text' && !no.value.trim())) atual.children.push(no);
      } else {
        saida.push(no);
      }
    }
    arvore.children = saida;
  };
}
