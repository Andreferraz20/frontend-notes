---
title: "Box Sizing"
curso: Rocketseat
modulo: "Módulo 2 - Box Model"
tags:
  - rocketseat
  - css
  - box-model
---

# Box Sizing

> [!abstract] Ideia central
> Por padrão, `padding` e `border` **somam** ao `width`/`height` que você define — a caixa fica maior do que o valor declarado. `box-sizing: border-box` muda isso: `width`/`height` passam a representar o tamanho **total**, de borda a borda, com padding e border cabendo dentro desse valor.

---

## O comportamento padrão: `content-box`

```css
.box {
  width: 200px;
  padding: 40px;
  /* box-sizing: content-box; <- é o padrão, nem precisa escrever */
}
```

Esse `.box` **não** fica com 200px de largura. O `width` define só a largura do **conteúdo**; o `padding` (e a `border`, se tiver) são somados **por cima** disso. Resultado: 200px de conteúdo + 40px de padding de cada lado = **280px** de largura final. A caixa cresce além do que foi declarado, e pode acabar transbordando o espaço disponível (o "pai" dela).

## `box-sizing: border-box` — a forma recomendada

```css
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 40px;
}
```

Com `border-box`, o `width: 200px` passa a ser o tamanho **total** da caixa, de borda a borda. O padding (e a border) não somam mais — eles ficam **contidos** dentro desses 200px, encolhendo o espaço disponível pro conteúdo em vez de expandir a caixa inteira.

| `box-sizing` | Como `width`/`height` são calculados |
|---|---|
| `content-box` (padrão) | `width`/`height` = só o conteúdo. Padding e border somam por cima, aumentando o tamanho final |
| `border-box` (recomendado) | `width`/`height` = tamanho total, de borda a borda. Padding e border ficam contidos dentro desse valor |

Essa regra vale tanto pra `width` quanto pra `height`.

## Por que isso importa na prática

> [!warning] Um erro comum
> É fácil esquecer esse comportamento padrão: você define uma largura, aplica um `padding`, e a caixa fica maior do que você esperava — às vezes só percebendo o problema quando ela transborda o layout. Nessas horas, vale lembrar que o cálculo da caixa está somando o padding ao `width`, e ajustar com `box-sizing: border-box` costuma resolver.

Pra conferir isso na prática, as ferramentas de desenvolvedor do navegador (F12 → aba de estilos → "Computed") mostram exatamente como a largura final foi calculada, incluindo quanto veio do conteúdo e quanto veio do padding/border.

---

## Pontos-chave

- [ ] Padrão (`content-box`): `width`/`height` definem só o conteúdo; padding e border somam por cima
- [ ] `box-sizing: border-box`: `width`/`height` viram o tamanho total, padding/border ficam contidos dentro
- [ ] Vale pra `width` e `height`
- [ ] `border-box` é a prática recomendada — evita que a caixa cresça além do esperado e transborde
- [ ] Ferramentas de desenvolvedor (F12 → Computed) ajudam a visualizar o cálculo final

---

## Navegação

- Anterior: [[Padding]]
- Índice do módulo: [[Módulo 2 - Box Model]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Width e Height]], [[Padding]], [[Border]], [[Box Model]]
