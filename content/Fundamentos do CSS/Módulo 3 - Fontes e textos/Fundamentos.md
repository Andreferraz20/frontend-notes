---
title: "Fundamentos"
curso: Rocketseat
modulo: "Módulo 3 - Fontes e textos"
tags:
  - rocketseat
  - css
  - fontes-e-textos
---

# Fundamentos

> [!abstract] Ideia central
> Todo texto no HTML vive **dentro de uma tag**. No CSS, estilizar texto se divide em dois grupos: **fontes** (a aparência da letra) e **layout do texto** (como as linhas se organizam). E só dá pra estilizar um *pedaço* do texto se ele estiver envolvido por uma tag própria.

---

## Onde o texto fica

```html
<h1>Um título</h1>
<p>Um texto grande, dentro de uma tag de parágrafo.</p>
```

O texto sempre está dentro de uma tag. Ele se apresenta da **esquerda para a direita** porque é assim no português; em idiomas que escrevem da direita para a esquerda, o texto segue o sentido daquela língua, conforme é colocado dentro das tags.

## Dois grupos de propriedades

| Grupo | O que muda | Propriedades que vêm por aí |
|---|---|---|
| **Fontes** | A aparência da letra | `font-family` (família da fonte), `font-size` (tamanho), negrito (*bold*), itálico |
| **Layout do texto** | Como o texto se organiza | altura da linha, espaço entre caracteres, alinhamento (ao meio, à direita, justificado — como no Word) |

São assuntos parecidos, mas **diferentes**: um mexe na letra, o outro mexe em como as letras e linhas se distribuem.

## Só dá pra estilizar um trecho se ele estiver numa tag

```html
<p>
  Este texto é comum, mas <span>essa parte</span> pode ter estilo próprio.
</p>
```

```css
span {
  color: red;
}
```

Não existe como estilizar "só uma parte" de um texto solto. Se você quer mudar apenas um trecho, ele precisa estar **envolvido por uma tag** (como `<span>`, ou outra que já traga algum estilo embutido, como `<strong>` — ver [[Formatação básica de textos]]), e aí a estilização é feita nessa tag.

---

## Pontos-chave

- [ ] Texto no HTML sempre fica dentro de uma tag
- [ ] A direção de leitura segue o idioma (esquerda→direita no português)
- [ ] Dois grupos: **fontes** (`font-family`, `font-size`, negrito, itálico) e **layout do texto** (altura da linha, espaçamento entre caracteres, alinhamento)
- [ ] Pra estilizar só um trecho, envolva-o numa tag e estilize essa tag

---

## Navegação

- Próxima: [[Font Family]]
- Índice do módulo: [[Módulo 3 - Fontes e textos]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Formatação básica de textos]], [[Tags genéricas Div e Span]]
