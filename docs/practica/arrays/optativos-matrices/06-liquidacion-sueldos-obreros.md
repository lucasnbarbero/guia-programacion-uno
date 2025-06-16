# 💰 Liquidación de Sueldos: ¡Calculando Pagos en una Empresa con Categorías! 🏢📊

¡Prepárense para un desafío de cálculo empresarial que los hará simular la liquidación de sueldos! En este ejercicio, van a desarrollar un programa para una empresa que tiene 100 obreros, distribuidos en 4 categorías profesionales. Deberán cargar las horas trabajadas de cada obrero durante un mes y sus respectivas categorías, además de los precios por hora de cada categoría. Luego, su algoritmo deberá calcular y mostrar cuánto cobrará cada obrero en ese mes. Este problema es excelente para que ustedes integren **múltiples estructuras de datos (matriz y vectores)**, la **carga de datos a gran escala**, la **búsqueda y relación de información entre estructuras**, y la **aplicación de lógica de negocio** para cálculos monetarios. 🧠💻

## ✨ ¿Qué debe hacer su programa?

1.  **Declarar estructuras de datos:** Creen las siguientes estructuras:

    - Una **matriz `HorasTrabajadas`** de **100 filas por 31 columnas**:
      - Cada **fila** representará un **obrero** (del 0 al 99).
      - Cada **columna** representará las **horas trabajadas en un día** del mes (del día 1 al día 31).
      - Los días no trabajados contendrán `0`.
    - Un **vector `CategoriasObreros`** de **100 posiciones**:
      - Cada posición guardará la **categoría profesional** del obrero correspondiente (ej: obrero 0 tiene su categoría en `CategoriasObreros[0]`). Las categorías pueden ser números del 1 al 4, o letras 'A', 'B', 'C', 'D'.
    - Un **vector `PreciosPorHora`** de **4 posiciones**:
      - Este vector ya viene cargado con los **precios por hora** para cada categoría. Por ejemplo, `PreciosPorHora[0]` sería el precio de la Categoría 1, `PreciosPorHora[1]` para la Categoría 2, etc. Ustedes pueden predefinir estos valores en su código para la prueba (ej: `[100, 120, 150, 180]` si son 4 categorías).

2.  **Cargar los datos:**

    - El programa debe permitirles cargar las **horas trabajadas** para cada obrero en cada día del mes en la matriz `HorasTrabajadas`.
    - También deben cargar la **categoría** de cada uno de los 100 obreros en el vector `CategoriasObreros`.
    - Para agilizar las pruebas, es _altamente recomendable_ que inicialicen la matriz y el vector de categorías con valores aleatorios o fijos en su código, en lugar de pedir miles de entradas al usuario.

3.  **Calcular y mostrar el sueldo de cada obrero:**
    - Deberán recorrer a cada uno de los 100 obreros (por ejemplo, con un bucle `for` de 0 a 99).
    - Para cada obrero:
      - **Sumen el total de horas trabajadas en el mes:** Recorran la fila de la matriz `HorasTrabajadas` correspondiente a ese obrero y acumulen las horas.
      - **Obtengan su categoría:** Accedan a `CategoriasObreros[i]` para saber la categoría del obrero actual.
      - **Obtengan el precio por hora de su categoría:** Usen la categoría obtenida como índice (o mapeo) para acceder al `PreciosPorHora` (ej: si las categorías son 1 a 4, quizás deban usar `PreciosPorHora[categoria - 1]`).
      - **Calculen el sueldo del mes:** `Sueldo = Horas_Totales_Mes * Precio_Por_Hora_Categoria`.
      - **Muestren el resultado:** Impriman el sueldo de cada obrero (ej: "Obrero [Número de Obrero]: Sueldo del mes: $[valor]").

> 💡 Tip: Un **bucle principal** (externo) para los 100 obreros. Dentro de este, tendrán un **bucle anidado** para sumar las 31 horas trabajadas de ese obrero en la matriz. Antes del bucle anidado, inicialicen un acumulador para las horas de ese obrero. Después del bucle anidado, usen la categoría del obrero para buscar el precio por hora en el vector `PreciosPorHora` y realicen el cálculo final.

## 🧠 ¿Qué van a practicar en este ejercicio?

Este ejercicio es excelente para que ustedes refuercen y apliquen múltiples conceptos clave de forma integrada:

- ✅ **Manejo de múltiples estructuras de datos:** Trabajar simultáneamente con una matriz y dos vectores para gestionar información relacionada.
- ✅ **Carga de datos a gran escala:** Familiarizarse con la manipulación de grandes volúmenes de datos.
- ✅ **Relación de datos entre estructuras:** Utilizar un dato de un vector (categoría) para acceder a información en otro vector (precio por hora) o matriz (horas).
- ✅ **Acumuladores:** Sumar valores para obtener totales (horas trabajadas por mes por obrero).
- ✅ **Lógica de negocio:** Aplicar reglas y fórmulas específicas de un dominio (cálculo de sueldos) en el código.
- ✅ **Bucle anidado para sumas de fila:** Sumar elementos de las filas de una matriz.
- ✅ **Organización de la salida:** Presentar los resultados de manera clara para cada entidad (cada obrero).

## ✅ Conclusión

¡Excelente trabajo, futuros ingenieros de software empresarial! Este desafío les permitió construir un algoritmo crucial para la gestión de recursos humanos y la liquidación de haberes, simulando un sistema real de cálculo de sueldos. Al dominar la integración de matrices y vectores paralelos, la aplicación de lógicas de negocio y el manejo de datos a gran escala, han dado un paso gigantesco para crear soluciones informáticas que impactan directamente en las operaciones de una empresa. ¡Están listos para diseñar sistemas más complejos y eficientes! 🚀✨
