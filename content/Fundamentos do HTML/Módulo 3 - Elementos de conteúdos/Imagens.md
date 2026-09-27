---
title: "Imagens"
curso: Rocketseat
modulo: "Módulo 3 - Elementos de conteúdos"
tags:
  - rocketseat
  - html
  - semantica
---

# Imagens

> [!abstract] Ideia central
> `<img>` insere imagens com `src` (de onde vem a imagem) e `alt` (texto alternativo) como atributos fundamentais. `alt` não é opcional na prática: é essencial para acessibilidade, SEO e como fallback quando a imagem não carrega.

---

## Sintaxe básica

```html
<img src="https://source.unsplash.com/random" alt="Imagem aleatória ilustrativa" width="200" height="200">
```

`<img>` é uma tag vazia (ver [[Anatomia das Tags]]) — não tem conteúdo, só atributos.

## `src`: de onde vem a imagem

Pode ser:
- Uma **URL** (endereço na web) — ex: um serviço como `unsplash.com` (atenção a direitos autorais das imagens usadas)
- Um **caminho local** — ex: `./imagens/foto.jpg`, nas extensões comuns: PNG, JPG, WebP, GIF, entre outras

## `alt`: texto alternativo (essencial)

```html
<img src="grafico-vendas.png" alt="Gráfico de vendas crescendo 20% no último trimestre">
```

`alt` descreve a imagem em texto, e cumpre três papéis:

| Papel | Por quê |
|---|---|
| Acessibilidade | Leitores de tela leem o `alt` para pessoas que não conseguem enxergar a imagem |
| SEO | Motores de busca não "enxergam" a imagem — leem o `alt` para entender do que se trata |
| Fallback | Se a imagem não carregar, o `alt` aparece no lugar dela |

## `width` e `height`: dimensões

```html
<img src="foto.jpg" alt="Descrição" width="200">
<!-- só largura: altura se ajusta proporcionalmente -->

<img src="foto.jpg" alt="Descrição" height="200">
<!-- só altura: largura se ajusta proporcionalmente -->

<img src="foto.jpg" alt="Descrição" width="200" height="200">
<!-- as duas: fixa largura E altura -->
```

> [!warning] Cuidado ao usar `width` e `height` juntos
> Definir os dois ao mesmo tempo só faz sentido quando você **sabe exatamente** a proporção real da imagem. Caso contrário, o navegador estica ou espreme a imagem para caber nas dimensões fixas, deixando-a distorcida.

## O que vem depois (fora do escopo desta aula)

Imagens têm um universo mais avançado de estudo — performance (carregamento otimizado), SEO mais aprofundado, atributos extras para imagens responsivas e alternativas. São tópicos para o momento em que os fundamentos já estiverem bem consolidados.

---

## Pontos-chave

- [ ] `src`: origem da imagem (URL ou caminho local)
- [ ] `alt`: texto alternativo — acessibilidade, SEO e fallback
- [ ] `width`/`height`: use um dos dois, ou os dois só quando souber a proporção real
- [ ] `<img>` é uma tag vazia, sem conteúdo

---

## Navegação

- Anterior: [[Hiperlink]]
- Próxima: [[Anatomia de um documento HTML]] (Módulo 4)
- Índice do módulo: [[Módulo 3 - Elementos de conteúdos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Anatomia das Tags]]

---

> [!note]- Transcrição da aula
> **[00:00]** Imagens, nós colocamos no nosso HTML com a tag img, eu posso escrever img, dar um enter e ele vai mostrar dois atributos fundamentais, além de outros dois que eu vou falar pra vocês, mas vamos por partes.
>
> **[00:12]** Se ele não encontrar uma imagem aqui, esse alternativo ele serve para descrever a imagem. Isso é super necessário desde já, pra você já entender ele de cara, porque se eu não tiver uma imagem, ele vai descrever a imagem. Se uma pessoa com acessibilidade, uma pessoa que precisa de acessibilidade, ou seja, ela não consegue enxergar a imagem, aqui pode ser uma descrição que o leitor de tela dela vai ler. E também para motores de busca, quando você tem aqui bem descrito, o motor de busca não consegue ver a imagem, ele consegue entender o que você colocou no alternativo.
>
> **[00:48]** Aqui você pode colocar uma imagem com um endereço universal, como uma URL, ou com endereço local, se você tiver no seu local aí uma imagem de extensões PNG, JPG, WebP, tem muitos tipos de imagens que você vai poder usar aí.
>
> **[01:07]** Beleza? Aqui eu vou colocar uma de um serviço source unsplash.com barra random, ele pega para mim uma imagem qualquer desse servidor unsplash, que são livres de direitos autorais, sempre cuidado com a imagem que você vai colocar, para colocar imagens que não tenha problemas com direitos autorais.
>
> **[01:29]** E aí, só para que eu possa mostrar para você as outras tags, você teria aqui a tag fundamental width, para poder falar da largura que você quer, 200 ele vai entender que é uma imagem de 200 pixels de largura. Ok? Ou você poderia mudar para altura, height, ele vai entender que é 200 pixels de altura, ou então você pode usar as duas coisas para definir uma largura e uma altura da sua imagem.
>
> **[01:56]** Sempre cuidado que dependendo de como está vindo essa imagem, e como você está colocando essa largura e altura fixa aqui, ele vai esticar a imagem, perceba que essa imagem ficou feia, ficou esticada, porque de fato eu não preciso usar as duas coisas, eu posso usar uma ou outra, ou eu uso as duas coisas quando eu sei exatamente qual é a largura e altura da imagem que eu estou usando aqui, aí de fato faz muito sentido eu colocar aqui.
>
> **[02:20]** Agora o que você precisa saber, o estudo de imagens ele vai levar você a estudar também o SEO, que é melhorias para motores de buscas, então você vai entender coisas melhores ali, ele vai levar ao estudo de performance, você também tem outras tags e outras coisas para colocar na imagem para ela performar melhor, e também você vai poder então usar outras tags aí para poder também ter alternativas a imagens, mas todos esses assuntos são mais avançados, tanto em CSS quanto em HTML, e você não precisa se preocupar com eles agora, porém no momento oportuno, assim que você souber bem dos fundamentos, faz muito sentido você observar atributos extras de imagem, para justamente trazer mais performance, e dentro disso ele vai dar um site melhor para você, um site mais performático lá para o SEO, vai ser muito bacana você estudar essas coisas no futuro, mas para agora está ótimo a gente entender isso aqui.
