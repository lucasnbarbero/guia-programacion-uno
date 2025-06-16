# 🌡️ Análisis Climático Mensual: ¡Descifrando las Temperaturas de un Mes! ☀️📉

¡Prepárense para ser meteorólogos por un día con este nuevo desafío de vectores! En este ejercicio, van a desarrollar un programa que gestione las temperaturas medias de un mes completo (30 días). Deberán cargar estas temperaturas en un vector y luego procesarlas para obtener diversas estadísticas climáticas. Este problema es excelente para que ustedes refuercen la **carga de vectores**, la **identificación de máximos/mínimos con sus posiciones**, el **conteo condicional**, y el **cálculo de porcentajes** en un conjunto de datos. 🧠💻

## ✨ ¿Qué debe hacer su programa?

1.  **Declarar un vector:** Creen un vector (o array) capaz de almacenar **30 valores numéricos** (las temperaturas medias diarias).
2.  **Cargar el vector:** El programa debe pedirles que ingresen la temperatura media para cada uno de los 30 días del mes. Pueden simular la carga para agilizar las pruebas.
3.  **Realizar los análisis y mostrar los resultados:** Después de cargar todos los datos, el programa debe calcular y mostrar lo siguiente:

    - **a. La temperatura mínima y máxima del mes:**

      - Necesitarán una variable `min_temp` y otra `max_temp`.
      - **Inicialicen** `min_temp` y `max_temp` con el valor de la **primera temperatura del vector** (`vector[0]`).
      - Recorran el resto del vector y actualicen `min_temp` y `max_temp` si encuentran valores menores o mayores, respectivamente.

    - **b. Día de temperatura mínima y máxima:**

      - Necesitarán variables `dia_min_temp` y `dia_max_temp` para guardar la posición (índice) del día en que se registraron esas temperaturas.
      - Al mismo tiempo que actualizan `min_temp` y `max_temp`, guarden el índice `i` correspondiente en `dia_min_temp` y `dia_max_temp`. Recuerden que el índice 0 corresponde al Día 1, el 1 al Día 2, etc. (o el Día 1 es la posición 0 para la entrada del usuario).

    - **c. Porcentaje de días con temperatura inferior a 10º:**

      - Necesitarán un **contador** para los días con temperatura menor a 10 grados.
      - Recorran el vector y, por cada temperatura, verifiquen si es `menor a 10`. Si lo es, incrementen el contador.
      - Calculen el porcentaje: `(contador_inferior_10 / 30) * 100`.

    - **d. Cantidad de días con temperatura superior a 20º:**

      - Necesitarán un **contador** para los días con temperatura mayor a 20 grados.
      - Recorran el vector y, por cada temperatura, verifiquen si es `mayor a 20`. Si lo es, incrementen el contador.

    - **Mostrar todos los resultados claramente:** Presenten todos los puntos anteriores en la consola de manera organizada y comprensible. Asegúrense de que el "Día" que muestran sea el número de día del mes (1 al 30), no el índice del arreglo.

> 💡 Tip: Pueden realizar la mayoría de los cálculos (mínimo, máximo, conteo de temperaturas bajo 10, conteo de temperaturas sobre 20) en un **solo recorrido** del vector después de la carga inicial. ¡No olviden inicializar todas sus variables de contadores y para seguimiento de máximos/mínimos correctamente antes de empezar!

## 🧠 ¿Qué van a practicar en este ejercicio?

Este ejercicio es excelente para que ustedes refuercen y apliquen múltiples conceptos clave de forma integrada:

- ✅ **Manejo de vectores:** Continuar practicando la carga y el procesamiento de datos en arreglos.
- ✅ **Identificación de máximos y mínimos con posición:** No solo encontrar los valores extremos, sino también el "día" (posición) en que ocurrieron.
- ✅ **Conteo condicional:** Contar elementos que cumplen con criterios específicos (temperatura inferior a 10º, superior a 20º).
- ✅ **Cálculo de porcentajes:** Aplicar fórmulas matemáticas para obtener proporciones.
- ✅ **Eficiencia en el procesamiento:** Realizar varios análisis en el menor número de pasadas por el vector.
- ✅ **Transformación de índices a valores reales:** Mapear el índice del arreglo (0-29) a un número de día (1-30) para la salida al usuario.
- ✅ **Análisis de datos climáticos:** Aplicar la programación a un escenario práctico de datos ambientales.

## ✅ Conclusión

¡Excelente, futuros científicos de datos! Este desafío les permitió construir un algoritmo completo para analizar un conjunto de datos temporales (temperaturas a lo largo de un mes) y extraer información climática clave. Al dominar la identificación de extremos, los conteos condicionales y los cálculos de porcentajes en vectores, han dado un gran paso en la creación de programas que ofrecen análisis detallados y significativos. ¡Sigan explorando cómo la programación puede ayudarlos a entender el mundo que los rodea! 🚀✨
