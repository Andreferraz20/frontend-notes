---
title: "Font Style e Font Weight"
curso: Rocketseat
modulo: "Módulo 3 - Fontes e textos"
tags:
  - rocketseat
  - css
  - fontes-e-textos
---

# Font Style e Font Weight

> [!abstract] Ideia central
> `font-style` liga ou desliga o **itálico**. `font-weight` controla o **peso** (negrito) da fonte, por nome ou por número. Em ambos, o resultado **depende da fonte**: se ela não tem aquela variação, nada muda.

---

## font-style: itálico

Serve pra adicionar ou tirar o itálico.

| Valor | Efeito |
|---|---|
| `normal` | Sem itálico (remove, se houver) |
| `italic` | Itálico |
| `oblique` | Oblíquo; na prática, igual ao itálico |
| `oblique 40deg` | Oblíquo com ângulo (graus). Depende da fonte |

```css
em {
  font-style: normal;   /* tira o itálico que a tag já traz */
}

p {
  font-style: italic;
}
```

> [!note] Coisas que existem mas você talvez nunca use
> O instrutor nunca aplicou o `oblique` com ângulo em mais de 20 anos de programação. Com o tempo você percebe que algumas coisas **não precisa nem memorizar**: só existem.

## font-weight: negrito

Um `<h1>` já vem em **bold**. Com `font-weight` você muda isso.

### Por nome

| Valor | Efeito |
|---|---|
| `normal` | Peso normal. Aplicado no `<h1>`, **tira o bold** |
| `bold` | Negrito (equivale a ~600–700) |
| `lighter` | Mais leve que o atual |
| `bolder` | Ainda mais bold (equivale a ~800–900) |

```css
h1 {
  font-weight: normal;   /* h1 deixa de ser negrito */
}
```

### Por número

| Número | Peso típico |
|---|---|
| `100` | Bem fininha |
| `300`–`400` | Padrão da fonte |
| `600` | Bold / semi-bold |
| `900` | Extra-bold |

```css
p {
  font-weight: 600;
}
```

> [!warning] Depende da fonte
> Não adianta sair aplicando números. A fonte precisa **ter** aquele peso. Na fonte usada na aula, só existiam dois: **normal** ou **bold**. Tem fonte que nem tem bold.

> [!tip] Pra aprofundar
> Documentação: [devdocs.io/css/font-style](https://devdocs.io/css/font-style) e [devdocs.io/css/font-weight](https://devdocs.io/css/font-weight).

---

## Pontos-chave

- [ ] `font-style`: `normal` tira o itálico, `italic` aplica
- [ ] `oblique` na prática é igual ao itálico (aceita ângulo em `deg`, mas raramente é usado)
- [ ] `font-weight` aceita nomes (`normal`, `bold`, `lighter`, `bolder`) e números de `100` a `900`
- [ ] `font-weight: normal` num `<h1>` remove o negrito
- [ ] Peso e itálico só aparecem se a **fonte** suportar

---

## Navegação

- Anterior: [[Font Size]]
- Próxima: [[Color, Text Transform e Text Decoration]]
- Índice do módulo: [[Módulo 3 - Fontes e textos]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Formatação básica de textos]], [[Font Family]]
