---
title: "Tags Header, Main, Aside e Footer"
curso: Rocketseat
modulo: "Módulo 4 - Elementos Estruturais"
tags:
  - rocketseat
  - html
  - estrutural
---

# Tags Header, Main, Aside e Footer

> [!abstract] Ideia central
> Quatro tags estruturais fundamentais: `<header>` (cabeçalho), `<main>` (conteúdo principal), `<aside>` (conteúdo secundário/lateral) e `<footer>` (rodapé). `header`, `main` e `footer` são os três pilares de quase toda página; `aside` é opcional, usado quando faz sentido.

---

## As quatro tags

```html
<body>
  <header>
    <!-- logo, navegação -->
  </header>

  <main>
    <h1>Conteúdo principal da página</h1>
    <p>...</p>
  </main>

  <aside>
    <!-- conteúdo relacionado/complementar -->
  </aside>

  <footer>
    <!-- informações extras, direitos autorais, links -->
  </footer>
</body>
```

| Tag | Papel | Obrigatória? |
|---|---|---|
| `<header>` | Cabeçalho — geralmente no topo da página | Comum, não obrigatória |
| `<main>` | Conteúdo **principal** da página | Comum, não obrigatória |
| `<aside>` | Conteúdo secundário, relacionado ou complementar ao principal | Opcional — usa quando faz sentido |
| `<footer>` | Rodapé — informações extras do site | Comum, não obrigatória |

## Detalhando cada uma

- **`<header>`**: fica no topo da página (posição comum, não uma regra rígida). É onde normalmente entram logo e navegação.
- **`<main>`**: é o conteúdo principal — é dentro dele que provavelmente vão aparecer outras tags de conteúdo, como `<h1>` e `<p>` (ver [[Títulos e parágrafos]]).
- **`<aside>`**: estende ou referencia informações do conteúdo principal, geralmente numa lateral — mostra "mais ideias", links relacionados, etc. Não é obrigatório, aparece quando faz sentido.
- **`<footer>`**: rodapé com informações extras do site. Algumas pessoas colocam até menus de navegação ali também.

> [!tip] Os três pilares
> `header`, `main` e `footer` são as três tags estruturais mais fundamentais de uma página. `aside` aparece "de vez em quando", conforme a necessidade.

---

## Pontos-chave

- [ ] `<header>`: cabeçalho, geralmente no topo
- [ ] `<main>`: conteúdo principal da página
- [ ] `<aside>`: conteúdo secundário/lateral, opcional
- [ ] `<footer>`: rodapé
- [ ] `header`, `main`, `footer` são os pilares estruturais mais comuns

---

## Navegação

- Anterior: [[Desenhando uma página web]]
- Próxima: [[Tags Nav, Section e Article]]
- Índice do módulo: [[Módulo 4 - Elementos Estruturais]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Anatomia de um documento HTML]]

---

> [!note]- Transcrição da aula
> **[00:00]** Bom, vamos dar uma olhada nesses 4 elementos que são fundamentais, nem todos eles você vai usar sempre, você pode usar uma vez ou outra, tanto faz, tá bom? Mas imagina que você vai ter um header, o header, onde geralmente a gente chama de cabeçalho, ele vai ficar aqui em cima da página, geralmente, tá bem? É ali que ficaria o header.
>
> **[00:18]** O main, ele é o conteúdo principal que tem na sua página, geralmente ele ficaria aqui ao meio, geralmente, não importa, poderia ficar lá no canto, mas ele é relativo ao conteúdo principal daquela página. Então é aqui dentro que talvez você vai colocar umas outras tags que a gente ainda poderá ver, mas vez ou outra você vai acabar terminando aqui com H1, com um P, alguma coisa assim dentro do conteúdo principal.
>
> **[00:41]** Além de você ter o cabeçalho e o conteúdo principal, você pode ter um conteúdo secundário que ele pode referenciar conteúdos dos conteúdos, eles podem ser referências do conteúdo principal. Então, ele serve ou para estender informações do conteúdo principal, o aside, ou para ficar numa lateral fazendo um comportamento ali de te mostrar mais ideias de conteúdos, mais coisas que você poderia estar entrando neles, tá bem?
>
> **[01:07]** Além disso, você teria o footer, que é o rodapé, rodapé com informações extras do site, que você pode colocar ali, tem pessoas que às vezes colocam menus ali de navegação, mas esses três são os principais estruturais, header, main, footer, o aside de vez em quando ele pode aparecer ou não, não é uma necessidade, mas entendendo esses quatro elementos aqui, eles são fundamentais como uma estrutura geral da sua página e aí tem elementos que a gente vai colocando por dentro, vamos entendê-los.
