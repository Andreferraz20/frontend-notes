---
title: "Mais específico que especificidade"
curso: Rocketseat
modulo: "Módulo 1 - Conhecendo o CSS"
tags:
  - rocketseat
  - css
  - fundamentos
---

# Mais específico que especificidade

> [!abstract] Ideia central
> Duas coisas pesam mais do que qualquer combinação de tag, classe e id: o atributo **`style`** direto na tag, e o modificador **`!important`**. Os dois existem, mas a recomendação é **não usar nenhum dos dois**.

---

## `style` inline vence qualquer seletor

```html
<h1 id="title" style="font-size: 32px;">Meu título</h1>
```

```css
#title {
  font-size: 12px;
}
```

O `<h1>` fica com **32px**, não 12px — mesmo `#title` sendo um seletor de ID (peso 100, o mais pesado entre os seletores, ver [[Especificidade]]). O `style` escrito direto na tag (ver [[Style]]) é mais pesado do que qualquer seletor, não importa quão específico ele seja.

## `!important` vence tudo, inclusive o `style` inline

```css
p {
  color: red !important;
}

#texto-especifico {
  color: blue;
}
```

Mesmo `#texto-especifico` sendo um ID, o texto fica **vermelho**: `!important` é o mecanismo mais pesado que existe em CSS, sobrepõe qualquer especificidade e até o `style` inline.

## Por que evitar os dois

| Mecanismo | Problema |
|---|---|
| `style` inline | Difícil de sobrescrever depois (ver [[Style]]); espalha estilo fora do arquivo `.css` |
| `!important` | Se você esquecer que usou em algum lugar de um projeto grande, vai tentar id, classe, tudo, e nada vai funcionar — até lembrar (ou achar) onde ficou o `!important` esquecido |

> [!warning] A dica mais importante desta aula
> **Não use `!important`.** E, segunda dica: **não use `style` inline.** Deixe a especificidade trabalhar do jeito natural dela — só aumente o peso de um seletor (com id, combinação de seletores, etc.) conforme a real necessidade.

Existe um momento em que pode ser realmente necessário usar um dos dois — e não tem problema, contanto que seja uma escolha consciente, não a saída fácil por preguiça de resolver a especificidade certinho.

---

## Pontos-chave

- [ ] `style` inline pesa mais que qualquer seletor (tag, classe, id)
- [ ] `!important` pesa mais que tudo, inclusive o `style` inline
- [ ] Os dois são usados como último recurso, não como padrão
- [ ] `!important` esquecido é uma das causas mais frustrantes de "por que meu CSS não funciona"

---

## Navegação

- Anterior: [[Especificidade]]
- Próxima: [[Valores e unidades de medida]]
- Índice do módulo: [[Módulo 1 - Conhecendo o CSS]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Style]], [[Especificidade]]

---

> [!note]- Transcrição da aula
> **[00:00]** Pessoal, existem duas coisas aqui no CSS que torna ele ainda mais específico do que o id, class, tag, etc. Que é o que? Você pegar uma tag, uma div, eu vou pegar aqui, como um título, por exemplo, e você colocar aqui um style direto nele.
>
> **[00:17]** Quando você faz isso, por exemplo, font-size 32px, quando você faz isso aqui, não importa se você tem o mais forte aqui, o mais específico, que seria o title. Que seria o id title. Se você vem aqui, pega o id title e coloca um font-size de 12px, ele não vai pegar. Por quê? Você colocar o atributo style do HTML direto na tag é muito mais pesado.
>
> **[00:47]** Agora, o mais pesado de todos, o que vai ser mais específico de todos, quando eu falo peso eu quero dizer aquele que tem mais importância. O que vai ter mais importância é você colocar o `!important`, muito aqui, presta atenção, não use isso. Quando você usar isso, isso aqui vai dar um problema muito grande.
>
> **[01:01]** Important. Aí ele vai pegar esse, tudo bem? Só que, se você esquecer o important em vários documentos CSS que você estiver trabalhando depois, cara, isso vai te deixar com a cabeça muito atribulada, muito conturbada. Você vai tentar todo tipo de id, de classe, de tudo, de especificidade, vai tentar colocar o style, nada vai funcionar. Até você lembrar que você esqueceu o important em algum lugar.
>
> **[01:32]** Então, minha dica primordial, não use important. Segunda dica, não use style. Você vai ver muito disso, você vai ver algumas aplicações usando direto assim na tag. Não use. Deixe a especificidade para trabalhar da maneira de especificidade em si. Somente coloque mais especificidade conforme a necessidade.
>
> **[01:50]** Quem sabe vai chegar um momento que você vai precisar usar o important mesmo e não tem conversa. Pelo menos você já sabe que ele existe, tá bom? Quem sabe você vai precisar usar o style mesmo e não tem jeito, mas você já sabe que ele existe. Mas tenta-se ter lá o id, a classe, etc. Bacana?
