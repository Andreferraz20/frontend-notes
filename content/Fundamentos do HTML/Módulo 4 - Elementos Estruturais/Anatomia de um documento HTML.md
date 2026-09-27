---
title: "Anatomia de um documento HTML"
curso: Rocketseat
modulo: "Módulo 4 - Elementos Estruturais"
tags:
  - rocketseat
  - html
  - estrutural
---

# Anatomia de um documento HTML

> [!abstract] Ideia central
> Todo documento HTML segue uma estrutura fixa: `<!DOCTYPE html>` no topo, a tag raiz `<html>` contendo dois filhos — `<head>` (configuração, não aparece na página) e `<body>` (tudo que a pessoa vê).

---

## O esqueleto completo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aprendendo HTML</title>
</head>
<body>
  <!-- todo o conteúdo visível vai aqui -->
</body>
</html>
```

## Peça por peça

| Tag | Papel |
|---|---|
| `<!DOCTYPE html>` | Declara que esse documento é do tipo HTML |
| `<html>` | Tag **raiz** (root) — o "pai de todos", contém tudo o resto |
| `<head>` | Configuração da página — nada aqui aparece diretamente pro usuário |
| `<body>` | O corpo — tudo que a pessoa realmente vê na página |

### Dentro do `<head>`

| Elemento | Para que serve |
|---|---|
| `<meta charset="UTF-8">` | Define o conjunto de caracteres, evitando problemas com acentuação |
| `<meta name="viewport" ...>` | Deixa o site responsivo/portável para dispositivos móveis |
| `<title>` | Título do documento — aparece na aba do navegador |

### O atributo `lang` no `<html>`

```html
<html lang="pt-BR">
```

Define a linguagem do documento (aqui, português do Brasil) para o navegador e para ferramentas de acessibilidade/tradução entenderem melhor o conteúdo.

## Atalho de editor: Emmet

Em editores como VS Code, digitar `!` e apertar Enter gera automaticamente todo esse esqueleto padrão (Emmet). Não é necessário memorizar e digitar tudo isso na mão toda vez.

---

## Pontos-chave

- [ ] `<!DOCTYPE html>` sempre no topo do arquivo
- [ ] `<html>` é a tag raiz, com `lang` definindo o idioma
- [ ] `<head>`: configuração (não visível) — `meta charset`, `meta viewport`, `title`
- [ ] `<body>`: todo o conteúdo visível da página
- [ ] Editores com Emmet geram esse esqueleto com `!` + Enter

---

## Navegação

- Anterior: [[Imagens]] (Módulo 3)
- Próxima: [[Desenhando uma página web]]
- Índice do módulo: [[Módulo 4 - Elementos Estruturais]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Títulos e parágrafos]]

---

> [!note]- Transcrição da aula
> **[00:00]** Bom, aqui a gente vai aprender qual que é a estrutura fundamental de um HTML. Nós precisamos colocar ele de uma maneira que não fique soltas as tags e ele tem um local correto de você colocar várias coisas. Vamos entender.
>
> **[00:14]** Primeiro, quando você vai começar um HTML, você começa com essa tag aqui chamada doctype. Doctype com a sequência escrito ali HTML. Aqui você está definindo que esse documento que você vai criar, ele é do tipo HTML. Aqui você tem uma tag principal, a tag root ou raiz — Root, tag raiz, a tag principal, essa tag HTML e aqui dentro vem dois filhos importantes dentro dela, que é o head e o body. E a gente pode entender head como cabeça, body como corpo.
>
> **[00:46]** Tudo que eu colocar no head serve para eu configurar a minha página. Então por padrão a gente vai colocar aqui um title e esse title aqui onde está o index.html, você está vendo, nesse carinha aqui você vai ver o título sendo colocado ali. Aprendendo HTML, por exemplo. Então ele mudou aqui para Aprendendo HTML. Quando você colocar isso em outros lugares a gente vai observar, mas isso aqui na abinha do seu navegador ali geralmente é o title que a pessoa colocou ali. Isso aqui é fundamental você ter na estrutura, no corpo estrutural inicial do seu HTML.
>
> **[01:20]** Outra coisa fundamental para a gente ter aqui é o meta e nesse caso essa meta que a gente vai colocar aqui é o charset UTF-8, ou seja, é uma tag meta, ela fecha em si mesma. Eu tenho um atributo charset, que é um conjunto de caracteres, e do tipo UTF-8, é um tipo específico para que eu possa colocar aqui, por exemplo, acentuações especiais no meu site e não ter problemas, tá bom, de formatação. Isso aqui é fundamental para a gente ter como estrutura de configuração do nosso head. Existe uma outra tag que eu já vou mostrar para você, que a gente coloca aqui no head também.
>
> **[02:01]** E aqui no body, finalmente, vem tudo que a gente quer colocar para que a pessoa veja nessa parte onde está em branco agora. Então se eu tivesse um título aqui da minha página, se eu tivesse os parágrafos da minha página, geralmente o HTML você estaria construindo ele com todas essas tags aqui, sendo essa tag principal, tag raiz, o pai de todos, a primeira sendo apenas a instrução dizendo que esse documento é do tipo HTML, a tag head que vai ser a configuração do próprio documento, isso aqui não aparece para o usuário, porém as configurações que você coloca aqui, elas poderão aparecer na abinha, elas poderão fazer com que mexa com outras coisas do documento que a gente vai entender, e o body que é o corpo, tudo que você colocar aqui dentro, aí sim a pessoa acaba vendo ali.
>
> **[02:49]** Agora vem uma grande dica, para você não precisar ficar memorizando isso ou criando isso do zero todas as vezes, dependendo do seu editor de código, seja esse ou Visual Studio Code, se você colocar uma exclamação e você pode dar um enter, ele já vem por padrão as coisas — o body já está aqui pronto para você escrever as coisas, o head já tem padrões ali que a gente vai entender, e o HTML ele colocou aqui um atributo lang, que é a linguagem, geralmente você vai colocar aqui PT-BR, que é a linguagem do português Brasil, beleza?
>
> **[03:23]** Essa linguagem aqui vai definir qual é a linguagem do seu documento para a web, para o seu navegador, ele vai entender melhor dessa forma. Conjunto de caracteres UTF-8, simplesmente para ele entender quais são os caracteres especiais que você vai acabar usando, essa tag aqui, nem sempre você vai precisar colocar, mas antigamente tinha um navegador chamado Internet Explorer, e aqui é simplesmente para fazer uma compatibilidade dos navegadores antigos para eles se comportarem mais ou menos como os modernos, isso hoje não precisa, a maioria das pessoas não usa mais Internet Explorer, tudo bem?
>
> **[03:56]** Essa segunda aqui, super importante, para que você possa fazer com que o seu site tenha portabilidade na questão de, se você está usando um dispositivo móvel, ele se adapta melhor ao dispositivo móvel, tudo bem? São um conjunto de regras, a gente pode ver isso em outro momento, aqui é o título que você viu mudando aqui, é o título do seu documento, geralmente o nome da sua página, se é o seu blog, se é alguma outra coisa, você vai acabar colocando aqui, vamos supor que seja o blog da Rocketseat, você acabaria colocando aqui, ou se é um título de um post específico, tudo sobre HTML Rocketseat, você ia estar mudando aqui, isso com o tempo você vai aprendendo melhor. E aqui no corpo, finalmente, você coloca tudo de HTML, das tags HTML, para que a pessoa possa enxergar aqui, a página sendo montada, bacana?
