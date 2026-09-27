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
