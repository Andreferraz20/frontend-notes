---
title: "Box Model"
curso: Rocketseat
modulo: "Módulo 2 - Box Model"
tags:
  - rocketseat
  - css
  - box-model
---

# Box Model

> [!abstract] Ideia central
> O CSS enxerga **todo** elemento HTML como uma caixa (*box*). Cada caixa tem quatro camadas, de dentro pra fora: **content** (conteúdo), **padding** (preenchimento interno), **border** (borda) e **margin** (espaço externo).

---

## As quatro camadas

```
┌──────────────────── margin ────────────────────┐
│  ┌────────────────── border ──────────────────┐ │
│  │  ┌───────────────── padding ─────────────┐ │ │
│  │  │                                        │ │ │
│  │  │               content                  │ │ │
│  │  │                                        │ │ │
│  │  └────────────────────────────────────────┘ │ │
│  └──────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

| Camada | O que é | Propriedades CSS |
|---|---|---|
| **Content** | O conteúdo em si — tem largura (eixo X) e altura (eixo Y) | `width`, `height` |
| **Padding** | Preenchimento **interno**, entre o conteúdo e a borda | `padding` |
| **Border** | A borda da caixa, com uma grossura | `border` |
| **Margin** | Espaço **externo**, entre essa caixa e as vizinhas | `margin` |

## Exemplo (os números usados na aula)

```css
.box {
  width: 200px;              /* content: largura */
  height: 160px;              /* content: altura */
  padding: 50px 20px;         /* 50px em cima/embaixo, 20px nas laterais */
  border: 5px solid black;    /* borda de 5px de grossura */
  margin: 50px 30px;          /* 50px em cima/embaixo, 30px nas laterais */
}
```

Repare que `padding` e `margin` aceitam essa forma abreviada de dois valores: o primeiro é **cima/baixo**, o segundo é **esquerda/direita**. Cada uma dessas propriedades tem seus próprios números, e são eles que definem o tamanho final de cada camada da caixa.

## O exercício mental: tudo é caixa

```html
<body>
  <img src="..." alt="...">
  <p>Um texto qualquer</p>
  <ul>
    <li>Item da lista</li>
  </ul>
</body>
```

Não é só a `<div>` que é uma caixa. A imagem é uma caixa. O parágrafo é uma caixa. A lista é uma caixa. Até o `<body>` inteiro é a caixa "principal", que contém todas as outras caixas dentro dela. Uma caixa pode não ter borda visível e ainda assim ter espaço ao redor dela (margin) — a ausência de borda não significa ausência de caixa.

Treinar esse "olhar de caixa" pra cada elemento da página é a base pra entender layout em CSS — antes mesmo de entrar em posicionamento (assunto de aulas futuras).

---

## Pontos-chave

- [ ] Todo elemento HTML é tratado como uma caixa: content → padding → border → margin
- [ ] Content: `width` e `height` — o tamanho do conteúdo em si
- [ ] Padding: espaço **interno**, entre conteúdo e borda
- [ ] Border: a borda, com espessura própria
- [ ] Margin: espaço **externo**, entre a caixa e as vizinhas
- [ ] Toda tag é uma caixa — imagem, parágrafo, lista, `body`, todas elas

---

## Navegação

- Próxima: [[Display]]
- Índice do módulo: [[Módulo 2 - Box Model]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Anatomia de uma declaração CSS]], [[O que é CSS]]
