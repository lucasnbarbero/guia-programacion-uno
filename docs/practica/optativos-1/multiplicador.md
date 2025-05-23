# ¡La Calculadora Multiplicadora! ✖️🤓

¿Listo para un desafío básico pero super útil? En este ejercicio, tu programa se convertirá en una pequeña calculadora que puede tomar dos números y decirte ¡cuál es el resultado de su multiplicación! Es una excelente forma de practicar la entrada de datos y las operaciones aritméticas básicas. ¡Manos a la obra! ✨

Desarrolla un programa que realice los siguientes pasos:

1.  **Solicite al usuario que ingrese el primer número entero.**
2.  **Solicite al usuario que ingrese el segundo número entero.**
3.  **Calcule la multiplicación** de ambos números.
4.  **Imprima el resultado** de la multiplicación de forma clara.

¡Tu misión es hacer que tu programa sepa multiplicar como un campeón! 🏆

## 💡 Resolución

```csharp
Console.WriteLine("Ingrese el primer numero");
int numero1 = 0;

Console.WriteLine("Ingrese el segundo numero");
int numero2 = 0;

int resultado = numero1 * numero2;

Console.WriteLine($"El resultado es: {resultado}");
```

## 🧠 ¿Qué hace este programa?

Este programa tiene como objetivo pedir dos números al usuario, multiplicarlos y mostrar el resultado final en pantalla ✖️🧮.

### 🧾 1. Solicitud de datos

Se le indica al usuario que debe ingresar dos números. Sin embargo, hay un pequeño error en el código: aunque se muestran los mensajes para pedir los números, no se está leyendo la entrada del usuario con `Console.ReadLine()` ni convirtiéndola con `int.Parse()`. Por eso, las variables `numero1` y `numero2` se quedan con su valor inicial, que es 0.

### ➗ 2. Cálculo de la multiplicación

Se realiza la multiplicación entre `numero1` y `numero2`, pero como ambos valen 0 por defecto, el resultado será siempre 0, sin importar lo que intente ingresar el usuario.

### 📢 3. Mostrar el resultado

El programa muestra el resultado en pantalla con un mensaje claro, aunque en su estado actual siempre mostrará "El resultado es: 0".

## ✅ Conclusión

El código tiene la estructura básica de un programa para multiplicar dos números, pero le falta la parte clave de leer y convertir los valores ingresados por el usuario. Es un buen ejemplo para revisar cómo funciona la entrada de datos y por qué es importante asegurarse de que las variables contengan los valores correctos antes de usarlas 💡😉.
