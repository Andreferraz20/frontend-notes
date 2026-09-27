---
title: "Fluxo HTML"
curso: Rocketseat
modulo: "Módulo 1 - Primeiros passos"
tags:
  - rocketseat
  - html
  - fundamentos
---

# Fluxo HTML

> [!abstract] Ideia central
> No fluxo padrão do HTML, cada tag se comporta como **bloco** ou **inline**. Bloco ocupa toda a largura disponível e empurra o próximo elemento para baixo; inline ocupa só o espaço necessário e deixa o próximo elemento do lado.

---

## Bloco vs. inline

| | Bloco (`block`) | Em linha (`inline`) |
|---|---|---|
| Largura | Ocupa toda a largura disponível | Ocupa só o espaço do próprio conteúdo |
| Próximo elemento | Vai para a linha de baixo | Fica ao lado, na mesma linha |
| Exemplo visto na aula | `<p>` | `<a>` |

```html
<p>Primeiro parágrafo</p>
<p>Segundo parágrafo</p>
<!-- cada <p> ocupa a largura toda → um fica embaixo do outro -->

<a href="#">Primeiro link</a>
<a href="#">Segundo link</a>
<!-- cada <a> ocupa só o espaço do texto → ficam lado a lado -->
```

Repare que mesmo escrevendo os dois links em linhas separadas no código, eles aparecem **um do lado do outro** na página — porque `<a>` é inline por padrão. Já dois `<p>` aparecem um embaixo do outro, mesmo escritos colados, porque `<p>` é bloco por padrão.

## Por que isso importa

Esse comportamento é o **padrão do navegador**, sem nenhum CSS aplicado. Conforme mais tags vão sendo estudadas, cada uma delas já nasce sendo bloco ou inline — entender essa diferença desde já ajuda a prever como a página vai se organizar visualmente antes mesmo de estilizar com CSS.

> [!tip] Nem toda tag segue essa regra à risca
> Existem também elementos **inline-block** (comportamento misto), que ficam mais claros quando o CSS entra em cena.

---

## Pontos-chave

- [ ] Bloco: ocupa a largura toda, empilha verticalmente (ex: `<p>`)
- [ ] Inline: ocupa só o necessário, fica lado a lado (ex: `<a>`)
- [ ] Esse é o comportamento padrão do navegador, sem CSS

---

## Navegação

- Anterior: [[Espaços e quebras de linha]]
- Próxima: [[Aninhamento de Tags]]
- Índice do módulo: [[Módulo 1 - Primeiros passos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Tags genéricas Div e Span]]
