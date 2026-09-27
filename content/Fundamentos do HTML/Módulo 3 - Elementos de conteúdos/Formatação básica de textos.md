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
