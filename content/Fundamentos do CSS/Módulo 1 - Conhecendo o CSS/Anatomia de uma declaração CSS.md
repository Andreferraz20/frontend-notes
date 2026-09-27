---
title: "Anatomia de uma declaração CSS"
curso: Rocketseat
modulo: "Módulo 1 - Conhecendo o CSS"
tags:
  - rocketseat
  - css
  - fundamentos
---

# Anatomia de uma declaração CSS

> [!abstract] Ideia central
> Uma declaração CSS é composta por um **seletor** (o que vai ser estilizado) e um bloco entre chaves `{ }` com um ou mais pares **propriedade: valor**. O seletor é quem conecta esse bloco de estilos aos elementos do HTML.

---

## As partes

```css
h1 {
  color: blue;
  font-size: 60px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
```

| Parte | Exemplo | O que é |
|---|---|---|
| Seletor | `h1` | Diz **quem** vai receber o estilo — aqui, todo `<h1>` da página |
| `{ }` | `{ ... }` | Cria o **contexto**: tudo dentro pertence a esse seletor |
| Propriedade | `color`, `font-size` | **O que** está sendo mudado (vem antes do `:`) |
| Valor | `blue`, `60px` | **Como** deve ficar (vem depois do `:`) |
| `;` | — | Fecha cada declaração, separando uma propriedade da próxima |

## Dois tipos de valor comuns

- **Valor nomeado** (*named*): uma palavra-chave, ex: `color: blue;`, `text-transform: uppercase;`
- **Valor numérico**: um número com unidade, ex: `font-size: 60px;`, `letter-spacing: 2px;`

Cada propriedade aceita determinados tipos/valores específicos — isso vai sendo aprendido aos poucos, propriedade por propriedade.

## O que isso muda no HTML

```html
<h1>Meu título</h1>
```

Sem CSS, esse `<h1>` usa o estilo padrão do navegador. Com a declaração acima, **todo** `<h1>` que existir na página passa a receber: cor azul, fonte de 60px, espaçamento entre letras de 2px e texto em caixa alta — tudo de uma vez, só por causa dessa declaração.

Esse `h1` usado como seletor é um **seletor de tag/elemento**: ele se conecta a qualquer elemento daquele tipo que existir no HTML (o assunto de seletores em detalhe vem em aulas futuras).

> [!tip] Ajuda do editor
> Passar o mouse sobre uma propriedade mostra a documentação dela direto do [MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS). Digitar o valor ou usar `Ctrl+Espaço` também traz sugestões do editor — nem sempre certeiras, mas ajudam a explorar o que é aceito ali.

---

## Pontos-chave

- [ ] Declaração = seletor + `{ propriedade: valor; ... }`
- [ ] Seletor diz **quem** recebe o estilo; propriedade diz **o quê**; valor diz **como**
- [ ] Cada declaração termina em `;`, permitindo empilhar várias propriedades no mesmo bloco
- [ ] Valores podem ser nomeados (`blue`, `uppercase`) ou numéricos com unidade (`60px`, `2px`)
- [ ] Um seletor de tag (`h1`) afeta **todos** os elementos daquele tipo na página

---

## Navegação

- Anterior: [[Comentários em CSS]]
- Índice do módulo: [[Módulo 1 - Conhecendo o CSS]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[O que é CSS]], [[Anatomia das Tags]]

---

> [!note]- Transcrição da aula
> **[00:00]** Bom, vamos entender a anatomia de uma escrita CSS, como que ela se conecta ali com o HTML. Bem tranquilo pessoal, a gente vai trabalhar aqui sobre declarações — declaração é todo esse conjunto aqui que eu vou apresentar pra você, que é um seletor, o parzinho de chaves, ok, aqui a gente tem um contexto, ele cria aqui dentro pra gente um contexto, temos as propriedades, aqui são as propriedades, antes do ponto e vírgula, e temos o valor das propriedades.
>
> **[00:29]** Aqui a gente tem um valor em formato de nome, aqui a gente tem um valor em formato de pixels, um valor numérico em formato de pixel, um valor numérico comum, aqui é um valor de nome, *named* que a gente fala. Não se preocupe com esses detalhes, só entenda a anatomia, você só precisa entender como que isso daqui impacta ali no HTML.
>
> **[00:53]** Então se eu tivesse aqui no HTML uma tag h1, meu título, sem isso daqui, ela estaria com o padrão da web do título, tá bom, agora eu estou adicionando a esse padrão coisas que eu quero: uma cor azul, um tamanho de fonte de 60 pixels — você viu que aumentou — um espaçamento de letras, letter spacing de 2, uma transformação de texto, text transform, de uppercase, tudo em caixa alta.
>
> **[01:26]** Você percebe que a gente não coloca aqui espaços, sempre serão separadas por ponto e vírgula as declarações das propriedades, e aqui a gente precisa estudar quais são os valores, e cada uma dessas propriedades vai ter determinados valores, e a gente vai estudando aos poucos.
>
> **[01:40]** Pra ajudar a gente a estudar, quando você descansa o mouse aqui em cima, você tem a referência dessa propriedade específica ali no MDN, que é uma boa documentação, que eu indico pra você estudar se você quiser, e aqui ele mostra um pouquinho, por exemplo, nessa sintaxe, o que ele aceitaria. Além disso, quando você começa a escrever alguma coisa, por exemplo, uppercase, ou se você der um Ctrl+Espaço, ele também vai tentar — o editor de código vai tentar te dar algumas sugestões do que você poderia usar ali, nem todas elas funcionam, mas é uma sugestão do que ele entende que talvez funcionaria ali.
>
> **[02:12]** Então, a grande sacada de uma anatomia é eu entender que isso aqui é uma declaração, e através de várias declarações eu vou mudando o comportamento dos meus elementos. Aqui a gente tá usando um seletor de tag — a gente depois vai ver melhor os seletores — mas esse seletor de elemento, esse seletor de tag, ele é capaz de se conectar ao h1 que ele encontrar, e se ele encontrar muitos h1s na sua página, todos eles serão refletidos só por causa dessa pequena declaração.
>
> **[02:41]** Isso aqui, estou através desse seletor dizendo: todo o h1 que ele encontrar no HTML, você vai aplicar tudo que há nesse contexto aqui, entre esse par de chaves — essa propriedade de cor, azul, de tamanho de fonte, de espaçamento de letras e transformação do texto. Claro, a gente vai tendo muitas outras, a gente vai colocando aqui, tudo nesse grupo, tudo que quisermos colocar pra poder fazer o texto ficar do jeito que a gente queria, nesse caso de texto, mas isso aqui vai servir pra tudo em relação a layout, em relação a desenho, a coisa bonita do seu HTML. Então o CSS é a parte bonita, e ele vai servir e vai funcionar dessa forma a anatomia, bacana?
