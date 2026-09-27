---
title: "Imagens"
curso: Rocketseat
modulo: "Módulo 3 - Elementos de conteúdos"
tags:
  - rocketseat
  - html
  - semantica
---

# Imagens

> [!abstract] Ideia central
> `<img>` insere imagens com `src` (de onde vem a imagem) e `alt` (texto alternativo) como atributos fundamentais. `alt` não é opcional na prática: é essencial para acessibilidade, SEO e como fallback quando a imagem não carrega.

---

## Sintaxe básica

```html
<img src="https://source.unsplash.com/random" alt="Imagem aleatória ilustrativa" width="200" height="200">
```

`<img>` é uma tag vazia (ver [[Anatomia das Tags]]) — não tem conteúdo, só atributos.

## `src`: de onde vem a imagem

Pode ser:
- Uma **URL** (endereço na web) — ex: um serviço como `unsplash.com` (atenção a direitos autorais das imagens usadas)
- Um **caminho local** — ex: `./imagens/foto.jpg`, nas extensões comuns: PNG, JPG, WebP, GIF, entre outras

## `alt`: texto alternativo (essencial)

```html
<img src="grafico-vendas.png" alt="Gráfico de vendas crescendo 20% no último trimestre">
```

`alt` descreve a imagem em texto, e cumpre três papéis:

| Papel | Por quê |
|---|---|
| Acessibilidade | Leitores de tela leem o `alt` para pessoas que não conseguem enxergar a imagem |
| SEO | Motores de busca não "enxergam" a imagem — leem o `alt` para entender do que se trata |
| Fallback | Se a imagem não carregar, o `alt` aparece no lugar dela |

## `width` e `height`: dimensões

```html
<img src="foto.jpg" alt="Descrição" width="200">
<!-- só largura: altura se ajusta proporcionalmente -->

<img src="foto.jpg" alt="Descrição" height="200">
<!-- só altura: largura se ajusta proporcionalmente -->

<img src="foto.jpg" alt="Descrição" width="200" height="200">
<!-- as duas: fixa largura E altura -->
```

> [!warning] Cuidado ao usar `width` e `height` juntos
> Definir os dois ao mesmo tempo só faz sentido quando você **sabe exatamente** a proporção real da imagem. Caso contrário, o navegador estica ou espreme a imagem para caber nas dimensões fixas, deixando-a distorcida.

## O que vem depois (fora do escopo desta aula)

Imagens têm um universo mais avançado de estudo — performance (carregamento otimizado), SEO mais aprofundado, atributos extras para imagens responsivas e alternativas. São tópicos para o momento em que os fundamentos já estiverem bem consolidados.

---

## Pontos-chave

- [ ] `src`: origem da imagem (URL ou caminho local)
- [ ] `alt`: texto alternativo — acessibilidade, SEO e fallback
- [ ] `width`/`height`: use um dos dois, ou os dois só quando souber a proporção real
- [ ] `<img>` é uma tag vazia, sem conteúdo

---

## Navegação

- Anterior: [[Hiperlink]]
- Próxima: [[Anatomia de um documento HTML]] (Módulo 4)
- Índice do módulo: [[Módulo 3 - Elementos de conteúdos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Anatomia das Tags]]
