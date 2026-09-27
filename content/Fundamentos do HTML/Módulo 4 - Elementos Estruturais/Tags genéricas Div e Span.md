---
title: "Tags genéricas Div e Span"
curso: Rocketseat
modulo: "Módulo 4 - Elementos Estruturais"
tags:
  - rocketseat
  - html
  - estrutural
---

# Tags genéricas Div e Span

> [!abstract] Ideia central
> `<div>` e `<span>` são as duas tags **genéricas** do HTML: não têm significado semântico próprio (ver [[Semântica]]), servem só para estruturar/agrupar. A diferença entre elas é o fluxo padrão: `<div>` é bloco, `<span>` é inline (ver [[Fluxo HTML]]).

---

## `<div>`: caixa em bloco

```html
<div>
  <p>Primeiro bloco</p>
</div>
<div>
  <p>Segundo bloco</p>
</div>
```

- Representa uma "caixa" genérica — pode conter outros elementos dentro (outras caixas, um pai com filhos)
- Comportamento padrão: **bloco** — cada `<div>` ocupa a linha toda e empurra a próxima para baixo (ver [[Fluxo HTML]])

## `<span>`: caixa em linha

```html
<p>Este texto tem uma <span>palavra destacada</span> no meio.</p>
```

- Mesma ideia genérica da `<div>`, mas com comportamento padrão **inline** — fica ao lado do conteúdo vizinho, não quebra linha

## Comparando

| | `<div>` | `<span>` |
|---|---|---|
| Significado semântico | Nenhum | Nenhum |
| Fluxo padrão | Bloco (ocupa a linha toda) | Inline (fica ao lado) |
| Uso típico | Agrupar seções/blocos maiores | Marcar um trecho pequeno dentro de um texto |

## Por que usar algo "sem significado"

Nem todo agrupamento precisa de uma tag semântica. Quando não existe uma tag que descreva exatamente aquele pedaço (não é um `header`, `article`, `section` etc.), `<div>`/`<span>` resolvem a necessidade estrutural. Nesses casos, o significado extra vem de **atributos**, não da tag:

```html
<div class="card-produto" data-id-produto="482">
  <span class="preco">R$ 199,90</span>
</div>
```

- `class` (ver [[Class]]) e `id` (ver [[Id]]) dão contexto para CSS e JavaScript
- `data-*` (ver [[Data]]) guarda dados extras
- A tag em si continua genérica — quem carrega o "significado" aqui são os atributos

---

## Pontos-chave

- [ ] `<div>` e `<span>` não têm significado semântico
- [ ] `<div>` é bloco por padrão; `<span>` é inline por padrão
- [ ] Usadas quando nenhuma tag semântica se encaixa, para estruturar o layout
- [ ] O significado, quando necessário, vem de `class`/`id`/`data-*`, não da tag

---

## Navegação

- Anterior: [[Tags Nav, Section e Article]]
- Índice do módulo: [[Módulo 4 - Elementos Estruturais]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Fluxo HTML]], [[Semântica]], [[Class]], [[Id]], [[Data]]

---

> [!note]- Transcrição da aula
> **[00:00]** Existem dois elementos genéricos aqui que eles servem pra gente estruturar coisas do nosso HTML, porém eles não têm um significado especial em si. São eles o div e o span. O que é, né? Se eu colocar aqui um texto qualquer, div, e vou colocar aqui um span, outro span. Vamos observar a diferença deles.
>
> **[00:25]** A div então é um elemento genérico, não tem um significado nele, ele pode representar um filho, um pai, uma caixa, alguma coisa, uma caixa que vai conter outros elementos ali dentro, outras caixas ali dentro, imagina dessa forma, um pai que vai conter filhos etc. Ele leva por padrão o fluxo de bloco, então se eu tiver uma div e depois em sequência uma outra div, ela sempre vai pegar um bloco inteiro, e um bloco inteiro significa que eu estou pegando do início aqui até o final do bloco todinho, e jogando o próximo elemento para baixo. Esse é o comportamento padrão de div.
>
> **[01:01]** Comportamento padrão do span, que também é um elemento que não tem significado, é genérico, ele também vai servir agora como parecido com a div, eu posso ter outros elementos dentro etc, só que ele tem um comportamento em linha, então por mais que eu coloque elementos lá embaixo, abaixo, eles sempre vão ficar um ao lado do outro, porque por padrão o comportamento do span é em linha.
>
> **[01:29]** Então são dois elementos genéricos estruturais, servem para eu estruturar, para eu colocar uma coisa dentro da outra, mas às vezes eu não vou precisar de nenhum significado semântico nele, mas eu vou precisar fazer a estrutura para usar mais tarde lá no CSS ou no Javascript, e por isso aqui eu vou usar atributos como classes, atributos como id, atributos como data, alguma coisa, eu vou estar usando em todos esses elementos esses atributos para que eu possa dar maior significado para ele, afinal de contas eles não terão, bacana?
