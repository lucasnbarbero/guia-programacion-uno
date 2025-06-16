# 🔢 Análisis de Paridad en Matriz Cuadrada: ¡Sumando y Contando Pares e Impares! 📊➕

¡Prepárense para un desafío que combina el manejo de matrices con la lógica de paridad! En este ejercicio, van a desarrollar un programa que lea una matriz cuadrada de 5x5. Su tarea será analizar esta matriz para sumar y contar todos los números pares e impares, guardando los resultados en vectores separados. Este problema es excelente para que ustedes refuercen la **manipulación de matrices**, el uso de **bucles anidados**, la **lógica condicional** y la **gestión de múltiples acumuladores y contadores**. 🧠💻

## ✨ ¿Qué debe hacer su programa?

1.  **Declarar y cargar una matriz:** Creen una matriz (arreglo bidimensional) de **5 filas por 5 columnas**.

    - El programa debe permitirles cargar los 5 * 5 = 25 elementos de la matriz. Para agilizar las pruebas, es *altamente recomendable\* que la inicialicen con valores fijos o aleatorios.

2.  **Declarar vectores para los resultados:** Creen dos vectores (arreglos unidimensionales), ambos de tamaño 2:

    - `resultadosPares`: Para guardar la suma y la cantidad de números pares.
      - `resultadosPares[0]` almacenará la suma de los números pares.
      - `resultadosPares[1]` almacenará la cantidad de números pares.
    - `resultadosImpares`: Para guardar la suma y la cantidad de números impares.
      - `resultadosImpares[0]` almacenará la suma de los números impares.
      - `resultadosImpares[1]` almacenará la cantidad de números impares.

3.  **Analizar la matriz y guardar los resultados:**

    - Recorran la matriz elemento por elemento.
    - Para cada elemento, verifiquen si es par o impar usando el operador módulo (`%`).
      - Si el elemento es par (`elemento % 2 == 0`):
        - Súmenlo a `resultadosPares[0]`.
        - Incrementen `resultadosPares[1]`.
      - Si el elemento es impar:
        - Súmenlo a `resultadosImpares[0]`.
        - Incrementen `resultadosImpares[1]`.

4.  **Mostrar los resultados:**
    - Impriman la suma y la cantidad de números pares, tomando los valores de `resultadosPares`.
    - Impriman la suma y la cantidad de números impares, tomando los valores de `resultadosImpares`.
    - _Ejemplo de salida:_
      ```
      Suma de pares: [resultadosPares[0]], Cantidad de pares: [resultadosPares[1]]
      Suma de impares: [resultadosImpares[0]], Cantidad de impares: [resultadosImpares[1]]
      ```

> 💡 Tip: Utilicen **bucles anidados** para recorrer la matriz. Dentro de los bucles, usen una estructura `if-else` para verificar la paridad de cada número. ¡No olviden inicializar los elementos de los vectores `resultadosPares` y `resultadosImpares` en 0 antes de comenzar a recorrer la matriz!

## 🧠 ¿Qué van a practicar en este ejercicio?

Este ejercicio es excelente para que ustedes refuercen y apliquen múltiples conceptos clave de forma integrada:

- ✅ **Manipulación de matrices:** Trabajar con estructuras de datos bidimensionales para acceder y procesar sus elementos.
- ✅ **Bucles anidados:** El uso fundamental de un bucle dentro de otro para recorrer todos los elementos de la matriz.
- ✅ **Lógica condicional (if-else):** Aplicar condiciones para clasificar los números según su paridad.
- ✅ **Operador módulo (%):** Su uso para determinar si un número es par o impar.
- ✅ **Múltiples acumuladores y contadores:** Gestionar variables para sumar y contar diferentes categorías (pares e impares).
- ✅ **Vectores para almacenar resultados:** Utilizar arreglos unidimensionales para organizar los resultados del análisis.
- ✅ **Análisis de datos numéricos:** Aplicar la programación para extraer información sobre las propiedades de los números en una matriz.

## ✅ Conclusión

¡Excelente trabajo! Este desafío les permitió construir un algoritmo capaz de analizar una matriz y extraer información estadística sobre la paridad de sus elementos. Al dominar el uso de bucles anidados, la lógica condicional y la gestión de múltiples acumuladores, han dado un gran paso en la creación de programas que procesan y clasifican datos numéricos. ¡Están listos para analizar conjuntos de datos más complejos! 🚀✨
