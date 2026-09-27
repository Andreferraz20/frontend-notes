---
title: "Class"
curso: Rocketseat
modulo: "Módulo 2 - Atributos"
tags:
  - rocketseat
  - html
  - atributos
---

# Class

> [!abstract] Ideia central
> `class` é um atributo global usado para **classificar/agrupar** elementos — diferente do `id`, pode se repetir em vários elementos e um mesmo elemento pode ter várias classes ao mesmo tempo. Sozinho, não muda nada visualmente: o valor real aparece depois, no CSS ou JavaScript.

---

## Sintaxe

```html
<div class="produto">Tênis</div>
<div class="produto">Camiseta</div>
```

As duas `div`s recebem a classificação `produto`. Estruturalmente/visualmente nada muda — a classe só existe para ser usada depois (ex: `.produto { ... }` no CSS, ou `document.querySelectorAll(".produto")` no JavaScript).

## Múltiplas classes num elemento

Um elemento pode ter mais de uma classificação, separando os nomes por **espaço**:

```html
<div class="produto calcado">Tênis</div>
<div class="produto camisa">Camiseta</div>
```

Agora é possível selecionar:
- Todos os `.produto` → pega as duas `div`s
- Todos os `.calcado` → pega só o tênis
- Todos os `.camisa` → pega só a camiseta

## Regras de escrita

Seguem a mesma lógica do [[Id]]: **sem caracteres especiais**. A diferença é que aqui o **espaço é permitido e tem significado** — ele separa classes diferentes no mesmo atributo, não é um erro.

---

## Pontos-chave

- [ ] `class` classifica/agrupa elementos, ao contrário do `id` pode se repetir
- [ ] Um elemento pode ter várias classes, separadas por espaço
- [ ] Sozinho não altera nada visualmente — só faz sentido junto com CSS/JS
- [ ] Sem caracteres especiais no nome da classe

---

## Navegação

- Anterior: [[Id]]
- Próxima: [[Data]]
- Índice do módulo: [[Módulo 2 - Atributos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Id]], [[Data]]
