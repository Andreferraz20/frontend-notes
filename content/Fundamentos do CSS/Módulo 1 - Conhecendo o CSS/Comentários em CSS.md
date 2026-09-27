---
title: "Comentários em CSS"
curso: Rocketseat
modulo: "Módulo 1 - Conhecendo o CSS"
tags:
  - rocketseat
  - css
  - fundamentos
---

# Comentários em CSS

> [!abstract] Ideia central
> Comentários (`/* ... */`) são texto que o CSS **ignora** ao aplicar os estilos. Servem pra anotar o código ou "desligar" uma declaração/bloco inteiro sem precisar apagar nada.

---

## Sintaxe

```css
body {
  /* essa linha está desativada */
  /* background-color: #202024; */
  color: #ffffff;
}
```

Abre com `/*` e fecha com `*/` — tudo o que estiver entre os dois é ignorado, não importa se é uma palavra, uma linha inteira ou várias linhas.

## Comentando uma linha só

```css
body {
  background-color: #202024; /* cor de fundo do site */
  color: #ffffff;
}
```

## Comentando um bloco inteiro

```css
/*
body {
  background-color: #202024;
  color: #ffffff;
}
*/
```

Todo o bloco fica desativado — útil pra testar rapidamente como a página fica sem aquele conjunto de estilos, sem apagar o código.

## Para que serve

- Deixar anotações explicando decisões de estilo
- Desativar temporariamente um pedaço do CSS pra testar
- Documentar e organizar o arquivo `.css`

---

## Pontos-chave

- [ ] Sintaxe: `/* conteúdo */`
- [ ] Tudo entre `/*` e `*/` é ignorado — de uma palavra a um bloco inteiro
- [ ] Serve pra anotar código ou desativar um trecho sem apagar

---

## Navegação

- Anterior: [[O que é CSS]]
- Índice do módulo: [[Módulo 1 - Conhecendo o CSS]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Comentários no HTML]]

---

> [!note]- Transcrição da aula
> **[00:00]** Vamos ver como que a gente cria comentários em CSS, os comentários eles vão ajudar a gente a fazer anotações, a pegar pedaço de CSS, por exemplo, o pedaço de código e desconsiderar ele, supondo aqui que eu vou ter esse código eu posso desconsiderar essa linha, eu posso desconsiderar esse bloco todinho.
>
> **[00:22]** Então o comentário ele é feito com uma barra, se você percebeu aqui né, uma barra seguida de um asterisco, tudo que eu colocar aqui até que se encontre ou um asterisco e uma barra, ele vai ser considerado como comentário, então serve para a gente tirar um pedaço de código ou colocar anotações nos nossos documentos CSS, legal?
