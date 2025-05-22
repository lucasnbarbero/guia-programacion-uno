import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(
  defineConfig({
    title: "Programación 1 - UTN FRSFCO",
    description: "Material didáctico de Programación 1",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: "Home", link: "/" },
        { text: "Examples", link: "/markdown-examples" },
      ],

      sidebar: [
        {
          text: "📚 Teoría",
          collapsed: true,
          items: [
            {
              text: "Introducción",
              collapsed: true,
              items: [
                {
                  text: "Introducción al Software",
                  link: "/docs/teoria/introduccion/software",
                },
                {
                  text: "Paradigmas",
                  collapsed: true,
                  link: "/docs/teoria/introduccion/paradigmas/intro",
                  items: [
                    {
                      text: "Programación Imperativa",
                      link: "/docs/teoria/introduccion/paradigmas/imperativa",
                    },
                    {
                      text: "Programación Declarativa",
                      link: "/docs/teoria/introduccion/paradigmas/declarativa",
                    },
                    {
                      text: "Programación Funcional",
                      link: "/docs/teoria/introduccion/paradigmas/funcional",
                    },
                    {
                      text: "Programación Orientada a Objetos",
                      link: "/docs/teoria/introduccion/paradigmas/poo",
                    },
                  ],
                },
              ],
            },
            {
              text: "Algoritmos y Requerimientos",
              link: "/docs/teoria/algoritmos-requerimientos",
            },
            {
              text: "Variables y Constantes",
              link: "/docs/teoria/variables-constantes",
            },
            {
              text: "Tipos de Datos",
              link: "/docs/teoria/tipos-datos",
            },
            {
              text: "Uso de variables",
              link: "/docs/teoria/uso-variables",
            },
            {
              text: "Estructuras de Control",
              collapsed: true,
              link: "/docs/teoria/estructuras-control/intro",
              items: [
                {
                  text: "Secuencial",
                  link: "/docs/teoria/estructuras-control/secuencial",
                },
                {
                  text: "De Selección o Selectiva",
                  link: "/docs/teoria/estructuras-control/seleccion",
                },
                {
                  text: "De Repetición",
                  link: "/docs/teoria/estructuras-control/repeticion",
                },
              ],
            },
            {
              text: "Estructuras de Datos",
              link: "/docs/teoria/estructuras-datos",
            },
            {
              text: "Funciones y Procedimientos",
              link: "/docs/teoria/funciones-procedimientos",
            },
          ],
        },
      ],

      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/lucasnbarbero/guia-programacion-uno",
        },
      ],
    },
    markdown: {
      lineNumbers: true, // Mostrar números de línea en bloques de código
    },
  })
);
