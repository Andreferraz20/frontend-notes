---
title: "Text Align e Line Height"
curso: Rocketseat
modulo: "Módulo 3 - Fontes e textos"
tags:
  - rocketseat
  - css
  - fontes-e-textos
---

# Text Align e Line Height

> [!abstract] Ideia central
> `text-align` alinha o texto na horizontal (esquerda, centro, direita, justificado), como num editor de texto. `line-height` define a **altura da linha**, ou seja, o espaço entre as linhas. O ideal é usar **multiplicador** (sem unidade), que acompanha o tamanho da fonte.

---

## text-align

Por padrão o texto já está alinhado a uma linha virtual à esquerda. Com `text-align` você muda isso:

| Valor | Efeito |
|---|---|
| `center` | Alinhado ao centro |
| `right` | Alinhado no canto direito |
| `justify` | Justificado: as palavras ganham espaço entre si para o texto começar e terminar nas duas bordas |

```css
p {
  text-align: center;
}

p {
  text-align: right;
}

p {
  text-align: justify;
}
```

## line-height

Define a altura de cada linha, então muda o espaço entre elas.

```css
p {
  line-height: 40px;   /* linhas bem afastadas */
}

p {
  line-height: 2rem;
}
```

### Use multiplicador

Um número **sem unidade** multiplica o `font-size` do elemento:

| Valor | Resultado (com fonte de 16px) |
|---|---|
| `1` | 16px (igual a `16px` ou `1rem`) |
| `1.2` | 19,2px |
| `1.5` | 24px |
| `2` | 32px |

Isso é o que se vê nos editores de texto (espaçamento 1,5; 2...). O `1rem` equivale a `1` porque o `rem` parte da raiz, que é 16px (ver [[Font Size]]).

```css
p {
  font-size: 16px;
  line-height: 1.5;
}
```

> [!tip] Por que o multiplicador compensa
> Se depois você mudar o tamanho da fonte, o espaçamento **acompanha**:
>
> ```css
> p {
>   font-size: 24px;   /* mudou de 16px pra 24px */
>   line-height: 1.5;  /* continua proporcional (agora 36px) */
> }
> ```
>
> Com valor fixo em pixels, você teria que voltar e **refazer o cálculo** na mão.

Muitas vezes o designer entrega valores em pixels ("este aqui é 18px, este é 24px"). Funciona, mas quem entende de multiplicador consegue converter e usá-lo mesmo assim.

---

## Pontos-chave

- [ ] `text-align`: `center`, `right`, `justify` (o padrão é à esquerda)
- [ ] `justify` distribui espaço entre as palavras pra preencher as duas bordas
- [ ] `line-height` aceita px, rem ou número puro
- [ ] Prefira **multiplicador** (`1.2`, `1.5`, `2`): ele acompanha o `font-size`
- [ ] Valor fixo em px exige recalcular quando a fonte muda

---

## Navegação

- Anterior: [[Color, Text Transform e Text Decoration]]
- Próxima: [[Letter Spacing e Word Spacing]]
- Índice do módulo: [[Módulo 3 - Fontes e textos]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Font Size]], [[Valores e unidades de medida]]
