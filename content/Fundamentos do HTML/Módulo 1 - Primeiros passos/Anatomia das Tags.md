---
title: "Anatomia das Tags"
curso: Rocketseat
modulo: "Módulo 1 - Primeiros passos"
tags:
  - rocketseat
  - html
  - fundamentos
---

# Anatomia das Tags

> [!abstract] Ideia central
> Uma tag é a unidade de marcação do HTML: **abertura → conteúdo → fechamento**, o que junto forma um **elemento**. Algumas tags não têm conteúdo — são as tags vazias.

---

## As três partes de um elemento

```html
<h1 id="titulo">Título</h1>
```

| Parte | Exemplo | O que é |
|---|---|---|
| Abertura | `<h1 id="titulo">` | `<`, nome da tag, atributos (opcionais), `>` |
| Conteúdo | `Título` | O que fica entre abertura e fechamento |
| Fechamento | `</h1>` | `<`, `/`, nome da tag, `>` |

Esse conjunto (abertura + conteúdo + fechamento) forma um **elemento**. Na relação entre elementos, também se usa os termos **pai**, **filho** ou **nó** — a mesma ideia de hierarquia que aparece em [[Aninhamento de Tags]].

## Atributos

Tags podem ou não ter atributos — configurações extras escritas dentro da tag de abertura (ex: `id`, um atributo global usado para identificar o elemento). O assunto completo de atributos é o [[Atributos|próximo módulo]].

## Tags vazias (void elements)

Algumas tags não têm conteúdo — são **tags vazias** (ou elementos vazios/filhos vazios). Elas são configuradas só pelos atributos.

```html
<img src="foto.jpg" alt="Uma foto" />
<!-- não tem conteúdo, só atributos: src e alt -->

<br>
<!-- não tem atributos nem conteúdo, só um objetivo: quebrar a linha -->
```

A barra final (`/>`) é opcional visualmente — o importante é entender que essas tags nunca têm um fechamento com conteúdo no meio, como `<img>...</img>`.

---

## Pontos-chave

- [ ] Elemento = abertura + conteúdo + fechamento
- [ ] Fechamento sempre repete o nome da tag, com `/`: `</h1>`
- [ ] Atributos ficam na tag de abertura, são opcionais
- [ ] Tags vazias (`img`, `br`) não têm conteúdo, só atributos (quando fizer sentido)
- [ ] Termos importantes: elemento, filho, nó, pai

---

## Navegação

- Anterior: [[Comentários no HTML]]
- Próxima: [[Espaços e quebras de linha]]
- Índice do módulo: [[Módulo 1 - Primeiros passos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Aninhamento de Tags]], [[Atributos]]
