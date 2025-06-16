# 🧑‍💻 Gestión de Contactos: ¡Organizando y Mostrando Datos de Personas! 📇💾

¡Es hora de aplicar sus habilidades de matrices para organizar información personal de manera estructurada! En este ejercicio, van a desarrollar un programa para cargar y luego mostrar los datos de contacto de 30 personas. Deberán utilizar una matriz donde cada fila representará una persona y cada columna almacenará un tipo de dato específico (Nombre, Apellido, Dirección, Teléfono). Este problema es excelente para que ustedes refuercen la **declaración y carga de matrices de cadenas de texto**, y el **recorrido organizado** de la matriz para presentar la información de forma clara. 🧠💻

## ✨ ¿Qué debe hacer su programa?

1.  **Declarar una matriz de cadenas de texto:** Creen una matriz (arreglo bidimensional) de **30 filas por 4 columnas**:

    - Cada **fila** (`i`) representará una **persona** (del 0 al 29).
    - Cada **columna** (`j`) almacenará un tipo de dato específico:
      - Columna 0: **Nombre**
      - Columna 1: **Apellido**
      - Columna 2: **Dirección**
      - Columna 3: **Teléfono**
    - _Nota:_ Todos estos datos serán de tipo **cadena de texto (string)**. Incluso el teléfono, ya que podría incluir guiones, espacios o prefijos.

2.  **Cargar la matriz:**

    - El programa debe pedirles que ingresen, para cada una de las 30 personas, su **nombre**, **apellido**, **dirección** y **teléfono**.
    - Asegúrense de almacenar cada dato en la columna correspondiente de la fila de la persona actual.
    - Para agilizar las pruebas, pueden inicializar una pequeña parte de la matriz con datos fijos o simular la carga para menos de 30 personas.

3.  **Recorrer y mostrar los datos de cada persona:**
    - Después de cargar todos los datos, recorran la matriz completa.
    - Para cada fila (es decir, para cada persona), impriman todos sus datos de forma organizada en una sola línea o en un formato legible.
    - _Ejemplo de salida:_
      ```
      Persona 1: Nombre: [Juan], Apellido: [Pérez], Dirección: [Calle Falsa 123], Teléfono: [11-5555-1234]
      Persona 2: Nombre: [María], Apellido: [González], Dirección: [Av. Siempreviva 456], Teléfono: [351-4444-5678]
      ...
      ```

> 💡 Tip: Utilicen **bucles anidados** para la carga y para la visualización. El bucle externo controlará las filas (las personas, de 0 a 29) y el interno controlará las columnas (los datos de cada persona, de 0 a 3). Para la carga, pedirán el dato correspondiente a cada `matriz[fila_actual][columna_actual]`. Para la visualización, simplemente imprimirán `matriz[fila_actual][columna_actual]` de forma consecutiva por fila.

## 🧠 ¿Qué van a practicar en este ejercicio?

Este ejercicio es excelente para que ustedes refuercen y apliquen varios conceptos clave:

- ✅ **Declaración y manejo de matrices de cadenas:** Cómo crear y almacenar datos de texto en una estructura bidimensional.
- ✅ **Carga de datos heterogéneos en una matriz:** Organizar diferentes tipos de información (aunque todos sean tratados como strings en este caso) en columnas específicas.
- ✅ **Bucles anidados para carga y visualización:** El uso fundamental de bucles para llenar y luego recorrer y mostrar el contenido de una matriz.
- ✅ **Acceso a elementos por índices:** Entender cómo `matriz[fila][columna]` les permite acceder a datos específicos de una persona.
- ✅ **Organización de la salida:** Presentar grandes volúmenes de información de manera estructurada y comprensible.
- ✅ **Representación de datos reales:** Modelar una lista de contactos utilizando estructuras de programación.

## ✅ Conclusión

¡Excelente, futuros desarrolladores de bases de datos y sistemas de información! Este desafío les permitió construir un algoritmo fundamental para la gestión de datos tabulares, como una lista de contactos. Al dominar la carga y el recorrido de matrices de cadenas de texto, han dado un gran paso en la creación de programas que organizan y presentan información de manera eficiente. ¡Están listos para crear sus propias agendas electrónicas o sistemas de registro! 🚀✨
