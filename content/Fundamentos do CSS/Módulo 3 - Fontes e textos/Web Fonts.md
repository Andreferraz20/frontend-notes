---
title: "Web Fonts"
curso: Rocketseat
modulo: "Módulo 3 - Fontes e textos"
tags:
  - rocketseat
  - css
  - fontes-e-textos
---

# Web Fonts

> [!abstract] Ideia central
> Além das fontes padrão do navegador, dá pra **importar fontes** de um serviço online (como o **Google Fonts**) ou da sua máquina. A forma recomendada é a tag **`<link>`** no `<head>`; o `@import` no CSS funciona, mas é mais lento.

---

## Por que importar a fonte?

A Roboto pode estar instalada no seu computador, e aí ela aparece. Mas **não dá pra contar que todo mundo tem** ela instalada. Por isso a fonte é **importada**: o navegador baixa ela junto com a página.

## Passo a passo com o Google Fonts

1. Abra [fonts.google.com](https://fonts.google.com) e escolha uma fonte (na aula: **Inter** e depois **Roboto**).
2. Clique em **Get font** → **Get embedded code**.
3. Escolha os **pesos** que quer (a Inter permitia pegar todos de 100 a 900 ou só um; na Roboto, foram selecionados só **300** e **700**).
4. Copie o código gerado e use no projeto.

> [!note] O site muda
> É um serviço online e gratuito, e a interface muda com o tempo. Pra **remover** uma fonte já escolhida, o instrutor só achou o caminho pela página **Selection** (ícone de lixeira).

## Forma 1: tag `<link>` (a recomendada)

O código gerado tem 3 linhas, que vão no `<head>`:

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap" rel="stylesheet">
  <meta charset="UTF-8">
  <title>Web Fonts</title>
</head>
```

- `rel="preconnect"` = **pré-conexão** com esse endereço. O navegador lê o HTML linha a linha e, ao chegar nessas linhas, já começa a conectar. Quando chega na linha que pede a fonte, ela baixa mais rápido.
- Organização do instrutor: as duas `preconnect` ficam **no começo** do `head` e a terceira (a que traz a fonte) **depois do `<title>`**. Não é obrigatório: dá pra deixar as três juntas no início.

> [!note] Exemplo ilustrativo
> A URL acima mostra o formato típico do código do Google Fonts (Roboto, pesos 300 e 700). Use sempre o código que o próprio site gera pra você.

### Usando a fonte no CSS

O próprio Google mostra a linha de uso. Copie e cole no CSS:

```css
p {
  font-family: "Roboto", sans-serif;
  font-weight: 300;   /* pesos baixados: 300 e 700 */
}

h1 {
  font-weight: 700;
}
```

Não precisa mexer no `font-style` (é `normal` mesmo). Só vale o peso que você baixou: 300 ficou "lindíssimo" no texto, e 700 é o bold.

### Mais de uma fonte

Pra outra fonte (na aula, uma pro título), escolha ela, vá em **Get font → Get embedded code**, troque o código no HTML e aplique no seletor desejado:

```css
h1 {
  font-family: "Nome da fonte do título", sans-serif;
}
```

## Forma 2: `@import` no CSS (não recomendada)

Aqui se copia **só a linha de `@import`** (e não o código todo, que iria pro HTML):

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap");
```

- `@import` é uma **at-rule** (regra que começa com `@` + nome; *rule* = regra).
- `url()` é uma função que diz **de onde** puxar o CSS. Ou seja, você está puxando um CSS de algum lugar do mundo.
- **Por que não usar:** é mais **lento** que o `<link>`, que tem todo um esquema (como o `preconnect`) pra ser mais rápido.

| | `<link>` no HTML | `@import` no CSS |
|---|---|---|
| Onde fica | `<head>` | Topo do CSS |
| Velocidade | Mais rápida (pré-conexão) | Mais lenta |
| Recomendado | **Sim** | Não |

---

## Indo além: `@font-face` (avançado)

Pesquisando **MDN Web Fonts** (em inglês) você vê a regra **`@font-face`**, usada pra criar uma **fonte personalizada** em vez de depender das fontes padrão do navegador.

- Útil quando a fonte foi **comprada** ou é específica de um cliente (o Google só tem fontes **gratuitas**). Aí a fonte precisa estar no formato certo pra web (tem ferramenta de *Web Font Generator*).
- O próprio Google usa `@font-face`: abrindo a URL do código gerado no navegador, aparece um CSS com o nome da fonte, estilo, **peso**, `font-display: swap` e o endereço (`src`) onde a fonte está.
- **`swap`** = troca: o navegador mostra primeiro uma fonte alternativa e, quando a fonte carrega, faz a troca automaticamente.
- Em cenário de cliente, a fonte precisa ficar num **servidor online**, porque os usuários não vão ter acesso à fonte da sua máquina.
- Aparecem também conceitos de **Unicode**: é bem mais avançado.

> [!tip] O que precisa saber agora
> **Estudar `@font-face` agora não faz sentido.** Saber que existe basta, pra voltar ao material no futuro (precisa entender inglês). Por enquanto, o suficiente é **usar o Google Fonts** pra adicionar e aplicar uma fonte, e isso já leva suas aplicações a outro nível.

Progressão da aula, do simples ao avançado:

1. Fontes padrão do navegador
2. Fontes gratuitas de um serviço como o Google Fonts
3. Fonte própria/comprada, organizada pra web (`@font-face`)

---

## Pontos-chave

- [ ] Importar a fonte garante que todo usuário a veja, mesmo sem ela instalada
- [ ] Google Fonts: **Get font → Get embedded code**, escolhendo os pesos
- [ ] A forma recomendada é `<link>` no `<head>` (com `preconnect`, que acelera)
- [ ] Use `font-family` e `font-weight` conforme os pesos baixados
- [ ] `@import url(...)` no CSS funciona, mas é mais lento
- [ ] `@font-face` cria fontes personalizadas: avançado, só saber que existe

---

## Navegação

- Anterior: [[Shorthand Font]]
- Índice do módulo: [[Módulo 3 - Fontes e textos]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Font Family]], [[Hiperlink]], [[Anatomia de um documento HTML]], [[Adicionando CSS no HTML]]
