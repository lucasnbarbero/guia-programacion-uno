# ¡El Inspector de Números! ¿Cómo es ese número? 🤔➕➖0️⃣

¡Es hora de que tu programa se convierta en un pequeño detective de números! 🕵️‍♀️ En este desafío, le vamos a pedir a la computadora que observe un número que le des y nos diga si es positivo, negativo o si es un número "neutro" (¡el cero!). Es un ejercicio clave para entender cómo tomar decisiones en tus programas. ¡A darle! ✨

Desarrolla un algoritmo (o sea, tu programa) que realice los siguientes pasos:

1.  **Solicite al usuario que ingrese un número entero** por teclado.
2.  **Determine** si ese número es:
    - **Positivo** (mayor que cero)
    - **Negativo** (menor que cero)
    - **Neutro** (igual a cero)
3.  **Imprima** el resultado de esta clasificación de forma clara.

¡Tu misión es hacer que tu programa sepa clasificar cualquier número que le den! 🚀

## 💡 Resolución

```csharp
string mensaje = "";

Console.WriteLine("Ingresar un número");
int numero = int.Parse(Console.ReadLine());

if (numero > 0)
{
    mensaje = "Positivo";
}
else if (numero < 0)
{
    mensaje = "Negativo";
}
else
{
    mensaje = "Neutro";
}

Console.WriteLine($"El número ingresado por el usuario es: {mensaje}");
```

## 🧠 ¿Qué hace este programa?

Este programa determina si un número ingresado por el usuario es positivo, negativo o neutro (cero) 🔢⚖️.

### 🔢 1. Ingreso de datos

El usuario debe ingresar un número entero. El programa lo convierte de texto a número usando una función de conversión.

### 📋 2. Evaluación del número

Se analiza el número ingresado:

- Si es mayor que cero, se lo clasifica como **positivo**.
- Si es menor que cero, se lo clasifica como **negativo**.
- Si es igual a cero, se lo clasifica como **neutro**.

El resultado se guarda en una variable de texto llamada `mensaje`.

### 🖨️ 3. Mostrar el resultado

Finalmente, el programa muestra en pantalla el tipo de número que ingresó el usuario, informándolo de manera clara y sencilla.

## ✅ Conclusión

Este programa es un buen ejemplo para practicar el uso de estructuras condicionales (`if`, `else if`, `else`) y el manejo de variables para guardar y mostrar resultados. Además, enseña cómo analizar distintos rangos de valores numéricos. ¡Ideal para comenzar a pensar como un programador! 💡🧑‍💻
