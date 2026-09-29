---
title: "Display Block"
curso: Rocketseat
modulo: "Módulo 2 - Box Model"
tags:
  - rocketseat
  - css
  - box-model
---

# Display Block

> [!abstract] Ideia central
> `display: block` segue três regras simples: a caixa ocupa a **linha inteira**, `width`/`height` se aplicam normalmente, e `padding`/`margin`/`border` funcionam por completo nos quatro lados.

---

## As três regras

```css
div {
  display: block; /* já é o padrão de <div>, escrito aqui só pra deixar explícito */
  width: 200px;
  height: 200px;
  padding: 20px;
  margin: 20px;
  border: 1px solid black;
}
```

| Regra | O que significa |
|---|---|
| Ocupa a linha inteira | Mesmo que o conteúdo seja pequeno, a caixa toma toda a largura disponível na horizontal — se tivesse outra caixa depois dela, essa outra iria pra linha de baixo |
| `width`/`height` aplicam normalmente | `width: 200px` e `height: 200px` funcionam exatamente como definido |
| `padding`, `margin` e `border` funcionam por completo | Os quatro lados respeitam os valores — `padding: 20px` é o preenchimento **interno**, `margin: 20px` é o espaço **externo** ao redor da caixa, e a `border` some completa em volta |

## Elementos que já nascem `display: block`

```
div, main, header, section, p
```

Essas tags já vêm com `display: block` como padrão do navegador — não é preciso declarar `display: block` nelas pra ter esse comportamento, ele já é o comportamento natural. Esse é o mesmo padrão que apareceu em [[Fluxo HTML]] e em [[Display]].

---

## Pontos-chave

- [ ] Caixa `block` ocupa a linha inteira, na horizontal
- [ ] `width` e `height` se aplicam normalmente
- [ ] `padding`, `margin` e `border` funcionam por completo, nos quatro lados
- [ ] `div`, `main`, `header`, `section` e `p` já são `block` por padrão

---

## Navegação

- Anterior: [[Display]]
- Próxima: [[Display Inline]]
- Índice do módulo: [[Módulo 2 - Box Model]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Box Model]], [[Fluxo HTML]]
