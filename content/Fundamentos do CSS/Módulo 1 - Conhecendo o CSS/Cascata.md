---
title: "Cascata"
curso: Rocketseat
modulo: "Módulo 1 - Conhecendo o CSS"
tags:
  - rocketseat
  - css
  - fundamentos
---

# Cascata

> [!abstract] Ideia central
> A cascata segue uma **hierarquia por ordem de definição**: quando duas regras concorrem pelo mesmo elemento, o navegador aplica a que foi escrita **por último** no arquivo CSS.

---

## A regra: o último vence

```css
p {
  color: violet;
}

p {
  color: blue;
}
```

```html
<p>Um texto qualquer</p>
```

Esse `<p>` fica **azul**, não violeta — mesmo as duas regras usando o mesmo seletor (`p`), a que aparece depois no arquivo é a que prevalece.

> [!warning] O editor avisa, mas funciona mesmo assim
> Repetir o mesmo seletor costuma disparar um aviso no editor de código. Mesmo assim, o CSS aplica normalmente a última regra — o aviso é só um alerta, não um erro. Em documentos grandes, com muitas classes, IDs e seletores espalhados, é fácil ter regras repetidas sem perceber, e é sempre a última na ordem do arquivo que vale.

## Misturando tipos de seletor

```css
p {
  color: blue;
}

.green {
  color: green;
}
```

```html
<p class="green">Um texto qualquer</p>
```

Aqui o texto fica **verde**: a regra `.green` (seletor de classe, ver [[Class]]) vem depois da regra `p` (seletor de tag) e por isso é a que se aplica.

> [!note] Isso ainda não é a história completa
> Além da ordem, o **tipo** de seletor também importa: um seletor de classe "pesa" mais que um seletor de tag, independente da ordem — isso é [[Especificidade]], o assunto da próxima aula. Por enquanto, a regra prática é: **entre seletores de mesmo peso, a última definição vence**.

---

## Pontos-chave

- [ ] Cascata = hierarquia por ordem de definição no arquivo CSS
- [ ] Entre regras equivalentes, a **última** declarada é a que vale
- [ ] O editor avisa sobre seletor repetido, mas isso não impede o CSS de funcionar
- [ ] Documentos grandes tornam fácil ter regras conflitantes sem perceber — a ordem sempre decide
- [ ] Tipo de seletor (classe, id, tag) também influencia prioridade — assunto de uma aula futura

---

## Navegação

- Anterior: [[Anatomia de uma declaração CSS]]
- Índice do módulo: [[Módulo 1 - Conhecendo o CSS]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[O que é CSS]], [[Class]]

---

> [!note]- Transcrição da aula
> **[00:00]** Vamos entender mais uma característica da cascata, a mais importante do CSS, uma das mais importantes, é a hierarquia de regras aplicadas. A cascata vai seguir uma hierarquia interessante.
>
> **[00:12]** Eu tendo aqui um p e um texto, eu posso pegar o p, através do seletor de tag p, aqui dentro eu poderia colocar uma cor para esse texto, como uma cor, vamos colocar aqui violeta, por exemplo. Está ali a cor violeta. Se eu coloco uma segunda cor aqui abaixo dessa e colocar ele blue, ele vai levar em consideração a última que eu coloquei.
>
> **[00:35]** Agora no CSS, quando a gente escreve dessa forma ele já avisa, ele coloca o editor de código e já avisa, você está repetindo ali e tal, mas o que acontece muitas vezes é que a gente tem documentos grandes, longos, muitas coisas, muito CSS, muitas classes, muitos seletores, muitos IDs, que a gente vai tudo aprendendo isso, e o que vai acontecer?
>
> **[00:56]** Em algum outro momento, eu poderia ter aqui, por exemplo, nesse p uma classe, e aqui eu coloco green, e em algum momento eu vou ter aqui essa classe green sendo aplicada, aqui é um seletor de classe, a gente vai ver na hora de seletores, é outro momento, mas aqui eu coloco a cor green, a cor verde.
>
> **[01:14]** O que é que vai acontecer agora? Ele vai sempre levar em consideração, essa é a ideia da cascata, o último elemento aqui, na hierarquia das regras, aquele que vier depois. Então ele vai levar em consideração esse elemento aqui, o green, que é o que está vindo depois. Bacana? É sempre observar dessa forma, se eu tenho dois seletores iguais, p e p, ele vai levar em consideração o último, que foi colocado ali na hierarquia de linhas.
