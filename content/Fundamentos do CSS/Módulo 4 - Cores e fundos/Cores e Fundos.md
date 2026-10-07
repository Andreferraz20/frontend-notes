---
title: "Cores e Fundos"
curso: Rocketseat
modulo: "Módulo 4 - Cores e fundos"
tags:
  - rocketseat
  - css
  - cores-e-fundos
---

# Cores e Fundos

> [!abstract] Ideia central
> Introdução ao módulo: as próximas aulas tratam de **cores** (valores de cor) e **fundos** (cor e imagem de fundo nos elementos). Aqui vem só a visão geral, com os recursos mais usuais.

---

## Cores

O tipo de dado `color` aceita várias formas de escrever uma cor. As duas mais usuais, vistas neste módulo:

| Forma | Como é | Exemplo |
|---|---|---|
| **Cor com nome** (*named color*) | Palavra em inglês | `blue`, `red`, `green` |
| **Hexadecimal** | Começa com `#` (hashtag) e traz as quantidades de **red, green, blue** | `#ff0000` |

```css
h1 {
  color: red;        /* cor com nome */
}

p {
  color: #0000ff;    /* hexadecimal (red, green, blue) */
}
```

O que significa cada parte do hexadecimal é explicado numa aula própria.

## Fundos

Nos elementos HTML dá pra colocar:

| O quê | O que se controla |
|---|---|
| **Cor de fundo** | A cor atrás do elemento |
| **Imagem de fundo** | Se **repete** ou não, a **posição** e o **tamanho** (*size*) da imagem |

```css
div {
  background-color: blue;
}
```

(Exemplo ilustrativo: as propriedades de fundo são detalhadas nas próximas aulas.)

## É só uma introdução

- **Cor:** além dessas duas formas, existem várias outras, como as funções **RGB** e **HSL**, que ficam pra outro momento.
- **Background:** tem **muito mais opções** do que as citadas (umas três ou quatro a mais). Dá pra ver depois na documentação.
- As mostradas aqui são as **mais usuais**; as outras são menos usadas.

---

## Pontos-chave

- [ ] Módulo trata de **cores** e **fundos**
- [ ] Cores usuais: com nome (`red`, `blue`, `green`) e hexadecimal (`#` + red, green, blue)
- [ ] Fundos: cor e imagem, com repetição, posição e tamanho
- [ ] RGB, HSL e outras opções de `background` vêm depois

---

## Navegação

- Próxima: [[Nome de cores e hexadecimal]]
- Índice do módulo: [[Módulo 4 - Cores e fundos]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Color, Text Transform e Text Decoration]], [[Valores e unidades de medida]]
