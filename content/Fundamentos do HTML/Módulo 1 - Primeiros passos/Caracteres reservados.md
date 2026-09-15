---
title: "Caracteres reservados"
curso: "Fundamentos do HTML"
modulo: "Módulo 1 - Primeiros passos"
tags:
  - rocketseat
  - html
  - fundamentos
---

# Caracteres reservados

> [!abstract] Ideia central
> `<` e `>` são caracteres **reservados** do HTML — assim que o navegador encontra um `<`, ele entende que uma tag está começando. Para exibir esses caracteres como texto literal, é preciso usar as entidades `&lt;` e `&gt;`.

---

## O problema

```html
<p>Eu quero mostrar a tag <p> na tela</p>
```

Isso não funciona: assim que o navegador encontra o segundo `<p`, ele interpreta como uma **nova tag** sendo aberta (e nem fechada corretamente), não como texto.

## A solução: entidades HTML

| Caractere | Entidade |
|---|---|
| `<` | `&lt;` (**l**ower **t**han) |
| `>` | `&gt;` (**g**reater **t**han) |

```html
<p>Eu quero mostrar a tag &lt;p&gt; na tela</p>
<!-- renderiza: Eu quero mostrar a tag <p> na tela -->
```

## Combinando com `<code>`

É comum usar essas entidades junto com a tag `<code>` (ver [[Representação de código de computador]]) para exibir trechos de código em documentação:

```html
<p>Um comentário em HTML: <code>&lt;!-- comentário --&gt;</code></p>
```

## Quando isso realmente importa

- Usar `<` ou `>` **sozinhos**, como texto solto (ex: "5 < 10"), normalmente não quebra nada
- O problema aparece quando o caractere forma o **padrão de uma tag** (`<algumacoisa` colado, sem espaço) — aí o navegador tenta interpretar como marcação
- É uma situação rara no dia a dia, mas essencial saber resolver ao escrever documentação ou exemplos de código dentro de HTML

---

## Pontos-chave

- [ ] `<` e `>` são reservados — abrem/fecham tags
- [ ] Para exibi-los como texto: `&lt;` e `&gt;`
- [ ] O problema só aparece quando o caractere forma padrão de tag, não usado isolado
- [ ] Combinação comum: `&lt;` / `&gt;` dentro de `<code>` para mostrar exemplos de HTML

---

## Navegação

- Anterior: [[Aninhamento de Tags]]
- Próxima: [[Atributos]] (Módulo 2)
- Índice do módulo: [[Módulo 1 - Primeiros passos]]
- Curso: [[Fundamentos do HTML]]
- Relacionado: [[Representação de código de computador]]

---

> [!note]- Transcrição da aula
> **[00:00]** Conforme a gente vai estudando linguagens na programação, seja linguagem de programação ou linguagem como HTML, a gente vai percebendo que existem caracteres e palavras especiais reservadas da linguagem, que a linguagem interpreta de certa forma. Então, por exemplo, se eu tiver aqui um parágrafo, eu não consigo, se por algum motivo eu quiser imprimir essa tag `<p>`, eu quero mostrar isso aqui, eu não consigo mostrar aqui, por quê? Porque esse sinalzinho é um caractere reservado da linguagem. Assim que ele encontrar esse padrão, ele vai entender que eu estou criando uma tag. Nesse caso, eu estou abrindo uma e não estou nem fechando.
>
> **[00:38]** Como que eu faço, então, para driblar isso? Eu tenho o conhecimento de alguns caracteres, de algumas maneiras reservadas ou especiais para eu fazer isso. Eu colocaria o e-comercial, lower than, do inglês, ou LT, ponto vírgula, então é isso que eu tenho que colocar, `&lt;`, ele já imprimiu ali para mim. Coloco o P que eu quero, aqui, e coloco o e-comercial de novo, greater than, ponto vírgula, `&gt;`. Pronto, é assim que eu consigo imprimir ali na tela.
>
> **[01:06]** Se eu quiser que isso aqui represente um código, eu tenho uma tag especial, que é a tag code, e aí ela transforma — presta atenção, como que ficou transformado num formato diferente, é uma escolha de fonte diferente ali, tá bem? Isso é legal eu saber.
>
> **[01:22]** Agora, dependendo, vamos supor que aqui no meio eu queira colocar o e-comercial, ele vai funcionar bem, mas eu justamente queria colocar o GT também. Eu quero imprimir isso aqui na tela, por exemplo. Olha que estranho, eu não consigo imprimir isso daqui porque ele virou agora um sinal de maior. Então aqui eu vou precisar usar o `&amp;`, aí eu coloquei o que eu quero, aí eu vou colocar o GT, ponto vírgula. Então se eu tivesse, sei lá, por algum motivo, escrevendo a documentação, pra que a pessoa depois enxergue, na verdade, o que ela vai usar como o greater than, na hora que ela estiver codando, eu tive que fazer uns paranauê, umas coisas diferentes aqui, porque não ia funcionar se eu colocasse apenas isso daqui, ele converte isso daqui, tá?
>
> **[02:19]** Então é legal a gente entender esses assuntos, porque é coisa mínima do HTML, dificilmente você vai ter um problema com isso, tá? Porque geralmente a gente não vai usar, acho que não, né? Mas pode ser que em algum momento no seu texto você vai precisar usar. Agora, se no seu texto você precisou usar só esse sinal sozinho, não teve problema. Ou só esse sinal aqui sozinho, não teve problema. O problema está quando você coloca ele no formato de tag. Se você coloca ele no formato de tag, tem problema. Se você coloca ele no formato de não tag, ou seja, com espaço, já está certo. Então ele aparece. Mas ficou juntinho, ficou no formato de tag, pronto. Já tem um problema e eu preciso saber driblar.
