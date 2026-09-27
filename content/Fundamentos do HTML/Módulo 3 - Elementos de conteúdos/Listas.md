---
title: "Listas"
curso: Rocketseat
modulo: "Módulo 3 - Elementos de conteúdos"
tags:
  - rocketseat
  - html
  - semantica
---

# Listas

> [!abstract] Ideia central
> HTML tem duas tags de lista: `<ul>` (**u**nordered **l**ist, não ordenada — com marcadores) e `<ol>` (**o**rdered **l**ist, ordenada — numerada). Em ambas, cada item é um `<li>` (**l**ist **i**tem).

---

## Lista não ordenada: `<ul>`

Usada quando a ordem dos itens não importa — ex: uma lista de ingredientes.

```html
<h2>Ingredientes</h2>
<ul>
  <li>1kg de farinha</li>
  <li>100g de cacau em pó</li>
  <li>1 cenoura ralada</li>
</ul>
```

Renderiza com marcadores (bullets •).

## Lista ordenada: `<ol>`

Usada quando a sequência importa — ex: um passo a passo.

```html
<h2>Modo de preparo</h2>
<ol>
  <li>Pegar a farinha e colocar no recipiente</li>
  <li>Misturar com o cacau</li>
  <li>Misturar a cenoura</li>
</ol>
```

Renderiza numerada (1, 2, 3...).

## Tabela comparativa

| Tag | Nome completo | Quando usar | Renderização |
|---|---|---|---|
| `<ul>` | Unordered list | Ordem não importa (ingredientes, itens de menu) | Marcadores (•) |
| `<ol>` | Ordered list | Sequência importa (passo a passo, ranking) | Números (1, 2, 3...) |
| `<li>` | List item | Cada item, dentro de `<ul>` ou `<ol>` | — |

> [!tip] Dica de editor
> No VS Code (ou editores parecidos), passar o mouse sobre uma tag mostra uma descrição rápida do elemento — útil para tirar dúvida rápida sobre o que cada tag representa sem sair do editor.

---

## Pontos-chave

- [ ] `<ul>` = lista não ordenada (marcadores)
- [ ] `<ol>` = lista ordenada (numerada)
- [ ] `<li>` = item de lista, dentro de `<ul>` ou `<ol>`
- [ ] A escolha entre `<ul>` e `<ol>` depende de a ordem importar ou não

---

## Navegação

- Anterior: [[Formatação básica de textos]]
- Próxima: [[Representação de código de computador]]
- Índice do módulo: [[Módulo 3 - Elementos de conteúdos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
