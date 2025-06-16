# 🌡️ Análisis Climático Anual: ¡Descifrando el Clima de una Ciudad Día a Día! ☀️❄️

¡Prepárense para un desafío meteorológico a gran escala que los hará sumergirse en el análisis de datos de tiempo! En este ejercicio, van a desarrollar un programa para registrar y analizar las temperaturas promedio diarias de una ciudad a lo largo de todo un año. Deberán utilizar una matriz para organizar estos datos y luego extraer información clave sobre las temperaturas mensuales y anuales. Este problema es excelente para que ustedes refuercen la **manipulación de matrices de gran tamaño**, el **cálculo de promedios por fila**, la **identificación de máximos/mínimos a nivel de fila y global**, y la **traducción de índices a fechas** comprensibles. 🧠💻

## ✨ ¿Qué debe hacer su programa?

1.  **Declarar y cargar una matriz de temperaturas:** Creen una matriz (arreglo bidimensional) de **12 filas por 31 columnas**:

    - Cada **fila** representará un **mes del año** (fila 0 para Enero, fila 1 para Febrero, ..., fila 11 para Diciembre).
    - Cada **columna** representará la **temperatura promedio de un día** de ese mes (columna 0 para el día 1, columna 1 para el día 2, ..., columna 30 para el día 31).
    - El programa debe permitirles cargar las temperaturas para cada día de cada mes. Para simplificar la carga de 12\*31 = 372 valores, pueden inicializar la matriz con valores fijos o aleatorios para la prueba.
    - _Consideración sobre los días del mes:_ Aunque la matriz tiene 31 columnas, recuerden que no todos los meses tienen 31 días. Para los días que no existen en un mes específico (ej: 31 de Febrero, 30 y 31 de Febrero, etc.), pueden simplemente cargarlos con un valor "nulo" (ej: -999 o 0, y luego ignorarlos en los cálculos), o ajustar sus bucles para cada mes. Para este ejercicio, asuman que **se cargan 31 valores por mes** y que los días "extra" no afectan significativamente el promedio si tienen un valor neutro o son ignorados. Para simplificar, pueden cargar todos los 31 días y sus algoritmos de máximo/mínimo y promedio los manejarán.

2.  **Realizar los análisis y mostrar los resultados:** Después de cargar todos los datos, el programa debe calcular y mostrar lo siguiente:

    - **1. La temperatura promedio de cada mes:**

      - Necesitarán un **acumulador** para sumar las temperaturas de cada mes.
      - Recorran la matriz **fila por fila** (es decir, por cada mes). Para cada fila, sumen sus 31 elementos (o el número de días reales del mes si deciden implementar esa complejidad).
      - Dividan la suma de cada fila por 31 (o el número de días reales) para obtener el promedio mensual.
      - Muestren el promedio de cada mes (ej: "Promedio Enero: [valor]º").

    - **2. El día más caluroso y el más frío de cada mes:**

      - Para cada mes (fila):
        - Necesitarán `max_temp_mes`, `dia_max_temp_mes`, `min_temp_mes`, `dia_min_temp_mes`.
        - **Inicialicen** estas variables con el primer día del mes.
        - Recorran las **columnas** de la fila actual (los días del mes). Comparen cada temperatura con `max_temp_mes` y `min_temp_mes`, actualizando el valor y el día (índice de columna + 1).
        - Muestren el resultado para cada mes (ej: "En Enero, el día más caluroso fue el [día] con [temp]º, y el más frío el [día] con [temp]º").

    - **3. El día más caluroso y el más frío del año, con su fecha:**
      - Necesitarán variables globales para `max_temp_anual`, `min_temp_anual`, `dia_max_anual`, `mes_max_anual`, `dia_min_anual`, `mes_min_anual`.
      - **Inicialicen** estas variables con la temperatura del primer día del primer mes (`matriz[0][0]`) y su fecha (Día 1, Mes 1).
      - A medida que recorren toda la matriz (o después de haber encontrado los máximos/mínimos por mes y comparándolos), actualicen `max_temp_anual` y `min_temp_anual` junto con sus respectivas fechas (día y mes).
      - _Consejo para la fecha:_ Pueden tener un arreglo de nombres de meses (`["Enero", "Febrero", ...]`) para mostrar la fecha de forma más amigable (ej: "3 de Marzo").
      - Muestren el "Día más caluroso del año: [Día] de [Mes] con [Temperatura]º." y lo mismo para el día más frío.

> 💡 Tip: Los puntos 1 y 2 pueden calcularse eficientemente en un **solo conjunto de bucles anidados** (el externo para los meses/filas, el interno para los días/columnas). Dentro del bucle externo, reinicien los acumuladores y variables de max/min para _ese mes_. Los máximos y mínimos anuales (punto 3) pueden calcularse actualizándose en el mismo bucle anidado, o comparando los máximos/mínimos mensuales que ya calcularon. ¡Recuerden transformar los índices de columna (0-30) a números de día (1-31) y los índices de fila (0-11) a números de mes (1-12) o nombres de mes para la salida!

## 🧠 ¿Qué van a practicar en este ejercicio?

Este ejercicio es excelente para que ustedes refuercen y apliquen múltiples conceptos clave de forma integrada:

- ✅ **Manipulación de matrices de gran tamaño:** Trabajar con una estructura de datos bidimensional que representa datos temporales (12 meses x 31 días).
- ✅ **Bucles anidados:** El uso esencial para recorrer todas las celdas de la matriz.
- ✅ **Cálculo de promedios por fila:** Obtener métricas para cada subconjunto (cada mes).
- ✅ **Identificación de máximos y mínimos a dos niveles:** Encontrar los valores extremos y sus posiciones tanto a nivel mensual como a nivel anual (global).
- ✅ **Manejo de índices y su traducción a datos reales:** Convertir índices de arreglo (0-based) a números de día (1-based) y nombres de meses.
- ✅ **Acumuladores y variables de seguimiento:** Utilizar múltiples variables para llevar control de sumas, máximos y mínimos en diferentes alcances.
- ✅ **Análisis de datos temporales:** Aplicar la programación para comprender patrones y extremos en series de tiempo.
- ✅ **Organización y claridad de la salida:** Presentar resultados complejos de manera comprensible.

## ✅ Conclusión

¡Excelente trabajo, futuros científicos climáticos y analistas de datos! Este desafío les permitió construir un algoritmo sofisticado para analizar grandes volúmenes de datos temporales organizados en una matriz. Al dominar el cálculo de promedios, la identificación de extremos a múltiples niveles y la traducción de índices a información significativa, han dado un paso gigantesco en la creación de programas que extraen inteligencia de datos complejos. ¡Están listos para modelar y entender patrones en cualquier conjunto de datos que se les presente! 🚀✨
