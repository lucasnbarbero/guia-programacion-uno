import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
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
              {
                text: "Algoritmos y Requerimientos",
                link: "/docs/teoria/algoritmos-requerimientos",
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
