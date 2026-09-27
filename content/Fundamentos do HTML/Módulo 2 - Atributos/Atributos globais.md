---
title: "Atributos globais"
curso: Rocketseat
modulo: "Módulo 2 - Atributos"
tags:
  - rocketseat
  - html
  - atributos
---

# Atributos globais

> [!abstract] Ideia central
> Atributos globais são aqueles que funcionam em **qualquer tag HTML**, independente do tipo. Eles não mudam a estrutura do elemento (diferente de atributos específicos de tag), mas cumprem papéis importantes: acessibilidade, eventos, identificação, etc.

---

## O que caracteriza um atributo global

- Pode ser usado em **qualquer** tag, sem restrição de tipo
- Não muda o comportamento estrutural do elemento (não é a mesma coisa que um atributo que define/configura a própria tag, como `src` em `<img>`)
- Alguns exemplos de categorias: atributos `aria-*` (acessibilidade), atributos de eventos, `id`, `class`, `data-*`, `style`

## As próximas aulas deste módulo

Os atributos globais mais usados no dia a dia ganham aula própria:

| Atributo | Nota |
|---|---|
| `id` | [[Id]] |
| `class` | [[Class]] |
| `data-*` | [[Data]] |
| `style` | [[Style]] |

## Não precisa aprender tudo de uma vez

A [MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes) documenta a lista completa de atributos globais — bem mais extensa do que o necessário para o dia a dia. A recomendação é estudar em fases: primeiro os fundamentais e mais comuns (cobertos nas próximas aulas), e o restante **sob demanda**, conforme a necessidade real aparecer no projeto.

---

## Pontos-chave

- [ ] Atributo global funciona em qualquer tag
- [ ] Não muda a estrutura da tag — só adiciona configuração/comportamento
- [ ] Referência completa: MDN (Atributos Globais)
- [ ] Estudo é gradual: aprenda os fundamentais agora, o resto por demanda

---

## Navegação

- Anterior: [[Atributos booleanos]]
- Próxima: [[Id]]
- Índice do módulo: [[Módulo 2 - Atributos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]

---

> [!note]- Transcrição da aula
> **[00:00]** Nas próximas aulas nós vamos falar um pouco sobre atributos globais. Vamos lá, é bem simples, atributo global é um tipo de atributo comum a qualquer elemento html. Então não importa o tipo da tag, você pode colocar eles. Eles não vão ter mudança estrutural do elemento, porque algum elemento, alguma tag tem atributos que definem ela, que mudam ela, o comportamento. Nesse caso não, só que você pode usar e eles têm motivos muito importantes.
>
> **[00:26]** Por exemplo, existem atributos globais que começam com `aria-`, alguma coisa, que promovem uma acessibilidade. Existem atributos que manipulam, que criam eventos na sua página. E os atributos comuns que a gente vai ver aqui nessas aulas, a gente vai dar uma olhada nesses. A gente vai ver os mais comuns até dessa lista, que tem coisas aqui que também, na minha opinião, não são tão comuns assim.
>
> **[00:48]** Por que que a gente vai estudar faseado ou aos poucos isso? Porque esse é um tipo de estudo que inclusive essa página aqui que eu estou aberta, por um motivo, eu vou dar esse link pra você, pra que você possa se aprofundar depois caso haja necessidade. E olha, muito importante, caso haja necessidade, não é necessário que você saia estudando tudo isso de uma vez, porque não vai fazer sentido. Algumas coisas você vai usar em determinados momentos, você só vai saber conforme for usando. Por isso a gente tem o momento prático. Isso aqui é só pra você entender, bom, já sei o que é um global, entendi muito bem o que é um global, vou entender os básicos aqui, os fundamentais que o Mike vai mostrar pra mim, porque provavelmente eu vou usar mais vezes exatamente, e o restante eu vou aprendendo sobre demanda, sobre necessidade, tá bom? Não se preocupe com isso, vamos com calma.
