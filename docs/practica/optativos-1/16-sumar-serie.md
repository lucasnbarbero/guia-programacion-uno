# 🔍 Suma de Serie Progresiva: ¡Encuentra el Límite con `while`! ➕🚀

¡Este es un desafío clásico que demuestra el poder del bucle `while` para encontrar un valor desconocido! En este ejercicio, vas a desarrollar un programa que determine cuál es el **primer número entero** (`n`) en la serie `1, 2, 3, 4, 5, ...` que, al sumarlo con todos los enteros anteriores, hace que la suma total **supere el valor de 120**. Este problema es excelente para practicar el uso de un **bucle `while` con una condición dinámica**, **acumuladores** y la **modificación progresiva** de una variable. 🧠💻

## ✨ ¿Qué debe hacer tu programa?

1.  **Inicializar variables:** Deberás tener:
    - Una variable para la **suma acumulada** de la serie, que debe comenzar en `0`.
    - Una variable para el **número actual** que se está sumando a la serie, que debe comenzar en `1`.
2.  **Sumar y verificar repetidamente:** El programa debe:
    - En cada paso, **sumar el número actual** a la suma acumulada.
    - **Incrementar el número actual** en 1 (para pasar al siguiente entero de la serie).
    - **Continuar este proceso** mientras la suma acumulada sea **menor o igual a 120**.
3.  **Identificar el número límite:** El bucle debe detenerse en el momento en que la suma acumulada **supere por primera vez el valor de 120**. El número actual en ese momento (que fue el último en sumarse para superar el límite) es el que debes encontrar.
4.  **Mostrar el resultado:** El programa debe informar cuál es ese primer número entero que provoca que la suma de la serie supere 120.

> 💡 Tip: La condición del **bucle `while`** debe ser `suma_acumulada <= 120`. Dentro del bucle, primero sumas el `numero_actual` a `suma_acumulada`, y luego incrementas `numero_actual`. ¡Ten cuidado con la variable que imprimes al final, ya que el `numero_actual` se habrá incrementado una vez más después de que la suma haya superado el límite!

## 🧠 ¿Qué se practica en este ejercicio?

Este ejercicio es excelente para reforzar y aplicar varios conceptos clave:

- ✅ **Estructuras de control repetitivas (`while`):** Uso fundamental del bucle `while` donde la condición de terminación es el cumplimiento de un umbral en un valor acumulado.
- ✅ **Variables acumuladoras:** Cómo una variable acumula valores progresivamente hasta alcanzar un objetivo.
- ✅ **Variables de control de bucle:** Uso de una variable que se incrementa en cada iteración para representar la serie numérica.
- ✅ **Lógica de umbral:** Comprender cómo el bucle continúa hasta que una condición numérica (superar un valor) se cumple.
- ✅ **Orden de operaciones dentro del bucle:** La importancia de la secuencia de suma e incremento para obtener el resultado correcto al finalizar el bucle.

## ✅ Conclusión

Este desafío te permite comprender cómo el bucle `while` es indispensable para problemas donde no se conoce de antemano el número exacto de repeticiones, sino que estas dependen de una condición que se alcanza durante la ejecución. ¡Es un paso crucial para que tus alumnos desarrollen algoritmos capaces de resolver problemas de búsqueda y optimización con series numéricas! 📈✨
