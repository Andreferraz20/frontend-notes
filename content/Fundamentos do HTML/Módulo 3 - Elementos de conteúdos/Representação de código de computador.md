---
title: "Representação de código de computador"
curso: Rocketseat
modulo: "Módulo 3 - Elementos de conteúdos"
tags:
  - rocketseat
  - html
  - semantica
---

# Representação de código de computador

> [!abstract] Ideia central
> `<code>` marca um trecho como código (com fonte monoespaçada), e `<pre>` preserva formatação exata — espaços, tabs e quebras de linha que o HTML normalmente [[Espaços e quebras de linha|ignora]]. Juntas, são a forma padrão de mostrar blocos de código numa página.

---

## `<code>`: marca o texto como código

```html
<p>Use o comando <code>git status</code> para ver o estado do repositório.</p>
```

Visualmente, o navegador aplica uma **fonte diferente** (monoespaçada) para deixar claro que aquilo é código, não texto comum.

## `<pre>`: preserva a formatação

Por padrão, o HTML colapsa espaços extras e ignora quebras de linha (ver [[Espaços e quebras de linha]]). Dentro de `<pre>`, isso **não acontece** — tabs, espaços múltiplos e quebras de linha do código-fonte são respeitados exatamente como escritos.

```html
<pre><code>function soma(a, b) {
    return a + b;
}</code></pre>
```

É por isso que `<code>` normalmente aparece **dentro** de `<pre>` para blocos de código com várias linhas: o `<pre>` cuida do espaçamento/indentação, o `<code>` cuida da fonte e do significado semântico.

## Mostrando código HTML dentro de `<pre><code>`

Se o código que você quer exibir é HTML, ele será interpretado como tag de verdade a não ser que os sinais `<` e `>` sejam escapados — o mesmo problema visto em [[Caracteres reservados]]:

```html
<pre><code>
&lt;!-- Isso aqui é um comentário --&gt;
</code></pre>
<!-- renderiza literalmente: <!-- Isso aqui é um comentário --> -->
```

Vale notar: o navegador só precisa que o `<` seja trocado por `&lt;` para já entender que aquilo não é uma tag — o `>` sozinho, sem o `<` correspondente, normalmente já aparece sem problema. Ainda assim, a boa prática é escapar os dois (`&lt;` e `&gt;`) para manter o código-exemplo consistente e correto.

---

## Pontos-chave

- [ ] `<code>`: marca texto como código (fonte monoespaçada)
- [ ] `<pre>`: preserva espaços, tabs e quebras de linha
- [ ] Padrão comum: `<pre><code>...</code></pre>` para blocos de código
- [ ] Para mostrar HTML como texto, escapar `<` e `>` com `&lt;` e `&gt;`

---

## Navegação

- Anterior: [[Listas]]
- Próxima: [[Hiperlink]]
- Índice do módulo: [[Módulo 3 - Elementos de conteúdos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Caracteres reservados]], [[Espaços e quebras de linha]]
