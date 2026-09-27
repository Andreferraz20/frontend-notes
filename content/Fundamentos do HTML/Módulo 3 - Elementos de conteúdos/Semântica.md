---
title: "Semântica"
curso: Rocketseat
modulo: "Módulo 3 - Elementos de conteúdos"
tags:
  - rocketseat
  - html
  - semantica
---

# Semântica

> [!abstract] Ideia central
> HTML dá liberdade pra escrever qualquer coisa com uma única tag genérica, mas esse não é o objetivo. A estratégia correta é usar a tag que **significa** o que está sendo escrito — é isso que se chama HTML semântico, e é a base para acessibilidade e SEO.

---

## Por que semântica importa

Tecnicamente, seria possível montar uma página inteira só com `<div>` e organizar tudo depois no CSS. Mas o HTML foi desenhado para que cada tipo de conteúdo tenha uma tag com **significado próprio**:

| Pergunta | Existe uma tag pra isso? |
|---|---|
| Vou escrever um título? | Sim → `<h1>`...`<h6>` |
| Vou escrever um parágrafo? | Sim → `<p>` |
| Vou fazer um link? | Sim → `<a>` |
| Preciso de um botão? | Sim → `<button>` |

Ao escolher a tag certa em vez de uma genérica, o próprio HTML já descreve o que aquele pedaço de conteúdo **é**.

## HTML5 e a explosão de elementos semânticos

O HTML5 trouxe mais de **100 elementos semânticos** novos. Não é necessário saber todos de cor — o aprendizado é gradual: conforme a necessidade aparece, descobre-se que existe uma tag específica para dar significado àquele conteúdo (ex: `<img>` para imagem, `<video>` para vídeo, e assim por diante).

## Os dois grandes benefícios

1. **Acessibilidade** — leitores de tela dependem da semântica para descrever a página corretamente para quem não consegue enxergá-la
2. **SEO (Search Engine Optimization)** — motores de busca leem a estrutura semântica para entender do que se trata a página e indexá-la melhor

---

## Pontos-chave

- [ ] HTML permite escrever tudo genérico, mas o objetivo é usar a tag que **significa** o conteúdo
- [ ] HTML5 trouxe 100+ elementos semânticos
- [ ] Não precisa memorizar todos — aprendizado é gradual, por necessidade
- [ ] Benefícios diretos: acessibilidade e SEO

---

## Navegação

- Anterior: [[Style]] (Módulo 2)
- Próxima: [[Títulos e parágrafos]]
- Índice do módulo: [[Módulo 3 - Elementos de conteúdos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Tags genéricas Div e Span]] — o contraponto: elementos sem semântica

---

> [!note]- Transcrição da aula
> **[00:00]** Nas próximas aulas nós vamos aprender várias tags semânticas. O que é semântica? No HTML você tem a liberdade de escrever tudo com uma única tag se você quiser e depois lá com CSS você pode organizar tudo e deixar tudo bonito. Mas não é esse o intuito do HTML. O HTML vem com uma estratégia semântica que é pra dar significado às coisas.
>
> **[00:24]** Por exemplo, se pergunte, eu vou escrever um título? Ah, tem uma tag pra isso? Tem. Eu vou escrever um parágrafo? Tem uma tag pra isso? Tem. Eu vou fazer um link? Tem uma tag pra isso? Tem. Eu preciso fazer um botão? Tem uma tag pra isso? Tem. Então, a gente vai entendendo que os elementos têm em si uma semântica e conforme a evolução do HTML vai acontecendo, vão chegando outros.
>
> **[00:46]** Por fim, tem o HTML5, que foi uma das últimas atualizações do HTML, já faz um bom tempo, mas ele trouxe um monte de novos elementos, fazendo com que a gente tenha mais de 100 elementos semânticos. Tem que saber todos eles de cabeça? Não, mas conforme eu for estudando, eu vou descobrindo que eu posso usar determinado elemento pra dar significado à minha escrita e isso é ótimo também pra acessibilidade, algumas pessoas precisam de leitores de tela.
>
> **[01:11]** Ele é ótimo também para os motores de busca, pro seu site aparecer no Google e essas coisas, você vai acabar estudando sobre, por exemplo, SEO, Search Engine Optimization, ou seja, você otimizar o seu site, a estrutura que você está fazendo do seu HTML para que os motores de busca encontrem ele de uma maneira melhor. Então, isso significa você escrever um HTML semântico, onde se eu tenho aqui uma imagem, eu vou usar a tag imagem, se eu tenho aqui um vídeo, eu vou usar a tag vídeo, e assim vai. Tem muitas delas, vamos aprender algumas fundamentais aqui.
