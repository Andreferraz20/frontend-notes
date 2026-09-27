---
title: "Desenhando uma página web"
curso: Rocketseat
modulo: "Módulo 4 - Elementos Estruturais"
tags:
  - rocketseat
  - html
  - estrutural
---

# Desenhando uma página web

> [!abstract] Ideia central
> Aula de transição: antes de estudar cada tag estrutural em detalhe, é útil visualizar o "mapa" de uma página comum — as áreas que praticamente todo site tem, cada uma com sua própria tag semântica.

---

## O mapa de uma página típica

```
┌─────────────────────────────────┐
│  header (logo + navegação)       │
├───────────────────────┬─────────┤
│                        │         │
│  main (conteúdo        │  aside  │
│  principal)            │         │
│                        │         │
├───────────────────────┴─────────┤
│  footer (rodapé)                 │
└─────────────────────────────────┘
```

| Área da página | Tag |
|---|---|
| Topo, com logo e navegação | `<header>` |
| Menu de navegação | `<nav>` |
| Conteúdo principal | `<main>` |
| Conteúdo lateral/complementar | `<aside>` |
| Seções dentro do conteúdo | `<section>` |
| Rodapé | `<footer>` |

Cada uma dessas áreas tem uma **semântica** própria (ver [[Semântica]]) — não é só posição visual, é significado. As próximas aulas do módulo detalham cada uma dessas tags.

---

## Pontos-chave

- [ ] Uma página comum se divide em áreas reconhecíveis: cabeçalho, navegação, conteúdo principal, lateral, rodapé
- [ ] Cada área tem uma tag semântica correspondente
- [ ] Essa aula é o mapa geral — o detalhe de cada tag vem a seguir

---

## Navegação

- Anterior: [[Anatomia de um documento HTML]]
- Próxima: [[Tags Header, Main, Aside e Footer]]
- Índice do módulo: [[Módulo 4 - Elementos Estruturais]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]

---

> [!note]- Transcrição da aula
> **[00:00]** Imagina comigo que isso daqui é uma página da web, um HTML que a gente está criando, e a gente vai estudar um pouquinho sobre algumas seções comuns que a gente acaba colocando em páginas.
>
> **[00:09]** Então imagina comigo que aqui na parte superior — aonde mais pra frente a gente vai ver qual tag a gente vai colocar aqui — a gente quer colocar uma logo, a gente quer colocar uma navegação, aqui no meio a gente quer colocar algumas informações principais da nossa página, aqui embaixo a gente quer colocar um rodapé, e aqui no canto a gente quer colocar algumas coisinhas extras.
>
> **[00:30]** Cada uma dessas partes aqui elas têm semântica: essa parte superior é o header, isso daqui é o navigation ou navegação, isso daqui é o aside, aqui tem algumas outras seções, isso daqui podem ser sections, aqui é o footer, rodapé.
>
> **[00:50]** Então numa página nós temos elementos e a gente vai dar uma olhadinha nesses elementos pra entender o motivo deles, porque todos eles têm uma semântica, têm um motivo, e a gente vai então saber exatamente qual elemento colocar em qual lugar, tá bom?
