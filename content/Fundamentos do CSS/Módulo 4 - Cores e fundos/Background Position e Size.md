---
title: "Background Position e Size"
curso: Rocketseat
modulo: "Módulo 4 - Cores e fundos"
tags:
  - rocketseat
  - css
  - cores-e-fundos
---

# Background Position e Size

> [!abstract] Ideia central
> `background-position` diz **onde** a imagem de fundo fica (eixo X e Y); `background-size` diz **qual o tamanho** dela. Os valores mais úteis do size são `contain` (cabe no espaço) e `cover` (cobre todo o espaço).

---

## Ponto de partida

Um `body` com imagem de fundo. Por padrão a imagem **repete**, então desligue a repetição pra enxergar o efeito:

```css
body {
  background-image: url("https://exemplo.com/imagem.jpg");
  background-repeat: no-repeat;
}
```

> [!note] Exemplo ilustrativo
> A URL é fictícia: a aula usou uma imagem da web (ver [[Background Color, Image e Repeat]]).

## background-position

É um **shorthand** de `background-position-x` e `background-position-y`.

| Eixo | Valores | Observação |
|---|---|---|
| **X** (horizontal) | `left`, `right`, `center` | `right` = canto direito, `left` = canto esquerdo |
| **Y** (vertical) | `top`, `bottom`, `center` | `top` é o **padrão** |

```css
body {
  background-position-x: right;
  background-position-y: bottom;
}
```

### Usando o shorthand

```css
body {
  background-position: center;          /* 1 valor: vale pra X e Y */
}

body {
  background-position: right bottom;    /* 2 valores: 1º = X, 2º = Y */
}

body {
  background-position: center top;
}
```

- Com **um valor**, ele vale pros dois eixos (`center` centraliza no X e no Y).
- Com **dois valores**, o **primeiro é X** e o **segundo é Y**.
- O navegador tem uma certa "inteligência": `bottom center` também funciona, porque `bottom` não faz sentido no eixo X, então ele entende que é o Y.

## background-size

Define o **tamanho** da imagem.

| Valor | Efeito |
|---|---|
| `200px` | Tamanho **fixo** |
| Valores relativos | Também funcionam |
| `100%` | 100% do espaço onde ela está (se encaixa nele) |
| `contain` | **Contém**: a imagem se adapta pra caber no espaço disponível |
| `cover` | **Cobre** todo o espaço: cresce o quanto precisar, mesmo passando do tamanho e sobrando pros lados |

```css
body {
  background-size: 200px;
}

body {
  background-size: 100%;
}

body {
  background-size: contain;   /* inteira, cabe no espaço */
}

body {
  background-size: cover;     /* cobre tudo, pode cortar as bordas */
}
```

> [!tip] `contain` x `cover`
> - `contain` = a imagem **inteira** aparece, adaptando ao espaço (pode sobrar espaço vazio).
> - `cover` = o espaço fica **todo coberto**, e a imagem pode passar do limite (sobrar pros lados).
>
> São os valores que você mais vai usar.

Exemplo típico, imagem centralizada cobrindo tudo:

```css
body {
  background-image: url("https://exemplo.com/imagem.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```

---

## Pontos-chave

- [ ] Pra testar position/size, use `background-repeat: no-repeat`
- [ ] `background-position` é shorthand de X e Y: 1 valor vale pros dois, 2 valores = **X depois Y**
- [ ] X: `left`/`right`/`center`; Y: `top` (padrão)/`bottom`/`center`
- [ ] `background-size`: tamanho fixo (`200px`), `%`, `contain`, `cover`
- [ ] `contain` cabe no espaço; `cover` cobre todo o espaço

---

## Navegação

- Anterior: [[Background Color, Image e Repeat]]
- Próxima: [[Background Shorthand]]
- Índice do módulo: [[Módulo 4 - Cores e fundos]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Valores e unidades de medida]], [[Width e Height]]
