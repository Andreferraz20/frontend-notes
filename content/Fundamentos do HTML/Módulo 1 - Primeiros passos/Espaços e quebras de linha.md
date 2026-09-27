---
title: "Espaços e quebras de linha"
curso: Rocketseat
modulo: "Módulo 1 - Primeiros passos"
tags:
  - rocketseat
  - html
  - fundamentos
---

# Espaços e quebras de linha

> [!abstract] Ideia central
> O HTML **ignora** quebras de linha e espaços extras digitados no código-fonte: qualquer sequência de espaços vira um espaço só, e um Enter no código não vira uma quebra de linha na página. Para isso existem marcações específicas — mas o ideal é resolver isso com estrutura (`<p>`) em vez de forçar quebras manuais.

---

## O comportamento padrão

```html
<p>
  Lorem ipsum     dolor sit amet
</p>
```

Não importa quantos espaços ou quebras de linha você colocar no código-fonte: o navegador renderiza como **um único espaço** entre as palavras. Isso vale tanto para múltiplos espaços quanto para Enters no meio do texto.

## Forçando quebra de linha: `<br>`

```html
<p>
  Primeira linha<br>
  Segunda linha<br>
  Terceira linha
</p>
```

`<br>` é uma tag vazia (ver [[Anatomia das Tags]]) — fecha nela mesma e não tem conteúdo. Cada `<br>` gera uma quebra de linha.

## Forçando espaço extra: `&nbsp;`

```html
<p>Um&nbsp;&nbsp;&nbsp;espaço maior</p>
```

`&nbsp;` (non-breaking space) representa um espaço. Repetir a entidade várias vezes gera vários espaços — diferente de digitar espaço normal, que o HTML colapsa em um só.

## Existe uma forma melhor

Em vez de empilhar `<br>` para simular parágrafos separados, o mais correto semanticamente é usar `<p>` para cada parágrafo — afinal, se é um nova ideia/parágrafo, ele já **é** um bloco novo por natureza (ver [[Fluxo HTML]]). Com o tempo, e principalmente com CSS, existem formas ainda melhores de controlar espaçamento.

---

## Pontos-chave

- [ ] HTML desconsidera múltiplos espaços e quebras de linha do código-fonte
- [ ] `<br>` força uma quebra de linha
- [ ] `&nbsp;` força um espaço (pode repetir)
- [ ] Prefira estrutura (`<p>` por parágrafo) a `<br>` empilhado quando fizer sentido

---

## Navegação

- Anterior: [[Anatomia das Tags]]
- Próxima: [[Fluxo HTML]]
- Índice do módulo: [[Módulo 1 - Primeiros passos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Caracteres reservados]]
