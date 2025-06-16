# ⚡ Vector con Transformación Condicional: ¡Modifica Elementos Estratégicamente! ✨🔢

¡Vamos a un desafío que combina el manejo de vectores con la lógica condicional! En este ejercicio, vas a desarrollar un programa que cargue 15 números en un vector y luego modifique sus valores: a las posiciones pares les sumará 2, y a las posiciones impares les sumará 3. Finalmente, deberás mostrar el vector con todos sus valores actualizados. Este problema es excelente para practicar la **iteración sobre vectores**, el **acceso a elementos por índice**, y la aplicación de **condicionales basadas en la paridad del índice**. 🧠💻

## ✨ ¿Qué debe hacer tu programa?

1.  **Declarar un vector:** Crea un vector (o array) capaz de almacenar 15 valores numéricos.
2.  **Cargar 15 números en el vector:** El programa debe pedir al usuario que ingrese 15 números, uno por uno, y almacenarlos secuencialmente en el vector.
3.  **Modificar valores del vector:** Recorre el vector elemento por elemento (o, más precisamente, por índice):
    - Si la **posición (índice) es par** (recuerda que en muchos lenguajes los índices empiezan en 0, así que el índice 0 es par, el 1 impar, el 2 par, etc.): Súmale `2` al valor que se encuentra en esa posición.
    - Si la **posición (índice) es impar**: Súmale `3` al valor que se encuentra en esa posición.
    - **Reemplaza el valor original** de la posición con el nuevo valor calculado.
4.  **Mostrar el vector resultante:** Finalmente, imprime todos los valores del vector después de las modificaciones. Puedes mostrarlos en una sola línea separados por espacios o en líneas individuales.

> 💡 Tip: Utiliza un **bucle `for`** para recorrer el vector, tanto para la carga como para la modificación. Dentro del bucle de modificación, usa una estructura **`if-else`** que verifique la paridad del **índice actual** (usando el operador módulo `% 2 == 0`).

## 🧠 ¿Qué se practica en este ejercicio?

Este ejercicio es excelente para reforzar y aplicar varios conceptos clave:

- ✅ **Declaración y manipulación de vectores:** Crear, cargar y modificar los elementos de un array.
- ✅ **Acceso a elementos por índice:** Comprender cómo se accede a cada posición específica de un vector.
- ✅ **Iteración sobre vectores con bucles:** Usar un bucle para procesar cada elemento de una colección.
- ✅ **Estructuras de control condicionales (`if-else`):** Aplicar lógica diferente basada en una condición (paridad del índice).
- ✅ **Operador módulo (`%`):** Su uso para determinar si un número (el índice) es par o impar.
- ✅ **Actualización de valores en el lugar:** Modificar directamente el contenido de una posición del vector.
- ✅ **Procesamiento de datos en colecciones:** Realizar transformaciones en un conjunto de datos almacenados.

## ✅ Conclusión

Este desafío te permite construir un algoritmo que transforma datos dentro de un vector de manera condicional, una tarea muy común en el procesamiento de información. ¡Es un paso fundamental para que tus alumnos desarrollen programas capaces de manipular colecciones de datos de forma dinámica y aplicar reglas complejas sobre ellos! 📈✨
