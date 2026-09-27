---
title: "Atributos booleanos"
curso: Rocketseat
modulo: "Módulo 2 - Atributos"
tags:
  - rocketseat
  - html
  - atributos
---

# Atributos booleanos

> [!abstract] Ideia central
> Atributos booleanos só têm dois estados possíveis: **presente** (verdadeiro) ou **ausente** (falso). Não precisam de valor — a simples presença do nome do atributo já ativa o comportamento.

---

## Como funciona

```html
<h1 hidden>Título em HTML</h1>
```

`hidden` é um atributo booleano: significa "esconder" e indica que o elemento **não deve mais participar da renderização da página** — sem precisar escrever `hidden="true"` ou algo do tipo. Basta o nome do atributo estar lá.

## Repetir o valor não quebra nada

```html
<h1 hidden="hidden">Título em HTML</h1>
```

Algumas pessoas escrevem o nome do atributo repetido como valor. Funciona normalmente — o HTML entende que é um booleano de qualquer forma. Não é necessário fazer isso, mas também não é um erro.

> [!tip] Como reconhecer um booleano
> Sempre que você ver um atributo **sem `=valor`** dentro de uma tag, é sinal de que ele é booleano.

---

## Pontos-chave

- [ ] Booleano = só verdadeiro ou falso
- [ ] Só precisa escrever o nome do atributo, sem valor
- [ ] Repetir o nome como valor (`hidden="hidden"`) funciona, mas é redundante
- [ ] Exemplo visto: `hidden`, esconde o elemento da página

---

## Navegação

- Anterior: [[Atributos]]
- Próxima: [[Atributos globais]]
- Índice do módulo: [[Módulo 2 - Atributos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]

---

> [!note]- Transcrição da aula
> **[00:00]** Agora nós vamos falar sobre atributos booleanos, que é muito simples. Booleano só tem dois valores pessoal, verdadeiro ou falso. Então é um atributo que eu coloco e não preciso fazer mais nada, não preciso colocar um conteúdo nem nada disso.
>
> **[00:13]** Então aqui eu venho com título, por exemplo, em HTML, e o atributo que eu coloco aqui, por exemplo, é o hidden. O hidden é um atributo booleano, hidden significa esconder, escondendo né, então um booleano que vai indicar que o elemento ele não vai participar da página mais, ele não é mais relevante ali. Tudo bem? Bem tranquilo de entender né, sempre que você vir um atributo que ele não tem um valor dentro dele, está tudo certo, é um booleano.
>
> **[00:40]** Algumas vezes você vai ver um booleano que em alguns lugares as pessoas vão querer colocar assim, hidden="hidden", por exemplo, e está tudo certo, não tem problema, vai funcionar igual, porque o HTML sabe interpretar que isso aqui é um booleano. É legal você saber para você não se repetir, mas se em algum lugar você ver um booleano que já está com o conteúdo ali, tudo certinho, que repete o mesmo nome dele, está tudo certo, vai funcionar igual.
