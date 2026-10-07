---
title: "Nome de cores e hexadecimal"
curso: Rocketseat
modulo: "Módulo 4 - Cores e fundos"
tags:
  - rocketseat
  - css
  - cores-e-fundos
---

# Nome de cores e hexadecimal

> [!abstract] Ideia central
> Duas formas de escrever cor: **Named Colors** (nomes como `red`, `aliceblue`) e **RGB hexadecimal** (`#` + dígitos de 0 a F). O hexadecimal aceita **3, 4, 6 ou 8 dígitos**; com 4 ou 8, os últimos representam a **transparência** (alfa).

---

## Named Colors

São cores com **nome**. Usadas com `color` em textos, por exemplo:

```css
p {
  color: red;
}

p {
  color: aliceblue;
}
```

Ao digitar (ou com **Ctrl + Espaço** no editor) aparece um monte de nomes disponíveis. **Não precisa memorizar**: basta saber que a opção existe.

## RGB hexadecimal

Sempre começa com uma **hashtag** (`#`).

### O que é hexadecimal?

| Sistema | Dígitos | Quantidade |
|---|---|---|
| Decimal | `0` a `9` | 10 |
| **Hexadecimal** | `0` a `9` e `A` a `F` | **16** |

Em cada canal de cor, `0` é o **mínimo** e `F` é o **máximo** daquela cor (o instrutor resume como "preto total" e "branco total").

### Quantos dígitos?

| Dígitos | Significa | Exemplo |
|---|---|---|
| **3** | **R**ed, **G**reen, **B**lue (1 dígito por canal) | `#F09` |
| **6** | Os mesmos 3 canais, com 2 dígitos cada (mais **granular**) | `#FD059A` |
| **4** | 3 canais + **alfa** (transparência) | `#F09A` |
| **8** | 6 dígitos + **alfa** | `#FD059A80` |

```css
p {
  color: #F09;       /* 3 dígitos: vermelho F, verde 0, azul 9 */
}

p {
  color: #FF0099;    /* mesma cor que #F09, repetindo cada dígito */
}

p {
  color: #FD059A;    /* granular: FD (vermelho), 05 (verde), 9A (azul) */
}
```

Por que dá pra repetir? Porque o 6 dígitos permite um **ajuste mais fino**: `#F09` é igual a `#FF0099`, mas com 6 dígitos você escolhe valores como `FD`, `05`, `9A`.

### Transparência (alfa)

Com **4 ou 8 dígitos**, a **última parte é o alfa**: a transparência da cor, indo de `0` até `F`.

```css
p {
  color: #F09A;        /* 4 dígitos: o último (A) é a transparência */
}

p {
  color: #FD059A80;    /* 8 dígitos: os 2 últimos são a transparência */
}
```

> [!tip] Veja a cor no editor
> No editor de código, **descanse o mouse** sobre o valor para ver a cor. Mexendo nos dígitos a cor muda, o que ajuda a entender o que cada um faz. No seletor de cores do editor também dá pra escolher a cor e a **transparência**.

> [!note] Sobre os exemplos
> A aula usou `F09`, `FD`, `05` e `9A` como valores de exemplo. Os valores com transparência (`#F09A`, `#FD059A80`) são ilustrativos.

---

## Pontos-chave

- [ ] **Named Colors**: nomes (`red`, `aliceblue`); existem muitos, não precisa decorar
- [ ] Hexadecimal começa com `#` e vai de `0` a `F` (16 dígitos)
- [ ] 3 dígitos = R, G, B; 6 dígitos = mesmos canais, mais granular
- [ ] `#F09` equivale a `#FF0099`
- [ ] 4 ou 8 dígitos: o último valor é o **alfa** (transparência, de `0` a `F`)
- [ ] Passe o mouse no editor pra visualizar a cor

---

## Navegação

- Anterior: [[Cores e Fundos]]
- Próxima: [[Background Color, Image e Repeat]]
- Índice do módulo: [[Módulo 4 - Cores e fundos]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Color, Text Transform e Text Decoration]]
