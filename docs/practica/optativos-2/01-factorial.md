# 🔢 Cálculo de Factorial: ¡Potencia tu Lógica Iterativa! 🚀

¡Prepárate para un desafío clásico y fundamental en la programación! En este ejercicio, vas a desarrollar un programa que calcule el **factorial de un número entero N** ingresado por el usuario. El factorial es una operación matemática básica pero muy importante en diversas áreas. Este problema es una excelente oportunidad para aplicar tu conocimiento de **bucles** (ya sea `for` o `while`), **acumuladores** y la **validación de entradas**. 🧠💻

## ✨ ¿Qué debe hacer tu programa?

1.  **Solicitar un número N:** El programa debe pedir al usuario que ingrese un número entero positivo (`N`) para el cual se calculará el factorial.
    - _Validación:_ Considera que el factorial solo está definido para números enteros no negativos. Tu programa podría (opcionalmente) validar que el número sea positivo.
2.  **Calcular el factorial:** El factorial de un número entero positivo `N` (escrito como `N!`) es el producto de todos los enteros positivos desde 1 hasta `N`.
    - Por ejemplo: `5! = 5 * 4 * 3 * 2 * 1 = 120`
    - El factorial de 0 es 1 (`0! = 1`).
    - _Consejo:_ Necesitarás una variable para acumular el producto (que debe inicializarse en 1, no en 0, para que la multiplicación funcione correctamente).
3.  **Mostrar el resultado:** El programa debe presentar el número `N` ingresado y su factorial calculado.

> 💡 Tip: Puedes resolver esto con un **bucle `for`** que vaya desde 1 hasta N, multiplicando cada número por un acumulador. O puedes usar un **bucle `while`** que se ejecute mientras el número actual sea mayor que 1 (o 0, si manejas el caso 0! dentro del bucle). Piensa en el caso especial de `N=0` y `N=1`.

## 🧠 ¿Qué se practica en este ejercicio?

Este ejercicio es excelente para reforzar y aplicar varios conceptos clave:

- ✅ **Estructuras de control repetitivas:** Aplicación de un bucle (`for` o `while`) para realizar multiplicaciones repetitivas.
- ✅ **Variables acumuladoras (de producto):** Cómo inicializar y actualizar una variable para acumular el resultado de una multiplicación secuencial.
- ✅ **Condiciones de bucle:** Definir correctamente el inicio, el fin y el paso del bucle.
- ✅ **Manejo de casos especiales:** Considerar y tratar `N=0` o `N=1`.
- ✅ **Operaciones aritméticas:** Uso de la multiplicación dentro de un bucle.
- ✅ **Pensamiento iterativo:** Descomponer un problema complejo (factorial) en pasos repetitivos simples.

## ✅ Conclusión

Este desafío te permite construir un algoritmo fundamental que ilustra perfectamente el poder de los bucles para resolver problemas matemáticos. ¡Dominar el cálculo del factorial es un paso clave para que tus alumnos comprendan cómo la programación puede automatizar cálculos complejos y es la base para entender recursividad y otras estructuras de datos! 📈✨
