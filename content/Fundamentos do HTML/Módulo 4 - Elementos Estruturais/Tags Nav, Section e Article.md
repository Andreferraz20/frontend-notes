---
title: "Tags Nav, Section e Article"
curso: Rocketseat
modulo: "Módulo 4 - Elementos Estruturais"
tags:
  - rocketseat
  - html
  - estrutural
---

# Tags Nav, Section e Article

> [!abstract] Ideia central
> `<nav>` marca navegação (menu de links), `<section>` agrupa uma seção temática (idealmente com um heading descrevendo-a) e `<article>` marca conteúdo autocontido, como um post de blog. Nenhuma delas é obrigatoriamente aninhada dentro de outra específica — são flexíveis, mas seguem convenções comuns.

---

## `<nav>`: navegação

```html
<header>
  <img src="logo.png" alt="Logo da empresa">
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#contato">Contato</a></li>
      <li><a href="#projetos">Projetos</a></li>
    </ul>
  </nav>
</header>
```

- Geralmente contém links, muitas vezes numa lista (`<ul>`/`<li>`, ver [[Listas]])
- Pode ficar dentro de um `<header>` — mas **não é obrigatório**: `<nav>` também pode existir fora dele

## `<section>`: seções temáticas

```html
<section>
  <h2>Home</h2>
  <p>...</p>
</section>

<section>
  <h2>Projetos</h2>
  <p>...</p>
</section>
```

- `<section>` não tem um significado além de "isso aqui é uma seção" — por isso é recomendado sempre dar um heading (`<h2>`, por exemplo) explicando do que se trata
- Pode aparecer dentro de um `<aside>`, complementando o conteúdo principal — também não é obrigatório

## `<article>`: conteúdo autocontido

```html
<article>
  <h1>Título do artigo</h1>
  <section>
    <h2>Subtítulo da primeira parte</h2>
    <p>...</p>
  </section>
</article>
```

- Nasceu para representar a escrita de um **artigo** — conteúdo que faz sentido sozinho, fora de contexto (ex: um post de blog)
- Pode ter suas próprias `<section>`s internas com `<h2>` — ou não, dependendo do conteúdo
- Geralmente vive dentro de um `<main>`, mas algumas pessoas usam `<article>` **no lugar** de `<main>`, quando não querem usar outras tags de estrutura além dele

## Resumo de flexibilidade

| Tag | Aninhamento comum | Obrigatório? |
|---|---|---|
| `<nav>` | Dentro de `<header>` | Não — pode ficar fora |
| `<section>` | Dentro de `<aside>` ou `<main>`, com `<h2>` | Não — mas recomenda-se dar um heading |
| `<article>` | Dentro de `<main>` | Não — às vezes substitui o `<main>` |

Todas essas (junto com `header`, `main`, `aside`, `footer` de [[Tags Header, Main, Aside e Footer]]) são **tags estruturais**: existem para estruturar o HTML como um todo, dando significado a cada bloco.

---

## Pontos-chave

- [ ] `<nav>`: bloco de navegação/links
- [ ] `<section>`: seção temática — dê um heading para descrevê-la
- [ ] `<article>`: conteúdo autocontido (ex: post de blog)
- [ ] Nenhuma tem aninhamento obrigatório — são convenções, não regras rígidas

---

## Navegação

- Anterior: [[Tags Header, Main, Aside e Footer]]
- Próxima: [[Tags genéricas Div e Span]]
- Índice do módulo: [[Módulo 4 - Elementos Estruturais]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Listas]], [[Títulos e parágrafos]]
