# ¡El Duelo de los Números! ¿Quién es el Mayor? 🤔🏆

Escribe un programa que solicite al usuario ingresar dos números enteros y luego determine e imprima cuál de los dos números es el mayor. ¡Que gane el más grande! 🚀

## 💡 Resolución

```csharp
using System;

namespace Aplicacion
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ingrese el primer numero entero");
            int numero1 = int.Parse(Console.ReadLine());

            Console.WriteLine("Ingrese el segundo numero entero");
            int numero2 = int.Parse(Console.ReadLine());

            if(numero1 > numero2)
            {
                Console.WriteLine("El primer numero es el mayor");
            }
            else if(numero1 < numero2)
            {
                Console.WriteLine("El segundo numero es el mayor");
            }
            else
            {
                Console.WriteLine("Los numeros son iguales");
            }

            Console.ReadKey();
        }
    }
}
```

## 🧠 ¿Qué hace este código?

Este programa le pide al usuario que ingrese dos números enteros y luego le indica cuál de los dos es mayor o si son iguales 🔢.

### ⌨️ 1. Solicitar dos números al usuario

Primero se pide al usuario que ingrese el primer número y luego el segundo. Ambos valores se convierten a números enteros y se guardan en variables separadas.

### ⚖️ 2. Comparar los dos números

El programa compara los dos números usando condiciones:

- Si el primer número es mayor que el segundo, muestra un mensaje indicando que el primero es el mayor.
- Si el primer número es menor que el segundo, indica que el segundo es el mayor.
- Si ninguno de los dos casos anteriores se cumple, significa que ambos números son iguales, y se muestra un mensaje que lo confirma.

### ⏸️ 3. Pausa antes de cerrar

Finalmente, el programa espera a que el usuario presione una tecla para que pueda leer el resultado antes de que la consola se cierre automáticamente 😊.

## ✅ Conclusión

Este programa es una forma sencilla y efectiva de practicar la comparación entre valores numéricos usando estructuras condicionales. Además, refuerza cómo recibir datos del usuario y mostrar resultados claros. ¡Un gran paso para entender la lógica básica en programación! 🚀
