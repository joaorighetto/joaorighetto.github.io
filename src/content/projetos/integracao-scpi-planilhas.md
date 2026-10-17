---
title: Integração do sistema de gestão (SCPI) com planilhas
category: Automação
order: 2
summary: Extração automatizada dos relatórios do SCPI para o Google Sheets, só com os registros novos, e formulários com aviso no Telegram.
lead: No SAEP, Serviço de Água e Esgoto de Pirassununga, onde sou chefe de almoxarifado, os relatórios do sistema de gestão (SCPI), antes baixados manualmente, chegam às planilhas por uma extração automatizada.
verification: cada carga traz só os registros que ainda não estavam na planilha.
limits:
  title: O que fica de fora
  items:
    - O código é interno e não é público.
    - A automação é disparada manualmente.
tags: [Python, Playwright, gspread, Google Apps Script]
stack: [Python, Playwright, gspread, Google Apps Script, Bot API do Telegram]
context: SAEP, Pirassununga/SP
year: 2026
media:
  kind: diagram
  src: integracao-scpi-planilhas/fluxo.svg
  alt: "Fluxo: os relatórios do SCPI são extraídos, só os registros novos vão para as planilhas, que alimentam os formulários de requisição e o aviso no Telegram."
---

## Problema

Os relatórios de estoque, saídas, entradas e pedidos de compra do SCPI eram baixados à mão para manter a planilha de controle.

## O que fiz

- Extração automatizada dos relatórios de estoque, saídas, entradas e pedidos de compra do SCPI, com envio ao Google Sheets só dos registros novos.
- A automação, executada diariamente há meses, mantém atualizada a planilha de controle de estoque, base da padronização dos códigos legados (mapeamento DE/PARA) e da curva ABC consolidada.
- Formulários de requisição em uso pelos funcionários: verificam o estoque no momento do pedido, impedem gravações simultâneas conflitantes e avisam o almoxarifado por um bot do Telegram.
- A nova versão dos formulários, a Central Almoxarifado, está em produção desde outubro de 2026.

## Como conferi

Cada carga traz só os registros que ainda não estavam na planilha.
