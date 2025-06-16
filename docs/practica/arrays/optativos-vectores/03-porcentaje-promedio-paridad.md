# 📊 Análisis Completo de Vector: ¡Promedios y Porcentajes por Paridad! 🔢📈

¡Es momento de combinar varias habilidades en un único y completo análisis de datos sobre un vector! En este desafío, van a desarrollar un programa que cargue un vector con 200 números y luego calcule y muestre: el promedio general de todos sus elementos, y de manera separada, el porcentaje y el promedio de los números pares e impares dentro de ese vector. Este ejercicio es excelente para practicar la **carga de vectores**, la **iteración**, la **clasificación condicional**, el uso de **múltiples contadores y acumuladores**, y el **cálculo de porcentajes y promedios**. 🧠💻

## ✨ ¿Qué debe hacer su programa?

1.  **Declarar un vector:** Creen un vector (o array) capaz de almacenar 200 valores numéricos.
2.  **Cargar el vector:** El programa debe pedirles que ingresen 200 números, uno por uno, y los almacenen en el vector.
3.  **Calcular el promedio general del vector:**
    - Sumen todos los elementos del vector en una variable acumuladora.
    - Dividan esa suma por 200 (la cantidad total de elementos).
4.  **Clasificar, contar y acumular por paridad:** Mientras recorren el vector para la suma general (o en un recorrido separado), deben:
    - Para cada número, determinar si es **par** o **impar** (usando `numero % 2 == 0`).
    - Llevar un **contador** de números pares y otro de números impares.
    - Llevar un **acumulador** para la suma de los números pares y otro para la suma de los números impares.
5.  **Calcular porcentajes de pares e impares:**
    - `Porcentaje_Pares = (Cantidad_Pares / 200) * 100`
    - `Porcentaje_Impares = (Cantidad_Impares / 200) * 100`
6.  **Calcular promedios de pares e impares:**
    - `Promedio_Pares = Suma_Pares / Cantidad_Pares`
    - `Promedio_Impares = Suma_Impares / Cantidad_Impares`
    - _Importante:_ Antes de calcular un promedio, **verifiquen que el contador correspondiente no sea cero** para evitar una división por cero. Si es cero, informen que no hay números de esa paridad para calcular el promedio.
7.  **Mostrar todos los resultados:** El programa debe imprimir claramente:
    - El **promedio general** de los elementos del vector.
    - La **cantidad** de números pares.
    - El **porcentaje** de números pares.
    - El **promedio** de números pares (o mensaje si no hay).
    - La **cantidad** de números impares.
    - El **porcentaje** de números impares.
    - El **promedio** de números impares (o mensaje si no hay).

> 💡 Tip: Utilicen un **bucle `for`** (o `while`) para recorrer el vector. Dentro del bucle, usen una estructura **`if-else`** para verificar la paridad de cada número y, según el caso, incrementar el contador y sumar al acumulador correspondiente. Asegúrense de inicializar todos los contadores y acumuladores en cero antes de empezar.

## 🧠 ¿Qué van a practicar en este ejercicio?

Este ejercicio es excelente para que ustedes refuercen y apliquen varios conceptos clave:

- ✅ **Declaración y carga de vectores:** Continuar practicando la manipulación de arreglos de gran tamaño.
- ✅ **Iteración eficiente:** Recorrer un vector una o dos veces para realizar múltiples cálculos.
- ✅ **Contadores y acumuladores múltiples:** Manejar varias variables para sumar y contar categorías diferentes dentro del mismo conjunto de datos.
- ✅ **Estructuras de control condicionales (`if-else`):** Aplicar lógica de decisión sobre cada elemento del vector.
- ✅ **Operador módulo (`%`):** Su uso para determinar la paridad de un número.
- ✅ **Cálculo de promedios y porcentajes:** Aplicar fórmulas matemáticas para obtener estadísticas significativas.
- ✅ **Validación de cálculos:** Prevenir errores de división por cero, una buena práctica de programación.
- ✅ **Análisis de datos detallado:** Extraer múltiples tipos de información de un mismo conjunto de datos.

## ✅ Conclusión

¡Magnífico! Este desafío les permite construir un algoritmo robusto capaz de realizar un análisis estadístico detallado sobre un conjunto de datos en un vector. Al integrar carga, iteración, condicionales, contadores y acumuladores, habrán dado un paso gigantesco en el procesamiento y la extracción de información valiosa de sus datos. ¡Están en camino de convertirse en verdaderos analistas de datos con sus habilidades de programación! 🚀✨
