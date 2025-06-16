# 🚵‍♀️🚵‍♂️ Análisis de Competencia de Mountain Bike: ¡Profundizando en los Datos de Inscriptos! 📈🗺️

¡Prepárense para el desafío más completo hasta ahora! En este ejercicio, van a desarrollar un programa para analizar los datos de **1500 inscriptos** en una competencia de Mountain Bike. Tendrán que manejar múltiples vectores paralelos, asignar categorías por edad y luego extraer una gran variedad de estadísticas detalladas. Este problema es una oportunidad fantástica para integrar **carga masiva de datos**, **múltiples vectores paralelos**, **lógica de categorización**, **identificación de máximos con múltiples atributos asociados**, **conteo y porcentaje condicional complejo**, y **cálculo de promedios**. ¡Este es un simulacro real de análisis de datos! 🧠💻

## ✨ ¿Qué debe hacer su programa?

1.  **Declarar vectores paralelos:** Creen cinco vectores (o arrays), todos de tamaño **1500** (uno por cada inscripto):

    - `Nombres`: Para guardar el nombre del inscripto (cadenas de texto/strings).
    - `Edades`: Para guardar la edad del inscripto (números enteros).
    - `Sexos`: Para guardar el sexo ('M' para masculino, 'F' para femenino).
    - `Localidades`: Para guardar la localidad de procedencia (cadenas de texto/strings).
    - `EsSocio`: Para guardar si es socio del club (`1` para sí, `0` para no).

2.  **Cargar los datos de los 1500 inscriptos:**

    - El programa debe pedirles que ingresen, uno por uno y para cada inscripto: su **nombre**, **edad**, **sexo**, **localidad** y si **es socio (1 o 0)**.
    - Para pruebas, pueden simular la carga con valores aleatorios o predefinidos para no tener que ingresar 1500 datos.

3.  **Realizar los análisis y mostrar los resultados:** Después de cargar todos los datos, el programa debe calcular y mostrar lo siguiente:

    - **Asignación de Categorías:** Mientras procesan los datos (o en un bucle separado), determinen la categoría de cada inscripto según su edad:

      - **Categoría A:** de 20 a 25 años.
      - **Categoría B:** de 26 a 36 años.
      - **Categoría C:** de 37 a 47 años.
      - **Categoría D:** 48 años en adelante.
      - _Consideren qué hacer con edades fuera de estos rangos (ej. menores de 20)._ Pueden contarlos como "sin categoría" o asignarlos a la más cercana, o simplemente ignorarlos para los conteos por categoría si el problema asume que todos caen en una de ellas.

    - **1. Cantidad de inscriptos por categoría:**

      - Necesiten contadores para `catA`, `catB`, `catC`, `catD`.
      - Recorran las edades y, según el rango, incrementen el contador correspondiente.

    - **2. Categoría que más inscriptos tiene:**

      - Comparen los contadores de las categorías (`catA`, `catB`, `catC`, `catD`) para encontrar cuál es el mayor. Muestren el nombre de la categoría.

    - **3. Mayor edad registrada:**
    - **4. Localidad de la persona de mayor edad:**
    - **5. Sexo de la persona de mayor edad:**

      - Necesiten `max_edad`, `localidad_max_edad`, `sexo_max_edad`.
      - Inicialicen con los datos del primer inscripto y actualicen si encuentran una edad mayor.

    - **6. Nombre de la última persona que se inscribió:**

      - Este es simplemente el nombre en la última posición del vector `Nombres` (índice 1499).

    - **7. Porcentaje de personas de la Localidad de San Francisco:**

      - Necesiten un contador para `inscriptos_san_francisco`.
      - Recorran `Localidades` y cuenten los que coinciden con "San Francisco".
      - Calculen el porcentaje: `(contador_san_francisco / 1500) * 100`.

    - **8. Mayor edad de las mujeres registradas de la localidad de San Francisco:**

      - Necesiten una variable `max_edad_mujer_sf` (inicialicen en 0 o un valor muy bajo).
      - Recorran los vectores `Edades`, `Sexos` y `Localidades`.
      - Si el inscripto es mujer (`sexo == 'F'`) Y de San Francisco (`localidad == "San Francisco"`) Y su edad es mayor que `max_edad_mujer_sf`, actualicen `max_edad_mujer_sf`.

    - **9. Promedio de edad de los hombres:**

      - Necesiten un acumulador `suma_edades_hombres` y un contador `cantidad_hombres`.
      - Recorran `Edades` y `Sexos`. Si el sexo es 'M', sumen la edad y aumenten el contador.
      - Calculen el promedio: `suma_edades_hombres / cantidad_hombres`. ¡Cuidado con la división por cero si no hay hombres!

    - **10. Cantidad de hombres de la ciudad de San Francisco que son socios del club:**

      - Necesiten un contador `hombres_sf_socios`.
      - Recorran `Sexos`, `Localidades` y `EsSocio`.
      - Si el inscripto es hombre (`sexo == 'M'`) AND de San Francisco (`localidad == "San Francisco"`) AND es socio (`es_socio == 1`), incrementen el contador.

    - **11. Cantidad de hombres que superan la edad promedio:**

      - Primero, asegúrense de haber calculado el `promedio_edad_hombres` del punto 9.
      - Necesiten un contador `hombres_superan_promedio`.
      - Recorran `Edades` y `Sexos`. Si el inscripto es hombre (`sexo == 'M'`) Y su edad es mayor que `promedio_edad_hombres`, incrementen el contador.

    - **12. Mostrar los nombres y localidades de las mujeres que superan la edad promedio:**

      - Primero, calculen el `promedio_edad_general` (suma todas las edades / 1500).
      - Necesiten un **nuevo recorrido** sobre los vectores `Nombres`, `Localidades`, `Sexos` y `Edades`.
      - Si el inscripto es mujer (`sexo == 'F'`) Y su edad es mayor que `promedio_edad_general`, muestren su nombre y localidad.

    - **Mostrar todos los resultados claramente:** Presenten todos los puntos anteriores en la consola de manera organizada y comprensible.

