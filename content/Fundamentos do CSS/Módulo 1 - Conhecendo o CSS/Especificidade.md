---
title: "Especificidade"
curso: Rocketseat
modulo: "Módulo 1 - Conhecendo o CSS"
tags:
  - rocketseat
  - css
  - fundamentos
---

# Especificidade

> [!abstract] Ideia central
> Cada tipo de seletor tem um **peso**. Quando duas regras miram o mesmo elemento, não é só a [[Cascata|ordem no arquivo]] que decide — vence a regra com **maior especificidade** (maior peso), não importa qual veio primeiro ou depois.

---

## O peso de cada seletor

| Seletor | Peso | Exemplo |
|---|---|---|
| Tag / elemento | 1 (`001`) | `p` |
| Classe | 10 (`010`) | `.green` |
| ID | 100 (`100`) | `#text` |

## O exemplo, passo a passo

```html
<p id="text" class="green">Um texto qualquer</p>
```

```css
p {
  color: red; /* especificidade 001 — peso 1, seletor de tag */
}

.green {
  color: green; /* especificidade 010 — peso 10, seletor de classe */
}

#text {
  color: blue; /* especificidade 100 — peso 100, seletor de id */
}
```

Mesmo `#text` sendo a **última** regra do arquivo, é ela quem vence — não por estar por último (isso seria [[Cascata]]), mas por ter o maior peso (100) entre as três.

## Combinando seletores: os pesos se somam

```css
p#text.green {
  color: black; /* especificidade 111 = 100 (id) + 10 (classe) + 1 (tag) */
}
```

Essa regra combina os três seletores no mesmo elemento — `p`, `#text` e `.green` ao mesmo tempo — e por isso soma os três pesos: `100 + 10 + 1 = 111`. É a mais específica de todas, então o texto fica **preto**, sobrepondo até a regra do `#text` sozinho.

## Quando a cascata volta a decidir

Se duas regras tiverem **a mesma especificidade** (ex: dois seletores de tag `p`), aí sim vale a regra da [[Cascata]]: a última declarada no arquivo vence. Especificidade só entra em jogo quando os pesos são diferentes — e, nesse caso, ela sempre tem prioridade sobre a ordem.

> [!tip] Por que isso importa na prática
> Num CSS grande, é fácil se perguntar "por que essa cor não está sendo aplicada?" mesmo parecendo certo. Quase sempre a resposta é: existe outro seletor, em outro lugar do arquivo, com mais peso. Entender especificidade evita ficar procurando o bug no lugar errado.

---

## Pontos-chave

- [ ] Cada seletor tem um peso: tag = 1, classe = 10, id = 100
- [ ] Entre pesos diferentes, o **mais específico** vence — não importa a ordem
- [ ] Seletores combinados (`p#text.green`) somam os pesos de cada parte
- [ ] Só quando os pesos empatam é que a [[Cascata|ordem no arquivo]] decide

---

## Navegação

- Anterior: [[Cascata]]
- Próxima: [[Mais específico que especificidade]]
- Índice do módulo: [[Módulo 1 - Conhecendo o CSS]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Id]], [[Class]]
