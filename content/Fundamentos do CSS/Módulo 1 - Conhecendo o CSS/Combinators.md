---
title: "Combinators"
curso: Rocketseat
modulo: "Módulo 1 - Conhecendo o CSS"
tags:
  - rocketseat
  - css
  - fundamentos
---

# Combinators

> [!abstract] Ideia central
> Combinators combinam [[Seletores|seletores]] pra descrever relações entre elementos: dentro de quem, junto com quem, logo depois de quem, ou filho direto de quem. Os quatro fundamentais: **descendente** (espaço), **lista** (`,`), **irmão adjacente** (`+`) e **filho direto** (`>`).

---

## Resumo

| Combinator | Símbolo | Exemplo | Seleciona |
|---|---|---|---|
| Descendente | espaço | `article p` | Todo `p` dentro de `article`, **não importa a profundidade** |
| Lista (*selector list*) | `,` | `span, mark` | `span` **e** `mark`, como dois seletores separados |
| Irmão adjacente (*next sibling*) | `+` | `h2 + p` | O elemento que vem **logo depois** do primeiro, no mesmo nível |
| Filho direto (*child*) | `>` | `aside > ul` | Só o filho de **primeiro nível**, não os "netos" |

---

## Descendente: espaço em branco

```html
<article>
  <h2>Título</h2>
  <p><span>Texto em destaque</span></p>
  <p><mark>Texto relevante</mark></p>
  <p>Terceiro parágrafo</p>
</article>

<p>Um parágrafo fora do article</p>
```

```css
article p {
  color: red;
}
```

Isso aplica aos **três** `<p>` de dentro do `<article>` — não importa quão fundo eles estejam aninhados. O `<p>` que está fora do `<article>` **não** é afetado.

Compare com só `p { color: red; }`, que pegaria os **quatro** `<p>` da página, dentro e fora do `<article>`.

> [!warning] O espaço importa
> `article p` (com espaço) é o combinador descendente. `articlep` (colado) simplesmente não existe como seletor. O espaço é a sintaxe do combinator, não é só estética.

## Lista: vírgula

```css
span, mark {
  color: red;
}
```

Aplica a cor no `<span>` **e** no `<mark>` ao mesmo tempo — é uma forma curta de escrever dois seletores separados sem repetir a declaração inteira duas vezes. Espaço antes/depois da vírgula não faz diferença.

## Irmão adjacente: `+`

```css
h2 + p {
  color: red;
}
```

Seleciona o elemento que vem **imediatamente depois** do primeiro, no mesmo nível. Nesse HTML, `h2 + p` pega só o **primeiro** `<p>` (o que vem logo após o `<h2>`).

```css
p + p {
  color: red;
}
```

Já `p + p` pega o **segundo e o terceiro** `<p>`, porque cada um deles tem outro `<p>` bem antes: o segundo `<p>` vem depois do primeiro `<p>`, e o terceiro vem depois do segundo. O primeiro `<p>` fica de fora, porque o elemento antes dele é um `<h2>`, não um `<p>`.

## Filho direto: `>`

```html
<aside>
  <ul>
    <li>
      Item 1
      <ul>
        <li>Sub-item</li>
      </ul>
    </li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</aside>
```

```css
/* descendente: pega a UL de fora E a UL aninhada lá dentro */
aside ul {
  margin-top: 50px;
}

/* filho direto: pega só a UL de primeiro nível */
aside > ul {
  margin-top: 50px;
}
```

Com o combinador **descendente** (`aside ul`), o espaço é aplicado nas duas listas — a de fora e a que está aninhada dentro do primeiro `<li>` — porque ele não liga pra profundidade. Com o combinador **filho direto** (`aside > ul`), só a `<ul>` de primeiro nível (filha direta do `<aside>`) recebe o espaço; a `<ul>` aninhada mais fundo fica de fora.

> [!note] `>` pega todos os filhos diretos que combinarem, não só "o primeiro"
> Se houvesse mais de uma `<ul>` como filha direta do `<aside>` (irmãs uma da outra), `aside > ul` aplicaria em **todas elas** — a regra é "filho de primeiro nível", não "só o primeiro elemento encontrado".

> [!tip] Por que o exemplo usa `margin-top`, não `color`
> Cor não serve bem pra demonstrar `>`: a propriedade `color` é **herdada** por padrão — uma vez aplicada no pai, ela se propaga visualmente pros filhos de qualquer profundidade, mesmo que o seletor só tenha "pego" o pai. `margin-top` não herda, então dá pra ver claramente que só o filho direto foi afetado.

---

## Pontos-chave

- [ ] Descendente (espaço): pega qualquer descendente, não importa a profundidade
- [ ] Lista (`,`): aplica a mesma declaração a vários seletores de uma vez
- [ ] Irmão adjacente (`+`): pega o elemento logo depois de outro, no mesmo nível
- [ ] Filho direto (`>`): pega só o primeiro nível de filhos, ignora "netos"
- [ ] Cuidado com propriedades herdadas (como `color`) ao testar `>` — elas mascaram a diferença

---

## Navegação

- Anterior: [[Seletores]]
- Próxima: [[Adicionando CSS no HTML]]
- Índice do módulo: [[Módulo 1 - Conhecendo o CSS]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Seletores]], [[Anatomia de uma declaração CSS]]
