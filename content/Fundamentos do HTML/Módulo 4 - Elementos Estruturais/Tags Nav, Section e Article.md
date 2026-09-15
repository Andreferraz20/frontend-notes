---
title: "Tags Nav, Section e Article"
curso: "Fundamentos do HTML"
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
- Curso: [[Fundamentos do HTML]]
- Relacionado: [[Listas]], [[Títulos e parágrafos]]

---

> [!note]- Transcrição da aula
> **[00:00]** Existem esses três conteúdos que eles vão ter também significados interessantes aqui pra gente. Essas três tags. A tag nav, geralmente é uma navegação, aqui dentro você pode colocar links, se você quiser, como uma logomarca, por exemplo.
>
> **[00:14]** Aqui dentro você pode colocar uma lista, se você quiser, no caso, apontando aqui para uma home, imagina que você está apontando aqui também para uma parte de contato, ok, quem sabe projetos, ok? E aí, claro, depois você vai estilizando essas coisas.
>
> **[00:31]** Um navigation, ele pode ou não estar dentro de um header, tudo bem? Dentro do header você pode colocar um nav, ok? Você pode ou não colocar. O header, então, você pode ter informações iniciais do seu site e dentro dessas informações iniciais pode ter ali um navegador, mas o nav também pode ficar fora do header, bem tranquilo, não existe uma regra falando que, obrigatoriamente, o nav tem que ficar dentro do header, ele pode ficar aqui fora e tá tudo beleza, tá bom?
>
> **[01:10]** Você tem aqui a section, a section ela serve para você definir sessões e como ela não tem um significado além de sessão, seria legal você dar nomes para ela. Vamos imaginar que essa seja a section home e ainda você vai ter a section contato. É recomendado que dentro de uma section você possa colocar um h2 ali para definir o que é essa sessão, essa daqui é a sessão alguma coisa sobre home, essa daqui é alguma coisa sobre projetos, tá bem?
>
> **[01:43]** E aí a section ela poderia estar dentro de uma aside, não é obrigatório, mas ela poderia estar dentro de uma aside, dizendo algumas coisas extras em relação ao conteúdo principal que você tinha no seu site ali escrito, ok?
>
> **[01:57]** Você tem uma outra tag que é a article, a article é bem bacana porque a sacada da article é que ela nasceu primeiro para ser a escrita de um artigo, então aqui você teria um h1 definindo o título do artigo, ok? Você poderia ou não ter sections ali dentro com h2, com subtítulos, dependendo conforme você vai tendo ali, subtítulos ou não, sections pode ter ou não, e o article pode ou não também estar dentro de um main, mas geralmente ele vai estar dentro de um main, é que algumas pessoas às vezes nem usam a tag main e acabam usando apenas a article para criar o seu conteúdo principal ali e elas não querem usar mais outras tags além do article, tá bem?
>
> **[02:44]** Então entendendo todas essas nuances, todos esses tipos de tags, a gente começa a entender melhor como ter uma tag que tem um significado e colocá-la no local correto do seu significado, todas essas são tags estruturais, ok? Seja as primeiras que nós vimos que é a header, que é a main, a aside ou footer, ou sejam essas que a gente viu agora, todas elas são tags estruturais e elas servem para poder estruturar então o nosso HTML como um todo.
