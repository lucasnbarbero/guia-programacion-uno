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
              collapsed: true,
              items: [
                {
                  text: "Número positivo, negativo",
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
              collapsed: true,
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
              text: "Optativos 2",
              collapsed: true,
              items: [
                {
                  text: "01 - Calcular factorial",
                  link: "/docs/practica/optativos-2/01-factorial",
                },
                {
                  text: "02 - Encontrar mayor edad",
                  link: "/docs/practica/optativos-2/02-mayor-edad",
                },
                {
                  text: "03 - Número a dia de la semana",
                  link: "/docs/practica/optativos-2/03-numero-a-dia-semana",
                },
                {
                  text: "04 - Calculador de Triángulos",
                  link: "/docs/practica/optativos-2/04-calculadora-triangulos",
                },
                {
                  text: "05 - Precio  de Sillas",
                  link: "/docs/practica/optativos-2/05-precio-sillas-descuento",
                },
              ],
            },
            {
              text: "Arrays",
              collapsed: true,
              items: [
                {
                  text: "Suma y Promedio",
                  link: "/docs/practica/arrays/suma-promedio",
                },
                {
                  text: "Transformación condicional",
                  link: "/docs/practica/arrays/vector-transformacion-par-impar",
                },
                {
                  text: "Comparación vectores",
                  link: "/docs/practica/arrays/comparacion-vectores",
                },
                {
                  text: "Suma en matriz por fila",
                  link: "/docs/practica/arrays/suma-filas",
                },
                {
                  text: "Promedio en matriz por columna",
                  link: "/docs/practica/arrays/promedio-columnas",
                },
                {
                  text: "Suma diagonal principal",
                  link: "/docs/practica/arrays/suma-diagonal-principal",
                },
                {
                  text: "Optativos - Vectores",
                  collapsed: true,
                  items: [
                    {
                      text: "02 - Búsqueda de apellido",
                      link: "/docs/practica/arrays/optativos-vectores/02-busqueda-apellido-vector",
                    },
                    {
                      text: "03 - Porcentaje y Promedio por Paridad",
                      link: "/docs/practica/arrays/optativos-vectores/03-porcentaje-promedio-paridad",
                    },
                    {
                      text: "04 - Análisis de Estaturas",
                      link: "/docs/practica/arrays/optativos-vectores/04-analisis-estaturas",
                    },
                    {
                      text: "05 - Análisis Vector Completo",
                      link: "/docs/practica/arrays/optativos-vectores/05-analisis-vector-completo",
                    },
                    {
                      text: "06 - Gestión de Choferes",
                      link: "/docs/practica/arrays/optativos-vectores/06-gestion-choferes",
                    },
                    {
                      text: "07 - Compras semanales",
                      link: "/docs/practica/arrays/optativos-vectores/07-compras-semanales",
                    },
                    {
                      text: "08 - Temperaturas mensuales",
                      link: "/docs/practica/arrays/optativos-vectores/08-analisis-temperaturas-mes",
                    },
                    {
                      text: "09 - Relevamiento de Abuelos",
                      link: "/docs/practica/arrays/optativos-vectores/09-relevamiento-abuelos",
                    },
                    {
                      text: "10 - Competencia de Mountain Bike",
                      link: "/docs/practica/arrays/optativos-vectores/10-analisis-competencia-mtb",
                    },
                  ],
                },
                {
                  text: "Optativos - Matrices",
                  collapsed: true,
                  items: [
                    {
                      text: "01 - Suma por Fila de una Matriz",
                      link: "/docs/practica/arrays/optativos-matrices/01-suma-filas-matriz",
                    },
                    {
                      text: "02 - Análisis de Ventas",
                      link: "/docs/practica/arrays/optativos-matrices/02-analisis-ventas-sucursales",
                    },
                    {
                      text: "03 - Clima anual",
                      link: "/docs/practica/arrays/optativos-matrices/03-clima-anual",
                    },
                    {
                      text: "04 - Suma por Columnas de una Matriz",
                      link: "/docs/practica/arrays/optativos-matrices/04-suma-columnas-matriz",
                    },
                    {
                      text: "05 - Notas de un curso",
                      link: "/docs/practica/arrays/optativos-matrices/05-analisis-notas-curso",
                    },
                    {
                      text: "06 - Liquidación de sueldos para obreros",
                      link: "/docs/practica/arrays/optativos-matrices/06-liquidacion-sueldos-obreros",
                    },
                    {
                      text: "07 - Análisis de una Matríz Cuadrada",
                      link: "/docs/practica/arrays/optativos-matrices/07-matriz-cuadrada",
                    },
                    {
                      text: "08 - Ordenamiendo de Filas",
                      link: "/docs/practica/arrays/optativos-matrices/08-ordenar-filas",
                    },
                    {
                      text: "09 - Paridad en Matriz Cuadrada",
                      link: "/docs/practica/arrays/optativos-matrices/09-paridad-matriz",
                    },
                    {
                      text: "10 - Suma de la Diagonal Principal",
                      link: "/docs/practica/arrays/optativos-matrices/10-suma-diagonal-principal",
                    },
                    {
                      text: "11 - Gestión de Contactos",
                      link: "/docs/practica/arrays/optativos-matrices/11-gestion-contactos-matriz",
                    },
                    {
                      text: "12 - Generación y Análisis de Matriz Especial",
                      link: "/docs/practica/arrays/optativos-matrices/12-generacion-analisis-matriz-especial",
                    },
                  ],
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
