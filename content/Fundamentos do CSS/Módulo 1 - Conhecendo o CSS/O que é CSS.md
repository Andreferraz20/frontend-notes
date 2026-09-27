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