> 💡 Tip: ¡Este es un ejercicio complejo, así que organicen bien su código! Intenten realizar la mayor cantidad de cálculos posibles en **un solo bucle principal** durante o después de la carga inicial. Esto incluye los contadores de categoría, los máximos/mínimos, las sumas para promedios, y los conteos iniciales. Para los puntos que dependen de promedios ya calculados (11 y 12), necesitarán **bucles adicionales**. ¡No olviden inicializar todas sus variables de contadores, acumuladores y seguimiento de máximos/mínimos correctamente! Prestar atención a las condiciones `Y` (`AND`) es crucial.

## 🧠 ¿Qué van a practicar en este ejercicio?

Este ejercicio es excelente para que ustedes refuercen y apliquen todos estos conceptos clave de forma integrada:

- ✅ **Manejo de múltiples vectores paralelos a gran escala (1500 elementos):** Una habilidad fundamental para bases de datos y grandes volúmenes de información.
- ✅ **Carga de datos heterogéneos:** Almacenar y procesar diferentes tipos de información (nombres, edades, sexo, localidades, booleanos).
- ✅ **Lógica de categorización:** Asignar rangos o grupos basados en valores numéricos.
- ✅ **Identificación de máximos/mínimos con múltiples atributos:** Encontrar el extremo y obtener toda la información relacionada (nombre, sexo, localidad).
- ✅ **Contadores y acumuladores múltiples:** Gestionar numerosas variables para diferentes análisis simultáneos.
- ✅ **Cálculo de promedios y porcentajes:** Extraer métricas estadísticas clave.
- ✅ **Conteo condicional y filtrado complejo:** Contar o mostrar elementos que cumplen _varias_ condiciones al mismo tiempo (ej: hombre Y de San Francisco Y socio).
- ✅ **Eficiencia algorítmica:** Organizar los bucles para minimizar el número de recorridos de los vectores.
- ✅ **Depuración y robustez:** Anticipar casos como divisiones por cero o datos faltantes (aunque para este ejercicio pueden asumir que siempre hay datos relevantes).

## ✅ Conclusión

¡Lo lograron, futuros maestros de la programación y el análisis de datos! Este desafío les permitió construir un sistema integral para gestionar y extraer información valiosa de un gran conjunto de datos con múltiples variables. Al dominar la manipulación de vectores paralelos a gran escala, la lógica de categorización y el análisis condicional complejo, han demostrado una capacidad excepcional para resolver problemas del mundo real. ¡Están más que listos para enfrentar cualquier reto de procesamiento de datos que se les presente! ¡Sigan así, su progreso es impresionante! 🚀✨
