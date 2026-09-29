---
title: "Display"
curso: Rocketseat
modulo: "Módulo 2 - Box Model"
tags:
  - rocketseat
  - css
  - box-model
---

# Display

> [!abstract] Ideia central
> `display` (apresentação) descreve como uma caixa se comporta **em relação às caixas vizinhas**. Os dois tipos fundamentais são **block** (ocupa a linha toda) e **inline** (fica lado a lado) — o mesmo fluxo padrão do HTML já visto em [[Fluxo HTML]], agora nomeado como a propriedade CSS que ele realmente é.

---

## O fluxo padrão do HTML é feito de `display`

```css
a {
  display: inline; /* padrão da tag <a> */
}

h1 {
  display: block; /* padrão da tag <h1> */
}
```

O HTML tem um comportamento padrão (*flow*, fluxo): uma tag fica abaixo da outra. Mas **como** cada tag ocupa esse espaço depende do valor de `display` que ela já carrega por padrão:

| `display` | Comportamento | Exemplos com esse padrão |
|---|---|---|
| `block` | Ocupa a **linha inteira**, empurra o próximo elemento para baixo | `h1`, `p`, `div` |
| `inline` | Ocupa só o **espaço necessário**, fica ao lado do próximo elemento | `a`, `span` |

Isso é exatamente o que já foi visto em [[Fluxo HTML]] — a diferença é que agora existe um nome oficial pra esse comportamento: a propriedade `display`. Toda tag já nasce com um valor padrão de `display` (a maioria block ou inline), e é esse valor que decide o fluxo.

## Block e inline descrevem a relação entre vizinhos

`display: block` e `display: inline` respondem à pergunta: **como essa caixa se comporta ao lado das outras caixas do mesmo nível?** — essa em relação àquela, e assim por diante.

> [!note] Isso não é sobre o que tem dentro da caixa
> Mais pra frente, outros valores de `display` (como `flex` e `grid`) vão controlar o comportamento das caixas **de dentro** de uma caixa — ou seja, como os filhos se organizam dentro do pai. Isso é um assunto diferente, de um momento futuro. Por enquanto, `block`/`inline` é só sobre caixas vizinhas, lado a lado.

---

## Pontos-chave

- [ ] `display` descreve como uma caixa se relaciona com as caixas vizinhas
- [ ] `block`: ocupa a linha toda, empilha verticalmente
- [ ] `inline`: ocupa só o necessário, fica lado a lado
- [ ] Toda tag já tem um `display` padrão (ex: `h1` é block, `a` é inline)
- [ ] `flex` e `grid` (assunto futuro) controlam o comportamento dos filhos **dentro** de uma caixa, não entre vizinhos

---

## Navegação

- Anterior: [[Box Model]]
- Próxima: [[Display Block]]
- Índice do módulo: [[Módulo 2 - Box Model]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Fluxo HTML]]
