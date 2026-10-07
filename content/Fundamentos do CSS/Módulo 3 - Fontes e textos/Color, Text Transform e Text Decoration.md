---
title: "Color, Text Transform e Text Decoration"
curso: Rocketseat
modulo: "Módulo 3 - Fontes e textos"
tags:
  - rocketseat
  - css
  - fontes-e-textos
---

# Color, Text Transform e Text Decoration

> [!abstract] Ideia central
> `color` muda a cor do texto, `text-transform` muda a **caixa** das letras (alta, baixa, capitalizada) e `text-decoration` controla a **linha decorativa** (sublinhado, riscado...). Ela é um *shorthand* de várias propriedades.

---

## HTML usado na aula

```html
<h1>Título</h1>
<p>Um parágrafo com <mark>um trecho marcado</mark> e um <a href="#">link</a>.</p>
```

## color

Define a cor do texto. Pode ser aplicada só em um elemento.

```css
h1 {
  color: red;
}
```

## text-transform

Transforma a caixa das letras sem mudar o HTML.

| Valor | Efeito |
|---|---|
| `none` | **Padrão**: nenhuma transformação |
| `uppercase` | TUDO EM CAIXA ALTA |
| `lowercase` | tudo em caixa baixa |
| `capitalize` | Primeira Letra De Cada Palavra Em Caixa Alta |

```css
mark {
  text-transform: uppercase;   /* o trecho marcado fica gigante */
}
```

> [!tip] Dica de Emmet
> No editor, digite só as iniciais (`tt`) e dê Enter: ele completa `text-transform`.

## text-decoration

É a linha decorativa (a que aparece embaixo do link). É um **shorthand** de:

| Propriedade | O que define | Valores |
|---|---|---|
| `text-decoration-line` | Onde fica a linha | `underline`, `overline` (por cima), `line-through` (no meio), `none` |
| `text-decoration-style` | Estilo do traço | `solid`, `double`, `wavy`, `dashed`, `dotted` (parecido com bordas) |
| `text-decoration-color` | Cor da linha | qualquer cor |
| `text-decoration-thickness` | Espessura | `auto` ou um tamanho (`3px`, `1rem`) |

```css
a {
  text-decoration: overline red;           /* linha por cima, vermelha */
}

a {
  text-decoration: line-through double;    /* duas linhas passando pelo meio */
}

a {
  text-decoration: line-through dashed 3px;   /* tracejada, 3px de espessura */
}
```

### Nos links

```css
a {
  text-decoration: none;   /* tira o sublinhado */
  color: blue;             /* e/ou muda a cor */
}
```

> [!warning] Não saia tirando o sublinhado de todo link
> Em **experiência do usuário**, a pessoa precisa entender que texto sublinhado é link. Só use `none` quando houver outra forma clara de indicar que aquilo é um link (cor, destaque...). O link já tem outras pistas, como o cursor em formato de mãozinha, mas o sublinhado ainda é a principal.

> [!tip] Pra aprofundar
> Documentação: [devdocs.io/css/text-transform](https://devdocs.io/css/text-transform) e [devdocs.io/css/text-decoration](https://devdocs.io/css/text-decoration). Nem tudo que aparece lá é relevante (há até valores marcados como obsoletos).

---

## Pontos-chave

- [ ] `color` muda a cor do texto
- [ ] `text-transform`: `uppercase`, `lowercase`, `capitalize`; o padrão é `none`
- [ ] `text-decoration` é shorthand de line, style, color e thickness
- [ ] Linhas possíveis: `underline`, `overline`, `line-through`; estilos: `solid`, `double`, `wavy`, `dashed`, `dotted`
- [ ] `text-decoration: none` remove o sublinhado do link, mas use com cuidado por causa da UX

---

## Navegação

- Anterior: [[Font Style e Font Weight]]
- Próxima: [[Text Align e Line Height]]
- Índice do módulo: [[Módulo 3 - Fontes e textos]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Hiperlink]], [[Formatação básica de textos]], [[Border]]
