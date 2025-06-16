# 📏 Análisis de Estaturas: ¡Descubre los Detalles de tu Grupo! 📊🧍

¡Aquí tienen un desafío que integra el análisis estadístico con el manejo de vectores! En este ejercicio, no tendrán que cargar el vector, ya que se asume que las **30 estaturas ya están guardadas** en un vector llamado `ESTATURA`. Su misión es procesar estos datos para encontrar la estatura más alta y la más baja, calcular el promedio general, y finalmente, identificar y mostrar qué estaturas son iguales o inferiores a ese promedio. Este problema es perfecto para practicar la **iteración sobre vectores**, la **identificación de máximos y mínimos**, el **cálculo de promedios**, y la **aplicación de condicionales** sobre los elementos del vector. 🧠💻

## ✨ ¿Qué debe hacer su programa?

1.  **Vector de estaturas:** Asuman que ya tienen un vector llamado `ESTATURA` con 30 valores numéricos (las estaturas). Para probar su algoritmo, pueden inicializarlo con 30 valores fijos en su código.
2.  **Encontrar la mayor y menor estatura:**
    - Recorran el vector `ESTATURA`.
    - Necesitarán una variable para la **mayor estatura** (`max_estatura`) y otra para la **menor estatura** (`min_estatura`).
    - **Inicialicen** `max_estatura` y `min_estatura` con el valor de la **primera estatura del vector** (`ESTATURA[0]`). Esto es clave para que el algoritmo funcione correctamente con cualquier conjunto de datos.
    - A medida que recorren el resto del vector, comparen cada estatura con `max_estatura` y `min_estatura`, actualizándolas si encuentran un valor mayor o menor.
    - _Aclaración:_ Si hay estaturas repetidas que resultan ser el valor máximo o mínimo, su algoritmo simplemente registrará la primera o la última que cumpla la condición, lo cual es correcto para este ejercicio.
3.  **Calcular el promedio de todas las estaturas:**
    - Mientras recorren el vector (o en un recorrido separado), sumen todas las estaturas en una variable acumuladora.
    - Una vez que tengan la suma total, divídanla por 30 (el número total de estaturas).
4.  **Identificar y mostrar estaturas iguales o inferiores al promedio:**
    - Después de haber calculado el promedio, realicen un **segundo recorrido** sobre el vector `ESTATURA`.
    - Por cada estatura en el vector, verifiquen si es **menor o igual** al promedio calculado.
    - Si la condición se cumple, muestren esa estatura.
5.  **Mostrar todos los resultados:** El programa debe imprimir claramente:
    - La **mayor estatura** encontrada.
    - La **menor estatura** encontrada.
    - El **promedio** de todas las estaturas.
    - Una lista de las **estaturas iguales o inferiores al promedio**.

> 💡 Tip: Utilicen **bucles `for`** para recorrer el vector. Pueden hacer un primer recorrido para encontrar el máximo/mínimo y la suma total, y luego un segundo recorrido para identificar las estaturas bajo el promedio. Asegúrense de inicializar sus variables correctamente.

## 🧠 ¿Qué van a practicar en este ejercicio?

Este ejercicio es excelente para que ustedes refuercen y apliquen varios conceptos clave:

- ✅ **Procesamiento de datos en un vector ya existente:** Trabajar con colecciones de datos que ya están disponibles.
- ✅ **Identificación de máximos y mínimos:** Consolidar el algoritmo para encontrar los valores extremos en un conjunto de datos.
- ✅ **Cálculo de promedios:** Aplicar la suma y división para obtener una medida central de los datos.
- ✅ **Iteración múltiple sobre un vector:** Entender cuándo es necesario recorrer un arreglo más de una vez para diferentes propósitos.
- ✅ **Estructuras de control condicionales (`if`):** Aplicar lógica de comparación para identificar estaturas específicas (mayor, menor, bajo promedio).
- ✅ **Análisis estadístico básico:** Extraer información relevante y útil de un conjunto de datos numéricos.

## ✅ Conclusión

¡Excelente trabajo, futuros programadores! Este desafío les permitió realizar un análisis estadístico completo sobre un conjunto de datos ya cargados en un vector. Al dominar cómo encontrar extremos, calcular promedios e identificar valores por debajo de un umbral, habrán dado un gran paso en el procesamiento y la interpretación de información. ¡Están construyendo las bases para analizar cualquier tipo de datos que se les presente! 🚀✨
