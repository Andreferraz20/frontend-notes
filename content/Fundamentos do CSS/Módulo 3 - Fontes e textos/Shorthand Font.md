---
title: "Shorthand Font"
curso: Rocketseat
modulo: "Módulo 3 - Fontes e textos"
tags:
  - rocketseat
  - css
  - fontes-e-textos
---

# Shorthand Font

> [!abstract] Ideia central
> `font` é o *shorthand* (forma curta) que junta várias propriedades de fonte numa linha só. Mas ele **exige `font-size` e `font-family`** juntos, e por isso o instrutor, mesmo gostando de shorthand, **não usa** o `font`. É bom conhecer.

---

## Obrigatórias e opcionais

| Parte | Propriedade | Obrigatória? |
|---|---|---|
| Tamanho | `font-size` | **Sim** |
| Família | `font-family` | **Sim** |
| Altura da linha | `line-height` | Não (vem logo após o tamanho, separada por `/`) |
| Estilo | `font-style` (ex.: `italic`) | Não |
| Variante | `font-variant` (ex.: `small-caps`) | Não |
| Peso | `font-weight` (ex.: `bold`) | Não |
| Largura | `font-stretch` (ex.: `condensed`) | Não |

## Exemplos

Só a família **não funciona**: precisa do tamanho também.

```css
p {
  font: sans-serif;          /* não aplica: falta o font-size */
}

p {
  font: 16px sans-serif;     /* obrigatórias: size + family */
}
```

Com `line-height`, depois de uma barra, **colado** ao tamanho:

```css
p {
  font: 16px/1.5 sans-serif;
}
```

Com as opcionais:

```css
p {
  font: italic small-caps bold 16px/1.5 sans-serif;
}
```

- `small-caps`: tudo em maiúsculas, mas a primeira letra de cada palavra fica um pouco maior.
- `font-stretch` (ex.: `condensed`) só aparece **dependendo da fonte**.
- Entre as opcionais, a **ordem não importa**; o navegador entende. O que não pode faltar são as obrigatórias.

> [!note] Ordem do tamanho e da família
> A ordem livre vale pras opcionais (estilo, variante, peso, stretch). Na sintaxe do CSS, `font-size` (com o `/line-height`) vem antes de `font-family`, e a família fica por último.

## Por que o instrutor não usa

Muitas vezes você quer mexer **só no tamanho** ou **só na família**. Com o shorthand é obrigatório informar os dois, e isso não ajuda. Prefira as propriedades separadas ([[Font Family]], [[Font Size]], [[Font Style e Font Weight]], [[Text Align e Line Height]]). Mas é uma decisão sua: conhecer o shorthand é útil, até pra reconhecer em código dos outros.

> [!tip] Pra aprofundar
> Busque `font` na documentação ([devdocs.io/css/font](https://devdocs.io/css/font)) e veja também `font-stretch` e `font-variant`. Não precisa gastar muito tempo: nos projetos você vai ver o que realmente é necessário.

---

## Pontos-chave

- [ ] Shorthand = forma curta de escrever várias propriedades
- [ ] No `font`, **`font-size` e `font-family` são obrigatórios**
- [ ] `line-height` vai junto, após uma barra: `16px/1.5`
- [ ] Opcionais: `font-style`, `font-variant`, `font-weight`, `font-stretch` (ordem livre entre elas)
- [ ] O instrutor prefere as propriedades separadas, por não querer ser obrigado a informar as duas

---

## Navegação

- Anterior: [[Letter Spacing e Word Spacing]]
- Próxima: [[Web Fonts]]
- Índice do módulo: [[Módulo 3 - Fontes e textos]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Anatomia de uma declaração CSS]], [[Border]]
