---
title: "Background Color, Image e Repeat"
curso: Rocketseat
modulo: "Módulo 4 - Cores e fundos"
tags:
  - rocketseat
  - css
  - cores-e-fundos
---

# Background Color, Image e Repeat

> [!abstract] Ideia central
> `background-color` pinta o fundo, `background-image` põe uma imagem de fundo (via `url()`) e `background-repeat` controla se ela se **repete**. Valem pra **qualquer elemento HTML** e o fundo fica **dentro dos limites da caixa** do elemento.

---

## background-color

Aceita **qualquer tipo de cor** que você já viu: nome, hexadecimal, RGB...

```css
body {
  background-color: aliceblue;   /* cor com nome */
}

body {
  background-color: #F09;        /* hexadecimal */
}
```

### Dentro dos limites da caixa

Em um `body`, a cor cobre a página toda. Em uma caixa, fica **só dentro dela**:

```html
<div>
  <a href="#">Link</a>
</div>
```

```css
div {
  width: 200px;
  height: 200px;
  background-color: red;   /* só o quadrado de 200x200 */
}
```

## background-image

Aceita várias funções; a usada na aula é a **`url()`**, que traz uma imagem de **dentro** do seu ambiente ou de **fora** (qualquer lugar da web).

```css
div {
  background-image: url(https://exemplo.com/imagem.jpg);
}

div {
  background-image: url("https://exemplo.com/imagem.jpg");   /* aspas também funcionam */
}
```

> [!tip] Como pegar o endereço de uma imagem da web
> **F12** → clique no ícone de seleção de elemento → clique na imagem → **botão direito** → **Copy link address** (copiar link do endereço) → cole dentro do `url()`.
> Na aula o ambiente não permitia usar imagens do computador, então foi usada uma imagem externa. Com aspas, lembre de **fechar no lugar certo**.

Se você aplica no `body`, a imagem vai pro fundo da página inteira; numa `div`, ela fica **nos limites da caixa**.

> [!note] Sobre os exemplos
> A URL `https://exemplo.com/imagem.jpg` é só ilustrativa; a aula usou outro endereço da web.

## background-repeat

**Por padrão**, a imagem de fundo **se repete** pelo fundo inteiro. Pra controlar:

| Valor | Efeito |
|---|---|
| `repeat` | Repete nos dois eixos (**padrão**) |
| `repeat-x` | Repete só no **eixo horizontal** |
| `repeat-y` | Repete só no **eixo vertical** |
| `no-repeat` | **Não repete** (o mais usado quando se quer uma imagem só) |

```css
div {
  background-image: url("https://exemplo.com/imagem.jpg");
  background-repeat: no-repeat;
}
```

---

## Resumo da aula

- **Cor:** vale pra qualquer elemento; no `body` cobre a página, numa caixa fica dentro dela. Aceita nome, hexadecimal e RGB.
- **Imagem:** com `url()`, de um arquivo local ou de qualquer lugar da web. Existem valores mais avançados, pra estudar depois.
- **Repetição:** por padrão repete; dá pra parar (`no-repeat`) ou repetir só no eixo horizontal ou vertical.

---

## Pontos-chave

- [ ] `background-color` aceita qualquer tipo de cor (nome, hex, RGB)
- [ ] O fundo fica dentro dos limites da caixa do elemento
- [ ] `background-image: url(...)` traz imagem local ou da web (aspas opcionais)
- [ ] A imagem de fundo **repete por padrão**
- [ ] `background-repeat`: `repeat-x`, `repeat-y`, `no-repeat`

---

## Navegação

- Anterior: [[Nome de cores e hexadecimal]]
- Próxima: [[Background Position e Size]]
- Índice do módulo: [[Módulo 4 - Cores e fundos]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Width e Height]], [[Imagens]]
