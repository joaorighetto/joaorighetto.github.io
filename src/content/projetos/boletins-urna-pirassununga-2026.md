---
title: Boletins de urna de Pirassununga/SP (1º turno de 2026)
category: Dados públicos
order: 1
summary: Coleta automatizada dos 187 boletins de urna do município no site do TSE, decodificados e consolidados em um único CSV.
lead: Coleta automatizada dos 187 boletins de urna de Pirassununga no site de resultados do Tribunal Superior Eleitoral (TSE), com os votos de cinco cargos consolidados em um único CSV.
verification: cada boletim comparado byte a byte com o arquivo do servidor do TSE; totais conferidos com o resultado oficial do município.
seal:
  label: 187 boletins conferidos byte a byte
  source: TSE
limits:
  title: O que os mapas não mostram
  items:
    - O mapa mostra onde os votos foram registrados (local de votação), não onde os eleitores moram.
tags: [Python, Playwright, asn1tools, QGIS]
stack: [Python, Playwright, asn1tools, QGIS/PyQGIS]
officialSource: Tribunal Superior Eleitoral (TSE)
year: 2026
links:
  code: https://github.com/joaorighetto/TSE-web-scraper
media:
  kind: map
  alt: Esquema ilustrativo de mapa por local de votação.
---

## Problema

Os boletins de urna ficam no site de resultados do TSE, um arquivo por seção. Para analisar o município, era preciso reunir os 187 e transformar cada um em tabela.

## O que fiz

- Coleta automatizada dos 187 boletins de urna do município no site de resultados do TSE, a partir da lista oficial de seções, com coleta retomável em caso de interrupção.
- Decodificação pela especificação ASN.1 oficial e consolidação dos votos de cinco cargos em um único CSV, por seção, cargo e opção de voto.
- Mapas por local de votação, por cargo e de comparecimento, no QGIS.
- A base foi entregue e usada pelo solicitante em uma análise eleitoral.

## Como conferi

Cada boletim foi comparado byte a byte com o arquivo do servidor do TSE. Os totais foram conferidos com o resultado oficial do município.
