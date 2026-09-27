---
title: "Adicionando CSS no HTML"
curso: Rocketseat
modulo: "Módulo 1 - Conhecendo o CSS"
tags:
  - rocketseat
  - css
  - fundamentos
---

# Adicionando CSS no HTML

> [!abstract] Ideia central
> Existem três formas de aplicar CSS num projeto: **inline** (atributo `style`), **embutido** (tag `<style>` no `<head>`), e **arquivo externo** (`.css` linkado com `<link>`). A terceira é a mais usada em projetos reais — as outras duas existem, mas por bons motivos são evitadas.

---

## As três formas

### 1. Inline — atributo `style`

```html
<body style="background-color: red;">
  ...
</body>
```

Aplica estilo direto numa tag específica. Já visto em [[Style]]: funciona, mas é a forma **menos recomendada** — o HTML trata esse estilo como extremamente pesado (ver [[Mais específico que especificidade]]), o que dificulta sobrescrever depois.

### 2. Embutido — tag `<style>`

```html
<head>
  <style>
    body {
      background-color: blue;
    }
  </style>
</head>
```

Centraliza o CSS num bloco só, dentro do próprio HTML. Melhor que o inline, mas o CSS ainda fica **misturado** com o HTML no mesmo arquivo — também não é a prática mais comum em projetos.

### 3. Arquivo externo — `<link>` (a forma recomendada)

Cria-se um arquivo separado, com extensão `.css`, e ele é referenciado no `<head>` do HTML.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Meu projeto</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Olá, mundo!</h1>
</body>
</html>
```

```css
/* style.css */
body {
  background-color: bisque;
}
```

| Atributo do `<link>` | O que faz |
|---|---|
| `rel="stylesheet"` | Define a **relação** do arquivo linkado — aqui, diz que ele é uma folha de estilo (a tag `<link>` também serve para outras finalidades, mudando o `rel`) |
| `href="style.css"` | O **caminho** até o arquivo CSS |

O `.css` no nome do arquivo é o que importa de verdade — é essa extensão que define que aquele arquivo é uma folha de estilo, não o nome em si (`style.css` é só uma convenção comum).

## Sobre o caminho no `href`

No exemplo acima, `style.css` está na **mesma pasta** do `index.html`, por isso o caminho é só o nome do arquivo. Se o CSS estivesse dentro de outra pasta, o caminho precisaria refletir isso, seguindo as regras de **caminhos relativos e absolutos** — assunto para uma aula futura.

> [!tip] Autocomplete do editor
> Editores como o VS Code sugerem os arquivos disponíveis assim que você começa a digitar o `href`, o que ajuda a não errar o caminho na mão.

---

## Pontos-chave

- [ ] Inline (`style="..."`): funciona, mas é a forma menos recomendada (especificidade alta)
- [ ] Embutido (`<style>` no `<head>`): centraliza, mas ainda mistura CSS com HTML
- [ ] Arquivo externo (`.css` + `<link rel="stylesheet" href="...">`): a forma mais usada em projetos reais
- [ ] `rel="stylesheet"` diz que tipo de arquivo está sendo linkado; `href` diz onde ele está
- [ ] Arquivo na mesma pasta: só o nome. Em outra pasta: caminho relativo/absoluto (aula futura)

---

## Navegação

- Anterior: [[Combinators]]
- Índice do módulo: [[Módulo 1 - Conhecendo o CSS]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Style]], [[Mais específico que especificidade]], [[Anatomia de um documento HTML]]
