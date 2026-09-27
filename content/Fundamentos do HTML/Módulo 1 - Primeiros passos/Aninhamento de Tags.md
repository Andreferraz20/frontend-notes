---
title: "Aninhamento de Tags"
curso: Rocketseat
modulo: "Módulo 1 - Primeiros passos"
tags:
  - rocketseat
  - html
  - fundamentos
---

# Aninhamento de Tags

> [!abstract] Ideia central
> É normal e esperado colocar tags dentro de outras tags — isso é **aninhamento**. Quem envolve é a tag **pai**, quem está dentro é a tag **filha**. A regra de ouro: feche as tags na ordem inversa em que foram abertas, sem cruzar aberturas e fechamentos.

---

## Pai e filhos

```html
<p>
  Um texto qualquer, mas <em>esse trecho</em> tem ênfase
  e <strong>esse aqui</strong> é negrito.
</p>
```

- `<em>` dá ênfase ao texto (visualmente, itálico)
- `<strong>` dá importância ao texto (visualmente, negrito)
- Nesse exemplo, `<p>` é a tag **pai**; `<em>` e `<strong>` são tags **filhas** dela

Se houvesse uma tag dentro do `<em>`, ela também seria considerada filha — o aninhamento pode ter vários níveis de profundidade.

## A regra: fechar na ordem certa

O maior cuidado ao aninhar tags é saber exatamente onde cada uma fecha. Tags **não podem se cruzar**:

```html
<!-- ❌ errado: strong fecha "por cima" do p -->
<p><strong>texto
</p></strong>

<!-- ✅ certo: strong fecha antes do p -->
<p><strong>texto</strong></p>
```

Se a tag `<strong>` foi aberta dentro do `<p>`, ela precisa fechar **antes** do `<p>` fechar. Alguns navegadores tentam "adivinhar" e corrigir isso sozinhos na renderização, mas é um erro de escrita — pode não dar problema visível agora, mas gera bugs difíceis de rastrear depois.

---

## Pontos-chave

- [ ] Tag que envolve outra = **pai**; tag envolvida = **filha**
- [ ] O aninhamento pode ter vários níveis
- [ ] Tags devem fechar na ordem inversa da abertura — nunca se cruzam
- [ ] Fechar tag fora de ordem é erro de escrita, mesmo que o navegador "resolva" visualmente

---

## Navegação

- Anterior: [[Fluxo HTML]]
- Próxima: [[Caracteres reservados]]
- Índice do módulo: [[Módulo 1 - Primeiros passos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Anatomia das Tags]], [[Formatação básica de textos]]
