---
title: "Data"
curso: Rocketseat
modulo: "Módulo 2 - Atributos"
tags:
  - rocketseat
  - html
  - atributos
---

# Data

> [!abstract] Ideia central
> `data-*` é um atributo global que permite criar **dados personalizados** em qualquer elemento — o nome depois do `data-` é livre, e o valor pode depois ser lido no CSS ou no JavaScript.

---

## Sintaxe

```html
<li data-id-produto="482">Tênis</li>
```

- Sempre começa com `data-`
- Depois do traço, você escolhe o nome (aqui: `id-produto`)
- O conteúdo é livre — qualquer informação que faça sentido guardar naquele elemento

No JavaScript, esse valor fica acessível via `dataset` (ex: `elemento.dataset.idProduto`).

## Regras de escrita

| Regra | Exemplo |
|---|---|
| Sempre usar o traço depois de `data` | `data-algo`, nunca `data algo` (viraria outro atributo, que não existe) |
| Nome sem espaço | Espaço quebra o atributo |
| Evitar números e caracteres especiais no nome | Preferir nomes descritivos: `data-id-produto`, não `data-1` |

```html
<!-- ✅ -->
<div data-usuario-status="ativo">...</div>

<!-- ❌ sem o traço, vira uma tag/atributo inválido -->
<div data usuario status="ativo">...</div>
```

## Por que é tão flexível

Diferente de `id` (único) ou `class` (classificação), `data-*` é **ilimitado**: você define o nome que quiser, para guardar qualquer informação relevante àquele elemento específico, e recupera esse dado depois no CSS ou no JavaScript pelo nome que você mesmo escolheu.

---

## Pontos-chave

- [ ] `data-*`: prefixo fixo `data-` + nome livre escolhido por você
- [ ] Guarda dados personalizados, lidos depois via CSS/JS
- [ ] Sem espaço, evitar número/caractere especial no nome
- [ ] Uso ilimitado — tantos `data-*` quanto forem necessários

---

## Navegação

- Anterior: [[Class]]
- Próxima: [[Style]]
- Índice do módulo: [[Módulo 2 - Atributos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Id]], [[Class]]

---

> [!note]- Transcrição da aula
> **[00:00]** Vamos falar sobre o atributo `data-`alguma coisa. Vou colocar um asterisco aqui só pra você saber que é alguma coisa. `data-`, você poderia colocar aqui, não importa o conteúdo, tá? Aqui você pode colocar o que você quiser. Pessoal, imagina que você coloca um ID. E porque essa tag específica você quer um número, uma numeração ali do seu sistema.
>
> **[00:22]** Então ao colocar o `data-`tracinho, você é liberado a colocar o nome que você quiser. E esse dado depois você pode utilizar no CSS ou no Javascript, o conteúdo desse dado. Isso é bem legal, porque aqui é ilimitado, você pode colocar qualquer coisa.
>
> **[00:40]** Só lembre, não vai colocar um espaço, porque senão ele se tornou uma outra tag, uma tag coisa que nem existe. Tudo bem? Você vai sempre colocar o tracinho pra definir, tá? E eu recomendo não colocar numeração e nem caracteres especiais também pra esse nome. Simplesmente o traço aí você coloca algo relevante, significativo. Porque mais tarde lá no CSS, no Javascript, você pode pegar o conteúdo que você colocou aqui. E não importa, pode ser qualquer conteúdo. Você pode pegar ele através do nome que você definiu aqui.
