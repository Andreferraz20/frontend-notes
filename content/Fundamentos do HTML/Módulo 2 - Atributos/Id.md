---
title: "Id"
curso: Rocketseat
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
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Class]], [[Data]]
