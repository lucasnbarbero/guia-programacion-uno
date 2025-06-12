import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(
  defineConfig({
    title: "Programación 1 - UTN FRSFCO",
    description: "Material didáctico de Programación 1",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: "Teoría", link: "/docs/teoria/introduccion/software" },
        { text: "Práctica", link: "/docs/practica/primera-aplicacion" },
      ],

      sidebar: [
        {
          text: "Teoría",
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
        {
          text: "Práctica",
          collapsed: true,
          items: [
            {
              text: "Primera aplicación",
              collapsed: true,
              link: "/docs/practica/primera-aplicacion",
            },
            {
              text: "if-else-elseif",
              items: [
                {
                  text: "Número positivo, negativo o cero",
                  link: "/docs/practica/condicionales/positivo-negativo",
                },
                {
                  text: "Par o Impar",
                  link: "/docs/practica/condicionales/par-impar",
                },
                {
                  text: "Día de la semana",
                  link: "/docs/practica/condicionales/dia-semana",
                },
                {
                  text: "Mayor de dos números",
                  link: "/docs/practica/condicionales/mayor",
                },
                {
                  text: "Mostrar calificación",
                  link: "/docs/practica/condicionales/traducir-calificacion",
                },
                {
                  text: "Año Bisiesto",
                  link: "/docs/practica/condicionales/anio-bisiesto",
                },
              ],
            },
            {
              text: "while",
              items: [
                {
                  text: "Números positivos",
                  link: "/docs/practica/while/suma-positivos",
                },
                {
                  text: "Clave de acceso",
                  link: "/docs/practica/while/clave-acceso",
                },
              ],
            },
            {
              text: "Optativos 1",
              collapsed: true,
              items: [
                {
                  text: "01 - Multiplicador",
                  link: "/docs/practica/optativos-1/01-multiplicador",
                },
                {
                  text: "02 - Positivo, Negativo, Neutro",
                  link: "/docs/practica/optativos-1/02-positivo-negativo-neutro",
                },
                {
                  text: "03 - Par - Impar",
                  link: "/docs/practica/optativos-1/03-par-impar",
                },
                {
                  text: "04 - Mayor de dos",
                  link: "/docs/practica/optativos-1/04-mayor-de-dos",
                },
                {
                  text: "05 - Mayor de tres",
                  link: "/docs/practica/optativos-1/05-mayor-de-tres",
                },
                {
                  text: "06 - Cálculo de salario",
                  link: "/docs/practica/optativos-1/06-calculo-salario",
                },
                {
                  text: "07 - Cálculo de salario",
                  link: "/docs/practica/optativos-1/07-poliza-seguro",
                },
                {
                  text: "08 - Sumar 100 números",
                  link: "/docs/practica/optativos-1/08-suma-cien-numeros",
                },
                {
                  text: "09 - Promedio 200 números",
                  link: "/docs/practica/optativos-1/09-promedio-200-numeros",
                },
                {
                  text: "10 - Análisis de números",
                  link: "/docs/practica/optativos-1/10-analisis-numeros",
                },
                {
                  text: "11 - Mayor y menor",
                  link: "/docs/practica/optativos-1/11-mayor-menor",
                },
                {
                  text: "12 - Análisis peso por categoría",
                  link: "/docs/practica/optativos-1/12-peso-por-categoria",
                },
                {
                  text: "13 - Análisis del clima semanal",
                  link: "/docs/practica/optativos-1/13-clima-semanal",
                },
                {
                  text: "14 - Serie impares",
                  link: "/docs/practica/optativos-1/14-serie-impares",
                },
                {
                  text: "15 - Calificador alumnos",
                  link: "/docs/practica/optativos-1/15-calificador-alumnos",
                },
                {
                  text: "16 - Sumar serie",
                  link: "/docs/practica/optativos-1/16-sumar-serie",
                },
                {
                  text: "17 - Análisis partidos deportivos",
                  link: "/docs/practica/optativos-1/17-analisis-partidos-deportivos",
                },
                {
                  text: "18 - Calculadora de Descuentos",
                  link: "/docs/practica/optativos-1/18-calcular-descuentos",
                },
                {
                  text: "19 - Liquidar Sueldos",
                  link: "/docs/practica/optativos-1/19-liquidar-sueldos",
                },
              ],
            },
            {
              text: "Funciones y Procedimientos",
              collapsed: true,
              items: [
                {
                  text: "01 - Carrito de compras",
                  link: "/docs/practica/funciones-procedimientos/carrito-compras",
                },
                {
                  text: "02 - Clima",
                  link: "/docs/practica/funciones-procedimientos/clima",
                },
                {
                  text: "03 - Quiz",
                  link: "/docs/practica/funciones-procedimientos/quiz",
                },
                {
                  text: "Recursividad",
                  collapsed: true,
                  items: [
                    {
                      text: "04 - Ta Te Ti",
                      link: "/docs/practica/funciones-procedimientos/ta-te-ti",
                    },
                  ],
                },
              ],
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
