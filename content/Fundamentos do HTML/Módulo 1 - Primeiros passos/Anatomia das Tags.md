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

---

> [!note]- Transcrição da aula
> **[00:00]** Vamos estudar nessa aula sobre a anatomia das tags. A tag é o motivo da marcação no HTML. Quando fala de marcação, a gente tá falando de tag. Como que vai funcionar aqui? Com o sinal de maior, você vai colocar o nome da tag que você quer. Dependendo do editor de texto que você tem, ele vai sugerir pra você, assim que você começar a colocar o sinal de maior, vários tipos de tags. E essa é a grande sacada do HTML e a gente vai aprendendo muitas delas.
>
> **[00:25]** Aqui eu vou colocar uma tag de título que é o heading1, então eu só coloco h1. E coloco o sinal agora de maior. Primeiro o sinal de menor, sinal h1, texto h1, sinal de maior. Aqui eu coloco o conteúdo, estamos no conteúdo, aqui fiz a abertura da tag, tudo bem? Vamos fazer o conteúdo da tag agora, título, e vamos fazer o fechamento da tag. O fechamento da tag vai funcionar dessa forma, um sinal de menor, uma barra, e eu coloco o mesmo nome da tag, e coloco o sinal de maior. Pronto, essa é a anatomia da tag, abertura, conteúdo, fechamento, e isso daqui compõe um elemento.
>
> **[01:06]** A gente chama isso daqui de um elemento, a gente pode chamar isso daqui no HTML de filho, a gente pode chamar isso daqui de nó também. A gente vai ver isso com o passar das aulas. Mas é interessante você entender que dessa forma eu abri, coloquei o conteúdo, fechei, e as tags podem ou não conter atributos. Por exemplo, um atributo universal que eu vou colocar aqui é o atributo de identificação da tag. A gente vê isso num momento melhor, mas isso é pra você entender como funciona o atributo.
>
> **[01:33]** Agora, a tag pode também ter elementos, a gente pode fazer elementos vazios, ou tags vazias, ou filhos vazios. O que é isso? É uma tag que não possui conteúdo. Por exemplo, se eu começar a escrever aqui nesse editor de código `img`, ele vai colocar pra mim aqui dois atributos, `src` e `alt` — a gente vê isso num momento melhor — e pronto, fechou a tag, ela acabou aqui, eu posso ou não ver essa barra aqui no final. Isso aqui é uma tag que não tem conteúdo dentro dela, então é um elemento vazio, uma tag vazia.
>
> **[02:03]** Porém, os atributos são quem configuram ela, e aí poderão ou não conter atributos, porque nós também temos tags que são fechadas nela mesma, por exemplo a `br`, que serve como uma break, uma quebra de linha. Pronto, através dela eu não tenho atributos e nem preciso, porém, ela tem um objetivo também e não precisa ter conteúdo. Com o passar das aulas você vai entendendo isso com mais clareza. Bacana?
