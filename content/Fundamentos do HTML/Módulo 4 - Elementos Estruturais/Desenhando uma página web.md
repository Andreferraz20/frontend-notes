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
