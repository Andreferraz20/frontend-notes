---
title: "Espaços e quebras de linha"
curso: Rocketseat
modulo: "Módulo 1 - Primeiros passos"
tags:
  - rocketseat
  - html
  - fundamentos
---

# Espaços e quebras de linha

> [!abstract] Ideia central
> O HTML **ignora** quebras de linha e espaços extras digitados no código-fonte: qualquer sequência de espaços vira um espaço só, e um Enter no código não vira uma quebra de linha na página. Para isso existem marcações específicas — mas o ideal é resolver isso com estrutura (`<p>`) em vez de forçar quebras manuais.

---

## O comportamento padrão

```html
<p>
  Lorem ipsum     dolor sit amet
</p>
```

Não importa quantos espaços ou quebras de linha você colocar no código-fonte: o navegador renderiza como **um único espaço** entre as palavras. Isso vale tanto para múltiplos espaços quanto para Enters no meio do texto.

## Forçando quebra de linha: `<br>`

```html
<p>
  Primeira linha<br>
  Segunda linha<br>
  Terceira linha
</p>
```

`<br>` é uma tag vazia (ver [[Anatomia das Tags]]) — fecha nela mesma e não tem conteúdo. Cada `<br>` gera uma quebra de linha.

## Forçando espaço extra: `&nbsp;`

```html
<p>Um&nbsp;&nbsp;&nbsp;espaço maior</p>
```

`&nbsp;` (non-breaking space) representa um espaço. Repetir a entidade várias vezes gera vários espaços — diferente de digitar espaço normal, que o HTML colapsa em um só.

## Existe uma forma melhor

Em vez de empilhar `<br>` para simular parágrafos separados, o mais correto semanticamente é usar `<p>` para cada parágrafo — afinal, se é um nova ideia/parágrafo, ele já **é** um bloco novo por natureza (ver [[Fluxo HTML]]). Com o tempo, e principalmente com CSS, existem formas ainda melhores de controlar espaçamento.

---

## Pontos-chave

- [ ] HTML desconsidera múltiplos espaços e quebras de linha do código-fonte
- [ ] `<br>` força uma quebra de linha
- [ ] `&nbsp;` força um espaço (pode repetir)
- [ ] Prefira estrutura (`<p>` por parágrafo) a `<br>` empilhado quando fizer sentido

---

## Navegação

- Anterior: [[Anatomia das Tags]]
- Próxima: [[Fluxo HTML]]
- Índice do módulo: [[Módulo 1 - Primeiros passos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Caracteres reservados]]

---

> [!note]- Transcrição da aula
> **[00:00]** Vamos ver como que funcionam os espaços e quebras de linhas no HTML. Eu vou colocar uma tag p, que é a tag de parágrafo, e vou escrever aqui lorem e dar um enter. Esse editor de código já vai criar um texto para mim aleatório. E vamos supor que eu gostaria de, aqui, colocar quebras de linha.
>
> **[00:15]** Perceba, no HTML, ele não aceita no final, tá bem? E vamos supor que aqui eu queira colocar muitos espaços, ó, muitos espaços. Você vai notar que ele também desconsidera muitos espaços. Então ele considera apenas um espaço, e a quebra de linha ele desconsidera, tudo bem?
>
> **[00:30]** Qual a estratégia que eu posso usar para quebras de linhas? Bom, você tem uma tag chamada break, se você quiser. Ela tem um fechamento nela mesma, então você pode fazê-la dessa forma, ou dessa forma, e tá tudo certo. E aí, quantas vezes você repetir, ela vai dar uma quebra de linha, tá? Que é um break, ou uma quebra de linha. Então eu poderia deixar ela aqui, e vai funcionar legal, tudo bem? Como quebra de linha.
>
> **[00:50]** Se eu quiser, agora, espaços, eu poderia estar usando a estratégia aqui, ó, de colocar o seguinte código. É um código específico, né? O ENN, o ezinho comercial, né? NBSP, ponto vírgula. Quando eu pegar ele aqui, e colocar várias e diversas vezes aqui, uma atrás da outra, o HTML desconsidera essa marcaçãozinha, e ele considera essa marcação como espaços, tudo bem? Pra que eu possa colocar espaços.
>
> **[01:16]** Com o passar do tempo, você vai descobrindo outras estratégias, melhores estratégias para fazer isso. Por exemplo, o que eu acho que seria legal aqui, eu poderia muito bem fazer uma quebra de linha aqui, apenas com a própria parágrafo. E aí fica bem mais tranquilo de fazer a quebra de linha, afinal de contas, eu quero dizer que é um novo parágrafo que eu tô começando, tá bem?
>
> **[01:37]** Então, tem essas maneiras que você tá conhecendo aqui, mas conforme o passar do tempo, e especialmente com o CSS, você vai conhecer maneiras mais interessantes de fazer as quebras de linhas e os espaços nos textos de HTML. O mais importante agora, dessa aula, é você entender que existem essas duas marcações, essa pra espaço, e essa marcaçãozinha aqui para quebra de linha, caso você queira usar, tá bom? E entender, o mais importante, é que não há quebras de linha e espaços no HTML, ele desconsidera isso. Então você tem que usar estratégias. Bacana?
