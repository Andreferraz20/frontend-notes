---
title: "Caracteres reservados"
curso: Rocketseat
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
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Representação de código de computador]]
