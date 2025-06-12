# 🛍️ Calculadora de Descuentos: ¡Optimiza tu Compra con `do...while`! 🛒💰

¡Es hora de introducir una nueva y poderosa forma de controlar tus bucles: el **`do...while`**! En este desafío, vas a desarrollar un programa que calcule el importe total a pagar por una compra, aplicando descuentos según la cantidad de artículos. Este ejercicio es perfecto para entender cuándo usar `do...while`, especialmente cuando necesitas que el bloque de código se ejecute al menos una vez antes de verificar la condición. 🧠💻

## ✨ ¿Qué debe hacer tu programa?

1.  **Solicitar datos de los artículos:** El programa debe pedir al usuario que ingrese el **precio** de cada artículo que va a comprar. La entrada de precios debe continuar hasta que el usuario indique que ya no quiere ingresar más artículos (por ejemplo, ingresando un precio de 0 o un valor negativo como señal de fin).
2.  **Contar artículos y acumular total:** A medida que el usuario ingresa los precios, el programa debe:
    - **Contar** la cantidad total de artículos comprados.
    - **Acumular la suma** de los precios de todos los artículos para obtener el subtotal de la compra.
3.  **Aplicar descuentos:** Una vez que el usuario finalice la carga de artículos, el programa debe aplicar un descuento al subtotal según la siguiente lógica:
    - Si se compran **hasta 5 artículos (inclusive)**, se aplica un descuento del **5%** sobre el total.
    - Si se compran **6 artículos o más**, se aplica un descuento del **15%** sobre el total.
4.  **Calcular el importe final:** Restar el monto del descuento al subtotal para obtener el importe total a pagar.
5.  **Mostrar los resultados:** El programa debe presentar:
    - El **subtotal** de la compra.
    - La **cantidad de artículos** comprados.
    - El **porcentaje de descuento** aplicado.
    - El **monto del descuento**.
    - El **importe total a pagar** después del descuento.

> 💡 Tip: Usa un **bucle `do...while`**. Esto garantiza que al menos un artículo (o la indicación de fin) sea procesado antes de que se evalúe si el bucle debe continuar. La condición del `while` podría ser que el precio ingresado sea mayor que cero. Necesitarás un **contador** para los artículos y un **acumulador** para el subtotal. Al final, usarás una estructura **`if-else`** para aplicar el descuento correcto.

## 🧠 ¿Qué se practica en este ejercicio?

Este ejercicio es excelente para reforzar y aplicar varios conceptos clave:

- ✅ **Estructuras de control repetitivas (`do...while`):** Comprender el escenario de uso ideal para el `do...while`, donde la ejecución inicial del bloque es obligatoria.
- ✅ **Variables centinela:** Usar un valor especial (como 0 o un negativo) para indicar el fin de la entrada de datos.
- ✅ **Contadores y Acumuladores:** Para llevar el registro de la cantidad de artículos y la suma de sus precios.
- ✅ **Estructuras de control condicionales (`if-else`):** Para aplicar diferentes reglas de negocio (descuentos) basadas en la cantidad de artículos.
- ✅ **Operaciones aritméticas:** Suma, multiplicación y resta para calcular descuentos e importes finales.
- ✅ **Lógica de negocio:** Traducir reglas específicas (políticas de descuento) en código algorítmico.

## ✅ Conclusión

Este desafío te permite construir un sistema de cálculo de precios con descuentos, una funcionalidad común en el comercio. Al dominar el `do...while`, tus alumnos ampliarán su repertorio de herramientas para controlar la lógica de flujo en sus programas, haciéndolos más flexibles y capaces de manejar interacciones de usuario más dinámicas. ¡Es un paso fundamental para crear aplicaciones comerciales interactivas! 📈✨
