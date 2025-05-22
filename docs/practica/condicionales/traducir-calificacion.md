# ¡Traduce tu Calificación! De Números a Letras 🅰️🅱️

Escribe un programa que solicite al usuario ingresar la calificación numérica de un estudiante y determine e imprima su calificación en letra, siguiendo esta escala:

- **90-100**: A
- **80-89**: B
- **70-79**: C
- **60-69**: D
- **Por debajo de 60**: F

¡Manos a la obra y que tu programa dé las mejores notas! 🚀

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

Este programa le pide al usuario que ingrese una calificación numérica y luego muestra la letra correspondiente según un rango específico 📊.

### ⌨️ 1. Pedir la calificación al usuario

El programa solicita al usuario que ingrese una calificación como número entero, la convierte y la guarda en una variable.

### 🎯 2. Evaluar la calificación con condiciones

Se utiliza una serie de condiciones para determinar la letra que corresponde según el rango de la calificación:

- Si la calificación está entre 90 y 100, muestra una **A**
- Si está entre 80 y 89, muestra una **B**
- Entre 70 y 79, muestra una **C**
- Entre 60 y 69, muestra una **D**
- Si es 59 o menos, muestra una **F**

Cada rango define claramente el nivel de desempeño del alumno.

### ⏸️ 3. Esperar antes de cerrar

Finalmente, el programa espera a que el usuario presione una tecla para que pueda leer el resultado antes de que la consola se cierre.

## ✅ Conclusión

Este programa es un buen ejemplo para entender cómo funcionan las condiciones múltiples y cómo evaluar rangos numéricos. Además, ayuda a practicar la interacción con el usuario y la presentación clara de resultados. ¡Una base fundamental para tus primeros programas! 🎉
