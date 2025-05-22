# ¿Positivo, Negativo o Cero? 🤔

Escribe un programa que pida a la persona que lo use que ingrese un número entero y luego le diga si ese número es positivo, negativo o si, ¡sorpresa!, es cero. ¡A programar se ha dicho! 🚀

## 💡Resolución

```csharp
using System;

namespace Aplicacion
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int numero;

            Console.WriteLine("Ingrese un numero entero");
            numero = int.Parse(Console.ReadLine());

            if (numero > 0)
            {
                Console.WriteLine("El numero es positivo");
            }
            else if (numero < 0)
            {
                Console.WriteLine("El numero es negativo");
            }
            else
            {
                Console.WriteLine("El numero es cero");
            }

            Console.ReadKey();
        }
    }
}
```

## 🧠 ¿Qué hace este código?

Este programa le pide al usuario que ingrese un número entero y luego le dice si ese número es **positivo**, **negativo** o **igual a cero**. Es un ejemplo clásico para practicar decisiones múltiples en programación 🎯.

### 🔢 1. Declaración de una variable

Se declara una variable llamada `numero`, que servirá para guardar el valor ingresado por el usuario desde el teclado.

### ⌨️ 2. Pedir un número al usuario

Se muestra un mensaje en pantalla solicitando un número entero. El valor que el usuario escribe se convierte a tipo numérico y se guarda en la variable.

### 🧭 3. Evaluar si es positivo, negativo o cero

El programa compara el número ingresado usando condiciones:

- Si el número es **mayor que cero**, se considera **positivo**.
- Si es **menor que cero**, es **negativo**.
- Y si no cumple ninguna de esas condiciones, entonces es **cero**.

Dependiendo del caso, se muestra un mensaje específico en la consola.

### ⏸️ 4. Esperar antes de cerrar

Para que el mensaje no desaparezca inmediatamente, el programa se pausa esperando a que el usuario presione una tecla antes de finalizar.

## ✅ Conclusión

Este programa es una forma excelente de aprender cómo funcionan las estructuras condicionales con múltiples caminos (`if`, `else if`, `else`). También te ayuda a pensar en **todos los posibles valores** que puede tomar un número.

¡Buen trabajo si entendiste todo esto! 📈😄 Cada paso te acerca más a dominar la lógica de programación 💡
