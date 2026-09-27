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

---

> [!note]- Transcrição da aula
> **[00:00]** Vamos falar sobre a especificidade no CSS. Ela é muito importante para a gente entender que cada seletor que nós utilizarmos, ele vai ter um peso, e a soma desses pesos faz a declaração específica ser aplicada.
>
> **[00:13]** O que é isso? Vamos lá. Um elemento, um seletor de tag, que é o pesinho normal, por exemplo. Aqui eu tenho um P no HTML, aqui eu tenho uma classe aplicada, eu também vou colocar um ID aqui, text.
>
> **[00:24]** Muito bem, aqui eu vou ter três tipos de aplicações de CSS, nós vamos ter o elemento, e ele tem o peso 1, color, vamos colocar aqui green — não, vamos colocar color red, acho que vai ser melhor, tá bem? Cor vermelha. Se eu descanso o mouse em cima do meu editor de código, ele dá algumas informações ali, selector specificity, especificidade do seletor, 001, significa que o seletor de tag, o seletor de elemento, ele pesa 1, tudo bem?
>
> **[00:56]** Se eu coloco aqui acima o seletor de classe, green nesse caso, eu vou colocar cor green aqui, você vai perceber que ele vai aplicar a cor green, e ele desconsidera agora o cascading, a cascata, porque a soma dos pesos faz essa declaração aqui ser mais valiosa, ela tem um peso maior, então ela tem uma especificidade maior.
>
> **[01:20]** E eu estou definindo que essa daqui pesa 10, essa pesa 1, então o 10 vai ganhar aqui. Se eu descanso o mouse aqui em cima, eu consigo ver isso, 010, é o peso 10, beleza? Então essa é a especificidade do seletor de classe, e nós temos a especificidade maior, que é o de ID — nesse caso eu coloquei text, e vou colocar aqui a cor blue, ok?
>
> **[01:42]** Se você observar comigo agora, o blue vai ser aplicado. Então a ideia de cascata, ela cai por terra, na questão de "ah, o último é considerado" — não, porque existe a especificidade que também trabalha aqui. Se nesse caso tivesse apenas os seletores com o mesmo peso, ele vai levar em conta a cascata, e vai colocar o último. Mas nesse caso eu estou trabalhando na especificidade, então ele vai levar em conta aquele que é mais pesado. Descanso o mouse aqui em cima, eu posso ver a especificidade desse é 100.
>
> **[02:06]** E o combo deles também conta pra especificidade, ou seja, se aqui eu tiver um `text green` juntinho, porque daí eu estou aplicando todos, e ainda vou aplicar o p, vou aplicar todos eles — o p que tem o id text, que tem a classe green, ele vai levar uma cor black de volta agora, vai voltar por ser preto, aqui é muito mais específico ainda, 1, 1, 1, é como se fosse uma ligaçãozinha entre eles, fazendo todos os valores aqui: de 1, que é o menos específico, 10, então 10 mais 1 vira 11, e aí o de 100, 100 mais 11, pronto, 111, esse aqui tem mais peso de todos eles.
>
> **[03:02]** Então sempre observe a especificidade, porque é importante você entender essa teoria, porque muitas vezes que você estiver fazendo CSS, você pode se confundir falando assim "mas pera aí, porque que não está aplicando essa cor vermelha", se o CSS está gigante, tem um monte de coisas, pode observar se não tem algum outro seletor que você acabou aplicando, e ele está tendo mais peso, e por ter mais peso ele vai ser levado em conta, e por isso você vai ter que trabalhar certinho do jeito que você quer melhorar o seu CSS, tá bom?
