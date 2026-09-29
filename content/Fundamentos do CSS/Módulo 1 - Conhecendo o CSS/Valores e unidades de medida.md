---
title: "Valores e unidades de medida"
curso: Rocketseat
modulo: "Módulo 1 - Conhecendo o CSS"
tags:
  - rocketseat
  - css
  - fundamentos
---

# Valores e unidades de medida

> [!abstract] Ideia central
> Todo valor de uma propriedade CSS tem um **tipo de dado** (cor, comprimento, número, palavra-chave...). Ninguém decora todos — a habilidade real é saber **pesquisar**: usar o hover do editor e a seção "Syntax" da documentação do [MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS) pra descobrir o que cada propriedade aceita.

---

## Cada valor tem um tipo

```css
h1 {
  color: blue;
  font-size: 60px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
```

| Propriedade | Valor | Tipo de dado |
|---|---|---|
| `color` | `blue` | **color** (cor) |
| `font-size` | `60px` | **length** (comprimento: número + unidade) |
| `letter-spacing` | `2px` | **number** (numérico) |
| `text-transform` | `uppercase` | **keyword** (palavra-chave específica dessa propriedade) |

Uma **keyword** costuma ser exclusiva daquela propriedade — `uppercase`, `lowercase` e `capitalize` só fazem sentido em `text-transform`, por exemplo, diferente de valores como cor ou comprimento, que aparecem em várias propriedades diferentes.

## Como pesquisar (aprendendo a pescar)

Ninguém memoriza todas as propriedades e todos os valores do CSS — nem depois de anos de experiência. O caminho é sempre o mesmo:

1. **Hover no editor**: passar o mouse sobre a propriedade mostra a sintaxe aceita ali mesmo, direto no editor de código.
2. **MDN**: pesquisar `mdn <nome-da-propriedade>` (ex: `mdn text-transform`) e abrir a página oficial.
3. Ir direto na seção **"Syntax"** da página — é ali que aparecem os valores aceitos.

### Exemplo: `text-transform`

Na seção de sintaxe do MDN, `text-transform` aceita um valor do tipo **keyword**: `none` (valor inicial), `capitalize`, `uppercase`, `lowercase`.

```css
h1 {
  text-transform: capitalize; /* ou uppercase, ou lowercase, ou none */
}
```

### Exemplo: `font-size`

Na sintaxe do MDN, `font-size` aceita `<absolute-size>`, `<relative-size>`, `<length>` ou `<percentage>` — o `60px` do exemplo é um **length**: um número seguido de uma unidade de medida.

### Exemplo: cor

Uma propriedade de cor (como `color`) aceita, entre outros, **keyword** (nome de cor, ex: `blue`), **hex color** (ex: `#202024`, como usado em [[O que é CSS]]), e outros formatos — cada um com sua própria página de detalhe no MDN.

## Tipos de dado comuns

| Tipo | O que é | Exemplo |
|---|---|---|
| `color` | Uma cor | `blue`, `#202024` |
| `length` | Número + unidade de medida | `60px`, `2px` |
| `number` | Um número puro | `2`, `1.5` |
| `percentage` | Porcentagem | `50%` |
| `keyword` | Palavra-chave específica da propriedade | `uppercase`, `none` |

> [!tip] A documentação é sua parceira, não uma muleta
> Voltar à documentação mil vezes ao longo da carreira é **normal**, não é sinal de que você "não sabe CSS". O objetivo desta aula não é decorar tipos de dado, é saber o caminho: hover no editor → MDN → seção "Syntax". Esse caminho serve pra qualquer propriedade nova que aparecer daqui pra frente. Outra documentação equivalente, usada mais pra frente em [[Border]], é o [devdocs.io](https://devdocs.io/css/) — mesma ideia, reúne várias linguagens/tecnologias num só lugar de busca.

---

## Pontos-chave

- [ ] Todo valor tem um tipo de dado: color, length, number, percentage, keyword, entre outros
- [ ] Keyword costuma ser exclusiva da propriedade (ex: `uppercase` só em `text-transform`)
- [ ] Pra descobrir o que uma propriedade aceita: hover no editor, ou MDN → seção "Syntax"
- [ ] Não existe expectativa de memorizar tudo — pesquisar constantemente é parte do trabalho

---

## Navegação

- Anterior: [[Mais específico que especificidade]]
- Próxima: [[Seletores]]
- Índice do módulo: [[Módulo 1 - Conhecendo o CSS]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Anatomia de uma declaração CSS]], [[O que é CSS]]
