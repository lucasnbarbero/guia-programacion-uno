# ⚽ Análisis de Encuentros Deportivos: ¡Estadísticas con `while`! 🥅🏆

¡Prepárate para un desafío deportivo que te permitirá aplicar todo lo aprendido hasta ahora con el bucle `while`! En este ejercicio, vas a desarrollar un programa que analice los resultados de 15 encuentros deportivos entre dos equipos. Tu algoritmo deberá procesar los marcadores de cada partido para determinar cuál equipo ganó más veces, cuál anotó más goles y el promedio de goles por partido. ¡Esta es una excelente oportunidad para integrar **bucles `while`**, **condicionales complejas**, **contadores**, **acumuladores** y la **identificación de máximos**! 🧠💻

## ✨ ¿Qué debe hacer tu programa?

1.  **Ingresar 15 resultados de partidos:** El programa debe solicitar al usuario que ingrese, para cada uno de los 15 partidos, los goles anotados por el **Equipo A** y los goles anotados por el **Equipo B**.
2.  **Determinar el ganador de cada partido:** Por cada encuentro, el programa debe comparar los goles de ambos equipos:
    - Si los goles del Equipo A son mayores a los del Equipo B, ganó Equipo A.
    - Si los goles del Equipo B son mayores a los del Equipo A, ganó Equipo B.
    - Si los goles son iguales, es un empate.
3.  **Contar victorias y acumular goles:**
    - Mantener un **contador de victorias** para el Equipo A y otro para el Equipo B.
    - Acumular el **total de goles anotados** por el Equipo A (en todos sus partidos).
    - Acumular el **total de goles anotados** por el Equipo B (en todos sus partidos).
    - Acumular el **total general de goles** en todos los partidos.
4.  **Mostrar el equipo con más victorias:** Una vez procesados los 15 partidos:
    - Determinar si el Equipo A ganó más veces, el Equipo B ganó más veces, o si ambos ganaron la misma cantidad de partidos (o si ninguno ganó, es decir, todos fueron empates, aunque esto es menos probable en 15 partidos con un ganador).
    - Indicar qué equipo ganó más y cuántos partidos ganó. Si no hay un claro ganador (ej: empates en victorias), indicarlo.
5.  **Mostrar el equipo con más goles:**
    - Comparar el total de goles acumulados por el Equipo A y el Equipo B.
    - Indicar cuál equipo hizo más goles y la cantidad. Si ambos hicieron la misma cantidad de goles, indicarlo.
6.  **Calcular y mostrar el promedio de goles por partido:** Dividir el total general de goles entre el número total de partidos (15).

> 💡 Tip: Utiliza un **bucle `while`** que se ejecute 15 veces. Dentro del bucle, leerás los goles de ambos equipos. Necesitarás **contadores** para las victorias de cada equipo y **acumuladores** para los goles totales de cada equipo y el total general de goles. Las **estructuras `if-else if-else`** serán cruciales para determinar el ganador de cada partido y actualizar los contadores/acumuladores correspondientes.

## 🧠 ¿Qué se practica en este ejercicio?

Este ejercicio es excelente para reforzar y aplicar múltiples conceptos clave de forma integrada:

- ✅ **Estructuras de control repetitivas (`while`):** Uso del bucle `while` para procesar un número fijo de eventos (15 partidos).
- ✅ **Entrada de múltiples datos por iteración:** Solicitar dos datos (goles de cada equipo) en cada repetición del bucle.
- ✅ **Estructuras de control condicionales complejas:** Uso de **`if-else if-else`** para evaluar múltiples escenarios (victoria A, victoria B, empate) y actualizar variables.
- ✅ **Contadores:** Variables para llevar la cuenta de las victorias de cada equipo.
- ✅ **Acumuladores:** Variables para sumar los goles de cada equipo y el total general.
- ✅ **Lógica de comparación y determinación de máximos:** Encontrar el equipo con más victorias y el equipo con más goles al final del bucle.
- ✅ **Cálculo de promedios:** Aplicar operaciones aritméticas sobre acumuladores.
- ✅ **Manejo de casos especiales:** Indicar si no hay un ganador claro o un equipo con más goles (en caso de empate).

## ✅ Conclusión

Este desafío te permite construir un algoritmo que procesa datos estructurados y genera estadísticas significativas, demostrando la capacidad de la programación para analizar y resumir información. ¡Es un paso fundamental para que tus alumnos desarrollen programas más complejos y orientados al análisis de datos en diversos dominios! 📈✨
