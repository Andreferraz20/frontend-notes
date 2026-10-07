---
title: "Font Family"
curso: Rocketseat
modulo: "Módulo 3 - Fontes e textos"
tags:
  - rocketseat
  - css
  - fontes-e-textos
---

# Font Family

> [!abstract] Ideia central
> `font-family` define a família da fonte. Na prática, ela recebe uma **lista**: o navegador tenta a primeira fonte; se não achar, pula pra próxima (**fallback**), até chegar numa fonte **genérica** (`serif`, `sans-serif`, `monospace`...) que sempre vai existir.

---

## Qual é a fonte padrão do navegador?

Pra descobrir a fonte aplicada em qualquer site: abra o **F12**, clique no texto, vá na aba **Computed** e filtre por `font-family`. Na página da aula, a fonte padrão era a **Times**.

## Fontes seguras e genéricas

Ao trocar a fonte, o normal é usar fontes **seguras pra web**: aquelas disponíveis na maioria dos computadores. Além delas, existem as **famílias genéricas**, que o computador sempre consegue resolver com alguma fonte própria:

| Genérica | Aparência |
|---|---|
| `serif` | Serifada: tem os "tracinhos" nas pontas das letras (como o M da Times) |
| `sans-serif` | Sem serifa: letra mais lisa |
| `monospace` | Todos os caracteres com a mesma largura |
| `fantasy` | Decorativa |

```css
p {
  font-family: sans-serif;
}
```

## A lista com fallback

```css
p {
  font-family: Arial, Helvetica, sans-serif;
}
```

Leitura da esquerda pra direita:

1. O navegador tenta a **primeira** fonte (Arial).
2. Não achou? A vírgula manda pular pra **próxima** (Helvetica).
3. Não achou de novo? Cai na **genérica** do final (`sans-serif`), que ele sempre resolve com alguma fonte sem serifa.

Esse plano B encadeado se chama **fallback**: "já que não estou encontrando esta, tenho um plano pra próxima, e assim vai".

## Regra: nome com espaço vai entre aspas

```css
p {
  font-family: "Lucida Sans", "Lucida Grande", Geneva, Verdana, sans-serif;
}
```

Sempre que o nome da fonte tiver **espaço**, as aspas são **obrigatórias**. Sem elas, o navegador não encontra a fonte.

Na aula, uma lista longa assim foi testada tirando fontes uma a uma até a aparência mudar: ali o navegador estava caindo na **Lucida Grande**, que era a primeira da lista disponível naquela máquina.

> [!tip] Pra aprofundar
> A documentação de `font-family` (MDN ou [devdocs.io](https://devdocs.io/css/font-family)) mostra a sintaxe com o nome da família, o fallback e todas as genéricas disponíveis. Não é obrigatório saber mais que isso agora.

> [!note] Vem mais por aí
> Mais pra frente vão aparecer fontes mais elegantes e específicas, que não estão nem entre as genéricas nem entre as fontes seguras listadas aqui. Isso fica pra outro momento.

---

## Pontos-chave

- [ ] A fonte padrão do navegador pode ser vista em F12 → Computed → `font-family` (na aula, era a Times)
- [ ] Prefira fontes seguras pra web e termine a lista com uma **genérica** (`serif`, `sans-serif`, `monospace`, `fantasy`)
- [ ] A lista usa vírgula: o navegador tenta cada fonte em ordem (**fallback**) até achar uma
- [ ] Nome de fonte com espaço **precisa** de aspas
- [ ] `serif` tem tracinhos nas letras; `sans-serif` é lisa

---

## Navegação

- Anterior: [[Fundamentos]]
- Próxima: [[Font Size]]
- Índice do módulo: [[Módulo 3 - Fontes e textos]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Valores e unidades de medida]]
