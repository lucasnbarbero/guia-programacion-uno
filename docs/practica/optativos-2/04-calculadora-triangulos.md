# 📐 Calculadora de Triángulos: ¡Área, Base o Altura a tu Medida! 🔺✨

¡Prepárate para un desafío que pondrá a prueba tu habilidad para aplicar fórmulas matemáticas y ofrecer opciones al usuario! En este ejercicio, vas a desarrollar un programa interactivo que, utilizando la fórmula del área de un triángulo, permita al usuario calcular: el área, la base o la altura, según los datos que posea. Este problema es ideal para practicar **estructuras de control condicionales (`if-else if-else` o `switch`)**, **entrada de datos múltiples** y la **manipulación de fórmulas** para despejar incógnitas. 🧠💻

## ✨ ¿Qué debe hacer tu programa?

1.  **Presentar opciones al usuario:** Al inicio, el programa debe preguntar al usuario qué valor desea calcular:
    - `1` para calcular el **Área**.
    - `2` para calcular la **Base**.
    - `3` para calcular la **Altura**.
2.  **Solicitar datos según la opción elegida:**
    - Si el usuario elige **calcular el Área**: Pedir la **base** y la **altura**.
    - Si el usuario elige **calcular la Base**: Pedir la **altura** y el **área**.
    - Si el usuario elige **calcular la Altura**: Pedir la **base** y el **área**.
3.  **Realizar el cálculo correspondiente:**
    - **Fórmula base:** `Área = (base * altura) / 2`
    - Si se quiere calcular el **Área**, aplica la fórmula directamente.
    - Si se quiere calcular la **Base**, despeja la base de la fórmula: `Base = (2 * Área) / altura`
    - Si se quiere calcular la **Altura**, despeja la altura de la fórmula: `Altura = (2 * Área) / base`
4.  **Mostrar el resultado:** Imprimir el valor calculado (área, base o altura) de manera clara, indicando qué se está mostrando.
5.  **Manejar opciones inválidas:** Si el usuario ingresa una opción que no sea 1, 2 o 3, el programa debe informarle que la opción no es válida.
    - _Consideración Adicional (Opcional):_ Puedes incluir validaciones para que los valores de entrada (base, altura, área) sean positivos y distintos de cero, ya que son dimensiones geométricas.

> 💡 Tip: Utiliza una estructura **`switch`** (o `case`) o una serie de **`if-else if-else`** para manejar las diferentes opciones que el usuario puede elegir. Dentro de cada opción, solicitarás los datos necesarios y aplicarás la fórmula correspondiente.

## 🧠 ¿Qué se practica en este ejercicio?

Este ejercicio es excelente para reforzar y aplicar varios conceptos clave:

- ✅ **Interacción con el usuario:** Presentar un menú de opciones y solicitar datos según la elección del usuario.
- ✅ **Estructuras de control condicionales:** Uso de **`switch`** o **`if-else if-else`** para ramificar el flujo del programa según la elección del usuario.
- ✅ **Entrada de datos múltiples:** Solicitar diferentes combinaciones de datos numéricos según la opción elegida.
- ✅ **Fórmulas matemáticas y despeje de variables:** Aplicar y manipular una fórmula matemática para calcular diferentes incógnitas.
- ✅ **Operaciones aritméticas:** Multiplicación, división.
- ✅ **Validación de entrada (opcional):** Asegurar que las dimensiones geométricas sean válidas.
- ✅ **Diseño modular de lógica:** Estructurar el código para cada opción de cálculo.

## ✅ Conclusión

Este desafío te permite construir un programa versátil que resuelve un problema matemático común, ofreciendo al usuario la flexibilidad de elegir qué calcular. ¡Es un excelente ejercicio para que tus alumnos refuercen la aplicación de fórmulas, la toma de decisiones algorítmicas y la creación de programas interactivos y útiles! 📈✨
