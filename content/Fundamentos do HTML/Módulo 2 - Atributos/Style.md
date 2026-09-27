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
