# ¡Detector de Pares y Impares! 🔢✨

Escribe un programa que solicite al usuario ingresar un número entero y luego le diga si el número es par o impar. ¡Es tu turno de programar esta adivinanza numérica! 🚀

## 💡Resolución

```csharp
using System;

namespace Primera_Aplicacion
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int numero;
            Console.WriteLine("Ingresar numero entero");
            numero = int.Parse(Console.ReadLine());

            if(numero % 2 == 0)
            {
                Console.WriteLine("El numero es par");
            }
            else
            {
                Console.WriteLine("El numero ingresado es impar");
            }

            Console.ReadKey();
        }
    }
}
```

## 🧠 ¿Qué hace este código?

Este programa le pide al usuario que ingrese un número entero, y luego le informa si ese número es **par** o **impar**. Vamos a ver paso a paso cómo funciona 🧩.

### 🔢 1. Declaración de una variable

Primero se declara una variable llamada `numero`, que se va a usar para guardar el valor que escriba el usuario.

### ⌨️ 2. Solicitar un número al usuario

Se muestra un mensaje en la consola para que el usuario escriba un número entero. Lo que el usuario escribe se lee desde el teclado, y luego se convierte en un número utilizando una función de conversión. Ese valor se guarda en la variable `numero`.

### 🧮 3. Verificar si el número es par o impar

El programa usa una operación matemática para saber si el número es divisible por 2.

- Si al dividir el número por 2 el resto es cero, entonces el número es **par**.
- Si no, el número es **impar**.

Según el resultado, se muestra un mensaje correspondiente en la consola.

### ⏸️ 4. Esperar antes de finalizar

Al final, el programa se detiene y espera a que el usuario presione una tecla. Esto se hace para que pueda leer el mensaje antes de que la consola se cierre.

## ✅ Conclusión

Este programa es ideal para practicar los conceptos básicos de entrada de datos, conversión de tipos y estructuras condicionales. Además, pone en práctica una idea matemática simple: saber si un número es par o impar.

¡Un gran paso si estás comenzando a programar! 💪😄
