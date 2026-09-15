---
title: "Fluxo HTML"
curso: "Fundamentos do HTML"
modulo: "Módulo 1 - Primeiros passos"
tags:
  - rocketseat
  - html
  - fundamentos
---

# Fluxo HTML

> [!abstract] Ideia central
> No fluxo padrão do HTML, cada tag se comporta como **bloco** ou **inline**. Bloco ocupa toda a largura disponível e empurra o próximo elemento para baixo; inline ocupa só o espaço necessário e deixa o próximo elemento do lado.

---

## Bloco vs. inline

| | Bloco (`block`) | Em linha (`inline`) |
|---|---|---|
| Largura | Ocupa toda a largura disponível | Ocupa só o espaço do próprio conteúdo |
| Próximo elemento | Vai para a linha de baixo | Fica ao lado, na mesma linha |
| Exemplo visto na aula | `<p>` | `<a>` |

```html
<p>Primeiro parágrafo</p>
<p>Segundo parágrafo</p>
<!-- cada <p> ocupa a largura toda → um fica embaixo do outro -->

<a href="#">Primeiro link</a>
<a href="#">Segundo link</a>
<!-- cada <a> ocupa só o espaço do texto → ficam lado a lado -->
```

Repare que mesmo escrevendo os dois links em linhas separadas no código, eles aparecem **um do lado do outro** na página — porque `<a>` é inline por padrão. Já dois `<p>` aparecem um embaixo do outro, mesmo escritos colados, porque `<p>` é bloco por padrão.

## Por que isso importa

Esse comportamento é o **padrão do navegador**, sem nenhum CSS aplicado. Conforme mais tags vão sendo estudadas, cada uma delas já nasce sendo bloco ou inline — entender essa diferença desde já ajuda a prever como a página vai se organizar visualmente antes mesmo de estilizar com CSS.

> [!tip] Nem toda tag segue essa regra à risca
> Existem também elementos **inline-block** (comportamento misto), que ficam mais claros quando o CSS entra em cena.

---

## Pontos-chave

- [ ] Bloco: ocupa a largura toda, empilha verticalmente (ex: `<p>`)
- [ ] Inline: ocupa só o necessário, fica lado a lado (ex: `<a>`)
- [ ] Esse é o comportamento padrão do navegador, sem CSS

---

## Navegação

- Anterior: [[Espaços e quebras de linha]]
- Próxima: [[Aninhamento de Tags]]
- Índice do módulo: [[Módulo 1 - Primeiros passos]]
- Curso: [[Fundamentos do HTML]]
- Relacionado: [[Tags genéricas Div e Span]]

---

> [!note]- Transcrição da aula
> **[00:00]** Vamos ver como que funciona o fluxo padrão do HTML. Funciona da seguinte forma, se eu tiver uma tag, por exemplo, um parágrafo e colocar um texto aqui, se eu quiser um segundo parágrafo, eu poderia colocar aqui e um segundo texto aqui e ele vai considerar uma abaixo da outra.
>
> **[00:20]** Então o fluxo, ele entende muitas tags, não são todas, mas muitas tags, ele entende como um bloco, um bloco significa que ele vai ocupar todo o espaço disponível aqui de largura e aí ele vai colocar o próximo elemento abaixo, só que nem todas as tags funcionam assim, algumas são inline e aos poucos a gente vai entendendo elas.
>
> **[00:40]** Por exemplo, a tag A, se eu coloco aqui um link, ok? E se eu colocar um segundo link, ainda que ele está um abaixo do outro aqui, na minha visão, e eu vou até dar uns espaços para você perceber, o HTML vai considerar ele como inline, em linha, ou seja, vai pegar só apenas o tamanho que tem aqui o elemento e já colocar o outro elemento ao ladinho dele. Dá um pequeno espaço aqui, padrão também do CSS que existe no navegador e aí o outro elemento está do lado dele.
>
> **[01:14]** Isso é bem legal a gente entender, porque muitas tags são bloco, algumas tags são inline, aos poucos a gente vai conhecendo essas características visualmente aqui, sem aplicar nenhum CSS, nenhum estilo, a gente começa a ver como funcionam elas, bacana?
