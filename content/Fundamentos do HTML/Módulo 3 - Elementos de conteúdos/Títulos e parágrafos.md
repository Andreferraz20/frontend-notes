---
title: "Títulos e parágrafos"
curso: Rocketseat
modulo: "Módulo 3 - Elementos de conteúdos"
tags:
  - rocketseat
  - html
  - semantica
---

# Títulos e parágrafos

> [!abstract] Ideia central
> Títulos (`<h1>` a `<h6>`) indicam a **hierarquia** do conteúdo, e parágrafos (`<p>`) organizam o texto em blocos. Juntos, transformam um texto solto numa página organizada e fácil de entender. Regra de ouro: **um único `<h1>` por página**.

---

## Os seis níveis de título

```html
<h1>Sobre mim</h1>
<h2>Trabalho</h2>
<h3>Carga horária</h3>
<h2>Estilo de vida</h2>
```

`<h1>` até `<h6>` são os *headings* — do maior/mais importante (`h1`) ao menor (`h6`). Cada nível representa um subtítulo do nível anterior: `h2` é subtítulo de `h1`, `h3` é subtítulo de `h2`, e assim por diante.

> [!warning] Um `<h1>` por página
> A prática recomendada é usar **apenas um `<h1>`** em cada página — ele representa o tópico principal daquele documento. Quantos `<h2>`, `<h3>` etc. forem necessários, sem limite, desde que organizados hierarquicamente abaixo do `<h1>`.

## Parágrafos

```html
<p>Este é um parágrafo qualquer sobre um assunto.</p>
```

`<p>` estrutura o texto em blocos — cada ideia/parágrafo tem sua própria tag, em vez de texto corrido sem organização (compare com o problema visto em [[Espaços e quebras de linha]]).

## Exemplo completo (montado na aula)

```html
<h1>Sobre mim</h1>

<h2>Trabalho</h2>
<p>Um parágrafo contando sobre meu trabalho atual.</p>

<h3>Carga horária</h3>
<p>Um parágrafo específico sobre carga horária.</p>

<h2>Estilo de vida</h2>
<p>Um parágrafo contando sobre meu estilo de vida.</p>
```

Note a hierarquia: `Sobre mim` (h1) é o tópico da página; `Trabalho` e `Estilo de vida` (h2) são as seções principais; `Carga horária` (h3) é um subtópico dentro de `Trabalho`. Essa estrutura já deixa claro, só pela marcação, do que cada trecho trata — o objetivo de [[Semântica]].

---

## Pontos-chave

- [ ] `<h1>` a `<h6>`: hierarquia de títulos, do mais para o menos importante
- [ ] Apenas **um `<h1>` por página**
- [ ] `<p>` organiza o texto em parágrafos/blocos
- [ ] A hierarquia de headings comunica a estrutura do conteúdo, não só o tamanho da fonte

---

## Navegação

- Anterior: [[Semântica]]
- Próxima: [[Formatação básica de textos]]
- Índice do módulo: [[Módulo 3 - Elementos de conteúdos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Anatomia de um documento HTML]]
