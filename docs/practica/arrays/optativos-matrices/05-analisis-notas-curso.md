# 🎓 Análisis de Notas: ¡Evaluando el Rendimiento Académico de un Curso! 📝📊

¡Prepárense para un desafío académico que los hará procesar y analizar las calificaciones de un curso! En este ejercicio, van a desarrollar un programa para gestionar las notas de 25 alumnos en 6 asignaturas. Deberán utilizar una matriz para organizar estas notas y luego extraer información clave como promedios individuales y generales, además de calcular el porcentaje de alumnos promocionados. Este problema es excelente para que ustedes refuercen la **manipulación de matrices**, el **cálculo de promedios por fila (alumno) y generales (curso)**, y el **conteo condicional** para determinar promociones. 🧠💻

## ✨ ¿Qué debe hacer su programa?

1.  **Declarar y cargar una matriz de notas:** Creen una matriz (arreglo bidimensional) de **6 filas por 25 columnas**:

    - Cada **fila** representará una de las **6 asignaturas**.
    - Cada **columna** representará la nota de un **alumno** en esa asignatura.
    - _Nota importante para el manejo de datos:_ Si las filas son asignaturas y las columnas son alumnos, para obtener las notas de un _alumno_ y su promedio, tendrán que recorrer la matriz de una manera específica (transpuesta, o fijando la columna y variando la fila). Un enfoque más intuitivo para "Notas de cada alumno" sería que las **filas sean los alumnos** y las **columnas sean las asignaturas**. Para este ejercicio, vamos a seguir la descripción del problema: **6 asignaturas \* 25 alumnos**, lo que significa que `matriz[i][j]` es la nota del alumno `j` en la asignatura `i`. Para el punto 1 (nota de cada alumno y su promedio), esto implica que deberán sumar a lo largo de las filas (asignaturas) para cada columna (alumno).

    - El programa debe permitirles cargar las notas (valores numéricos, por ejemplo, del 1 al 10) para cada asignatura de cada alumno. Para agilizar las pruebas, pueden inicializar la matriz con valores fijos o aleatorios.

2.  **Realizar los análisis y mostrar los resultados:** Después de cargar todos los datos, el programa debe calcular y mostrar lo siguiente:

    - **1. Mostrar la nota de cada alumno y su promedio:**

      - Recorran la matriz **alumno por alumno** (es decir, columna por columna si las columnas son alumnos).
      - Para cada alumno (cada columna `j`):
        - Necesitarán un **acumulador** para sumar sus 6 notas.
        - Mostrar las 6 notas de ese alumno.
        - Calcular su promedio dividiendo la suma por 6 (número de asignaturas).
        - Mostrar el promedio del alumno.
      - _Ejemplo de salida:_
        ```
        Alumno 1: Notas: [nota Asig1] [nota Asig2] ... [nota Asig6] - Promedio: [valor]
        Alumno 2: ...
        ```

    - **2. Mostrar el promedio general del curso:**

      - Necesitarán un **acumulador** para sumar _todas_ las notas de _todos_ los alumnos en _todas_ las asignaturas (6 \* 25 = 150 notas).
      - Dividan esa suma total por 150 para obtener el promedio general del curso.
      - Muestren el "Promedio General del Curso: [valor]".

    - **3. Mostrar el porcentaje de alumnos promocionados (promedio mayor o igual a 7):**
      - Necesitarán un **contador** para los alumnos promocionados.
      - Mientras calculan los promedios individuales de los alumnos (punto 1), si el promedio de un alumno es **mayor o igual a 7**, incrementen el contador de promocionados.
      - Al finalizar el cálculo de todos los promedios individuales, calculen el porcentaje: `(contador_promocionados / 25) * 100`.
      - Muestren el "Porcentaje de Alumnos Promocionados: [valor]%".

> 💡 Tip: Pueden hacer un **primer conjunto de bucles anidados** para la carga de la matriz. Luego, usen **otro conjunto de bucles anidados** para calcular los promedios por alumno, el promedio general y el conteo de promocionados en una sola pasada. Recuerden que para calcular el promedio de cada alumno, el bucle externo debe iterar por alumnos (columnas) y el interno por asignaturas (filas). ¡No olviden inicializar los acumuladores y contadores adecuadamente!

## 🧠 ¿Qué van a practicar en este ejercicio?

Este ejercicio es excelente para que ustedes refuercen y apliquen múltiples conceptos clave de forma integrada:

- ✅ **Manipulación de matrices:** Trabajar con estructuras de datos bidimensionales para organizar las calificaciones.
- ✅ **Bucles anidados con roles específicos:** Entender cómo el orden de los bucles externos e internos afecta el procesamiento (ej. iterar por alumno vs. por asignatura).
- ✅ **Cálculo de promedios a diferentes niveles:** Obtener promedios individuales (por alumno) y un promedio global (del curso).
- ✅ **Acumuladores y contadores:** Utilizar variables para sumar notas y contar alumnos que cumplen ciertas condiciones.
- ✅ **Lógica condicional para criterios:** Aplicar condiciones (`>= 7`) para determinar la promoción.
- ✅ **Cálculo de porcentajes:** Convertir una proporción en un valor porcentual.
- ✅ **Análisis de datos académicos:** Aplicar la programación para evaluar el desempeño en un entorno educativo.
- ✅ **Organización de la salida:** Presentar los resultados de manera clara para diferentes niveles de análisis (alumno, curso).

## ✅ Conclusión

¡Excelente, futuros ingenieros de sistemas educativos! Este desafío les permitió construir un algoritmo crucial para el seguimiento del rendimiento académico, procesando notas para obtener promedios y porcentajes de promoción. Al dominar el análisis de matrices de esta manera, han dado un gran paso en la creación de programas que gestionan y evalúan el aprendizaje. ¡Están listos para construir herramientas que apoyen la educación! 🚀✨
