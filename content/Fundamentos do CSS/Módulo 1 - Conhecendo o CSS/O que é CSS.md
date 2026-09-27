---
title: "O que é CSS"
curso: Rocketseat
modulo: "Módulo 1 - Conhecendo o CSS"
tags:
  - rocketseat
  - css
  - fundamentos
---

# O que é CSS

> [!abstract] Ideia central
> CSS (**Cascading Style Sheet**, folha de estilo em cascata) é o que dá estilo ao HTML. O nome vem do acúmulo: você escreve um estilo após o outro, empilhando, e vai modificando a página. A unidade básica de tudo é sempre a mesma dupla: **propriedade e valor**.

---

## Por que "cascata"

O acúmulo de propriedades e valores é o que sustenta o nome. Você tem um lugar onde escreve estilos e vai empilhando um após o outro, e é esse conjunto que modifica o HTML inteiro.

```css
body {
  background-color: #202024;
}
```

| Parte | O que é |
|---|---|
| `background-color` | A **propriedade**: o que você quer mudar |
| `#202024` | O **valor**: como você quer que fique |
| `;` | Fecha a declaração e permite empilhar a próxima |

O ponto e vírgula no fim é o que deixa você continuar empilhando:

```css
body {
  background-color: #202024;
  color: #ffffff;
  font-size: 16px;
}
```

---

## O que dá para fazer com CSS

- Modificar **cores**
- Modificar **posicionamentos**
- Criar **animações**

Conforme você estuda, vai aprendendo mais propriedades e mais valores. O mecanismo não muda: é sempre propriedade e valor.

---

## Onde o CSS mora

Em um arquivo com extensão **`.css`**, que define os estilos aplicados ao HTML.

> [!note] Quem usa
> Quem trabalha com front-end, e com web de forma geral, usa CSS o tempo todo.

---

## Pontos-chave

- [ ] CSS = **Cascading Style Sheet**, folha de estilo em cascata
- [ ] "Cascata" vem de empilhar um estilo após o outro
- [ ] A base de tudo é **propriedade + valor**, fechando com `;`
- [ ] Arquivos usam extensão `.css`
- [ ] Serve para cores, posicionamento e até animações

---

## Navegação

- Índice do módulo: [[Módulo 1 - Conhecendo o CSS]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[O que é HTML]]

---

> [!note]- Transcrição da aula
> **[00:00]** O que é CSS? CSS significa Cascading Style Sheet ou Folha de Estilo em Cascata.
>
> **[00:08]** Por que escolheram esse nome? Porque o acúmulo de uma propriedade e um valor, que são as coisas fundamentais que a gente estuda em CSS, eles servem para poder dar estilos para o HTML. Significa que você vai colocando um estilo após outro estilo após outro estilo.
>
> **[00:24]** Imagina um arquivo .css que é onde você vai colocar estilos. Você pode definir estilos colocando uma propriedade, nesse caso eu estou mostrando pra você a cor de fundo, e um valor, e ali eu termino com um ponto e vírgula.
>
> **[00:38]** Assim eu posso ir empilhando outros valores. Eu posso ir modificando todo o meu HTML por causa desse conjunto, dessa regrinha de cascata que a gente está falando. Então a ideia de ser criado esse nome, Folha de Estilo em Cascata, é porque eu tenho um lugar onde eu escrevo estilos e vou colocando e empilhando um após o outro, e assim modificando a minha página.
>
> **[01:05]** Existem outras regras fundamentais em CSS, mas essa primeira aula é pra gente entender o que é o CSS.
>
> **[01:12]** Aqui a gente entende que ele é um arquivo .css, ele vai definir os estilos para o HTML, modificando cores, modificando posicionamentos, até animações a gente consegue fazer. Eu trabalho sempre com uma propriedade e valor, é isso que eu preciso entender do CSS, conforme eu vou estudando eu vou aprendendo mais propriedade e mais valores, e assim eu posso fazer, todo mundo que trabalha com front-end, todo mundo que trabalha na web, nessa parte de front-end, provavelmente é o tipo de pessoa que vai usar bastante o CSS.
