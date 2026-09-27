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
