---
title: "Letter Spacing e Word Spacing"
curso: Rocketseat
modulo: "Módulo 3 - Fontes e textos"
tags:
  - rocketseat
  - css
  - fontes-e-textos
---

# Letter Spacing e Word Spacing

> [!abstract] Ideia central
> *Spacing* = espaço. `letter-spacing` controla o espaço **entre letras** e `word-spacing` o espaço **entre palavras**. Ambos aceitam unidades de medida, mas podem prejudicar a leitura e a acessibilidade: use com cuidado e, de preferência, seguindo o design.

---

## As duas propriedades

| Propriedade | Espaço entre | Exemplo |
|---|---|---|
| `letter-spacing` | Letras | `letter-spacing: 2px;` |
| `word-spacing` | Palavras | `word-spacing: 2px;` |

```css
p {
  letter-spacing: 2px;
}

p {
  letter-spacing: 1rem;   /* bem agressivo */
}
```

```css
p {
  word-spacing: 2px;
}

p {
  word-spacing: 1rem;     /* espaços bem maiores entre palavras */
}
```

### Prefira valores pequenos

Com `1rem` o efeito é **bem agressivo**. No dia a dia usam-se unidades mais "quebradinhas" (valores fracionados, pequenos) pra um ajuste sutil.

> [!note] Valor só numérico
> Na aula, o instrutor testou números puros (`4`, `20`, `40`) e disse que também afetam o espaçamento. Na especificação do CSS, porém, um número sem unidade (exceto `0`) não é válido nessas propriedades; por segurança, escreva sempre a unidade (`px`, `rem`, `em`).

> [!warning] Cuidado: leitura e acessibilidade
> Mexer no espaçamento pode **atrapalhar a leitura** e a **acessibilidade** de algumas pessoas. Geralmente você não vai mexer muito nisso: quem define é quem estuda e cria o **design**. Não saia aplicando de qualquer jeito: precisa haver um estudo por trás.

Vale saber que existem porque, mais cedo ou mais tarde, você pode encontrá-las em algum design.

---

## Pontos-chave

- [ ] `letter-spacing` = espaço entre **letras**; `word-spacing` = espaço entre **palavras**
- [ ] Aceitam unidades de medida (`px`, `rem`...)
- [ ] `1rem` já é muito; prefira valores pequenos e sutis
- [ ] Usar com cuidado: afeta leitura e acessibilidade
- [ ] Siga o que o design definir, em vez de aplicar por conta própria

---

## Navegação

- Anterior: [[Text Align e Line Height]]
- Próxima: [[Shorthand Font]]
- Índice do módulo: [[Módulo 3 - Fontes e textos]]
- Fundamentos: [[Fundamentos do CSS]]
- Curso: [[Front-end]]
- Relacionado: [[Valores e unidades de medida]], [[Font Size]]
