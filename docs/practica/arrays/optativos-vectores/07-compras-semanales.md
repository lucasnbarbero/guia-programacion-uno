# 💳 Análisis de Compras Semanales: ¡Controla tus Gastos con Vectores Paralelos! 📊🛍️

¡Prepárense para un desafío práctico que simula el análisis de transacciones financieras! En este ejercicio, van a desarrollar un programa para registrar y analizar las compras semanales realizadas con una tarjeta de débito. Deberán utilizar dos vectores paralelos: uno para los importes de las compras (uno por día) y otro para los nombres de los comercios donde se realizaron. Su algoritmo procesará esta información para identificar la mayor y menor compra, el promedio de gastos, el importe total y más. Este problema es excelente para que ustedes integren **carga de vectores paralelos**, **identificación de máximos/mínimos con datos asociados**, **cálculo de promedios**, **conteo condicional** y la **sumatoria total**. 🧠💻

## ✨ ¿Qué debe hacer su programa?

1.  **Declarar dos vectores:** Creen dos vectores (o arrays), ambos de tamaño **7** (uno por cada día de la semana):

    - `Importes`: Para guardar el importe en pesos de las compras (serán números decimales).
    - `Comercios`: Para guardar el nombre del comercio donde se realizó cada compra (serán cadenas de texto/strings).
    - _Aclaración:_ Cada posición del vector representa un día de la semana, siguiendo el orden: `[0] Domingo, [1] Lunes, [2] Martes, ... [6] Sábado`.

2.  **Cargar los datos de las 7 compras diarias:**

    - El programa debe pedirles que ingresen, para cada uno de los 7 días (pueden guiarse por el índice o mostrar el nombre del día para la carga), el **importe** de la compra y el **nombre del comercio**.
    - _Suposición:_ Se asume que **por cada día se realiza exactamente 1 compra**.

3.  **Realizar los análisis y mostrar los resultados:** Después de cargar todos los datos, el programa debe calcular y mostrar lo siguiente:

    - **1. Mayor compra registrada:**

      - Necesitarán una variable `max_compra` para el importe más alto.
      - Inicialicen `max_compra` con el valor de `Importes[0]`.
      - Recorran el vector `Importes` y actualicen `max_compra` si encuentran un valor superior.

    - **2. Día en que se registró la compra de mayor valor:**

      - Necesitarán una variable `dia_max_compra` (que guarde el índice o el nombre del día).
      - Al mismo tiempo que encuentran `max_compra`, guarden el índice `i` del día en `dia_max_compra`. Recuerden el mapeo de índice a día de la semana (0=Domingo, 1=Lunes...).

    - **3. Menor compra registrada:**

      - Necesitarán una variable `min_compra` para el importe más bajo.
      - Inicialicen `min_compra` con el valor de `Importes[0]`.
      - Recorran el vector `Importes` y actualicen `min_compra` si encuentran un valor inferior.

    - **4. Comercio donde se realizó la compra de menor valor:**

      - Necesitarán una variable `comercio_min_compra` para el nombre del comercio.
      - Al mismo tiempo que encuentran `min_compra`, guarden el nombre del comercio `Comercios[i]` en `comercio_min_compra`.

    - **5. Promedio en pesos de las compras efectuadas:**

      - Necesitarán un **acumulador** para la suma total de todos los importes.
      - Dividan la suma total por 7 (el número de días/compras).

    - **6. Cantidad de compras que no superan el valor promedio:**

      - Después de calcular el promedio, realicen un **segundo recorrido** sobre el vector `Importes`.
      - Por cada importe, verifiquen si es **menor o igual** al promedio calculado.
      - Lleven un **contador** para registrar cuántas compras cumplen esta condición.

    - **7. Importe total en compras:**

      - Esta es la misma **suma total** que usaron para calcular el promedio.

    - **Mostrar todos los resultados claramente:** Presenten todos los puntos anteriores en la consola de manera organizada y comprensible.

> 💡 Tip: Pueden hacer la mayoría de los cálculos (máximo, mínimo, suma total) en un **solo bucle de recorrido** durante o después de la carga inicial de datos. Para el conteo de compras bajo el promedio, necesitarán un bucle separado _después_ de que el promedio ya haya sido calculado. ¡No olviden inicializar todas sus variables de contadores, acumuladores y seguimiento de máximos/mínimos correctamente!

## 🧠 ¿Qué van a practicar en este ejercicio?

Este ejercicio es excelente para que ustedes refuercen y apliquen múltiples conceptos clave de forma integrada:

- ✅ **Manejo de vectores paralelos:** Trabajar con dos arreglos donde la información en la misma posición está relacionada (importe y comercio del mismo día).
- ✅ **Carga de datos interactiva:** Solicitar dos datos por cada iteración del bucle.
- ✅ **Identificación de máximos y mínimos con datos asociados:** No solo encontrar el valor extremo, sino también la información contextual (día, comercio) relacionada con ese valor.
- ✅ **Cálculo de promedios y sumatorias:** Aplicar operaciones fundamentales para obtener métricas totales y centrales.
- ✅ **Conteo condicional:** Contar elementos que cumplen una condición específica (ser igual o inferior al promedio).
- ✅ **Eficiencia en el procesamiento:** Realizar varios análisis en el menor número de recorridos del vector.
- ✅ **Organización de la salida:** Presentar múltiples resultados de manera clara y estructurada.

## ✅ Conclusión

¡Felicidades, futuros analistas! Este desafío les permitió construir un algoritmo completo para gestionar y extraer información valiosa de transacciones, una tarea muy común en el mundo financiero y comercial. Al dominar el uso de vectores paralelos, la identificación de extremos y el cálculo de estadísticas, han dado un gran paso en la creación de programas que ofrecen reportes significativos. ¡Están listos para analizar datos de manera aún más profunda! 🚀✨
