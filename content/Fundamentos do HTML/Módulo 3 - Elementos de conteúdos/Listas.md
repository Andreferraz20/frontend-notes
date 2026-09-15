---
title: "Listas"
curso: "Fundamentos do HTML"
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
- Curso: [[Fundamentos do HTML]]

---

> [!note]- Transcrição da aula
> **[00:00]** Vamos falar sobre listas no HTML. Supondo que eu quero organizar um texto aqui sobre um bolo de cenoura e eu quero fazer o modo de preparo dele, e eu quero também ter os ingredientes, tá bem? Então, ingredientes. Olha que legal, aqui a gente já está colocando as tags na maneira que a gente imagina. Essa daqui é a página de bolo de cenoura, então eu vou ter os ingredientes e vou ter o modo de preparo. Aqui eu quero ver como funciona uma lista ordenada, uma não ordenada primeiro, tá? Vamos colocar em ordem aqui, primeiro a não ordenada.
>
> **[00:36]** Os ingredientes, então, eu posso vir aqui e colocar uma lista, o UL. O UL é uma lista não ordenada, unordered list, é em inglês, né? E LI é um list item, é um elemento da sua lista. Então vamos supor que aqui a gente vai precisar de farinha. Não sei quanta farinha, 300 gramas? Não sei, um quilo. A gente vai precisar aqui de cacau em pó, vamos imaginar aqui, sei lá, 100 gramas. Eu não sei fazer bolo de cenoura, e a gente vai precisar de uma cenoura ralada, tá bem? Pronto, aqui você acabou de fazer uma lista não ordenada que tem esses pontinhos aqui, ok? A gente vai precisar provavelmente de mais coisas nesse bolo.
>
> **[01:21]** Agora o modo de preparo, eu quero usar uma lista ordenada. Eu quero falar o passo a passo que essa pessoa vai ter que seguir. O OL é ordered list. Se eu tenho dúvida da maneira que eu falo as coisas, descansa o mouse. Se você usa editor de código como o VSCode ou esse editor de código aqui, ao descansar o mouse em cima da sua tag, de alguma coisa aqui do seu HTML, você vai ter uma descriçãozinha ali breve do que é esse elemento. Então o elemento OL representa uma lista de itens onde os itens têm por sua intenção ali ordered list, ok?
>
> **[01:56]** Então LI, posso colocar o LI de novo, ele representa um item da lista, o list item. E aqui então no modo de preparo eu tenho que pegar a farinha e colocar no recipiente. No segundo passo, misturar com o cacau. E no terceiro passo, misturar a cenoura. Pronto, aqui eu acabei de fazer uma lista. Um, dois, três, é uma lista ordenada, tudo bem? Muito simples de fazer listas não ordenadas e ordenadas no HTML.
