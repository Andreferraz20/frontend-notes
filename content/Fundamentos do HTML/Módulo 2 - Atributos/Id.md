---
title: "Id"
curso: "Fundamentos do HTML"
modulo: "Módulo 2 - Atributos"
tags:
  - rocketseat
  - html
  - atributos
---

# Id

> [!abstract] Ideia central
> `id` é um identificador **único** de um elemento, usado depois para localizá-lo no CSS ou no JavaScript. É como um RG: cada elemento tem o seu, e ele não pode se repetir no mesmo documento.

---

## Sintaxe

```html
<div id="cabecalho-principal">
  ...
</div>
```

Mais tarde, esse `id` pode ser usado para selecionar exatamente essa `div` no CSS (`#cabecalho-principal { ... }`) ou no JavaScript (`document.getElementById("cabecalho-principal")`).

## Regras de escrita (a analogia do RG)

| Regra | Por quê |
|---|---|
| Não repetir o mesmo `id` na página | É um identificador único — dois elementos com o mesmo `id` geram conflito |
| Não começar com número | Assim como um RG não começa por número solto, aqui também não é permitido |
| Evitar caracteres especiais | Podem causar erro na hora de selecionar o elemento depois |
| Sem espaço — usar traço (`-`) para separar palavras | `id="nome-1"` em vez de `id="nome 1"` |

```html
<!-- ✅ -->
<section id="secao-projetos">...</section>

<!-- ❌ espaço no meio -->
<section id="secao projetos">...</section>

<!-- ❌ começa com número -->
<section id="1-secao">...</section>
```

> [!warning] Unicidade é por documento
> A regra de "não repetir" vale **dentro da mesma página/documento**. É o RG do elemento — assim como duas pessoas não têm o mesmo RG, dois elementos na mesma página não devem ter o mesmo `id`.

---

## Pontos-chave

- [ ] `id` identifica um elemento de forma única no documento
- [ ] Usado depois por CSS e JavaScript para selecionar o elemento
- [ ] Não repetir, não começar com número, sem caracteres especiais, sem espaço (use `-`)

---

## Navegação

- Anterior: [[Atributos globais]]
- Próxima: [[Class]]
- Índice do módulo: [[Módulo 2 - Atributos]]
- Curso: [[Fundamentos do HTML]]
- Relacionado: [[Class]], [[Data]]

---

> [!note]- Transcrição da aula
> **[00:00]** Bom, vamos dar uma olhada no atributo ID. Vou colocar aqui uma div, uma tag qualquer, não importa qual ela, você vai colocar um `id="..."`. ID significa que é um identificador, eu vou colocar aqui um nome qualquer, tá bem? Um nome.
>
> **[00:16]** Pra que ele vai servir? Mais tarde eu posso usar ele para o CSS, para o JavaScript, e através dele eu ter acesso a essa div aqui específica. Recomendado você não ter o mesmo ID, ou o mesmo identificador, imagina isso como um RG de uma div. Um RG de uma tag, não de uma div específica, mas de uma tag. É o RG de um elemento.
>
> **[00:38]** Então você não repete o nome dele, tudo bem? Mas também, assim como o RG, você não pode colocar números no começo. Não é recomendado você colocar números no começo. No RG você pode, mas aqui não, tá bem? Aqui também não é recomendado você colocar caracteres especiais no começo, tudo bem? Ou no meio. Não coloque caracteres especiais e também não coloque separação com espaço.
>
> **[00:58]** É uma coisa que se você quiser separar, você vai colocar um traço, é recomendado você colocar um traço. Então isso aqui, no caso, identificaria o nome 1 e o nome 2 dessa forma tranquilamente, tá bem? É só entender bem essas regrinhas de escrita, pra não dar problemas, tá?
>
> **[01:13]** Só pra não gerar problemas futuros e conflitos futuros, não colocar espacinho, coloca aí um tracinho. Não usa os caracteres especiais, isso poderá gerar algum problema em algum momento e você não vai querer isso. E não repita, pro ID, não repita o mesmo nome dentro do mesmo documento, da mesma página. Apenas o identificador, ele é único, apenas um nome único. Isso aqui não pode, tá bem?
