---
title: "Margin"
curso: Rocketseat
modulo: "Módulo 2 - Box Model"
tags:
  - rocketseat
  - css
  - box-model
---

# Margin

> [!abstract] Ideia central
> `margin` é o espaço **externo** ao redor da caixa (ver [[Box Model]]), com um shorthand de 1 a 4 valores igual ao de [[Border]]. Em elementos `inline`, só a margem **horizontal** funciona. E quando dois blocos se tocam na vertical, as margens não somam — elas **colapsam** (Margin Collapsing).

---

## O shorthand: 1 a 4 valores

```css
.box {
  margin: 30px;
}
```

Aplica 30px nos quatro lados de uma vez. O mesmo padrão de [[Border]] vale aqui:

| Valores | Significado |
|---|---|
| 1 valor | Todos os 4 lados |
| 2 valores | 1º: cima/baixo — 2º: laterais |
| 3 valores | 1º: cima — 2º: laterais — 3º: baixo |
| 4 valores | Sentido horário a partir de cima: cima, direita, baixo, esquerda |

```css
.box {
  margin: 30px 10px;         /* cima/baixo: 30px | laterais: 10px */
}

.box {
  margin: 30px 10px 80px;    /* cima: 30px | laterais: 10px | baixo: 80px */
}

.box {
  margin: 30px 4rem 80px 10px; /* cima: 30px | direita: 4rem | baixo: 80px | esquerda: 10px */
}
```

Também dá pra mirar um lado só, por extenso: `margin-top`, `margin-right`, `margin-bottom`, `margin-left`.

## Tipos de valor aceitos

`margin` aceita **length** (pixels, mas também unidades flexíveis como `em`, `rem`, `vw`, `vh`, entre outras), **percentage** (porcentagem) e a palavra-chave **`auto`**. Vale a mesma lição de [[Valores e unidades de medida]]: não precisa decorar todos os tipos de *length* que existem — o importante é saber que a seção de sintaxe da documentação sempre mostra essa informação.

## Em `inline`, só a margem horizontal funciona

```css
span {
  margin-top: 30px;   /* ignorado — inline não recebe margem vertical */
  margin-left: 60px;  /* funciona normalmente */
}
```

Essa é a mesma regra já vista em [[Display Inline]]: margem vertical não tem efeito nenhum num elemento `inline`; margem horizontal funciona normalmente.

## `margin: auto` — centralizar horizontalmente

```css
.box {
  width: 50%;
  margin: 0 auto; /* 0 em cima/baixo, auto nas laterais */
}
```

Com `auto`, o navegador calcula automaticamente um espaço **igual nas duas laterais**, centralizando a caixa — mas só funciona:

- Em elementos **block** (inline não recebe `width`, então `auto` não tem o que calcular)
- Em elementos com **`width` definido** (sem largura, a caixa já ocupa tudo, não sobra espaço pra centralizar)
- Apenas na **horizontal** — `margin-top: auto`/`margin-bottom: auto` não centralizam verticalmente nesse modo de exibição padrão (isso muda mais pra frente, com `flex`/`grid`)

## Margin Collapsing: margens verticais não somam

```html
<div class="a">Caixa A</div>
<div class="b">Caixa B</div>
```

```css
.a { margin-bottom: 30px; }
.b { margin-top: 30px; }
```

O instinto diria que o espaço entre as duas caixas seria `30px + 30px = 60px`. **Não é isso que acontece.** Quando a margem de baixo de uma caixa encontra a margem de cima da próxima, elas **colapsam**: em vez de somar, o navegador usa só o maior dos dois valores (aqui, como os dois são 30px, o espaço final fica em 30px, não 60px).

> [!warning] Isso pode confundir bastante
> Margin Collapsing é uma fonte clássica de "bug na cabeça" — você espera uma soma e não acontece. Não tem uma fórmula mágica pra "resolver": na prática, é testar e ajustar (ex: colocar toda a margem de um lado só, tipo `margin-bottom: 60px` na caixa de cima e nada na de baixo) até o espaçamento ficar do jeito que você quer. Outras propriedades (como `padding`, que não colapsa) também ajudam a contornar isso.

---

## Pontos-chave

- [ ] `margin` é o shorthand de 1 a 4 valores pro espaço externo da caixa (mesmo padrão de [[Border]])
- [ ] Aceita length (`px`, `em`, `rem`, `vw`, `vh`...), percentage e `auto`
- [ ] Em `inline`, só a margem horizontal funciona — vertical é ignorada
- [ ] `margin: auto` centraliza horizontalmente um `block` com `width` definido — só na horizontal
- [ ] Margens verticais entre blocos **colapsam**: o navegador usa o maior valor, não a soma

---

## Navegação

- Anterior: [[Width e Height]]
- Próxima: [[Padding]]
- Índice do módulo: [[Módulo 2 - Box Model]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Border]], [[Box Model]], [[Display Inline]]
