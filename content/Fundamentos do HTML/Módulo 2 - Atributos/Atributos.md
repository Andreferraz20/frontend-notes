---
title: "Atributos"
curso: "Fundamentos do HTML"
modulo: "Módulo 2 - Atributos"
tags:
  - rocketseat
  - html
  - atributos
---

# Atributos

> [!abstract] Ideia central
> Atributos são **informações extras ou configurações** de uma tag: `nome="valor"`, separado da tag por espaço. Sempre use **aspas duplas** e nunca omita as aspas — economizar aqui gera bugs difíceis de enxergar.

---

## Sintaxe

```html
<img src="foto.jpg" alt="Uma foto qualquer">
```

| Parte | Exemplo | O que é |
|---|---|---|
| Nome do atributo | `src` | O que está sendo configurado |
| Sinal de igual | `=` | Liga nome e valor |
| Valor (entre aspas) | `"foto.jpg"` | O conteúdo específico daquele atributo |

O atributo fica separado do nome da tag por um **espaço**, nunca colado.

## Por que sempre usar aspas duplas

```html
<!-- ❌ possível, mas nunca faça isso -->
<a href=https://site.com>link</a>

<!-- ❌ aspas simples: arriscado com apóstrofos -->
<a title='is not'>link</a>
<!-- o contraído "isn't" tem uma aspa simples no meio e quebra o atributo -->

<!-- ✅ sempre assim -->
<a href="https://site.com" title="is not">link</a>
```

Vários navegadores até aceitam um valor sem aspas, mas isso é frágil: se depois você adicionar outro atributo colado, o navegador pode entender tudo como parte do mesmo valor e quebrar a tag. Aspas simples têm o mesmo tipo de risco — qualquer apóstrofo dentro do valor (como em `isn't`) fecha o atributo antes da hora.

**Regra prática: sempre aspas duplas**, para manter consistência e evitar esse tipo de erro.

## Nem tudo se decora de uma vez

Assim como tags, atributos são um estudo **constante e gradual**:

- Não existe um único lugar onde você aprende todos de uma vez
- Vai ter atributo específico de uma tag (como `src` e `alt` do `<img>`)
- Vai ter [[Atributos globais|atributo global]], que serve para qualquer tag
- É normal aprender por demanda, conforme a necessidade aparece

---

## Pontos-chave

- [ ] Sintaxe: `nome="valor"`, separado da tag por espaço
- [ ] Sempre aspas duplas — nunca omita, nunca use aspas simples
- [ ] Existem atributos específicos de tag e [[Atributos globais|atributos globais]]
- [ ] Aprender atributos é um processo contínuo, não algo pra decorar de uma vez

---

## Navegação

- Anterior: [[Caracteres reservados]] (Módulo 1)
- Próxima: [[Atributos booleanos]]
- Índice do módulo: [[Módulo 2 - Atributos]]
- Curso: [[Fundamentos do HTML]]

---

> [!note]- Transcrição da aula
> **[00:00]** Vamos falar sobre atributos HTML. São informações extras ou configurações para uma tag. Então, imaginam a seguinte tag, eu vou colocar img e dar um enter. Aqui esse editor de código, automaticamente ele colocou dois atributos. Ele separou o atributo por um espaço. E você percebe que o atributo não está colado no nome da tag. Ele tem um espaço também. Nós temos o nome do atributo, um sinal de igual e as aspas duplas. Aqui dentro eu coloco um conteúdo que é específico de cada atributo. Nesse caso a gente tem uma tag img e a gente tem dois atributos que nós vamos estudar melhor sobre eles. Mas eles vão configurar a tag img. Aqui eu vou dizer em que lugar do mundo está a imagem e eu colocaria aqui. Aqui eu vou dar um texto alternativo para essa imagem, explicando o que ela é, etc. Então perceba, temos dois atributos aqui e fechou, estamos configurando uma tag img.
>
> **[00:53]** Outra coisa para você saber, nós podemos usar, olha só, eu vou colocar aqui uma tag a e dar um enter. Ele automaticamente colocou esse href. O interessante é que eu poderia aqui, nesse link, eu poderia simplesmente colocar o conteúdo sem aspas. É possível? Sim! Muitos navegadores vão interpretar. É recomendado? Não! Jamais! Não faça assim! Por que? Se por acaso você quiser depois colocar um outro atributo aqui. E de repente ele poderá, dependendo do navegador, entender que tudo isso aqui é o valor do atributo. E aí estragou o seu link. Então, apesar de ser possível, não omita tags. Você poderia estar usando também aspas duplas, não omita aspas.
>
> **[01:38]** Você poderia usar aspas simples? Sim! Poderia usar aspas simples. Mas é recomendado? Eu também não recomendo. Por que? Nesse title, por exemplo, você poderia estar colocando aqui nesse atributo, alguma coisa como "is not" do inglês. E fazendo o contraption dele, "isn't". Pronto! Você acabou de estragar a sua tag. Ou a sua configuração de atributo. E sua tag também. Por que você estragou isso? Inclusive você percebe pelas cores, que o seu editor geralmente ele vai tentar mostrar pra você cores. Então, o que aconteceu aqui? Eu fechei a tag antes do tempo, porque eu falei pro meu atributo começar com uma aspa simples. E aqui no meio ele encontrou outra aspa simples e estragou. Por isso, minha recomendação segue sempre o padrão de colocar aspas duplas. Assim você mantém a sua tag consistente na maneira de construir. Assim você mantém os seus atributos sem erros. E tags também. E fica muito mais simples de você estudar isso.
>
> **[02:40]** Agora, outra coisa de você entender que é muito importante. Estudo de atributos é um estudo constante. Assim como tags no HTML, assim como qualquer coisa na programação. Não existe um único curso, um único lugar que você vai aprender todas. E você também não vai aprender e memorizar todas. Não é assim que funciona. Você vai estudando a tag, vai entendendo o atributo dela. Vai ter atributo específico de tag. Vai ter atributos globais, ou seja, que servem para todas as tags. E está tudo bem. É importante você só entender que nesse estudo grandioso de atributos, ou de tags, ou de programação, você constantemente está aprendendo coisas novas. E dificilmente você vai decorar tudo. Dificilmente você vai encontrar uma única fonte com todas as informações. É claro, talvez na documentação oficial do HTML. Mas, assim, são coisas que você vai fazendo gradativamente.
