---
title: "Valores e unidades de medida"
curso: Rocketseat
modulo: "Módulo 1 - Conhecendo o CSS"
tags:
  - rocketseat
  - css
  - fundamentos
---

# Valores e unidades de medida

> [!abstract] Ideia central
> Todo valor de uma propriedade CSS tem um **tipo de dado** (cor, comprimento, número, palavra-chave...). Ninguém decora todos — a habilidade real é saber **pesquisar**: usar o hover do editor e a seção "Syntax" da documentação do [MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS) pra descobrir o que cada propriedade aceita.

---

## Cada valor tem um tipo

```css
h1 {
  color: blue;
  font-size: 60px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
```

| Propriedade | Valor | Tipo de dado |
|---|---|---|
| `color` | `blue` | **color** (cor) |
| `font-size` | `60px` | **length** (comprimento: número + unidade) |
| `letter-spacing` | `2px` | **number** (numérico) |
| `text-transform` | `uppercase` | **keyword** (palavra-chave específica dessa propriedade) |

Uma **keyword** costuma ser exclusiva daquela propriedade — `uppercase`, `lowercase` e `capitalize` só fazem sentido em `text-transform`, por exemplo, diferente de valores como cor ou comprimento, que aparecem em várias propriedades diferentes.

## Como pesquisar (aprendendo a pescar)

Ninguém memoriza todas as propriedades e todos os valores do CSS — nem depois de anos de experiência. O caminho é sempre o mesmo:

1. **Hover no editor**: passar o mouse sobre a propriedade mostra a sintaxe aceita ali mesmo, direto no editor de código.
2. **MDN**: pesquisar `mdn <nome-da-propriedade>` (ex: `mdn text-transform`) e abrir a página oficial.
3. Ir direto na seção **"Syntax"** da página — é ali que aparecem os valores aceitos.

### Exemplo: `text-transform`

Na seção de sintaxe do MDN, `text-transform` aceita um valor do tipo **keyword**: `none` (valor inicial), `capitalize`, `uppercase`, `lowercase`.

```css
h1 {
  text-transform: capitalize; /* ou uppercase, ou lowercase, ou none */
}
```

### Exemplo: `font-size`

Na sintaxe do MDN, `font-size` aceita `<absolute-size>`, `<relative-size>`, `<length>` ou `<percentage>` — o `60px` do exemplo é um **length**: um número seguido de uma unidade de medida.

### Exemplo: cor

Uma propriedade de cor (como `color`) aceita, entre outros, **keyword** (nome de cor, ex: `blue`), **hex color** (ex: `#202024`, como usado em [[O que é CSS]]), e outros formatos — cada um com sua própria página de detalhe no MDN.

## Tipos de dado comuns

| Tipo | O que é | Exemplo |
|---|---|---|
| `color` | Uma cor | `blue`, `#202024` |
| `length` | Número + unidade de medida | `60px`, `2px` |
| `number` | Um número puro | `2`, `1.5` |
| `percentage` | Porcentagem | `50%` |
| `keyword` | Palavra-chave específica da propriedade | `uppercase`, `none` |

> [!tip] A documentação é sua parceira, não uma muleta
> Voltar à documentação mil vezes ao longo da carreira é **normal**, não é sinal de que você "não sabe CSS". O objetivo desta aula não é decorar tipos de dado, é saber o caminho: hover no editor → MDN → seção "Syntax". Esse caminho serve pra qualquer propriedade nova que aparecer daqui pra frente.

---

## Pontos-chave

- [ ] Todo valor tem um tipo de dado: color, length, number, percentage, keyword, entre outros
- [ ] Keyword costuma ser exclusiva da propriedade (ex: `uppercase` só em `text-transform`)
- [ ] Pra descobrir o que uma propriedade aceita: hover no editor, ou MDN → seção "Syntax"
- [ ] Não existe expectativa de memorizar tudo — pesquisar constantemente é parte do trabalho

---

## Navegação

- Anterior: [[Mais específico que especificidade]]
- Índice do módulo: [[Módulo 1 - Conhecendo o CSS]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Anatomia de uma declaração CSS]], [[O que é CSS]]

---

