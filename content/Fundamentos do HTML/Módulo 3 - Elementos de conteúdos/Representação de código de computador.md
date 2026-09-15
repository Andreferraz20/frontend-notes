---
title: "Representação de código de computador"
curso: "Fundamentos do HTML"
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
- Curso: [[Fundamentos do HTML]]
- Relacionado: [[Caracteres reservados]], [[Espaços e quebras de linha]]

---

> [!note]- Transcrição da aula
> **[00:00]** Bom, vamos supor aqui que você precisa fazer uma representação de códigos de computador usando tags HTML, então a gente vai usar duas tags HTML, vamos entender pra que elas servem e os caracteres especiais em casos específicos.
>
> **[00:12]** Vamos lá, a primeira tag que nós temos aqui é o code, se eu tiver um texto qualquer dentro da tag code, eu quero que você observe as diferenças, a diferença é na questão da fonte, é uma fonte exclusiva aqui para código, é uma fonte diferente, beleza, esse é o primeiro caso.
>
> **[00:28]** O segundo caso que eu quero que você observe é como que funciona o pré, geralmente pessoal, a formatação que nós fazemos do code, nós colocamos code dentro de uma tag pré, por quê? A tag pré, ela permite que haja aqui, tabs por exemplo, espaços extras. Então ela leva em consideração todos os espaços, tabs e também quebras de linha, então se eu supondo aqui que eu tenho quebra de linha, ele também leva em consideração, legal?
>
> **[01:02]** Então a gente coloca geralmente dessa forma, e no code, se eu quisesse representar um código HTML, por exemplo, e eu quisesse escrever aqui um comentário, e eu quisesse colocar aqui o código pré, por exemplo, você vai perceber que apesar de eu colocar nessa estrutura, ele entende que isso aqui é HTML, então eu preciso fazer umas organizações aqui, o sinal de menor, eu vou trocar pelo lower than, e pronto, só esse sinalzinho de menor já resolveu, seria legal substituir isso daqui também? Seria, é uma boa prática eu fazer certinho essa substituição, mas você viu que ele já entendeu, como ele não interpreta o todo como HTML, ele deixou o sinalzinho de maior ali, ou seja, mesma coisa aqui, se eu mudar somente o sinal ali, ele vai interpretar, e se eu mudar somente esse sinal, também, lower than, ele também vai interpretar pra gente, tá?
>
> **[01:54]** Então, de uma maneira bem tranquila, lower than, vem do inglês, menor que, e greater than, significa que ele tá fazendo um sinal de maior, sinal de menor da matemática, então assim a gente conseguiu representar o código HTML ali.
