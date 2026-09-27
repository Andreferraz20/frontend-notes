---
title: "Formatação básica de textos"
curso: Rocketseat
modulo: "Módulo 3 - Elementos de conteúdos"
tags:
  - rocketseat
  - html
  - semantica
---

# Formatação básica de textos

> [!abstract] Ideia central
> Quatro tags cobrem a formatação básica de texto no HTML, cada uma com um significado próprio (não só visual): `<strong>` importância, `<em>` ênfase, `<mark>` relevância/destaque e `<s>` conteúdo não mais válido.

---

## As quatro tags

```html
<p>
  Esse é um texto <strong>muito importante</strong>,
  com uma <em>ênfase</em> nessa parte,
  um <mark>trecho relevante</mark>
  e um <s>preço antigo</s> que não vale mais.
</p>
```

| Tag | Significado | Efeito visual padrão |
|---|---|---|
| `<strong>` | Importância | Negrito |
| `<em>` | Ênfase | Itálico |
| `<mark>` | Relevância / destaque | Fundo amarelo (highlight) |
| `<s>` | Conteúdo não mais válido/relevante | Riscado (strikethrough) |

## O ponto importante: significado, não só estilo

Essas tags **parecem** apenas atalhos visuais (negrito, itálico, riscado), mas cada uma carrega um significado semântico (ver [[Semântica]]):

- `<strong>` não é "só negrito" — diz que aquele trecho é **importante**
- `<em>` não é "só itálico" — diz que aquele trecho tem **ênfase** na leitura
- `<mark>` sinaliza que o trecho é **relevante** no contexto (ex: destacar um termo buscado)
- `<s>` sinaliza que o conteúdo **não é mais válido** (ex: um preço antigo riscado)

Isso é diferente de aplicar estilo via CSS/`style` só para efeito visual — aqui a tag já comunica a intenção do conteúdo, inclusive para leitores de tela e mecanismos de busca.

---

## Pontos-chave

- [ ] `<strong>` = importância (negrito)
- [ ] `<em>` = ênfase (itálico)
- [ ] `<mark>` = relevância/destaque
- [ ] `<s>` = não mais válido/relevante (riscado)
- [ ] Cada tag carrega significado, não é só estilo visual

---

## Navegação

- Anterior: [[Títulos e parágrafos]]
- Próxima: [[Listas]]
- Índice do módulo: [[Módulo 3 - Elementos de conteúdos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Aninhamento de Tags]]

---

> [!note]- Transcrição da aula
> **[00:00]** Existem algumas formatações básicas no HTML que você pode estar usando tags pra isso. Então vamos pegar aqui um texto qualquer. E nesse texto qualquer eu quero começar a dar uma importância em alguma parte do texto. Pra isso eu tenho a tag strong. Então a tag strong ela dá uma importância a uma determinada parte do texto. A tag strong é como o negrito, ok? Ela faz o negrito do texto.
>
> **[00:24]** O ênfase, eu quero dar uma ênfase em alguma parte do texto. Eu tenho a tag em, e aí eu posso pegar um pedaço do texto aqui e dar uma ênfase. A ênfase ele faz como o texto deitadinho, assim, itálico.
>
> **[00:36]** Nós temos a opção de mark, uma relevância a alguma parte do texto. Então aqui eu quero dar um mark nesse texto aqui. Vou fechá-lo aqui, ok? Então eu tenho uma marcação, uma relevância a esse texto aqui.
>
> **[00:51]** E por fim nós temos o riscado, um texto riscadinho, que é o S, do inglês strike through. E aí ele risca um pedaço do texto que eu estou pedindo pra riscar. Que se eu fechar a tag certinho ele funciona melhor. Muito bem, o texto tá riscadinho ali, né? Então o S ele vai representar que esse conteúdo ele já não é mais relevante ali. Ele já não tá ali, não deveria estar ali.
>
> **[01:14]** Ou seja, essas formatações básicas aqui, dependendo do texto que a gente tá escrevendo, é muito importante pra gente dar ou importância, ou ênfase, ou relevância, ou mesmo dar uma riscada em algum texto que foi modificado em algum momento. Bacana?
