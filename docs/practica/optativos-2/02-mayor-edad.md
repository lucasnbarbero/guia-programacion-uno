# 👵👴 La Persona Más Vieja: ¡Encuéntrala en 250! 🗓️👑

¡Prepárate para un desafío que te hará procesar fechas y encontrar el extremo en un gran conjunto de datos! En este ejercicio, vas a desarrollar un programa que, a partir de los datos de nacimiento de 250 personas, determine cuál es la persona de mayor edad en el grupo. Este problema es una excelente oportunidad para aplicar **bucles**, **variables de seguimiento (máximo)** y la **lógica de comparación de fechas** (simplificada para este caso). 🧠💻

## ✨ ¿Qué debe hacer tu programa?

1.  **Solicitar datos de 250 personas:** El programa debe pedir al usuario que ingrese, para cada una de las 250 personas:
    - El **día de nacimiento** (`dd`)
    - El **mes de nacimiento** (`mm`)
    - El **año de nacimiento** (`aa`)
    - _Nota importante:_ Para simplificar, **suponga que todos los meses tienen 30 días y el año tiene 360 días**. Esto te permitirá comparar fechas de forma más directa.
2.  **Identificar la persona más vieja:** A medida que se ingresan los datos de cada persona, el programa debe comparar su fecha de nacimiento con la fecha de nacimiento de la persona que hasta el momento se considera la más vieja.
    - _Criterio:_ La persona más vieja es aquella que nació en el **año más bajo**. Si dos personas nacieron en el mismo año, la más vieja es la que nació en el **mes más bajo** de ese año. Si también coinciden en el mes, la más vieja es la que nació en el **día más bajo** de ese mes.
    - _Consejo:_ Necesitarás variables para almacenar el día, mes y año de nacimiento de la persona más vieja encontrada hasta el momento. También, una variable para recordar el **número de persona** o alguna forma de identificarla.
    - _Inicialización:_ Puedes inicializar estas variables con los datos de la primera persona ingresada, o con valores extremos para que cualquier fecha real sea "más reciente" (para buscar el más viejo) o "más antigua" (para buscar el más joven) que los valores iniciales. Por ejemplo, para el más viejo, podrías iniciar el "año más bajo" con un año muy alto (ej: 9999).
3.  **Mostrar el resultado:** Una vez que se hayan procesado los datos de las 250 personas, el programa debe mostrar la fecha de nacimiento (día, mes, año) de la persona más vieja encontrada en el grupo.

> 💡 Tip: Puedes usar un **bucle `for`** que se repita 250 veces. Dentro del bucle, leerás el `dd`, `mm`, `aa`. La lógica de comparación será un encadenamiento de `if` o `if-else if` para determinar si la persona actual es más vieja que la que tienes registrada como "la más vieja hasta ahora".

## 🧠 ¿Qué se practica en este ejercicio?

Este ejercicio es excelente para reforzar y aplicar varios conceptos clave:

- ✅ **Estructuras de control repetitivas:** Aplicación de un bucle (`for` o `while`) para procesar un número fijo de entradas (250).
- ✅ **Variables de seguimiento (máximo/mínimo):** Utilizar variables para recordar los datos (día, mes, año) de la persona que cumple con la condición de "más vieja".
- ✅ **Lógica de comparación compleja:** Construir condiciones `if` anidadas o encadenadas para comparar múltiples criterios (año, luego mes, luego día) para determinar el "mayor".
- ✅ **Entrada de múltiples datos por iteración:** Solicitar tres valores numéricos por cada persona.
- ✅ **Manejo de un problema con múltiples variables dependientes:** Coordinar las variables de día, mes y año para una comparación efectiva.
- ✅ **Interpretación de reglas de simplificación:** Trabajar con supuestos (meses de 30 días, año de 360) para simplificar la lógica de fechas.

## ✅ Conclusión

Este desafío te permite construir un algoritmo capaz de procesar un gran volumen de datos estructurados para encontrar un valor extremo basado en múltiples criterios. ¡Es un paso crucial para que tus alumnos desarrollen programas que puedan realizar análisis de datos más sofisticados y extraer información específica de conjuntos de información! 📈✨
