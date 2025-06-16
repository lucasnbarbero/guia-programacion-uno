# 🔍 Búsqueda de Apellido en Vector: ¡Encuentra a tus Alumnos! 🎯📝

¡Es hora de aplicar sus habilidades en la búsqueda de información dentro de colecciones de datos! En este desafío, van a desarrollar un programa que, dado un vector que contiene los apellidos de 300 alumnos, permita al usuario buscar un apellido específico. Su algoritmo deberá indicar si el apellido fue encontrado y, en caso afirmativo, en qué posición del vector se encuentra. Este ejercicio es perfecto para practicar la **carga de vectores de texto (cadenas)**, la **iteración sobre un vector** y la **lógica de búsqueda secuencial** con una bandera. 🧠💻

## ✨ ¿Qué debe hacer su programa?

1.  **Declarar un vector de apellidos:** Creen un vector (o array) capaz de almacenar 300 apellidos (que serán cadenas de texto/strings).
2.  **Cargar el vector:** Llenen el vector con 300 apellidos de alumnos. Pueden ingresarlos manualmente (para prueba, con menos datos) o simular una carga (ej. con datos predefinidos o aleatorios, si su lenguaje lo permite).
3.  **Solicitar apellido a buscar:** El programa debe pedir al usuario que ingrese el apellido que desea buscar en la lista.
4.  **Realizar la búsqueda:**
    - Recorran el vector, elemento por elemento, desde la primera posición hasta la última.
    - En cada posición, comparen el apellido almacenado con el apellido que el usuario desea buscar.
    - Necesitarán una variable booleana (una "bandera" o "flag"), por ejemplo, `encontrado`, que inicialmente sea `false` (falso). También, una variable para guardar la `posicion_encontrada` (inicializada en -1 o similar).
    - Si encuentran una coincidencia, cambien la bandera `encontrado` a `true`, guarden la posición actual y **detengan la búsqueda** (no tiene sentido seguir buscando si ya lo encontraron).
5.  **Mostrar el resultado:** Una vez que la búsqueda termine:
    - Si la bandera `encontrado` es `true`, el programa debe mostrar: `"Apellido encontrado"` y la `posicion_encontrada` (recuerden que los índices suelen empezar en 0, así que la posición real para el usuario podría ser `indice + 1`).
    - Si la bandera `encontrado` sigue siendo `false`, el programa debe mostrar: `"Apellido no encontrado"`.

> 💡 Tip: Utilicen un **bucle `for`** para recorrer el vector. Dentro del bucle, usen un **`if`** para comparar el apellido del vector con el apellido buscado. Para detener el bucle una vez encontrado, pueden usar una sentencia `break` o modificar la condición del bucle.

## 🧠 ¿Qué van a practicar en este ejercicio?

Este ejercicio es excelente para que ustedes refuercen y apliquen varios conceptos clave:

- ✅ **Declaración y manejo de vectores de cadenas (strings):** Cómo almacenar y trabajar con texto en colecciones.
- ✅ **Iteración sobre vectores:** Recorrer cada elemento de un arreglo para inspeccionar su contenido.
- ✅ **Búsqueda secuencial (lineal):** Implementar uno de los algoritmos de búsqueda más básicos y fundamentales.
- ✅ **Lógica booleana (banderas/flags):** Utilizar una variable para recordar si una condición (el apellido fue encontrado) se cumplió durante el bucle.
- ✅ **Almacenamiento de posición:** Guardar el índice donde se encuentra un elemento.
- ✅ **Comparación de cadenas de texto:** Entender cómo se comparan los valores de tipo string en su lenguaje de programación.
- ✅ **Optimización de bucles:** Comprender cómo detener el bucle una vez que el objetivo ha sido alcanzado.

## ✅ Conclusión

¡Muy bien! Este desafío les permitirá construir un algoritmo de búsqueda básico pero muy potente. La habilidad para encontrar información específica en grandes volúmenes de datos es una de las tareas más comunes en la programación. Al dominar la búsqueda secuencial en un vector, habrán dado un gran paso para desarrollar programas capaces de gestionar y consultar información de manera eficiente. ¡Sigan explorando el emocionante mundo del procesamiento de datos! 🚀✨
