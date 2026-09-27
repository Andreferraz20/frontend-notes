---
title: "Atributos"
curso: Rocketseat
modulo: "Módulo 2 - Atributos"
tags:
  - rocketseat
  - html
  - atributos
---

# Atributos

> [!abstract] Ideia central
> Atributos são **informações extras ou configurações** de uma tag: `nome="valor"`, separado da tag por espaço. Sempre use **aspas duplas** e nunca omita as aspas — economizar aqui gera bugs difíceis de enxergar.

---

## Sintaxe

```html
<img src="foto.jpg" alt="Uma foto qualquer">
```

| Parte | Exemplo | O que é |
|---|---|---|
| Nome do atributo | `src` | O que está sendo configurado |
| Sinal de igual | `=` | Liga nome e valor |
| Valor (entre aspas) | `"foto.jpg"` | O conteúdo específico daquele atributo |

O atributo fica separado do nome da tag por um **espaço**, nunca colado.

## Por que sempre usar aspas duplas

```html
<!-- ❌ possível, mas nunca faça isso -->
<a href=https://site.com>link</a>

<!-- ❌ aspas simples: arriscado com apóstrofos -->
<a title='is not'>link</a>
<!-- o contraído "isn't" tem uma aspa simples no meio e quebra o atributo -->

<!-- ✅ sempre assim -->
<a href="https://site.com" title="is not">link</a>
```

Vários navegadores até aceitam um valor sem aspas, mas isso é frágil: se depois você adicionar outro atributo colado, o navegador pode entender tudo como parte do mesmo valor e quebrar a tag. Aspas simples têm o mesmo tipo de risco — qualquer apóstrofo dentro do valor (como em `isn't`) fecha o atributo antes da hora.

**Regra prática: sempre aspas duplas**, para manter consistência e evitar esse tipo de erro.

## Nem tudo se decora de uma vez

Assim como tags, atributos são um estudo **constante e gradual**:

- Não existe um único lugar onde você aprende todos de uma vez
- Vai ter atributo específico de uma tag (como `src` e `alt` do `<img>`)
- Vai ter [[Atributos globais|atributo global]], que serve para qualquer tag
- É normal aprender por demanda, conforme a necessidade aparece

---

## Pontos-chave

- [ ] Sintaxe: `nome="valor"`, separado da tag por espaço
- [ ] Sempre aspas duplas — nunca omita, nunca use aspas simples
- [ ] Existem atributos específicos de tag e [[Atributos globais|atributos globais]]
- [ ] Aprender atributos é um processo contínuo, não algo pra decorar de uma vez

---

## Navegação

- Anterior: [[Caracteres reservados]] (Módulo 1)
- Próxima: [[Atributos booleanos]]
- Índice do módulo: [[Módulo 2 - Atributos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
