# 🌡️ Análisis Climático Semanal: ¡Descubre el Clima con `while`! ☀️❄️

¡Es hora de sumergirnos en el fascinante mundo del bucle `while`! En este desafío, vas a desarrollar un programa que analice las temperaturas de una semana completa, calculando el promedio, identificando los días más extremos y el porcentaje de temperaturas bajo cero. Este ejercicio es perfecto para entender cuándo y cómo utilizar el **bucle `while`** para procesar un número fijo de entradas, así como para aplicar tus conocimientos de **acumuladores**, **contadores** y **estructuras condicionales**. 🧠💻

## ✨ ¿Qué debe hacer tu programa?

1.  **Ingresar temperaturas diarias:** El programa debe solicitar al usuario que ingrese la temperatura de cada uno de los 7 días de la semana.
    * *Aclaración:* Se asume que se ingresa **una temperatura por día** y que **todas las temperaturas son diferentes** entre sí.
2.  **Calcular el promedio semanal:** Sumar todas las temperaturas y dividirlas por 7.
3.  **Identificar día más frío y caluroso:** Determinar cuál fue la temperatura más baja y a qué día correspondió, y cuál fue la temperatura más alta y a qué día correspondió.
    * *Consejo:* Necesitarás variables para almacenar la temperatura mínima y máxima, y variables adicionales para guardar el número o nombre del día correspondiente.
    * *Inicialización:* Al igual que en ejercicios anteriores, puedes inicializar `temperatura_minima` con un valor muy alto y `temperatura_maxima` con uno muy bajo, o con la temperatura del primer día.
4.  **Calcular porcentaje de temperaturas bajo cero:** Contar cuántas temperaturas fueron menores a cero y calcular qué porcentaje representan del total de 7 días.
5.  **Mostrar los resultados:** El programa debe informar:
    * El promedio de temperatura semanal.
    * La temperatura del día más frío y el día de la semana al que pertenece (ej: "Lunes").
    * La temperatura del día más caluroso y el día de la semana al que pertenece.
    * El porcentaje de temperaturas que estuvieron bajo cero.

> 💡 Tip: Utiliza un **bucle `while`** que se repita 7 veces (una por cada día de la semana). Puedes usar una variable de control o un contador que se incremente en cada iteración y el bucle se ejecute mientras ese contador sea menor o igual a 7. Dentro del bucle, además de pedir la temperatura, realizarás las comparaciones para el día más frío/caluroso y el conteo de temperaturas bajo cero.

## 🧠 ¿Qué se practica en este ejercicio?

Este ejercicio es excelente para reforzar y aplicar varios conceptos clave:

-   ✅ **Estructuras de control repetitivas (`while`):** Comprender el uso del bucle `while` cuando la condición de terminación es un contador o un límite fijo.
-   ✅ **Contadores:** Para llevar el control de los días y las temperaturas bajo cero.
-   ✅ **Acumuladores:** Para sumar las temperaturas y calcular el promedio.
-   ✅ **Variables de seguimiento (máximo/mínimo):** Identificar y almacenar los valores extremos y sus correspondientes días.
-   ✅ **Estructuras de control condicionales (`if`):** Para realizar comparaciones y clasificar temperaturas (bajo cero, mayor, menor).
-   ✅ **Manejo de múltiples variables:** Coordinar varias variables para almacenar datos y resultados intermedios.
-   ✅ **Cálculo de porcentajes:** Aplicar operaciones matemáticas para obtener proporciones.

## ✅ Conclusión

Este desafío te permite construir un algoritmo robusto para el análisis de datos secuenciales, utilizando el bucle `while` de manera efectiva. ¡Es un paso fundamental para que tus alumnos comprendan cómo procesar series de datos y extraer información relevante, aplicando de forma integrada varias herramientas de programación! 📈✨