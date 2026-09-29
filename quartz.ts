import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

// Advanced: pass callback functions that can't be expressed in YAML.
// Keeps the site navigation in the same order the lessons were actually taught,
// instead of alphabetical. Anything not listed here falls back to alphabetical,
// so new content still shows up (just at the end) until it's added to this list.
//
// This plugin was installed as a plain npm dependency (via `quartz create -t
// obsidian`), not through `npx quartz plugin add`, so there's no generated
// `.quartz/plugins` barrel module to import the documented `ExternalPlugin.*`
// override helpers from. Registering the override directly on the same
// componentRegistry singleton that config-loader reads from achieves the
// same effect: config-loader looks up `componentRegistry.getOptionOverrides(spec.name)`
// where `spec.name` is the npm package name from quartz.config.yaml's
// `source:` field, i.e. "@quartz-community/explorer".
componentRegistry.setOptionOverrides("@quartz-community/explorer", {
  sortFn: (a, b) => {
    // Must be self-contained: this function is serialized to a string and
    // re-executed client-side, so it can't close over anything outside itself.
    const order = {
      // Front-end (course) top level
      "Fundamentos do HTML": 1,
      "Fundamentos do CSS": 2,

      // Fundamentos do HTML modules
      "Módulo 1 - Primeiros passos": 1,
      "Módulo 2 - Atributos": 2,
      "Módulo 3 - Elementos de conteúdos": 3,
      "Módulo 4 - Elementos Estruturais": 4,

      // Módulo 1 - Primeiros passos
      "O que é HTML": 1,
      "Comentários no HTML": 2,
      "Anatomia das Tags": 3,
      "Espaços e quebras de linha": 4,
      "Fluxo HTML": 5,
      "Aninhamento de Tags": 6,
      "Caracteres reservados": 7,

      // Módulo 2 - Atributos
      "Atributos": 1,
      "Atributos booleanos": 2,
      "Atributos globais": 3,
      "Id": 4,
      "Class": 5,
      "Data": 6,
      "Style": 7,

      // Módulo 3 - Elementos de conteúdos
      "Semântica": 1,
      "Títulos e parágrafos": 2,
      "Formatação básica de textos": 3,
      "Listas": 4,
      "Representação de código de computador": 5,
      "Hiperlink": 6,
      "Imagens": 7,

      // Módulo 4 - Elementos Estruturais
      "Anatomia de um documento HTML": 1,
      "Desenhando uma página web": 2,
      "Tags Header, Main, Aside e Footer": 3,
      "Tags Nav, Section e Article": 4,
      "Tags genéricas Div e Span": 5,

      // Fundamentos do CSS modules
      "Módulo 1 - Conhecendo o CSS": 1,
      "Módulo 2 - Box Model": 2,

      // Módulo 1 - Conhecendo o CSS
      "O que é CSS": 1,
      "Comentários em CSS": 2,
      "Anatomia de uma declaração CSS": 3,
      "Cascata": 4,
      "Especificidade": 5,
      "Mais específico que especificidade": 6,
      "Valores e unidades de medida": 7,
      "Seletores": 8,
      "Combinators": 9,
      "Adicionando CSS no HTML": 10,

      // Módulo 2 - Box Model
      "Box Model": 1,
      "Display": 2,
      "Display Block": 3,
      "Display Inline": 4,
      "Border": 5,
      "Width e Height": 6,
    }

    // Folders before files, like the default explorer behavior.
    if (a.isFolder && !b.isFolder) return -1
    if (!a.isFolder && b.isFolder) return 1

    const aOrder = order[a.displayName]
    const bOrder = order[b.displayName]

    if (aOrder !== undefined && bOrder !== undefined) return aOrder - bOrder
    if (aOrder !== undefined) return -1
    if (bOrder !== undefined) return 1

    return (a.displayName || "").localeCompare(b.displayName || "", undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
