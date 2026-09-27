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
