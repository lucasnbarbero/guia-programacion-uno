# 👵👴 Relevamiento de Abuelos: ¡Un Análisis Completo del Hogar! 🏡📊

¡Prepárense para un desafío humanitario que los hará manejar múltiples tipos de datos y realizar un análisis sociodemográfico! En este ejercicio, van a desarrollar un programa para hacer un relevamiento de los 55 abuelos de un hogar. Deberán solicitar y almacenar el nombre, edad, sexo y si tienen obra social. Luego, su algoritmo procesará esta información para extraer una variedad de datos clave, como el abuelo de mayor y menor edad, el promedio de edades, porcentajes y conteos específicos. Este problema es excelente para que ustedes integren **carga de datos variados**, **múltiples vectores paralelos**, **identificación de máximos/mínimos con atributos asociados**, **cálculo de promedios y porcentajes**, y **conteo condicional complejo**. 🧠💻

## ✨ ¿Qué debe hacer su programa?

1.  **Declarar vectores paralelos:** Creen tres vectores (o arrays), todos de tamaño **55** (uno por cada abuelo):

    - `Edades`: Para guardar la edad de cada abuelo (números enteros).
    - `Sexos`: Para guardar el sexo de cada abuelo (pueden usar 'M' para Masculino y 'F' para Femenino, o 0 y 1, según prefieran).
    - `ObraSocial`: Para guardar si tienen obra social (pueden usar `true`/`false` o 1/0).
    - _Importante:_ Los **nombres** de los abuelos se almacenarán en una variable separada cada vez que se ingrese uno, pero para vincularlos con la información de edad/sexo/obra social (especialmente para los puntos 1, 2, 3 y 4), necesitarán guardarlos también en un **cuarto vector paralelo** llamado `Nombres` de tamaño 55. Esto es crucial para poder mostrar el nombre del abuelo de mayor o menor edad.

2.  **Cargar los datos de los 55 abuelos:**

    - El programa debe pedirles que ingresen, uno por uno y para cada abuelo: su **nombre**, **edad**, **sexo** y si **tiene obra social**.
    - Asegúrense de almacenar cada pieza de información en la posición correspondiente de su respectivo vector.

3.  **Realizar los análisis y mostrar los resultados:** Después de cargar todos los datos, el programa debe calcular y mostrar lo siguiente:

    - **1. El abuelo de mayor de edad:**
    - **2. Sexo del abuelo de mayor edad:**
    - **3. Nombre del abuelo de mayor edad:**

      - Necesitarán variables para `max_edad`, `sexo_max_edad`, `nombre_max_edad`, y `posicion_max_edad`.
      - **Inicialicen** `max_edad` con `Edades[0]`, `sexo_max_edad` con `Sexos[0]`, `nombre_max_edad` con `Nombres[0]`, y `posicion_max_edad` con `0`.
      - Recorran el resto del vector `Edades` (junto con `Sexos` y `Nombres`). Si encuentran una edad mayor que `max_edad`, actualicen las cuatro variables.

    - **4. El abuelo de menor de edad:**

      - Similar al anterior, pero buscando el mínimo. Necesitarán `min_edad`, `sexo_min_edad`, `nombre_min_edad`, y `posicion_min_edad`.
      - **Inicialicen** `min_edad` con `Edades[0]`, etc.
      - Recorran el vector y actualicen las variables si encuentran una edad menor que `min_edad`.

    - **5. Promedio general de edades:**

      - Necesitarán un **acumulador** para la suma total de las edades.
      - Dividan la suma total por 55 (el número de abuelos).

    - **6. Porcentaje de abuelos que no tienen obra social:**

      - Necesitarán un **contador** para los abuelos sin obra social.
      - Recorran el vector `ObraSocial`. Si un abuelo `no tiene obra social`, incrementen el contador.
      - Calculen el porcentaje: `(contador_sin_obra_social / 55) * 100`.

    - **7. Cantidad de mujeres que tienen obra social:**

      - Necesitarán un **contador** específico para esta condición.
      - Recorran los vectores `Sexos` y `ObraSocial` simultáneamente. Si encuentran una abuela (`sexo == 'F'`) Y tiene obra social (`obra_social == true`), incrementen el contador.

    - **8. Cantidad de personas que superan el promedio general de edades:**

      - Después de calcular el promedio general de edades, realicen un **segundo recorrido** sobre el vector `Edades`.
      - Por cada abuelo, verifiquen si su edad es **mayor** al promedio calculado.
      - Lleven un **contador** para registrar cuántos abuelos cumplen esta condición.

    - **Mostrar todos los resultados claramente:** Presenten todos los puntos anteriores en la consola de manera organizada y comprensible.

> 💡 Tip: Intenten realizar la mayoría de los cálculos (máximo/mínimo de edad, suma total de edades, conteo de sin obra social, conteo de mujeres con obra social) en un **solo bucle de recorrido** durante o después de la carga inicial de datos. Para el punto 8, necesitarán un bucle separado _después_ de que el promedio de edades haya sido calculado. ¡No olviden inicializar todas sus variables de contadores, acumuladores y seguimiento de máximos/mínimos correctamente!

## 🧠 ¿Qué van a practicar en este ejercicio?

Este ejercicio es excelente para que ustedes refuercen y apliquen múltiples conceptos clave de forma integrada:

- ✅ **Manejo de múltiples vectores paralelos:** Trabajar con varias colecciones de datos donde los elementos en la misma posición están relacionados (todos los datos de un mismo abuelo).
- ✅ **Carga de datos variados:** Solicitar y almacenar diferentes tipos de información (cadenas, números, booleanos).
- ✅ **Identificación de máximos y mínimos con múltiples atributos asociados:** No solo encontrar el valor extremo, sino también recuperar otros datos (nombre, sexo) relacionados con esa entrada.
- ✅ **Cálculo de promedios y porcentajes:** Aplicar fórmulas estadísticas básicas para obtener métricas generales.
- ✅ **Conteo condicional complejo:** Contar elementos que cumplen con _múltiples_ criterios a la vez (ej: mujer _y_ con obra social).
- ✅ **Eficiencia en el procesamiento:** Realizar varios análisis en el menor número de pasadas por los vector.
- ✅ **Organización de la salida:** Presentar múltiples resultados de manera clara y estructurada.

## ✅ Conclusión

¡Felicidades, futuros desarrolladores con impacto social! Este desafío les permitió construir un algoritmo robusto capaz de realizar un análisis sociodemográfico detallado sobre un grupo de personas, manejando diversos tipos de datos de forma interconectada. Al dominar el uso de múltiples vectores paralelos y la extracción de información compleja, han dado un paso crucial para crear programas que gestionan y comprenden la realidad de las personas. ¡Sigan explorando cómo la programación puede ser una herramienta para el bienestar! 🚀✨
