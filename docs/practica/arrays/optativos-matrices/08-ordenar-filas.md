# 🧩 Ordenamiento de Filas en Matriz: ¡Organizando tus Datos Internamente! 📊🔄

¡Prepárense para un desafío que combina el manejo de matrices con una de las operaciones fundamentales en computación: el **ordenamiento**! En este ejercicio, van a desarrollar un programa que lea una matriz de **10 filas por 30 columnas**. Su tarea principal será **ordenar los elementos de cada fila individualmente de menor a mayor**. Finalmente, deberán mostrar la matriz completa con sus filas ya ordenadas. Este problema es excelente para que ustedes refuercen la **manipulación de matrices**, el uso de **bucles anidados**, y la **implementación de un algoritmo de ordenamiento** (o el uso de funciones de ordenamiento si su lenguaje lo permite) aplicado a subconjuntos de la matriz. 🧠💻

## ✨ ¿Qué debe hacer su programa?

1.  **Declarar y cargar una matriz:** Creen una matriz (arreglo bidimensional) de **10 filas por 30 columnas**.

    - El programa debe permitirles cargar los 10 * 30 = 300 elementos de la matriz. Para agilizar las pruebas, es *altamente recomendable\* que la inicialicen con valores fijos o aleatorios.

2.  **Ordenar los elementos de cada fila:**

    - Este es el paso crucial. Deberán recorrer la matriz **fila por fila**.
    - Para cada fila (es decir, para cada una de las 10 filas):
      - Consideren esa fila como un **vector unidimensional temporal** de 30 elementos.
      - Apliquen un **algoritmo de ordenamiento** (ej: burbuja, selección, inserción, o si su lenguaje lo permite, la función de ordenamiento de arrays/listas) para organizar sus elementos **de menor a mayor**.
      - Una vez ordenada, esa fila deberá quedar actualizada en la matriz.

3.  **Mostrar todos los elementos de la matriz ordenada:**
    - Después de haber ordenado todas las filas, recorran la matriz nuevamente.
    - Impriman todos sus elementos de forma clara, mostrando cada fila ya ordenada en una línea separada.
    - _Ejemplo de salida:_
      ```
      Fila 1 ordenada: [valor_menor] [segundo_valor] ... [valor_mayor]
      Fila 2 ordenada: [valor_menor] [segundo_valor] ... [valor_mayor]
      ...
      ```

> 💡 Tip: Los **bucles anidados** serán esenciales. Un bucle externo para recorrer las filas (de 0 a 9). Dentro de este bucle, tendrán otro bucle (o conjunto de bucles) para implementar el algoritmo de ordenamiento sobre la fila actual (`matriz[fila_actual]`). Si su lenguaje de programación tiene una función `sort()` para arreglos o listas, ¡esta es una excelente oportunidad para usarla y simplificar el ordenamiento de cada fila!

## 🧠 ¿Qué van a practicar en este ejercicio?

Este ejercicio es excelente para que ustedes refuercen y apliquen múltiples conceptos clave de forma integrada:

- ✅ **Manipulación de matrices:** Trabajar con estructuras de datos bidimensionales y modificar sus contenidos.
- ✅ **Bucles anidados:** El uso fundamental de un bucle dentro de otro para acceder a cada fila y luego a cada elemento dentro de esa fila.
- ✅ **Algoritmos de ordenamiento:** Comprender y aplicar cómo se reorganizan los elementos de un conjunto de datos (aunque sea a nivel de fila).
- ✅ **Modularización (implícita o explícita):** Pensar en cómo aplicar una operación (ordenar) a subconjuntos de datos (cada fila) de forma repetitiva.
- ✅ **Transformación de datos en el lugar:** Modificar directamente los valores de la matriz para que las filas queden ordenadas.
- ✅ **Organización de la salida:** Mostrar la matriz resultante de manera legible, reflejando los cambios.

## ✅ Conclusión

¡Excelente, futuros organizadores de datos! Este desafío les permitió construir un algoritmo que no solo lee y procesa una matriz, sino que también reorganiza su contenido a nivel de fila. Al dominar la aplicación de técnicas de ordenamiento dentro de una estructura bidimensional, han dado un paso crucial en la creación de programas que gestionan y presentan información de manera más clara y útil. ¡Están listos para poner orden en cualquier conjunto de datos! 🚀✨
