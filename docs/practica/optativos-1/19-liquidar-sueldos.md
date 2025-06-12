# 👨‍🏭 Liquidación de Sueldos con Bonificación: ¡Calcula Incrementos con `do...while`! 💸📈

¡Es momento de aplicar tus conocimientos para un problema de liquidación de sueldos! En este desafío, vas a desarrollar un programa interactivo que calcule el nuevo sueldo de un grupo de trabajadores de una fábrica, aplicando una bonificación especial basada en su sueldo actual. Este ejercicio es excelente para practicar el uso del **bucle `do...while`** con una condición de fin basada en un valor centinela (el apellido "Zapata"), así como la aplicación de **múltiples condiciones** y **cálculos porcentuales**. 🧠💻

## ✨ ¿Qué debe hacer tu programa?

1.  **Ingresar datos de trabajadores:** El programa debe solicitar el **nombre y apellido** y el **sueldo actual** de cada trabajador.
    - _Importante:_ La entrada de datos debe continuar hasta que se ingrese el apellido "Zapata" para el último trabajador. Se asume que la lista de trabajadores está ordenada alfabéticamente y "Zapata" siempre será el último.
2.  **Calcular incremento y nuevo sueldo:** Para cada trabajador, el programa debe aplicar la siguiente política de bonificación:
    - Si el sueldo es **menor o igual a $1000**, se incrementa un **20%**.
    - Si el sueldo es **superior a $1000** e **inferior o igual a $2000**, se incrementa un **15%**.
    - Si el sueldo es **superior a $2000**, se incrementa un **10%**.
3.  **Mostrar resultados por trabajador:** Para cada trabajador procesado, el programa debe imprimir en la consola:
    - El **nombre y apellido** del trabajador.
    - Su **sueldo original**.
    - El **porcentaje de incremento** aplicado.
    - El **monto del incremento**.
    - El **sueldo final** (sueldo original + incremento).

> 💡 Tip: Utiliza un **bucle `do...while`**. La condición del `while` debe verificar que el apellido ingresado **no sea** "Zapata" (o continuar mientras el apellido sea diferente de "Zapata"). Dentro del bucle, pedirás los datos del trabajador y usarás una estructura **`if-else if-else`** para aplicar el porcentaje de incremento correcto y realizar los cálculos. ¡Recuerda manejar el caso de "Zapata" para que se procese su sueldo correctamente y el bucle termine después de él!

## 🧠 ¿Qué se practica en este ejercicio?

Este ejercicio es excelente para reforzar y aplicar múltiples conceptos clave de forma integrada:

- ✅ **Estructuras de control repetitivas (`do...while`):** Uso del bucle `do...while` para procesar una cantidad indeterminada de entradas, finalizando con un valor centinela.
- ✅ **Entrada de múltiples datos:** Solicitar diferentes tipos de datos (texto para nombre/apellido, número para sueldo) en cada iteración.
- ✅ **Estructuras de control condicionales (`if-else if-else`):** Aplicar múltiples rangos y condiciones para determinar el cálculo del incremento.
- ✅ **Cálculos porcentuales:** Realizar operaciones matemáticas para obtener el monto del incremento y el sueldo final.
- ✅ **Variables de tipo cadena (string):** Manejar y comparar texto (apellido).
- ✅ **Lógica de negocio compleja:** Traducir una política de bonificación con diferentes rangos en código ejecutable.

## ✅ Conclusión

Este desafío te permite construir un algoritmo que simula un sistema de liquidación de sueldos, una tarea administrativa común. Al dominar el `do...while` con un centinela y aplicar lógica condicional compleja, tus alumnos desarrollarán programas más flexibles y capaces de manejar flujos de datos variados. ¡Es un paso fundamental para crear aplicaciones de gestión y administración! 📈✨
