---
title: "Títulos e parágrafos"
curso: "Fundamentos do HTML"
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
- Curso: [[Fundamentos do HTML]]
- Relacionado: [[Anatomia de um documento HTML]]

---

> [!note]- Transcrição da aula
> **[00:00]** Bom, vamos falar sobre os títulos e parágrafos. Imagina você abrir um site na web, ou abrir um livro, alguma coisa, e você ver um texto corrido, sem organização nenhuma. Faz sentido pra você ler um monte de texto assim, numa página? Você não sabe nem o que é, onde eu tô entrando, é sobre o que é isso aqui. Você tá vendo que não tem nada muito bem organizado, para isso existem os títulos e parágrafos.
>
> **[00:35]** Então pra isso a gente tem tags, por exemplo, eu quero falar que essa página, eu vou conversar aqui sobre mim, por exemplo, tá bem? Vai ser uma página sobre mim. Então eu preciso ter um título aqui, um título maior pra essa página. Se eu colocar o H, esse Emmet, nesse editor de código aqui, ele vai me mostrar alguns Hs aqui, do H1 até o H6, são os headings. Então o H1 sendo o principal, esse aqui seria um subtítulo, esse seria o subtítulo do subtítulo, e assim vai até o 6, ele permite isso.
>
> **[01:09]** O que muda? Vamos entender. Geralmente, pessoal, a gente vai usar um H1 por página, tudo bem? Apenas um. E aí eu posso colocar esse título principal aqui, dessa forma, pronto. Eu já tô avisando, ó, essa página vai ser sobre mim, tem muito mais clareza, né? Para fazer o parágrafo, eu tenho a tag p, que eu crio um parágrafo aqui, e nesse caso eu vou deixar esse texto aqui dentro, só pra que você possa enxergar, temos ali um parágrafo. Já ficou melhor?
>
> **[01:33]** Agora, no sobre mim, eu quero ter uma seção aqui que eu vou falar sobre o meu trabalho. Então eu vou colocar um H2, que é um subtítulo, você vai perceber que ele tem um tamanho menor, e aí eu posso desenvolver o texto do meu trabalho aqui, tá? E olha só, fechado, acabei de fazer um texto de trabalho. Vamos supor que eu tenho um estilo de vida, eu quero falar um pouquinho do meu lifestyle, estilo de vida, vou colocar primeiro o H2, estilo de vida, e aí nesse estilo de vida eu vou ter um p, que é um parágrafo, e vamos imaginar que o parágrafo seja isso aqui.
>
> **[02:19]** Então agora você tem uma página que tá organizada, e a dica é, um H1 por página, porque é isso aqui que você vai dizer que esse é o tópico principal da sua página. Quantos parágrafos você quiser, subtítulos quanto você quiser, vai estar tudo definido em cima do H1, e se você ainda tiver um subtítulo do subtítulo, ou seja, na parte do trabalho, eu quero falar, não sei porquê, sobre carga horária. Eu vou colocar um H3, carga horária. Vou colocar um outro parágrafozinho, pronto.
>
> **[02:54]** Então o que eu tenho? Sobre mim é o principal, e aqui eu vou começar a falar sobre mim. Então eu tenho meu trabalho, eu falo um pouquinho, eu tenho minha carga horária, aqui eu falo um pouquinho, aí eu mudei o tópico, ó, estilo de vida. Então agora o texto, ele tá fazendo mais sentido, eu estou organizando esse texto pra que ele tenha um significado diferente conforme títulos e parágrafos que eu tenho disponível na minha mão, tá bom?
