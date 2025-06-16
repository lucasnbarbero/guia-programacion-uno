# 🚚 Gestión de Choferes: ¡Analizando Rutas y Desempeño! 🛣️📊

¡Es hora de poner en práctica sus habilidades para manejar **múltiples vectores en paralelo** y realizar análisis complejos! En este desafío, van a desarrollar un programa para una empresa de transporte. Deberán guardar el nombre de 15 choferes y los kilómetros que cada uno conduce por semana. Su algoritmo procesará esta información para mostrar una lista completa, identificar al chofer con mayor recorrido, calcular el promedio de kilómetros y contar cuántos choferes superan ese promedio. Este problema es excelente para que ustedes integren **bucles**, **manejo de dos vectores simultáneamente**, **identificación de máximos con su índice y dato asociado**, **cálculo de promedios** y **conteo condicional**. 🧠💻

## ✨ ¿Qué debe hacer su programa?

1.  **Declarar dos vectores:** Creen dos vectores (o arrays), ambos de tamaño **15**:
    - `Nombres`: Para guardar los nombres de los 15 choferes (serán cadenas de texto/strings).
    - `Kms`: Para guardar los kilómetros que cada chofer realizó en la semana (serán números).
2.  **Cargar los datos de los 15 choferes:**
    - El programa debe pedirles que ingresen, uno por uno, el **nombre** y la **cantidad de kilómetros** recorridos por cada uno de los 15 choferes.
    - _Aclaración:_ Si un chofer no trabajó esa semana, sus kilómetros se ingresarán como `0`.
3.  **Realizar los análisis y mostrar los resultados:** Después de cargar todos los datos, el programa debe calcular y mostrar lo siguiente:

    - **1. Lista de conductores y kilómetros:**

      - Recorran ambos vectores e impriman el nombre de cada chofer y los kilómetros que realizó en la misma línea (ej: "Chofer: Juan Perez, Kilómetros: 1250").

    - **2. El chofer con mayor kms, su cantidad de kilómetros y su ubicación (índice):**

      - Necesitarán variables para: `max_kms` (para el valor de kilómetros más alto), `nombre_chofer_max_kms` (para el nombre del chofer que lo hizo), y `posicion_max_kms` (para el índice en el vector donde se encuentra).
      - **Inicialicen** `max_kms` con el valor de `Kms[0]`, `nombre_chofer_max_kms` con `Nombres[0]`, y `posicion_max_kms` con `0`.
      - Recorran el vector `Kms` (junto con `Nombres`). Si encuentran un valor mayor que `max_kms`, actualicen las tres variables (`max_kms`, `nombre_chofer_max_kms`, `posicion_max_kms`).
      - _Aclaración:_ Si hay dos o más choferes con la misma cantidad máxima de kilómetros, el algoritmo registrará al primero que cumpla la condición, lo cual es válido para este ejercicio.

    - **3. Promedio de kilómetros realizados en la semana:**

      - Necesitarán un **acumulador** para la suma total de kilómetros.
      - Dividan la suma total por 15 (el número de choferes).

    - **4. Cantidad de choferes que superan el promedio general de kilómetros:**

      - Después de calcular el promedio, realicen un **segundo recorrido** sobre el vector `Kms`.
      - Por cada chofer, verifiquen si sus kilómetros son **mayores** al promedio calculado.
      - Lleven un **contador** para registrar cuántos choferes cumplen esta condición.

    - **Mostrar todos los resultados claramente:** Presenten todos los puntos anteriores en la consola de manera organizada.

> 💡 Tip: Utilicen un **bucle `for`** (o `while` con un contador) para cargar los datos en ambos vectores. Pueden intentar realizar la búsqueda del chofer con más kilómetros y la suma total de kilómetros en **un solo recorrido** del bucle de carga. Para la cantidad de choferes que superan el promedio, necesitarán un **bucle separado** después de haber calculado el promedio. ¡No olviden inicializar todas sus variables de contadores, acumuladores y máximos correctamente!

## 🧠 ¿Qué van a practicar en este ejercicio?

Este ejercicio es excelente para que ustedes refuercen y apliquen múltiples conceptos clave de forma integrada:

- ✅ **Manejo de vectores paralelos:** Trabajar con dos arreglos relacionados donde los elementos en la misma posición corresponden al mismo "objeto" (chofer).
- ✅ **Carga y procesamiento de múltiples datos por iteración:** Solicitar nombre y kilómetros por cada elemento.
- ✅ **Identificación de máximos con datos asociados:** No solo encontrar el valor más grande, sino también el nombre y la posición del elemento asociado.
- ✅ **Cálculo de promedios:** Aplicar la suma y división para obtener una métrica central.
- ✅ **Conteo condicional:** Contar elementos que cumplen una condición específica (superar el promedio).
- ✅ **Eficiencia en el recorrido:** Realizar múltiples tareas (suma, máximo, promedio) con el mínimo de pasadas por los datos.
- ✅ **Organización de la salida:** Presentar múltiples resultados de manera clara y comprensible.

## ✅ Conclusión

¡Excelente trabajo, futuros desarrolladores de sistemas de gestión! Este desafío les permitió construir un algoritmo que no solo almacena información de manera organizada, sino que también la analiza para extraer estadísticas valiosas y tomar decisiones. Al dominar el uso de vectores paralelos y realizar análisis multifacéticos, han dado un gran paso en la creación de programas que gestionan y optimizan recursos en escenarios reales. ¡Sigan así, sus habilidades están creciendo a pasos agigantados! 🚀✨
