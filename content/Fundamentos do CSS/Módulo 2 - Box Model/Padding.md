---
title: "Padding"
curso: Rocketseat
modulo: "Módulo 2 - Box Model"
tags:
  - rocketseat
  - css
  - box-model
---

# Padding

> [!abstract] Ideia central
> `padding` é o preenchimento **interno** da caixa (ver [[Box Model]]), com o mesmo shorthand de 1 a 4 valores de [[Margin]] e [[Border]]. A pegadinha: em elementos `inline`, aplicar padding (principalmente vertical) não empurra o fluxo — só faz o conteúdo **encavalar** visualmente.

---

## O shorthand: 1 a 4 valores

```css
.box {
  padding: 20px;
}
```

Aplica 20px nos quatro lados. Mesmo padrão já visto em [[Margin]] e [[Border]]:

| Valores | Significado |
|---|---|
| 1 valor | Todos os 4 lados |
| 2 valores | 1º: cima/baixo (eixo vertical / *block*) — 2º: laterais (eixo horizontal / *inline*) |
| 3 valores | 1º: cima — 2º: laterais — 3º: baixo |
| 4 valores | Sentido horário a partir de cima: cima, direita, baixo, esquerda |

```css
.box {
  padding: 20px 40px;       /* cima/baixo: 20px | laterais: 40px */
}

.box {
  padding: 20px 40px 0;     /* cima: 20px | laterais: 40px | baixo: 0 */
}

.box {
  padding: 20px 40px 0 10px; /* cima: 20px | direita: 40px | baixo: 0 | esquerda: 10px */
}
```

Esse é o `padding` que mais se usa no dia a dia — o shorthand completo, com 1 a 4 valores.

## Outras formas (mais raras no dia a dia)

```css
.box {
  padding-left: 20px;   /* só um lado específico */
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
}
```

```css
.box {
  padding-inline: 20px; /* eixo horizontal (esquerda + direita) de uma vez */
  padding-block: 10px;  /* eixo vertical (cima + baixo) de uma vez */
}
```

## Cuidado: padding em `inline` não empurra, só encavala

```css
span {
  padding: 20px; /* aplica visualmente, mas não empurra o fluxo */
}
```

Igual ao que já foi visto em [[Display Inline]]: um elemento `inline` não move o fluxo verticalmente. Aplicar `padding` nele até **aparece** visualmente (a caixa "cresce"), mas como o elemento não empurra o que está acima/abaixo, o conteúdo próximo acaba **se sobrepondo** (encavalando) a esse preenchimento.

> [!warning] Evite padding em elementos inline
> Por causa desse comportamento, a recomendação direta da aula é: não aplique `padding` em elementos `inline`. O resultado visual costuma ficar estranho, com conteúdo se encavalando, porque o padding não reorganiza o fluxo ao redor dele.

---

## Pontos-chave

- [ ] `padding` é o shorthand de 1 a 4 valores pro preenchimento interno (mesmo padrão de [[Margin]]/[[Border]])
- [ ] Também existem `padding-top`/`-right`/`-bottom`/`-left`, e os eixos `padding-inline`/`padding-block`
- [ ] Em `inline`, padding aparece visualmente mas não empurra o fluxo — o conteúdo próximo encavala
- [ ] Recomendação: evitar `padding` em elementos `inline`

---

## Navegação

- Anterior: [[Margin]]
- Próxima: [[Box Sizing]]
- Índice do módulo: [[Módulo 2 - Box Model]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Margin]], [[Border]], [[Display Inline]], [[Box Model]]
