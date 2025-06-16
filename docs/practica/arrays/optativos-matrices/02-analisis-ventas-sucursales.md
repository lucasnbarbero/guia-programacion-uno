# 💰 Análisis de Ventas: ¡Descifrando el Rendimiento de Sucursales! 📈🏢

¡Prepárense para un desafío de análisis empresarial donde usarán matrices para evaluar el rendimiento de ventas! En este ejercicio, van a desarrollar un programa para una empresa que tiene 5 sucursales. Deberán procesar los datos de ventas mensuales de estas sucursales para calcular promedios, identificar rendimientos destacados y obtener una visión general del negocio. Este problema es excelente para que ustedes refuercen la **manipulación de matrices**, el **cálculo de promedios por fila y generales**, y la **aplicación de condicionales** para encontrar sucursales con desempeño superior. 🧠💻

## ✨ ¿Qué debe hacer su programa?

1.  **Declarar y cargar una matriz de ventas:** Creen una matriz (arreglo bidimensional) de **5 filas por 12 columnas**:

    - Cada **fila** representará una de las **5 sucursales**.
    - Cada **columna** representará la venta correspondiente a un **mes del año** (por ejemplo, columna 0 para Enero, columna 1 para Febrero, ..., columna 11 para Diciembre).
    - El programa debe permitirles cargar las ventas mensuales para cada una de las 5 sucursales. Para agilizar las pruebas, pueden inicializarla con valores fijos o aleatorios.

2.  **Realizar los análisis y mostrar los resultados:** Después de cargar todos los datos, el programa debe calcular y mostrar lo siguiente:

    - **1. Mostrar las ventas mensuales de las 5 sucursales:**

      - Recorran la matriz e impriman de forma clara las ventas de cada sucursal por mes. Pueden mostrar una fila a la vez, o una tabla organizada. Por ejemplo:
        ```
        Sucursal 1: [Venta Enero] [Venta Febrero] ... [Venta Diciembre]
        Sucursal 2: ...
        ```

    - **2. Calcular el promedio de venta anual, de cada sucursal:**

      - Necesitarán un **acumulador** para sumar las ventas de cada sucursal.
      - Recorran la matriz **fila por fila** (es decir, por cada sucursal). Para cada fila, sumen sus 12 elementos.
      - Dividan la suma de cada fila por 12 (el número de meses) para obtener el promedio anual de esa sucursal.
      - Muestren el promedio de cada sucursal (ej: "Promedio anual Sucursal 1: [valor]").

    - **3. Calcule el promedio general de ventas, de todas las sucursales:**

      - Necesitarán un **acumulador** para sumar _todas_ las ventas de _todas_ las sucursales (los 5 \* 12 = 60 valores).
      - Dividan esa suma total por 60 para obtener el promedio general.
      - Muestren el "Promedio General de Ventas: [valor]".

    - **4. Mostrar la/s sucursal cuyo promedio sea superior al promedio general:**
      - Después de haber calculado el promedio anual de cada sucursal (del punto 2) y el promedio general (del punto 3), realicen un **recorrido adicional** o guarden los promedios anuales en un vector.
      - Por cada sucursal, comparen su promedio anual con el promedio general.
      - Si el promedio anual de una sucursal es mayor que el promedio general, muestren un mensaje como: "La Sucursal [Número de Sucursal] superó el promedio general con [su promedio]".

> 💡 Tip: Pueden realizar la suma de ventas por sucursal y la suma total para el promedio general en un **solo conjunto de bucles anidados** (el externo para las sucursales/filas, el interno para los meses/columnas). Es recomendable almacenar los promedios anuales de cada sucursal en un **vector auxiliar** para poder compararlos fácilmente con el promedio general en el último punto.

## 🧠 ¿Qué van a practicar en este ejercicio?

Este ejercicio es excelente para que ustedes refuercen y apliquen múltiples conceptos clave de forma integrada:

- ✅ **Manipulación de matrices:** Trabajar con estructuras de datos bidimensionales para organizar la información.
- ✅ **Bucles anidados:** El uso esencial de un bucle dentro de otro para recorrer todas las celdas de la matriz.
- ✅ **Cálculo de promedios:** Obtener promedios tanto por subconjuntos (por fila/sucursal) como de forma global.
- ✅ **Acumuladores:** Utilizar variables para sumar valores de diferentes alcances (por fila, total).
- ✅ **Análisis comparativo:** Comparar un valor individual (promedio de sucursal) con un valor global (promedio general).
- ✅ **Identificación condicional:** Encontrar y mostrar elementos que cumplen con una determinada condición.
- ✅ **Organización de la salida:** Presentar datos y resultados de manera clara y comprensible para el usuario o para un informe.

## ✅ Conclusión

¡Excelente trabajo, futuros analistas de negocios! Este desafío les permitió construir un algoritmo crucial para la toma de decisiones empresariales, procesando datos de ventas para identificar rendimientos y áreas de mejora. Al dominar el análisis de matrices, los promedios y las comparaciones, han dado un gran paso en la creación de programas que ofrecen información estratégica valiosa. ¡Están listos para ayudar a las empresas a crecer con sus habilidades de programación! 🚀✨
