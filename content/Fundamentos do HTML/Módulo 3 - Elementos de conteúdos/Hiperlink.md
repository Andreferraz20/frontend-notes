---
title: "Hiperlink"
curso: Rocketseat
modulo: "Módulo 3 - Elementos de conteúdos"
tags:
  - rocketseat
  - html
  - semantica
---

# Hiperlink

> [!abstract] Ideia central
> A tag `<a>` é o próprio motivo do "hiper" em hipertexto (ver [[O que é HTML]]): permite clicar num texto e ir para outro lugar. O atributo `href` é obrigatório — sem ele, não existe link. O destino pode ser uma URL, um fragmento da própria página, ou abrir em nova aba com `target="_blank"`.

---

## `href`: o atributo fundamental

```html
<a href="https://rocketseat.com.br">Conheça a Rocketseat</a>
```

`href` (**h**ypertext **ref**erence) é obrigatório: sem ele, o link simplesmente não existe/não funciona. Dentro dele vai ou uma **URL** ou um **fragmento**.

- **URL** (Universal Resource Locator): o endereço de um conteúdo em algum lugar do mundo — um site, uma página, um arquivo, uma imagem

## Conteúdo dentro do `<a>`

```html
<a href="https://rocketseat.com.br">
  <strong>Conheça a Rocketseat</strong>
</a>
```

Dentro da tag `<a>` pode ir qualquer outra tag — texto formatado, imagens, o que fizer sentido. Ao clicar em qualquer parte do conteúdo, o navegador segue para o destino do `href`.

## Fragmento: navegando dentro da própria página

```html
<a href="#trabalhos">Trabalhos</a>

<!-- ... mais pra baixo na mesma página ... -->

<h2 id="trabalhos">Trabalhos</h2>
<p>Conteúdo da seção de trabalhos...</p>
```

Usando `#` seguido do `id` de um elemento (ver [[Id]]), o link não vai para outra página — ele **rola a própria página** até o elemento com aquele `id`. Só funciona visivelmente se a página tiver conteúdo suficiente para rolar até lá.

## Abrindo em nova aba: `target="_blank"`

```html
<a href="https://rocketseat.com.br" target="_blank">Visite o site</a>
```

- Sem `target`: o link abre na **mesma** janela/aba, substituindo a página atual
- Com `target="_blank"`: abre em **nova** aba ou janela (depende do navegador)

Muito usado quando não se quer que a pessoa saia do seu site ao clicar num link externo.

---

## Pontos-chave

- [ ] `href` é obrigatório — sem ele, não há link
- [ ] `href` pode ser uma **URL** completa ou um **fragmento** (`#id`)
- [ ] Fragmento navega dentro da própria página, até o elemento com aquele `id`
- [ ] `target="_blank"` abre o link em nova aba/janela
- [ ] Qualquer tag pode ficar dentro do `<a>`

---

## Navegação

- Anterior: [[Representação de código de computador]]
- Próxima: [[Imagens]]
- Índice do módulo: [[Módulo 3 - Elementos de conteúdos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Id]], [[O que é HTML]]

---

> [!note]- Transcrição da aula
> **[00:00]** Bom, vamos falar sobre o hyperlink, a tag A, e o motivo do HTML, do hypertext. Bom, a gente vai poder então ler textos aqui, dar um clique em alguma coisa e ele vai levar a gente pra um outro lugar. Essa é a sacada do link A, né? Eu vou colocar A aqui, vou dar um Enter, ele já completa pra mim, esse editor de código e tudo mais, com o que é fundamental pra esse link.
>
> **[00:22]** O que é fundamental pra esse link? Essa tag, esse atributo href é fundamental pra esse link. Esse link não funciona, não existe link se não tem esse atributo, tá bem? Ele é fundamental. E aqui dentro eu tenho que colocar ou uma URL ou um fragmento. Uma URL, lembrando, é Universal Resource Locator, um local onde está um conteúdo meu, um arquivo, um HTML, um CSS, uma imagem, tanto faz, um local do mundo, ok?
>
> **[00:57]** Vamos entender colocando aqui https://rocketseat.com.br e isso vai levar a gente pro site da Rocketseat. Aqui dentro da tag A eu vou colocar assim, conheça a Rocketseat, por exemplo. Aqui dentro eu posso colocar outras tags também, tá? Dentro do A eu posso colocar outras tags, posso colocar qualquer coisa que eu quiser aqui dentro. Que daí, o que acontece? Quando eu clicar no conteúdo, ele vai me levar pra página, vai me redirecionar pra página, tudo bem?
>
> **[01:26]** A gente vai poder usar também um fragmento. Como que funciona a ideia do fragmento? Vou colocar o mesmo link, só que agora eu quero que ele pegue um pedaço do meu próprio site. Que pedaço? Bom, vou inventar aqui um texto qualquer. Aqui eu vou colocar um identificador, id, e vou colocar o nome, por exemplo, trabalhos. Aqui, quando eu clicar em trabalhos, esse daqui vai ser o nome desse link. Então quando eu clicar nesse link aqui, trabalhos, eu quero que ele leve pra esse pedaço do meu site.
>
> **[01:56]** Mas veja, o pedaço ele tá aqui né, tá visível. Bom, eu vou colocar um monte de quebras de linhas, breaks, brs. Ele não vai ficar mais visível né, depois de um monte de quebras de linhas. Claro, você não precisa fazer esse código não. É só pra você entender como que funciona o fragmento, tá?
>
> **[02:12]** Bom, agora eu quero que quando eu clicar nesse link, ele me leve lá para o id trabalhos. Ou seja, ele me leve pra cá. E essa página ela vai me movimentar me levando pra lá. Aqui eu só preciso colocar uma hashtag, um sustenido. E o nome que eu coloquei lá no meu id, tudo bem? Isso aqui então vai significar que é um fragmento dessa minha mesma url.
>
> **[02:42]** Então na hora que eu clicar aqui pessoal, cliquei, ele movimentou minha página lá pra baixo. Ok? Dei o clique, movimentou lá pra baixo. Obviamente, se eu não tivesse esses espaços todos, não ia movimentar nada, né? Só pra você saber que não adianta eu clicar aqui que ele não vai movimentar nada. Mas se é uma página que tem um monte de conteúdo, um monte de id, quando eu clicar ele vai movimentar a página e é bem legal. Essa é a sacada do fragmento, ele fica na mesma página, mas ele leva a gente para um pedaço, fragmento para um pedaço do nosso site.
>
> **[03:10]** E a outra sacada que é bem legal é eu ter a possibilidade do meu link, da Rocketseat por exemplo, quando eu falar aqui "ver site", quando eu clicar nele eu quero que ele abra uma nova aba, uma nova janela. Nesse caso é o seguinte, esse target, se eu não coloco ele, quando eu dou um clique no link que não tem target, ele vai usar a mesma janela pra atualizar e colocar esse site.
>
> **[03:33]** Nesse caso aqui, se eu colocar aqui dentro um `_blank`, ele vai abrir uma nova janela pra mim. Então quando eu clicar em "ver site", ele abre uma nova janela, uma nova aba, vai depender do seu navegador. Ou uma nova janela ou uma nova aba, tudo bem? Então a gente acaba usando bastante pra que a pessoa não saia do nosso site quando a gente colocar um link ali pra ela ler. Ele simplesmente abre uma outra janela e mantém o nosso site aberto. Tá bem? Essa foi a sacada do hyperlink. Atributo fundamental href, você pode colocar ali uma url, um fragmento e também você tem a opção de abrir uma nova janela.
