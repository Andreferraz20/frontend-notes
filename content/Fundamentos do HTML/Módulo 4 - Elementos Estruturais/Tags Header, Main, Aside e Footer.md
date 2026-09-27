---
title: "Tags Header, Main, Aside e Footer"
curso: Rocketseat
modulo: "Módulo 4 - Elementos Estruturais"
tags:
  - rocketseat
  - html
  - estrutural
---

# Tags Header, Main, Aside e Footer

> [!abstract] Ideia central
> Quatro tags estruturais fundamentais: `<header>` (cabeçalho), `<main>` (conteúdo principal), `<aside>` (conteúdo secundário/lateral) e `<footer>` (rodapé). `header`, `main` e `footer` são os três pilares de quase toda página; `aside` é opcional, usado quando faz sentido.

---

## As quatro tags

```html
<body>
  <header>
    <!-- logo, navegação -->
  </header>

  <main>
    <h1>Conteúdo principal da página</h1>
    <p>...</p>
  </main>

  <aside>
    <!-- conteúdo relacionado/complementar -->
  </aside>

  <footer>
    <!-- informações extras, direitos autorais, links -->
  </footer>
</body>
```

| Tag | Papel | Obrigatória? |
|---|---|---|
| `<header>` | Cabeçalho — geralmente no topo da página | Comum, não obrigatória |
| `<main>` | Conteúdo **principal** da página | Comum, não obrigatória |
| `<aside>` | Conteúdo secundário, relacionado ou complementar ao principal | Opcional — usa quando faz sentido |
| `<footer>` | Rodapé — informações extras do site | Comum, não obrigatória |

## Detalhando cada uma

- **`<header>`**: fica no topo da página (posição comum, não uma regra rígida). É onde normalmente entram logo e navegação.
- **`<main>`**: é o conteúdo principal — é dentro dele que provavelmente vão aparecer outras tags de conteúdo, como `<h1>` e `<p>` (ver [[Títulos e parágrafos]]).
- **`<aside>`**: estende ou referencia informações do conteúdo principal, geralmente numa lateral — mostra "mais ideias", links relacionados, etc. Não é obrigatório, aparece quando faz sentido.
- **`<footer>`**: rodapé com informações extras do site. Algumas pessoas colocam até menus de navegação ali também.

> [!tip] Os três pilares
> `header`, `main` e `footer` são as três tags estruturais mais fundamentais de uma página. `aside` aparece "de vez em quando", conforme a necessidade.

---

## Pontos-chave

- [ ] `<header>`: cabeçalho, geralmente no topo
- [ ] `<main>`: conteúdo principal da página
- [ ] `<aside>`: conteúdo secundário/lateral, opcional
- [ ] `<footer>`: rodapé
- [ ] `header`, `main`, `footer` são os pilares estruturais mais comuns

---

## Navegação

- Anterior: [[Desenhando uma página web]]
- Próxima: [[Tags Nav, Section e Article]]
- Índice do módulo: [[Módulo 4 - Elementos Estruturais]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Anatomia de um documento HTML]]
