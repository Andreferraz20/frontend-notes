---
title: "Seletores"
curso: Rocketseat
modulo: "Módulo 1 - Conhecendo o CSS"
tags:
  - rocketseat
  - css
  - fundamentos
---

# Seletores

> [!abstract] Ideia central
> O seletor é a parte da declaração CSS (ver [[Anatomia de uma declaração CSS]]) que decide **quem** recebe o estilo. Os fundamentais são cinco: tipo, id, classe, atributo e universal — cada um com uma sintaxe e um alcance diferente.

---

## Os cinco seletores fundamentais

```html
<p id="text" class="pink" title="Meu texto">Primeiro parágrafo</p>
<p title="Outro texto">Segundo parágrafo</p>
```

| Seletor | Também chamado de | Sintaxe | O que seleciona |
|---|---|---|---|
| Tipo | Elemento, tag | `p` | Todos os elementos daquela tag |
| ID | — | `#text` | Só o elemento com aquele `id` |
| Classe | — | `.pink` | Todos os elementos com aquela `class` |
| Atributo | — | `[title]` | Todos que têm o atributo, não importa o valor |
| Atributo (valor exato) | — | `[title="Meu texto"]` | Só quem tem exatamente esse valor no atributo |
| Universal | — | `*` | Absolutamente tudo na página |

## Aplicando cada um ao mesmo HTML

```css
/* tipo: os DOIS <p> ficam vermelhos */
p {
  color: red;
}

/* id: só o primeiro <p> (é o único com id="text") */
#text {
  color: red;
}

/* classe: só o primeiro <p> (é o único com class="pink") */
.pink {
  color: red;
}

/* atributo: os DOIS <p> (ambos têm title, com valores diferentes) */
[title] {
  color: red;
}

/* atributo com valor exato: só o primeiro */
[title="Meu texto"] {
  color: red;
}

/* universal: TUDO na página, não só os <p> */
* {
  color: violet;
}
```

## O ponto-chave: seletor aplica a todo mundo que combina

Um seletor de tag (`p`) vale pra **toda** tag daquele tipo que existir na página — se há dois `<p>`, os dois recebem o estilo. Já um seletor de classe (`.pink`) só pega quem realmente tem aquela classe: no exemplo, só o primeiro `<p>`, porque o segundo não tem `class="pink"`. Se a classe `pink` fosse repetida em mais elementos, todos eles seriam afetados junto.

> [!tip] Pouco uso no dia a dia
> O seletor de atributo com valor exato (`[title="Meu texto"]`) e o seletor de classe escrito como atributo (`[class="pink"]`) até funcionam, mas na prática quase ninguém escreve assim — o normal é usar `.pink` para classe e `#text` para id. Vale saber que existem, mas o uso comum é bem mais raro.

## Relação com especificidade

Cada um desses seletores já tem um peso definido em [[Especificidade]]: tipo pesa 1, classe pesa 10, id pesa 100. O seletor de atributo pesa o mesmo que uma classe (10). O universal (`*`) não soma peso nenhum — é o mais fraco de todos, fica por baixo de qualquer outro seletor.

---

## Pontos-chave

- [ ] Seletor de tipo/tag: aplica a todos os elementos daquela tag
- [ ] Seletor de id (`#nome`): aplica só ao elemento com aquele id
- [ ] Seletor de classe (`.nome`): aplica a todos com aquela classe
- [ ] Seletor de atributo (`[attr]` ou `[attr="valor"]`): aplica por presença ou valor exato do atributo
- [ ] Seletor universal (`*`): aplica a tudo na página
- [ ] Um seletor sempre aplica a **todos** os elementos que combinam com ele, não só a um

---

## Navegação

- Anterior: [[Valores e unidades de medida]]
- Próxima: [[Combinators]]
- Índice do módulo: [[Módulo 1 - Conhecendo o CSS]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Anatomia de uma declaração CSS]], [[Especificidade]], [[Id]], [[Class]]
