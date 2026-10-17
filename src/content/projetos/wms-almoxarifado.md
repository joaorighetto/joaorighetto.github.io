---
title: WMS-Almoxarifado
category: Sistemas
order: 3
status: Em desenvolvimento
summary: Sistema de materiais, estoque e movimentações com foco em rastreabilidade. Em desenvolvimento, ainda sem uso em produção.
lead: Sistema de materiais, estoque e movimentações com foco em rastreabilidade, em desenvolvimento e ainda sem uso em produção.
verification: testes automatizados em cada mudança (pytest + GitHub Actions).
limits:
  title: Situação atual
  items:
    - Em desenvolvimento, ainda sem uso em produção.
tags: [Python, Django, PostgreSQL, HTMX]
stack: [Python, Django, PostgreSQL, HTMX, pytest, GitHub Actions]
links:
  code: https://github.com/joaorighetto/WMS-Almoxarifado
media:
  kind: capture
  alt: Esquema ilustrativo de tela de sistema com menu lateral e tabela.
---

## Objetivo

Controlar materiais, estoque e movimentações com rastreabilidade.

## O que fiz

- Já implementado: importação do catálogo e dos fornecedores do sistema legado, com prévia e conferência antes da carga; autenticação; usuários e setores com papéis; entrada de materiais com estorno pelo chefe, mediante justificativa.
- Desenvolvimento orientado por especificação; regras de negócio, permissões e regras de consistência do estoque definidas por mim.

## Como conferi

Testes automatizados rodam em cada mudança, com pytest e GitHub Actions.
