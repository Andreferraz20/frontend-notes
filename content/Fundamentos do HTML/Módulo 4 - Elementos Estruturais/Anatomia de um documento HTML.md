---
title: "Anatomia de um documento HTML"
curso: Rocketseat
modulo: "Módulo 4 - Elementos Estruturais"
tags:
  - rocketseat
  - html
  - estrutural
---

# Anatomia de um documento HTML

> [!abstract] Ideia central
> Todo documento HTML segue uma estrutura fixa: `<!DOCTYPE html>` no topo, a tag raiz `<html>` contendo dois filhos — `<head>` (configuração, não aparece na página) e `<body>` (tudo que a pessoa vê).

---

## O esqueleto completo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aprendendo HTML</title>
</head>
<body>
  <!-- todo o conteúdo visível vai aqui -->
</body>
</html>
```

## Peça por peça

| Tag | Papel |
|---|---|
| `<!DOCTYPE html>` | Declara que esse documento é do tipo HTML |
| `<html>` | Tag **raiz** (root) — o "pai de todos", contém tudo o resto |
| `<head>` | Configuração da página — nada aqui aparece diretamente pro usuário |
| `<body>` | O corpo — tudo que a pessoa realmente vê na página |

### Dentro do `<head>`

| Elemento | Para que serve |
|---|---|
| `<meta charset="UTF-8">` | Define o conjunto de caracteres, evitando problemas com acentuação |
| `<meta name="viewport" ...>` | Deixa o site responsivo/portável para dispositivos móveis |
| `<title>` | Título do documento — aparece na aba do navegador |

### O atributo `lang` no `<html>`

```html
<html lang="pt-BR">
```

Define a linguagem do documento (aqui, português do Brasil) para o navegador e para ferramentas de acessibilidade/tradução entenderem melhor o conteúdo.

## Atalho de editor: Emmet

Em editores como VS Code, digitar `!` e apertar Enter gera automaticamente todo esse esqueleto padrão (Emmet). Não é necessário memorizar e digitar tudo isso na mão toda vez.

---

## Pontos-chave

- [ ] `<!DOCTYPE html>` sempre no topo do arquivo
- [ ] `<html>` é a tag raiz, com `lang` definindo o idioma
- [ ] `<head>`: configuração (não visível) — `meta charset`, `meta viewport`, `title`
- [ ] `<body>`: todo o conteúdo visível da página
- [ ] Editores com Emmet geram esse esqueleto com `!` + Enter

---

## Navegação

- Anterior: [[Imagens]] (Módulo 3)
- Próxima: [[Desenhando uma página web]]
- Índice do módulo: [[Módulo 4 - Elementos Estruturais]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Títulos e parágrafos]]