> [!note]- Transcrição da aula
> **[00:00]** Essa aula que é super importante pessoal, vamos prestar atenção, que a gente vai falar sobre valores e unidades de medidas e vamos entender o que é isso, né. Você sabe que cada propriedade ele vai ter um valor — aqui eu deixei em inglês já pra te ajudar, property e value.
>
> **[00:15]** Vou dar um exemplo de CSS aqui, aqui a gente tem uma cor blue e ele tem nesse valor aqui ó, esse valor ele tem um tipo de dado chamado color. Font-size, esse tipo de dado é o chamado length. Letter-spacing, esse tipo de dado que está aqui nesse momento é o number. Text-transform, qual tipo de dado será aqui? E aqui está a grande sacadinha, tá, a gente vai entender os tipos de dados com o passar do tempo, obviamente.
>
> **[00:46]** E uma coisa super importante: estou nessa área há muitos anos pessoal, estudo constante a fim de entender as propriedades e seus valores. O que essa mensagem quero deixar com você: eu não sei todas as propriedades e todos os valores. A gente sempre está aprendendo uma coisa nova, por isso agora vou te ensinar a pescar.
>
> **[01:00]** Por isso deixei essa interrogaçãozinha pra gente aprender junto como que a gente vai pescar, e obviamente vou ir te ajudando aos poucos, gradativamente nas aulas. Mas quando você vir alguma propriedade nova que tem alguma coisa aqui, e por acaso o professor aqui esqueceu de falar e mencionar o que é aquele determinado valor, você com essa aula vai conseguir ir atrás da informação.
>
> **[01:23]** Por exemplo, primeira coisa que você pode fazer é usar o próprio editor pra te ajudar. O editor, seja ele o VSCode ou esse daqui que você está usando, quando você descansar o mouse em cima, por exemplo, da propriedade, ele vai mostrar pra você qual que é a sintaxe — guarda esse nome que a gente já vai se aprofundar um pouquinho mais. Propriedade, aqui ele vai mostrar sintaxe.
>
> **[01:50]** Percebe o sinalzinho de maior aqui ó, e o sinalzinho de menor aqui, e um nome aqui dentro. Aqui a mesma coisa, vou colocar isso aqui agora, percebe, percebe aqui também ó — nesse caso a gente já vai entender o porquê, obviamente, mas nesse caso aqui, sinalzinho de maior, dá uma olhadinha nisso aqui ó, data type, guarda isso aqui na cabeça, eu já vou te explicar com mais riqueza de detalhe.
>
> **[02:11]** Então você vai abrir o Google, você vai colocar assim ó, MDN, e vai colocar aqui, por exemplo, text-transform, que é a propriedade que está ali. Você vai clicar text transform, entramos lá na propriedade. Legal, aqui você vai poder ler, vai poder olhar do jeito que você quiser, mas eu quero te mostrar como que nessa documentação, mesmo em inglês, você vai entender o que são, o tipo de dado que está ali.
>
> **[02:36]** Então aqui ele vai estar explicando um monte de coisa a respeito do text-transform, tá, nessa parte onde está a sintaxe, syntax. Nessa parte aqui ele fala dos valores que ele aceita. Então nesse caso, por exemplo, ele está falando que os valores é do tipo keyword, são palavras-chave específicas do text-transform, que provavelmente você não vai usar em outros lugares — pode ser que uma ou outra, por exemplo as globais, você use em outros lugares, mas essa daqui não, essa daqui você vai usar o capitalize, uppercase, lowercase, apenas quando você usar a propriedade text-transform.
>
> **[03:16]** Então aqui ele vem falando um pouquinho mais o que cada uma delas é. O que você precisou saber aqui, nesse caso, você precisou saber que ela tem esse tipo de dado, esse valor, ok, que o valor inicial dela é none, não tem nenhum, e que você pode aplicar alguns daqueles que foram mostrados ali. Aqui tem uma sintaxe formal, então none, capitalize, uppercase, lowercase, são opções que você vai poder usar ali, tudo bem.
>
> **[03:42]** Aí dando essa olhada por cima, não precisa entender tudo que está aqui, você já entendeu que tem algumas opções para colocar ali, então esse daqui seria do tipo keyword, que é palavra-chave, dependendo do que você está aplicando aqui, existe essa keyword e as outras, né. Eu queria entender um pouquinho mais as outras — se você quiser ver o que vai acontecer com esse h1, só pra gente, né, título, vamos ver o que vai acontecer com ele rapidamente.
>
> **[04:03]** Então nós temos a cor, que poderia mudar, nós temos o tamanho, length significa comprimento, ok, então aqui significa que vai mudar o tamanho dele. Número, número geral, sei lá, vou botar 7 aqui, e a palavra-chave, que ele falou que o normal é none, mas a gente poderia colocar uppercase, a gente poderia colocar capitalize e observar o que é que vai acontecer.
>
> **[04:39]** Agora, voltando à documentação, você aprendeu a font-size, você está aprendendo, por exemplo, agora, font-size, acabou de ver o font-size. Então o que que você vai fazer? Você vai no Google, vamos refazer isso daqui, no google.com, MDN, font-size, achou a documentação. Vem aqui, começou a observar, aqui, ele já tem aqui até falando o length, aqui eu já falei pra você do length.
>
> **[05:02]** Vai dar uma, na sua cabeça vai ficar alguma coisa assim, o que que seria isso, mas aqui no cantinho você já pode até cortar caminho e já procurar a sintaxe. E aqui ó, tem a maneira de absolute-size, e aqui eu quero que você entenda essa parte aqui — sempre você poderá encontrar ali, tá vendo esse sinalzinho assim, o nome do tipo de dado dentro dele, nem sempre tá, mas às vezes sim, ó.
>
> **[05:23]** Então existe o tipo de dado aqui, chamado absolute-size, e você pode usar um deles ali, existe o relative-size, você pode usar um deles ali, existe o length, que é o que a gente usou ali — então o length, ele vai ser um número seguido de uma unidade de medida. Existe o percentage, olha ali, existe o math value e o global.
>
> **[05:51]** E, Mike, agora que me assusto, né, agora, Mike, eu tô desesperado, eu preciso memorizar tudo isso daqui? Nunca, pessoal, não, jamais, esquece isso. Você precisa — por que que essa aula eu tô te ensinando a pescar? Você precisa saber o caminho que o Mike tá fazendo aqui, porque é o caminho que você vai fazer no dia a dia.
>
> **[06:11]** Você não vai memorizar isso, você vai voltar mil vezes, duas mil vezes nessa documentação, a fim de entender um pouquinho mais. Quiser experimentar, quiser colocar, tirar, ótimo, faça isso, vai te ajudar bastante. Mas você precisa entender que a sua parceira aqui é a sua documentação, sua documentação é a sua melhor amiga, tudo bem?
>
> **[06:30]** Você entendeu aqui comigo o que são valores e unidades de medidas colocadas nesses valores. Então os valores têm tipos, e a gente tá usando aqui unidades de medidas, units, ou temos palavras-chave, ou temos, nessa questão da cor, a gente poderia ter esse color named, que a gente fala, né. Mais uma vez, como que é isso? Eu já vou botar direto aqui, tá, vamos ver se aqui ele já, nessa pesquisa, ele já encontra pra gente — já encontrou.
>
> **[06:58]** Então, no valor da cor, a gente tem keyword, named color, hex color. Em tempo oportuno, a gente pode olhar um pouquinho melhor para cada uma delas, mas super importante você entender: existe esse valor do tipo color, que você pode se aprofundar um pouquinho mais, se você quiser dar um clique aqui, ele vai falar um pouquinho mais, vai se aprofundar.
>
> **[07:16]** Sem desespero, o melhor caminho que eu considero: você vai pegar o nome da propriedade, vai vir na parte de sintaxe, e vai ver quais são as opções que ele coloca aqui. Se alguma coisa vai ficar confusa, e obviamente vai ficar, aí você pode se aprofundar depois, o que seria esse tipo aqui, hex color, né. Eu vou colocar direto aqui, hex color, ele já mostrou ali — então esse tipo hex color, ele vai dar uma explicadinha a mais, o que é, vai dar alguns exemplos e tudo mais, e isso vai te ajudando, tá bem.
>
> **[07:57]** Bom, então foi uma aula onde eu vim te ensinar a pescar. Eu vim te mostrar que toda propriedade terá um valor, esse valor ele tem um tipo de dado específico, ok, ele pode ser cor, named color, length, que seria o comprimento, poderia ser porcentagem, poderia ser número, poderia ser palavra-chave daquela propriedade específica — não vai servir pra todas, eu não coloco capitalize aqui, por exemplo, cada uma delas vai permitir alguma coisa.
>
> **[08:16]** E lembra, lembra disso aqui: o estudo é constante, a fim de entender a propriedade e os seus valores. Vai passar muitos anos, e você não vai saber todas elas, e eu não quero que você memorize, senão você vai ficar doente, sério. Eu quero que você entenda como constantemente você vai abraçar a documentação, vai lá, vai tentar entender uma coisinha a mais, tá bom?
