---
title: "Style"
curso: Rocketseat
modulo: "Módulo 2 - Atributos"
tags:
  - rocketseat
  - html
  - atributos
---

# Style

> [!abstract] Ideia central
> `style` é o atributo global que aplica CSS **diretamente** na tag. Funciona, mas deve ser **evitado**: tem especificidade tão alta no CSS que é difícil de sobrescrever de outra forma depois.

---

## Sintaxe

```html
<p style="color: red; font-size: 20px;">Texto estilizado</p>
```

O estilo é aplicado ali mesmo, em tempo real, direto na tag — sem precisar de um arquivo CSS separado ou de uma tag `<style>` no `<head>`.

## Por que evitar

Quando o CSS entra em cena com mais profundidade, existem formas melhores de aplicar estilos (arquivo `.css` externo, tag `<style>`, classes). O atributo `style` inline tem uma característica complicada: ele é uma regra **muito forte** — dificilmente qualquer outro estilo aplicado em outro lugar (arquivo CSS, classe) consegue sobrescrevê-lo.

Isso significa:
- Fica difícil manter e organizar estilos espalhados direto nas tags
- Fica difícil sobrescrever esse estilo depois, mesmo usando boas práticas de CSS

> [!tip] Você vai ver isso em sistemas reais
> Mesmo sendo desaconselhado, é comum encontrar `style` inline em projetos e sistemas existentes — às vezes até difícil de remover/ajustar por causa dessa força do inline style. O importante agora é saber que ele existe e entender por que evitar usá-lo por padrão.

---

## Pontos-chave

- [ ] `style` aplica CSS direto na tag, em tempo real
- [ ] Evite usar: tem especificidade muito alta, difícil de sobrescrever
- [ ] Existem formas melhores de aplicar CSS (fora do escopo deste módulo)
- [ ] Ainda assim, é comum encontrar em projetos reais

---

## Navegação

- Anterior: [[Data]]
- Próxima: [[Semântica]] (Módulo 3)
- Índice do módulo: [[Módulo 2 - Atributos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]

---

> [!note]- Transcrição da aula
> **[00:00]** Vamos dar uma olhada como que funciona o atributo global style. Eu posso ter uma tag qualquer, vou colocar ali `style=`, e aqui eu coloco um valor css qualquer, propriedade de valor qualquer que eu quiser, e isso ele já coloca, já aplica um estilo, por isso que style, na minha tag em tempo real aqui, já no próprio tag em si.
>
> **[00:21]** Dica, tente evitar o uso dessa tag style. Lá no css, quando você estudar ele, você vai perceber que existem outras maneiras de se aplicar o css, e isso daqui é uma maneira muito forte, significa que quando você colocar essa tag aqui, dificilmente vai pegar outro estilo que você colocou em outro lugar.
>
> **[00:37]** Também é importante que você entenda isso, agora que você está entendendo a tag, para que você não fique aplicando estilos direto na tag. Portanto, evite, mas você vai encontrar sim, alguns sistemas e alguns lugares que vai estar sendo aplicado dessa forma, e te deixando até um pouco difícil de tirar essa tag, ou de mexer, mas não se preocupe, é só importante você entender que ela existe, que você pode colocar um css direto ali, caso você queira, tá bom?
