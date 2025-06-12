# ⚖️ Análisis de Peso por Categoría de Edad: ¡Tu Algoritmo Sociodemográfico! 👨‍👩‍👧‍👦📊

¡Este es un desafío integral que combina varias de las habilidades que hemos practicado! Vas a desarrollar un programa que procese la información de un muestreo de 500 personas para calcular el **promedio de peso** en diferentes categorías de edad: **niños**, **jóvenes**, **adultos** y **ancianos**. Este ejercicio es perfecto para integrar **bucles `for`**, **condicionales `if-else if`**, **acumuladores** y **contadores**, ¡y aplicarlos a un problema de análisis de datos de la vida real! 🧠💻

## ✨ ¿Qué debe hacer tu programa?

1.  **Solicitar datos de 500 personas:** El programa debe pedir al usuario, repetidamente (500 veces), que ingrese el **peso** y la **edad** de cada persona muestreada.
2.  **Clasificar y acumular por categoría:** Para cada persona ingresada, el programa debe:
    - Determinar a qué **categoría de edad** pertenece (Niño, Joven, Adulto, Anciano) según la siguiente tabla:
      - **Niños:** 0 – 12 años
      - **Jóvenes:** 13 – 29 años
      - **Adultos:** 30 – 59 años
      - **Ancianos:** 60 años o más
    - **Contar** cuántas personas hay en cada categoría.
    - **Acumular la suma de los pesos** para cada categoría de forma independiente.
3.  **Calcular promedios por categoría:** Una vez procesadas las 500 personas:
    - Calcular el promedio de peso para Niños.
    - Calcular el promedio de peso para Jóvenes.
    - Calcular el promedio de peso para Adultos.
    - Calcular el promedio de peso para Ancianos.
    - _Importante:_ Si alguna categoría no tiene personas ingresadas (su contador es cero), el programa debe evitar la división por cero e indicar que no se puede calcular el promedio para esa categoría.
4.  **Mostrar los resultados:** El programa debe presentar claramente:
    - La cantidad total de personas en cada categoría (Niños, Jóvenes, Adultos, Ancianos).
    - El promedio de peso para cada categoría (o un mensaje si no aplica).

> 💡 Tip: Necesitarás un **bucle `for`** que se repita 500 veces. Dentro del bucle, usarás una serie de **`if-else if-else`** para clasificar la edad. Para cada categoría, deberás tener un **contador** (para saber cuántas personas hay en esa categoría) y un **acumulador** (para sumar sus pesos). ¡Asegúrate de inicializar todos estos contadores y acumuladores en cero antes de que comience el bucle!

## 🧠 ¿Qué se practica en este ejercicio?

Este ejercicio es excelente para reforzar y aplicar múltiples conceptos clave de forma integrada:

- ✅ **Estructuras de control repetitivas:** Consolidación del **bucle `for`** para procesar un gran volumen de datos (500 iteraciones).
- ✅ **Estructuras de control condicionales anidadas/encadenadas:** Uso avanzado de **`if-else if-else`** para clasificar datos en múltiples categorías según rangos numéricos.
- ✅ **Múltiples contadores y acumuladores:** Manejo de varias variables de conteo y suma de forma simultánea, una para cada categoría.
- ✅ **Entrada de múltiples datos por iteración:** Solicitar más de un dato (peso y edad) en cada repetición del bucle.
- ✅ **Operaciones aritméticas:** Suma y división para el cálculo de promedios.
- ✅ **Validación de cálculos:** Implementar lógica para evitar errores de división por cero.
- ✅ **Análisis de datos categóricos:** Aprender a procesar y resumir información basándose en grupos definidos.

## ✅ Conclusión

Este desafío te permite construir un algoritmo capaz de realizar un análisis de datos segmentado, una tarea muy común en diversos campos. ¡Es un paso crucial para que tus alumnos desarrollen programas que no solo procesen datos, sino que también extraigan información significativa y generen reportes detallados, demostrando su capacidad para resolver problemas complejos con código! 📈✨
