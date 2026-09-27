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
