# 📊 Promedio por Columna en una Matriz: ¡Analizando Datos Verticalmente! 📈🖼️

¡Continuamos explorando el fascinante mundo de las matrices! En este nuevo desafío, van a desarrollar un programa que, a partir de una matriz de 20 filas por 10 columnas, calcule y muestre el promedio de los elementos de _cada columna_. Este ejercicio es fundamental para que ustedes practiquen la **declaración de matrices**, el uso estratégico de **bucles anidados** para recorrer la matriz de una manera diferente (por columnas), y la combinación de **acumuladores** con **contadores** para calcular promedios. 🧠💻

## ✨ ¿Qué debe hacer su programa?

1.  **Declarar una matriz:** Creen una matriz (arreglo bidimensional) que tenga **20 filas** y **10 columnas**.
2.  **Cargar la matriz:** El programa debe permitirles ingresar valores numéricos para cada una de las celdas de la matriz. Al igual que en el ejercicio anterior, pueden pedirlos al usuario o inicializarlos para la prueba.
    - _Consejo:_ Para el promedio por columna, es crucial que los datos estén cargados antes de empezar a calcular.
3.  **Calcular el promedio de cada columna:**
    - Recorran la matriz **columna por columna**. Esto significa que el bucle principal (externo) debe ser para las columnas, y el bucle interno debe ser para las filas.
    - Para cada columna, mantengan una variable acumuladora que sume los valores de los elementos de esa columna específica.
    - Una vez que terminen de recorrer una columna completa, dividan la suma acumulada por el número de elementos en esa columna (que es el número de filas, 20).
4.  **Mostrar los resultados por columna:** Después de calcular el promedio de cada columna, el programa debe mostrar un mensaje claro, indicando el promedio de la "Columna 1", la "Columna 2", y así sucesivamente hasta la "Columna 10".

> 💡 Tip: Aquí el orden de los **bucles anidados** es clave. El bucle externo debe ir de **0 a 9** (para las 10 columnas), y el bucle interno debe ir de **0 a 19** (para las 20 filas). ¡Dentro del bucle externo y _antes_ de que comience el bucle interno para cada columna, inicialicen su acumulador de suma de columna en cero! Al finalizar el bucle interno de filas para una columna, calculen y muestren su promedio.

## 🧠 ¿Qué van a practicar en este ejercicio?

Este ejercicio es excelente para que ustedes refuercen y apliquen varios conceptos clave:

- ✅ **Manipulación de matrices:** Seguir trabajando con arreglos bidimensionales, consolidando su declaración y acceso.
- ✅ **Bucles anidados con orden invertido:** Comprender cómo cambiar el orden de los bucles (primero columnas, luego filas) para procesar los datos de una matriz de una manera diferente.
- ✅ **Acumuladores y contadores:** Aplicar estas variables para sumar valores y calcular promedios en un contexto bidimensional.
- ✅ **Acceso a elementos por índices (`matriz[fila][columna]`):** Entender que, aunque cambie el orden de recorrido, la forma de acceder a un elemento sigue siendo la misma.
- ✅ **Análisis de datos en tablas:** Extraer información relevante (promedios) de un conjunto de datos estructurados.
- ✅ **Organización de la salida:** Presentar los resultados de manera clara, columna por columna.

## ✅ Conclusión

¡Excelente trabajo! Este desafío les permitirá construir un algoritmo capaz de analizar datos verticalmente en una matriz, una habilidad fundamental para el procesamiento de información en tablas y reportes. Al dominar el cálculo del promedio por columna, habrán dado otro gran paso en el manejo de estructuras de datos complejas.🚀✨
