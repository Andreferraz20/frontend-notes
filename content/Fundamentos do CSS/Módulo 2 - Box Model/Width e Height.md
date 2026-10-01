---
title: "Width e Height"
curso: Rocketseat
modulo: "Módulo 2 - Box Model"
tags:
  - rocketseat
  - css
  - box-model
---

# Width e Height

> [!abstract] Ideia central
> `width` e `height` só se aplicam em caixas `block` (ver [[Display Inline]]). Além do valor fixo, dá pra definir uma faixa aceitável com `min-width`/`max-width` e `min-height`/`max-height` — e esses limites sempre "ganham" do valor base, não importa a ordem em que foram escritos.

---

## O básico

```css
.box {
  width: 400px;
}
```

Numa caixa `block`, `width` limita a largura e o conteúdo vai se ajustando dentro dela — texto grande demais simplesmente quebra linha e empurra a altura da caixa pra baixo (o fluxo normal). Numa caixa `inline` (como `span`), `width` **não se aplica** — o mesmo texto grande fica do tamanho que precisar, sem respeitar nenhum valor de largura. Por isso é raro colocar textos longos numa tag inline; o normal é usar uma tag `block` (como `p`), que consegue ser limitada e organizada.

## Largura mínima e máxima

```css
.box {
  min-width: 200px;
}
```

Garante que a caixa nunca fique **menor** que 200px, não importa o que aconteça — se você tentar `width: 100px` junto com `min-width: 200px`, o `width` menor é ignorado e a caixa fica com 200px mesmo assim.

```css
.box {
  max-width: 300px;
}
```

Garante que a caixa nunca fique **maior** que 300px — tentar `width: 500px` não funciona, ela trava em 300px.

Combinando os dois:

```css
.box {
  min-width: 200px;
  max-width: 300px;
}
```

A largura fica sempre entre 200px e 300px, qualquer que seja o `width` (ou o conteúdo) tentando forçar um valor fora dessa faixa.

> [!note] min/max sempre vencem, não importa a ordem
> `min-width`/`max-width` restringem o `width` mesmo quando `width` é escrito **depois** deles no CSS. Isso não é a regra da [[Cascata]] (a última declaração vencendo) — `min`/`max` funcionam como um limite que é aplicado por cima do valor calculado, sempre, independente da ordem das linhas.

## Altura funciona igual

```css
.box {
  height: 200px;
  min-height: 200px;
  max-height: 300px;
}
```

Mesmas regras de `width`, só que no eixo vertical: `height` não se aplica em `inline`, e `min-height`/`max-height` limitam a faixa aceitável.

## Overflow: quando o conteúdo não cabe

```css
.box {
  height: 50px; /* menor que o conteúdo */
  width: 50px;
}
```

Se o conteúdo precisar de mais espaço do que a caixa tem, ele **transborda** — sai dos limites da caixa. Esse fenômeno se chama **overflow**, e vai ser estudado com mais detalhe numa aula futura; por enquanto, o importante é saber que existe e reconhecer o nome.

> [!tip] Dica forte: evite fixar `height`
> Na prática, raramente se define uma altura fixa pra uma caixa — o conteúdo costuma ser **flexível** (mais texto pode entrar depois, por exemplo), e uma altura fixa calculada "na mão" vira overflow e bagunça o layout assim que o conteúdo muda. `height` fixo é usado só em momentos bem específicos; o padrão é deixar a altura se ajustar ao conteúdo.

---

## Pontos-chave

- [ ] `width`/`height` só funcionam em `block` — em `inline`, são ignorados
- [ ] `min-width`/`max-width` definem uma faixa aceitável de largura
- [ ] `min-height`/`max-height` fazem o mesmo para altura
- [ ] `min`/`max` sempre restringem o valor final, **não importa a ordem** em que foram escritos — isso não é regra de cascata
- [ ] Conteúdo maior que a caixa **transborda** (overflow) — assunto de uma aula futura
- [ ] Evite fixar `height` manualmente; deixe a altura se ajustar ao conteúdo sempre que possível

---

## Navegação

- Anterior: [[Border]]
- Próxima: [[Margin]]
- Índice do módulo: [[Módulo 2 - Box Model]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Display Inline]], [[Cascata]], [[Box Model]]
