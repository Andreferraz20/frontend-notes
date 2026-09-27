---
title: "Anatomia de uma declaração CSS"
curso: Rocketseat
modulo: "Módulo 1 - Conhecendo o CSS"
tags:
  - rocketseat
  - css
  - fundamentos
---

# Anatomia de uma declaração CSS

> [!abstract] Ideia central
> Uma declaração CSS é composta por um **seletor** (o que vai ser estilizado) e um bloco entre chaves `{ }` com um ou mais pares **propriedade: valor**. O seletor é quem conecta esse bloco de estilos aos elementos do HTML.

---

## As partes

```css
h1 {
  color: blue;
  font-size: 60px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
```

| Parte | Exemplo | O que é |
|---|---|---|
| Seletor | `h1` | Diz **quem** vai receber o estilo — aqui, todo `<h1>` da página |
| `{ }` | `{ ... }` | Cria o **contexto**: tudo dentro pertence a esse seletor |
| Propriedade | `color`, `font-size` | **O que** está sendo mudado (vem antes do `:`) |
| Valor | `blue`, `60px` | **Como** deve ficar (vem depois do `:`) |
| `;` | — | Fecha cada declaração, separando uma propriedade da próxima |

## Dois tipos de valor comuns

- **Valor nomeado** (*named*): uma palavra-chave, ex: `color: blue;`, `text-transform: uppercase;`
- **Valor numérico**: um número com unidade, ex: `font-size: 60px;`, `letter-spacing: 2px;`

Cada propriedade aceita determinados tipos/valores específicos — isso vai sendo aprendido aos poucos, propriedade por propriedade.

## O que isso muda no HTML

```html
<h1>Meu título</h1>
```

Sem CSS, esse `<h1>` usa o estilo padrão do navegador. Com a declaração acima, **todo** `<h1>` que existir na página passa a receber: cor azul, fonte de 60px, espaçamento entre letras de 2px e texto em caixa alta — tudo de uma vez, só por causa dessa declaração.

Esse `h1` usado como seletor é um **seletor de tag/elemento**: ele se conecta a qualquer elemento daquele tipo que existir no HTML (o assunto de seletores em detalhe vem em aulas futuras).

> [!tip] Ajuda do editor
> Passar o mouse sobre uma propriedade mostra a documentação dela direto do [MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS). Digitar o valor ou usar `Ctrl+Espaço` também traz sugestões do editor — nem sempre certeiras, mas ajudam a explorar o que é aceito ali.

---

## Pontos-chave

- [ ] Declaração = seletor + `{ propriedade: valor; ... }`
- [ ] Seletor diz **quem** recebe o estilo; propriedade diz **o quê**; valor diz **como**
- [ ] Cada declaração termina em `;`, permitindo empilhar várias propriedades no mesmo bloco
- [ ] Valores podem ser nomeados (`blue`, `uppercase`) ou numéricos com unidade (`60px`, `2px`)
- [ ] Um seletor de tag (`h1`) afeta **todos** os elementos daquele tipo na página

---

## Navegação

- Anterior: [[Comentários em CSS]]
- Índice do módulo: [[Módulo 1 - Conhecendo o CSS]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[O que é CSS]], [[Anatomia das Tags]]
