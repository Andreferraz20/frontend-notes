---
title: "Border"
curso: Rocketseat
modulo: "Módulo 2 - Box Model"
tags:
  - rocketseat
  - css
  - box-model
---

# Border

> [!abstract] Ideia central
> `border` é um **shorthand** (atalho) que junta `border-style`, `border-width` e `border-color` numa propriedade só. O `style` é **obrigatório** — sem ele, a borda não aparece, mesmo com largura e cor definidas.

---

## O shorthand `border`

```css
.box {
  border: 1px solid red;
}
```

A ordem dos valores **não importa** — `1px solid red`, `solid red 1px` ou `red 1px solid` funcionam igual, porque o CSS reconhece cada valor pelo próprio tipo (cor, comprimento, palavra-chave de estilo).

| Parte do shorthand | Obrigatório? | Exemplo |
|---|---|---|
| `border-style` | **Sim** — sem estilo, não tem borda visível | `solid`, `dotted`, `dashed`, `double`... |
| `border-width` | Não (tem valor padrão) | `1px`, `4px`, `thin`, `medium`, `thick` |
| `border-color` | Não (tem valor padrão) | `red`, `#202024` |

## O padrão de 1 a 4 valores (igual margin/padding)

`border-style`, `border-width` e `border-color` (usados sozinhos, sem ser via `border`) aceitam de 1 a 4 valores, no mesmo padrão de [[Box Model|margin e padding]]:

| Valores | Significado |
|---|---|
| 1 valor | Aplica nos 4 lados |
| 2 valores | 1º: cima **e** baixo — 2º: as duas laterais |
| 3 valores | 1º: cima — 2º: as duas laterais — 3º: baixo |
| 4 valores | Sentido horário, começando em cima: cima, direita, baixo, esquerda |

```css
.box {
  border-style: dotted solid double dashed;
  /* cima: dotted | direita: solid | baixo: double | esquerda: dashed */
  border-width: 4px;
}
```

```css
.box {
  border-color: red green blue black;
  /* cima: red | direita: green | baixo: blue | esquerda: black */
}
```

## Bordas individuais: `border-top`, `border-right`, `border-bottom`, `border-left`

Cada lado também tem seu próprio shorthand — e cada um deles é, por si só, um atalho pra `style`+`width`+`color` **daquele lado**:

```css
.box {
  border-bottom: 2px solid black;
}
```

Dá pra ir ainda mais fundo e mudar só uma característica de um lado específico:

```css
.box {
  border-bottom-color: red;
  border-bottom-width: 6px;
}
```

## Hierarquia de shorthands

| Propriedade | É atalho pra |
|---|---|
| `border` | `border-style` + `border-width` + `border-color` (todos os 4 lados) |
| `border-style` / `-width` / `-color` (sozinhas) | Os 4 lados daquela característica (aceita 1 a 4 valores) |
| `border-top` / `-right` / `-bottom` / `-left` | `style` + `width` + `color`, só daquele lado |
| `border-bottom-color`, `border-bottom-width`... | O mais específico possível: uma característica, de um lado só |

> [!tip] Uso no dia a dia
> Na prática, o mais comum é usar só o `border` simples (`border: 1px solid red;`) pra todos os lados, ou mirar um lado específico com `border-bottom`/`border-top`/etc. A variação de 2 a 4 valores dentro do shorthand existe e funciona, mas é rara no dia a dia.

> [!tip] Documentação
> Pra ver a sintaxe completa e todos os valores de estilo disponíveis, vale consultar o [MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/border) ou o [devdocs.io](https://devdocs.io/css/border) — a seção de sintaxe mostra exatamente quais tipos de dado cada sub-propriedade aceita, seguindo o mesmo hábito de pesquisa de [[Valores e unidades de medida]].

---

## Pontos-chave

- [ ] `border` é shorthand de `border-style` + `border-width` + `border-color`
- [ ] `border-style` é obrigatório pra borda aparecer
- [ ] Ordem dos valores no shorthand não importa
- [ ] 1 a 4 valores em `border-style`/`-width`/`-color` seguem o mesmo padrão de margin/padding (sentido horário a partir de cima)
- [ ] `border-top`/`-right`/`-bottom`/`-left` miram um lado só; dá pra ir ainda mais fundo (`border-bottom-color`, etc.)

---

## Navegação

- Anterior: [[Display Inline]]
- Próxima: [[Width e Height]]
- Índice do módulo: [[Módulo 2 - Box Model]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Box Model]], [[Valores e unidades de medida]]
