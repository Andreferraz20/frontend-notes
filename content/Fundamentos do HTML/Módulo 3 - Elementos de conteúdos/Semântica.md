---
title: "Semântica"
curso: Rocketseat
modulo: "Módulo 3 - Elementos de conteúdos"
tags:
  - rocketseat
  - html
  - semantica
---

# Semântica

> [!abstract] Ideia central
> HTML dá liberdade pra escrever qualquer coisa com uma única tag genérica, mas esse não é o objetivo. A estratégia correta é usar a tag que **significa** o que está sendo escrito — é isso que se chama HTML semântico, e é a base para acessibilidade e SEO.

---

## Por que semântica importa

Tecnicamente, seria possível montar uma página inteira só com `<div>` e organizar tudo depois no CSS. Mas o HTML foi desenhado para que cada tipo de conteúdo tenha uma tag com **significado próprio**:

| Pergunta | Existe uma tag pra isso? |
|---|---|
| Vou escrever um título? | Sim → `<h1>`...`<h6>` |
| Vou escrever um parágrafo? | Sim → `<p>` |
| Vou fazer um link? | Sim → `<a>` |
| Preciso de um botão? | Sim → `<button>` |

Ao escolher a tag certa em vez de uma genérica, o próprio HTML já descreve o que aquele pedaço de conteúdo **é**.

## HTML5 e a explosão de elementos semânticos

O HTML5 trouxe mais de **100 elementos semânticos** novos. Não é necessário saber todos de cor — o aprendizado é gradual: conforme a necessidade aparece, descobre-se que existe uma tag específica para dar significado àquele conteúdo (ex: `<img>` para imagem, `<video>` para vídeo, e assim por diante).

## Os dois grandes benefícios

1. **Acessibilidade** — leitores de tela dependem da semântica para descrever a página corretamente para quem não consegue enxergá-la
2. **SEO (Search Engine Optimization)** — motores de busca leem a estrutura semântica para entender do que se trata a página e indexá-la melhor

---

## Pontos-chave

- [ ] HTML permite escrever tudo genérico, mas o objetivo é usar a tag que **significa** o conteúdo
- [ ] HTML5 trouxe 100+ elementos semânticos
- [ ] Não precisa memorizar todos — aprendizado é gradual, por necessidade
- [ ] Benefícios diretos: acessibilidade e SEO

---

## Navegação

- Anterior: [[Style]] (Módulo 2)
- Próxima: [[Títulos e parágrafos]]
- Índice do módulo: [[Módulo 3 - Elementos de conteúdos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Tags genéricas Div e Span]] — o contraponto: elementos sem semântica
