# ¡Averigua si el Año es Bisiesto! 🗓️ Leap Year Challenge!

Escribe un programa que solicite al usuario ingresar un año y determine e imprima si el año ingresado es bisiesto o no. ¡Aquí te va la regla clave! Un año es bisiesto si cumple con lo siguiente:

- **Es divisible entre 4** (ej. 2024, 2028),
- **PERO NO es divisible entre 100** (ej. 1900 NO fue bisiesto, aunque es divisible por 4),
- **O si es divisible entre 400** (ej. 2000 SÍ fue bisiesto, porque es divisible por 400).

¡Tu misión es aplicar estas reglas para desvelar el misterio del año bisiesto! ¡Mucha suerte! ✨

## 💡 Resolución

```csharp
using System;

namespace Aplicacion
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int calificacion = 0;
            Console.WriteLine("Ingrese su calificacion numerica");
            calificacion = int.Parse(Console.ReadLine());

            if (calificacion >= 90 && calificacion <= 100)
            {
                Console.WriteLine("La calificacion es A");
            }
            else if (calificacion >= 80 && calificacion <= 89)
            {
                Console.WriteLine("La calificacion es B");
            }
            else if (calificacion >= 70 && calificacion <= 79)
            {
                Console.WriteLine("La calificacion es C");
            }
            else if (calificacion >= 60 && calificacion <= 69)
            {
                Console.WriteLine("La calificacion es D");
            }
            else if(calificacion <=59)
            {
                Console.WriteLine("La calificacion es F");
            }
            Console.ReadKey();
        }
    }
}
```

## 🧠 ¿Qué hace este código?

Este programa le pide al usuario que ingrese un número que representa un año y determina si ese año es bisiesto o no 📅.

### ⌨️ 1. Pedir el año al usuario

El programa muestra un mensaje para que el usuario ingrese un número entero que representa un año. Luego convierte ese valor a número y lo guarda en una variable.

### 🔍 2. Verificar si el año es bisiesto

Usa una condición que combina varias reglas para identificar un año bisiesto:

- El año debe ser divisible por 4 **y** no divisible por 100, **o**
- El año debe ser divisible por 400

Si alguna de estas condiciones se cumple, el programa indica que el año es bisiesto; de lo contrario, dice que no lo es.

### ⏸️ 3. Pausa antes de cerrar

Al final, espera a que el usuario presione una tecla para que pueda ver el mensaje antes de que la consola se cierre automáticamente.

## ✅ Conclusión

Este programa muestra cómo combinar condiciones lógicas para resolver un problema real y común: identificar años bisiestos. Es una excelente práctica para entender el uso de operadores lógicos y condicionales en programación. ¡Perfecto para seguir avanzando! 🌟
