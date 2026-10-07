---
title: "Font Size"
curso: Rocketseat
modulo: "Módulo 3 - Fontes e textos"
tags:
  - rocketseat
  - css
  - fontes-e-textos
---

# Font Size

> [!abstract] Ideia central
> `font-size` muda o **tamanho da fonte**. Aceita nomes (`small`, `large`...), unidades fixas (`px`) e unidades **flexíveis** (`em`, `rem`, `%`). O ponto de partida padrão é **16px** no elemento raiz.

---

## Valores aceitos

| Tipo | Exemplos | Comportamento |
|---|---|---|
| **Nomes** (absolute-size) | `xx-small`, `x-small`, `small`, `large`, `x-large` | Você não sabe o tamanho exato, só que muda. O instrutor geralmente não usa |
| **Nomes relativos** (relative-size) | `smaller`, `larger` | Também são nomes, mas relativos ao tamanho do pai |
| **Pixels** | `16px`, `24px` | Valor **fixo** — bom pra coisas que não devem variar |
| **Flexíveis** | `1em`, `1rem`, `120%` | Dependem de outro tamanho (pai ou raiz) |
| **Globais** | `inherit`, `initial`... | Pra resetar |
| `math-value` | — | O instrutor nunca usou; pesquise se tiver curiosidade |

```css
p {
  font-size: x-small;  /* super pequeno */
}

p {
  font-size: large;
}
```

## Unidades flexíveis: de onde vem a referência?

| Unidade | Referência | Exemplo |
|---|---|---|
| `em` | O `font-size` do **pai**. Se não achar, vai subindo até a raiz | `1em` = tamanho do pai |
| `rem` | **Direto o elemento raiz**, pulando todo o caminho (nunca olha o pai) | `1rem` = 16px, `2rem` = 32px |
| `%` | Também busca no pai, ou sobe até a raiz | `100%`, `120%`, `50%` |

O `font-size` padrão do elemento raiz é **16px**, então:

```css
p {
  font-size: 1rem;   /* 16px */
}

p {
  font-size: 2rem;   /* 32px */
}

p {
  font-size: 120%;   /* 120% do tamanho do pai (ou da raiz) */
}
```

> [!tip] Quando usar qual
> Use **pixels** quando quiser algo **fixo**. Use `rem`, `em` ou `%` quando quiser algo que **se adapte** (relativo).

> [!tip] Pra aprofundar
> Pesquise `font-size` na documentação ([devdocs.io](https://devdocs.io/css/font-size)): lá aparecem as palavras-chave, os tipos `absolute-size` (via nome, fixo) e `relative-size` (via nome, mais flexível), pixels, `em`/`rem`, porcentagem, `math-value` e os globais. O que foi visto na aula já é suficiente pra seguir.

---

## Pontos-chave

- [ ] `font-size` muda o tamanho da fonte
- [ ] Aceita nomes (`xx-small`, `small`, `large`, `x-large`), mas na prática quase não se usa
- [ ] O valor padrão da raiz é **16px**: `1rem` = 16px, `2rem` = 32px
- [ ] `em` e `%` olham o **pai** (subindo até a raiz se preciso); `rem` vai **direto na raiz**
- [ ] `px` pra valores fixos; `rem`/`em`/`%` pra valores flexíveis

---

## Navegação

- Anterior: [[Font Family]]
- Próxima: [[Font Style e Font Weight]]
- Índice do módulo: [[Módulo 3 - Fontes e textos]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Valores e unidades de medida]]
