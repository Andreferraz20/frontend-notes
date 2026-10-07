---
title: "Background Shorthand"
curso: Rocketseat
modulo: "Módulo 4 - Cores e fundos"
tags:
  - rocketseat
  - css
  - cores-e-fundos
---

# Background Shorthand

> [!abstract] Ideia central
> `background` junta numa linha só cor, imagem, repetição, posição e tamanho. O navegador **reconhece cada valor pelo tipo**, então a ordem entre a maioria é livre. Atenção: o shorthand **descarta** o que foi definido antes nas propriedades separadas.

---

## O que o shorthand cobre

O estudo do `background` é longo, com **muitas opções**. O shorthand serve pra todas elas, inclusive as que ainda não vimos. Só no `background-image`, por exemplo, existem outras funções, como o `linear-gradient`. Isso fica pro futuro; por enquanto, o objetivo é entender como **uma propriedade aplica tudo**.

> [!tip] Onde aprofundar
> Busque `background` na documentação ([devdocs.io/css/background](https://devdocs.io/css/background)). Vale dar uma olhada em tudo que existe lá.

## O shorthand substitui o que veio antes

Ao escrever só uma cor no shorthand, **todas as outras opções sumiram**:

```css
body {
  background-image: url("https://exemplo.com/imagem.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  background: aliceblue;   /* apaga tudo acima: sobra só a cor */
}
```

Não é que a cor ficou por cima: o shorthand **desconsidera qualquer coisa anterior**.

## Cada valor é reconhecido pelo que é

Você não precisa de todos. O navegador identifica cada pedaço:

| Se você escrever... | Ele entende como... |
|---|---|
| `url(...)` | `background-image` |
| `no-repeat` | `background-repeat` |
| `center` (ou `top center`) | `background-position` |
| `/ cover`, `/ contain`, `/ 300px` | `background-size` (**depois de uma barra**) |
| uma cor (`#EEE`, `aliceblue`...) | `background-color` |

```css
body {
  background: url("https://exemplo.com/imagem.jpg");   /* só a imagem, sem cor */
}

body {
  background: url("https://exemplo.com/imagem.jpg") no-repeat center / cover;
}
```

### Regra do size: barra depois da posição

O tamanho vem **logo após a posição, separado por `/`**:

```css
body {
  background: url("https://exemplo.com/imagem.jpg") no-repeat top center / cover;
}

body {
  background: url("https://exemplo.com/imagem.jpg") no-repeat center / contain;
}

body {
  background: url("https://exemplo.com/imagem.jpg") no-repeat center / 300px;   /* tamanho fixo */
}
```

Posição com dois valores: `top center` (separados por espaço), e a barra do size sempre **depois da posição**.

### Tudo junto, com cor de fundo

```css
body {
  background: #EEE url("https://exemplo.com/imagem.jpg") no-repeat center / cover;
}
```

Aqui a cor serve de "fundo de reserva" (uma cor clara, tipo "cor de gelo"), com a imagem por cima. Ordem na aula: cor (hexadecimal) → `url()` → `no-repeat` → posição → `/ tamanho`.

> [!note] Sobre os exemplos
> As URLs são fictícias; os valores `#EEE` e `aliceblue` são exemplos ilustrativos no lugar da cor usada na aula.

## Vale pra qualquer elemento

Posição e tamanho de imagem de fundo servem **apenas pra imagens de background**. Pra imagem usada de outra forma (a tag `<img>`), é outro elemento. Funciona igual numa `div`:

```css
div {
  width: 300px;
  height: 300px;
  background: #EEE url("https://exemplo.com/imagem.jpg") no-repeat center / cover;
}
```

---

## Pontos-chave

- [ ] `background` é um shorthand de cor, imagem, repetição, posição, tamanho (e outras)
- [ ] Ele **descarta** o que foi declarado antes nas propriedades separadas
- [ ] Não precisa ter todos os valores: o navegador reconhece cada um pelo tipo
- [ ] O **size** vem **depois da posição, separado por `/`** (`center / cover`)
- [ ] Posição e tamanho valem só pra imagem de **background**, não pra `<img>`
- [ ] Funciona no `body` e em qualquer outro elemento (ex.: `div`)

---

## Navegação

- Anterior: [[Background Position e Size]]
- Índice do módulo: [[Módulo 4 - Cores e fundos]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Shorthand Font]], [[Border]], [[Imagens]]
