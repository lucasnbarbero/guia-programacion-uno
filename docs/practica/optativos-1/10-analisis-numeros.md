# 📊 Análisis de Números: ¡Porcentajes y Promedios con `for`! 📈

¡Vamos a un desafío más completo que integra varios conceptos! En este ejercicio, vas a desarrollar un programa que analice un conjunto de 30 números ingresados por el usuario. Deberás determinar cuántos son pares y cuántos impares, calcular el porcentaje de cada grupo, y además, obtener el promedio de los números pares y el promedio de los números impares por separado. ¡Es una excelente oportunidad para combinar **bucles `for`**, **condicionales `if`**, **acumuladores** y **contadores**! 🧠💻

## ✨ ¿Qué debe hacer tu programa?

1.  **Solicitar 30 números:** El programa debe pedir al usuario que ingrese, uno por uno, un total de 30 números.
2.  **Clasificar y acumular:** A medida que se ingresa cada número, el programa debe:
    - Determinar si el número es **par** o **impar** (usando `numero % 2 == 0`).
    - **Contar** cuántos números son pares y cuántos son impares.
    - **Acumular la suma** de los números pares en una variable y la suma de los números impares en otra.
3.  **Calcular porcentajes:** Una vez procesados los 30 números:
    - Calcular el porcentaje de números pares sobre el total de 30.
    - Calcular el porcentaje de números impares sobre el total de 30.
4.  **Calcular promedios:**
    - Calcular el promedio de los números pares (si hay números pares).
    - Calcular el promedio de los números impares (si hay números impares).
    - _Considera:_ Si no se ingresó ningún número par (o impar), el promedio correspondiente no debe calcularse (o informarse que no hay datos para calcularlo, para evitar división por cero).
5.  **Mostrar los resultados:** El programa debe presentar:
    - Cantidad de números pares.
    - Cantidad de números impares.
    - Porcentaje de números pares.
    - Porcentaje de números impares.
    - Promedio de números pares (o mensaje si no aplica).
    - Promedio de números impares (o mensaje si no aplica).

> 💡 Tip: Necesitarás un **bucle `for`** que se repita 30 veces. Dentro del bucle, usarás una estructura **`if-else`** para clasificar cada número. Dentro de cada rama del `if-else`, tendrás **contadores** y **acumuladores** específicos para pares e impares. ¡No olvides inicializar tus contadores y acumuladores en cero antes del bucle!

## 🧠 ¿Qué se practica en este ejercicio?

Este ejercicio es excelente para reforzar y aplicar varios conceptos clave:

- ✅ **Estructuras de control repetitivas:** Consolidación del **bucle `for`** para iterar un número fijo de veces.
- ✅ **Estructuras de control condicionales:** El uso de **`if-else`** dentro de un bucle para tomar decisiones sobre cada elemento.
- ✅ **Contadores:** Declarar y actualizar variables para contar ocurrencias.
- ✅ **Acumuladores:** Declarar y actualizar variables para sumar valores de forma condicional.
- ✅ **Operadores aritméticos y lógicos:** Uso de `%` para la paridad y operaciones para porcentajes y promedios.
- ✅ **Validación de cálculos:** Prevenir la división por cero al calcular promedios si no hay elementos en una categoría.
- ✅ **Análisis de datos básicos:** Realizar un mini-análisis estadístico sobre un conjunto de datos.

## ✅ Conclusión

Este desafío te permite construir un algoritmo robusto capaz de clasificar, contar y calcular estadísticas básicas sobre un conjunto de datos. ¡Es un paso crucial para que tus alumnos desarrollen programas que puedan procesar información de manera más inteligente y generen informes útiles! 📈✨
