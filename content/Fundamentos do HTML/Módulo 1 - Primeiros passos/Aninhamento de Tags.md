---
title: "Aninhamento de Tags"
curso: Rocketseat
modulo: "Módulo 1 - Primeiros passos"
tags:
  - rocketseat
  - html
  - fundamentos
---

# Aninhamento de Tags

> [!abstract] Ideia central
> É normal e esperado colocar tags dentro de outras tags — isso é **aninhamento**. Quem envolve é a tag **pai**, quem está dentro é a tag **filha**. A regra de ouro: feche as tags na ordem inversa em que foram abertas, sem cruzar aberturas e fechamentos.

---

## Pai e filhos

```html
<p>
  Um texto qualquer, mas <em>esse trecho</em> tem ênfase
  e <strong>esse aqui</strong> é negrito.
</p>
```

- `<em>` dá ênfase ao texto (visualmente, itálico)
- `<strong>` dá importância ao texto (visualmente, negrito)
- Nesse exemplo, `<p>` é a tag **pai**; `<em>` e `<strong>` são tags **filhas** dela

Se houvesse uma tag dentro do `<em>`, ela também seria considerada filha — o aninhamento pode ter vários níveis de profundidade.

## A regra: fechar na ordem certa

O maior cuidado ao aninhar tags é saber exatamente onde cada uma fecha. Tags **não podem se cruzar**:

```html
<!-- ❌ errado: strong fecha "por cima" do p -->
<p><strong>texto
</p></strong>

<!-- ✅ certo: strong fecha antes do p -->
<p><strong>texto</strong></p>
```

Se a tag `<strong>` foi aberta dentro do `<p>`, ela precisa fechar **antes** do `<p>` fechar. Alguns navegadores tentam "adivinhar" e corrigir isso sozinhos na renderização, mas é um erro de escrita — pode não dar problema visível agora, mas gera bugs difíceis de rastrear depois.

---

## Pontos-chave

- [ ] Tag que envolve outra = **pai**; tag envolvida = **filha**
- [ ] O aninhamento pode ter vários níveis
- [ ] Tags devem fechar na ordem inversa da abertura — nunca se cruzam
- [ ] Fechar tag fora de ordem é erro de escrita, mesmo que o navegador "resolva" visualmente

---

## Navegação

- Anterior: [[Fluxo HTML]]
- Próxima: [[Caracteres reservados]]
- Índice do módulo: [[Módulo 1 - Primeiros passos]]
- Fundamentos: [[Fundamentos do HTML]]
- Curso: [[Front-end]]
- Relacionado: [[Anatomia das Tags]], [[Formatação básica de textos]]

---

> [!note]- Transcrição da aula
> **[00:00]** Um comportamento bem padrão do HTML é que eu posso e devo até colocar umas tags dentro da outra. Ou seja, se eu tiver aqui, por exemplo, um texto qualquer, dentro de uma tag de p parágrafo, eu posso escolher um texto específico pra dar uma ênfase nele. E a ênfase eu posso usar o em, por exemplo, eu só coloco o texto em volta desse em, ok? E pronto, eu tenho esse texto aqui com uma ênfase, nesse caso, dessa forma.
>
> **[00:27]** Se eu quiser colocar um negrito, eu tenho uma tag específica chamada strong, e através da tag strong, eu estou avisando que esse daqui é um negrito. Agora, a gente vai entender uma coisa bem interessante. Isso daqui é chamado de alinhamento de tag, ou seja, uma tag dentro da outra. Então, o em está dentro do p, o strong está dentro do p. A gente considera que essa daqui é uma tag pai, e a gente considera que essas daqui são as tags filhas do pai, tá? Então, são filhos, um, dois, e esse é o pai, ok? Se tivesse outro dentro desse daqui, por exemplo, também seria considerado como tag filha, ok? Então, a gente tem um alinhamento e ele pode ir muitas tags dentro das outras.
>
> **[01:08]** O interessante que eu preciso super entender aqui, é que se eu abro essa tag p, eu tenho que saber muito bem onde eu vou fechar ela. Porque se, por exemplo, esse strong estaria acabando por aqui, mas eu fechasse o strong aqui, eu tenho um erro de escrita do meu HTML. Aqui pode não dar problema nenhum, no final das contas, na minha visualização, mas eu posso ter problemas se eu não tiver cuidado com isso.
>
> **[01:36]** Então, é importante que eu tenha cuidado, porque o HTML vai se virar para tentar resolver. Mas o certo é, se a tag strong foi aberta aqui, não posso fechar uma tag p dentro dela. Eu tenho que fechar a tag aqui. A mesma coisa é, se eu tenho uma tag p aberta, eu não posso fechar ela no meio de uma outra tag aberta. Então, eu preciso ter uma visão e um cuidado para isso, ok? Para não ter erros de escrita HTML e no futuro eu acabar tendo erros sem perceber quais são os meus erros. Então, eu posso colocar uma tag dentro da outra, vou muitas vezes fazer isso, a estrutura padrão do HTML vai fazer isso, mas eu preciso cuidar com abertura e fechamento de tag. Bacana?
