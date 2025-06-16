# 📐 Análisis de Matriz Cuadrada: ¡Explorando sus Triángulos y Diagonales! 🖼️🔢

¡Prepárense para un desafío geométrico y analítico con matrices cuadradas! En este ejercicio, van a desarrollar un programa que lea una matriz cuadrada de 64 elementos. Esto significa que es una matriz de **8x8** (ya que 8 \* 8 = 64). Su algoritmo deberá procesar esta matriz para encontrar el mayor elemento en el triángulo superior, la suma de la diagonal principal, el promedio del triángulo inferior y el porcentaje de números positivos en toda la matriz. Este problema es excelente para que ustedes refuercen la **manipulación de matrices**, la **identificación de patrones en índices**, el **cálculo de sumas y promedios condicionales**, y el **conteo de elementos con propiedades específicas**. 🧠💻

## ✨ ¿Qué debe hacer su programa?

1.  **Declarar y cargar una matriz cuadrada:** Creen una matriz (arreglo bidimensional) de **8 filas por 8 columnas**.

    - El programa debe permitirles cargar los 64 elementos de la matriz. Para agilizar las pruebas, es _altamente recomendable_ que la inicialicen con valores fijos o aleatorios.

2.  **Realizar los análisis y mostrar los resultados:** Después de cargar la matriz, el programa debe calcular y mostrar lo siguiente:

    - **Definiciones clave para una matriz `M[fila][columna]`:**

      - **Diagonal Principal:** Elementos donde `fila == columna` (M[0][0], M[1][1], ..., M[7][7]).
      - **Triángulo Superior:** Elementos donde `fila < columna` (sin incluir la diagonal).
      - **Triángulo Inferior:** Elementos donde `fila > columna` (sin incluir la diagonal).

    - **1. El mayor elemento del triángulo superior:**

      - Necesitarán una variable `mayor_triangulo_superior` (inicialícenla con un valor muy pequeño o con el primer elemento del triángulo superior).
      - Recorran la matriz. Utilicen una condición `if (fila < columna)` para identificar los elementos del triángulo superior.
      - Dentro de esa condición, comparen el elemento actual con `mayor_triangulo_superior` y actualícenlo si encuentran uno mayor.

    - **2. La suma total de la diagonal principal:**

      - Necesitarán un **acumulador** `suma_diagonal_principal` (inicializado en 0).
      - Recorran la matriz. Utilicen una condición `if (fila == columna)` para identificar los elementos de la diagonal principal.
      - Dentro de esa condición, sumen el elemento actual al acumulador.

    - **3. El promedio del triángulo inferior:**

      - Necesitarán un **acumulador** `suma_triangulo_inferior` (inicializado en 0) y un **contador** `cantidad_triangulo_inferior` (inicializado en 0).
      - Recorran la matriz. Utilicen una condición `if (fila > columna)` para identificar los elementos del triángulo inferior.
      - Dentro de esa condición, sumen el elemento actual al acumulador y incrementen el contador.
      - Calculen el promedio: `suma_triangulo_inferior / cantidad_triangulo_inferior`. ¡Cuidado con la división por cero si el triángulo inferior estuviera vacío (lo cual no ocurre en una matriz de 8x8 con ese criterio)!

    - **4. El porcentaje de números positivos de toda la matriz:**

      - Necesitarán un **contador** `cantidad_positivos` (inicializado en 0).
      - Recorran _toda la matriz_ (todos los 64 elementos).
      - Para cada elemento, verifiquen si es `mayor que 0`. Si lo es, incrementen el contador.
      - Calculen el porcentaje: `(cantidad_positivos / 64) * 100`.

    - **Mostrar todos los resultados claramente:** Presenten todos los puntos anteriores en la consola de manera organizada y comprensible.

> 💡 Tip: Pueden realizar todos estos cálculos en **un solo conjunto de bucles anidados** que recorra toda la matriz (`for fila de 0 a 7`, `for columna de 0 a 7`). Dentro de estos bucles, usarán múltiples `if` para determinar a qué "sección" pertenece cada elemento (diagonal, triángulo superior, triángulo inferior) y si es positivo, sumando y contando según corresponda. ¡No olviden inicializar todas sus variables de contadores, acumuladores y seguimiento de máximos correctamente!

## 🧠 ¿Qué van a practicar en este ejercicio?

Este ejercicio es excelente para que ustedes refuercen y apliquen múltiples conceptos clave de forma integrada:

- ✅ **Manipulación de matrices cuadradas:** Trabajar con estructuras de datos bidimensionales de igual número de filas y columnas.
- ✅ **Identificación de patrones en índices:** Reconocer y aplicar las condiciones `fila == columna`, `fila < columna`, y `fila > columna` para segmentar la matriz.
- ✅ **Bucle anidado para análisis multi-criterio:** Realizar varios cálculos y conteos en una sola pasada por la matriz.
- ✅ **Acumuladores y contadores:** Utilizar variables para sumar y contar elementos que cumplen diferentes condiciones.
- ✅ **Identificación de máximos:** Encontrar el valor más grande dentro de un subconjunto específico de la matriz.
- ✅ **Cálculo de promedios y porcentajes:** Obtener métricas estadísticas sobre partes y sobre el total de la matriz.
- ✅ **Programación defensiva:** Considerar casos como la división por cero (aunque en este caso los denominadores no serán cero).
- ✅ **Análisis geométrico de datos:** Aplicar la programación para entender la estructura y propiedades de una matriz.

## ✅ Conclusión

¡Excelente, futuros geómetras computacionales y analistas de matrices! Este desafío les permitió construir un algoritmo sofisticado para explorar y extraer información valiosa de diferentes regiones de una matriz cuadrada. Al dominar la identificación de patrones por índices y la realización de análisis condicionales en una sola pasada, han dado un gran paso en la creación de programas que procesan datos estructurados de manera eficiente. ¡Están listos para desentrañar cualquier matriz que se les presente! 🚀✨
