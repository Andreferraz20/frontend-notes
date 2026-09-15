---
title: "Class"
curso: "Fundamentos do HTML"
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
- Curso: [[Fundamentos do HTML]]
- Relacionado: [[Id]], [[Data]]

---

> [!note]- Transcrição da aula
> **[00:00]** Vamos falar aqui sobre o atributo class. Class é um atributo global que você pode usar para classificar elementos. Que que é isso? Exemplo, isso aqui é um elemento produto, tudo bem? Vou colocar aqui tênis. Eu tenho um segundo elemento na minha página, que é uma camiseta, não sei, vou imaginar assim. Eu estou classificando eles, tudo bem? Estou definindo que essas divs aqui, elas têm uma classificação da classe produto.
>
> **[00:23]** Eu vou usar mais tarde para o CSS, para o Javascript, bacana? Só que percebe que estruturalmente, ou até assim, de maneira final ali para o meu cliente, isso aqui não vai mudar nada. É um atributo global que não muda nada, mas é muito importante.
>
> **[00:42]** Nas classificações, é recomendado a gente também poder usar, pode-se usar um ou mais tipo de classificação. Nesse caso, eu coloco o espaço e coloco o tipo aqui da classificação. Isso aqui poderia ser um calçado, por exemplo, tá bem? Lembra das regrinhas, não coloque aqui nenhum caractere especial, tudo bem? O espaço aqui é permitido, porém, ele vai entender que é uma segunda classificação.
>
> **[01:07]** Isso aqui poderia estar no camisas. O que significa? Que lá no CSS, lá no Javascript, você pode puxar todas as classificações camisas que você encontrar na sua página depois, tudo bem? Ou todos os calçados, ou todos os produtos, que nesse caso encontraria dois, se fosse todos os calçados, encontraria apenas um, ou uma camiseta apenas esse daqui, camisas apenas esse daqui, tudo bem? Então, classificar é possível dessa forma. Lembra das regras de escrita que a gente viu anteriormente, bacana?
