---
title: "Display Inline"
curso: Rocketseat
modulo: "Módulo 2 - Box Model"
tags:
  - rocketseat
  - css
  - box-model
---

# Display Inline

> [!abstract] Ideia central
> `display: inline` ocupa só o espaço do próprio conteúdo, ignora `width`/`height`, e só aplica `margin`/`padding`/`border` na **horizontal** — os valores verticais ou não têm efeito nenhum, ou aparecem visualmente sem empurrar os vizinhos.

---

## Ocupa só o espaço do conteúdo

```css
span {
  border: 1px solid black;
}
```

Diferente do [[Display Block|block]], que toma a linha inteira, a caixa `inline` fica do tamanho exato do seu conteúdo — a borda "abraça" só o texto, não a linha toda.

## Fica lado a lado — a não ser que um block interrompa

```html
<span>Primeiro</span>
<span>Segundo</span>
```

Dois `<span>` ficam **lado a lado**, na mesma linha — é isso que "inline" significa. Mas:

```html
<span>Primeiro</span>
<div></div>
<span>Segundo</span>
```

Se uma `<div>` (block) for colocada entre os dois, ela **quebra a linha** — mesmo sem conteúdo, mesmo "vazia". Um elemento `block` sempre ocupa a linha inteira, então ele empurra o que vem depois pra próxima linha, não importa se o que veio antes ou depois dele é inline.

## `width` e `height` não se aplicam

```css
span {
  width: 200px;   /* ignorado */
  height: 200px;  /* ignorado */
}
```

Não importa o valor — um elemento `inline` nunca respeita `width`/`height`. Se você aplicar esses valores numa tag e "não acontecer nada", vale desconfiar: será que esse elemento é `inline`?

## `margin`, `padding` e `border`: só a horizontal conta

Essa é a regra mais sutil do `display: inline`:

| Propriedade | Horizontal (esquerda/direita) | Vertical (cima/baixo) |
|---|---|---|
| `margin` | Aplica normalmente, empurra os vizinhos dos lados | **Não tem efeito nenhum** |
| `padding` | Aplica, empurra os vizinhos dos lados | Aparece visualmente (a caixa "cresce"), mas **não empurra** o que está acima/abaixo |
| `border` | Aplica, empurra os vizinhos dos lados | Aparece visualmente, mas **não empurra** — pode se sobrepor às linhas vizinhas |

```css
span {
  margin: 20px;   /* só esquerda/direita valem */
  padding: 20px;  /* esquerda/direita empurram; cima/baixo só "pintam" */
  border: 10px solid black; /* mesma lógica do padding */
}
```

Isso acontece porque o fluxo (*flow*) das caixas espera que elas se empurrem e se organizem verticalmente, uma abaixo da outra. Um `inline` que empurrasse verticalmente quebraria essa expectativa — por isso o CSS simplesmente ignora (`margin`) ou desconsidera pro layout (`padding`/`border`) o que seria vertical.

## Elementos que já nascem `inline`

```
a, span, strong, em
```

---

## Pontos-chave

- [ ] `inline` ocupa só o espaço do próprio conteúdo, não a linha inteira
- [ ] Elementos inline ficam lado a lado — até um `block` aparecer no meio e quebrar a linha
- [ ] `width` e `height` **não se aplicam** num elemento `inline`
- [ ] `margin` vertical não tem efeito nenhum; `padding`/`border` verticais aparecem visualmente mas não empurram vizinhos
- [ ] `margin`, `padding` e `border` horizontais funcionam normalmente
- [ ] `a`, `span`, `strong` e `em` já são `inline` por padrão

---

## Navegação

- Anterior: [[Display Block]]
- Próxima: [[Border]]
- Índice do módulo: [[Módulo 2 - Box Model]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Display Block]], [[Box Model]], [[Display]]
