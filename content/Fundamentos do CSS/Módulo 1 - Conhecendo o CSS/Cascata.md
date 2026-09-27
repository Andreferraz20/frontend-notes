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
