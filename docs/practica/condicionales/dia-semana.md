# ¡Qué Día de la Semana es Hoy? 🗓️✨

Escribe un programa que solicite al usuario ingresar un número del 1 al 7 (donde 1 es lunes, 2 es martes, y así sucesivamente) y luego imprima el nombre del día de la semana correspondiente. ¡A programar se ha dicho! 🚀

## 💡 Resolución 1

```csharp
using System;

namespace Aplicacion
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ingrese un numero del 1 al 7");

            int numero = int.Parse(Console.ReadLine());

            if (numero == 1)
            {
                Console.WriteLine("El dia de la semana es Lunes");
            }
            else if(numero == 2)
            {
                Console.WriteLine("El dia de la semana es Martes");
            }
            else if(numero == 3)
            {
                Console.WriteLine("El dia de la semana es Miércoles");
            }
            else if(numero == 4)
            {
                Console.WriteLine("El dia de la semana es Jueves");
            }
            else if(numero == 5)
            {
                Console.WriteLine("El dia de la semana es Viernes");
            }
            else if (numero == 6)
            {
                Console.WriteLine("El dia de la semana es Sabado");
            }
            else if (numero == 7)
            {
                Console.WriteLine("El dia de la semana es Domingo");
            }

            Console.ReadKey();
        }
    }
}
```

### 🧠 ¿Qué hace este código?

Este programa le pide al usuario que ingrese un número del 1 al 7, y según el número que escriba, muestra el nombre correspondiente del día de la semana 📅.

#### ⌨️ 1. Solicitar un número al usuario

Se muestra un mensaje en la consola indicando que se debe ingresar un número entre 1 y 7. El valor que el usuario escribe se convierte a número entero y se guarda en una variable.

#### 🗓️ 2. Identificar el día de la semana

El programa usa una serie de condiciones (`if`, `else if`) para comparar el número ingresado:

- Si el número es **1**, se muestra "Lunes"
- Si es **2**, se muestra "Martes"
- Si es **3**, se muestra "Miércoles"
- Si es **4**, se muestra "Jueves"
- Si es **5**, se muestra "Viernes"
- Si es **6**, se muestra "Sábado"
- Si es **7**, se muestra "Domingo"

Cada número está asociado directamente a un día específico, lo que permite practicar la lógica condicional y la correspondencia entre números y opciones de texto.

#### ⏸️ 3. Esperar antes de cerrar

Al final del programa, se espera a que el usuario presione una tecla antes de cerrar la consola. Esto permite que el usuario lea el resultado sin apuros 😊.

## 💡 Resolución 2

```csharp
using System;

namespace Aplicacion
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string dia = "";
            Console.WriteLine("Ingrese un numero del 1 al 7");

            int numero = int.Parse(Console.ReadLine());

            if (numero == 1)
            {
                dia = "Lunes";
            }
            else if (numero == 2)
            {
                dia = "Martes";
            }
            else if (numero == 3)
            {
                dia = "Miercoles";
            }
            else if (numero == 4)
            {
                dia = "Jueves";
            }
            else if (numero == 5)
            {
                dia = "Viernes";
            }
            else if (numero == 6)
            {
                dia = "Sabado";
            }
            else if (numero == 7)
            {
                dia = "Domingo";
            }

            Console.WriteLine($"El numero ingresado fue {numero} y corresponde al dia {dia}");

            Console.ReadKey();
        }
    }
}
```

### 🧠 ¿Qué hace este código?

Este programa le pide al usuario que escriba un número del 1 al 7, y luego muestra el día de la semana que corresponde a ese número 📅.

#### 📝 1. Preparar la variable para guardar el resultado

Se declara una variable de tipo texto llamada `dia`, que se usará más adelante para guardar el nombre del día correspondiente según el número que el usuario ingrese.

#### ⌨️ 2. Solicitar un número al usuario

El programa muestra un mensaje en la consola pidiendo que se ingrese un número entre 1 y 7. El valor ingresado se convierte a número entero y se guarda en una variable.

#### 🔍 3. Determinar el día según el número

Mediante una estructura condicional (`if` y `else if`), el programa compara el número con los posibles valores del 1 al 7:

- Si el número es 1, se asigna "Lunes" a la variable `dia`
- Si es 2, se asigna "Martes", y así sucesivamente hasta el 7, que corresponde a "Domingo"

Cada condición carga el valor correspondiente del día en la variable `dia`.

#### 📢 4. Mostrar el resultado

Luego de asignar el nombre del día, se imprime un mensaje en la consola que combina el número ingresado con su día correspondiente. Esto se hace usando una forma de concatenación más moderna que permite insertar variables dentro del texto de forma clara y ordenada.

#### ⏸️ 5. Pausa antes de cerrar

Al final, el programa espera a que el usuario presione una tecla. Esto sirve para que pueda leer tranquilamente el resultado antes de que la consola se cierre 😊.

## 💡 Resolución 3

```csharp
using System;

namespace Aplicacion
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int numeroDia;
            Console.WriteLine("Ingrese un dia de la semana en numero");
            numeroDia = int.Parse(Console.ReadLine());
            switch (numeroDia)
            {
                case 1:
                    Console.WriteLine("Corresponde al dia Lunes");
                    break;
                case 2:
                    Console.WriteLine("Corresponde al dia Martes");
                    break;
                case 3:
                    Console.WriteLine("Corresponde al dia Miercoles");
                    break;
                case 4:
                    Console.WriteLine("Corresponde al dia Jueves");
                    break;
                case 5:
                    Console.WriteLine("Corresponde al dia Viernes");
                    break;
                case 6:
                    Console.WriteLine("Corresponde al dia Sabado");
                    break;
                case 7:
                    Console.WriteLine("Corresponde al dia Domingo");
                    break;
                default:
                    Console.WriteLine("No corresponde a ningun dia de la semana");
                    break;
            }
            Console.ReadKey();
        }
    }
}
```

### 🧠 ¿Qué hace este código?

Este programa solicita al usuario que ingrese un número que representa un día de la semana, y luego muestra el nombre del día correspondiente o un mensaje indicando que el número no es válido 📅.

#### ⌨️ 1. Pedir un número al usuario

El programa muestra un mensaje para que el usuario ingrese un número que represente un día de la semana. Después, convierte ese valor a un número entero y lo guarda en una variable.

#### 🔄 2. Usar la estructura `switch`

Se utiliza la estructura `switch` para comparar el número ingresado con los casos posibles del 1 al 7:

- Para cada caso del 1 al 7, el programa muestra el día correspondiente (Lunes, Martes, etc.).
- Si el número no coincide con ninguno de estos casos, se ejecuta el bloque `default`, que indica que el número no corresponde a ningún día válido.

Cada caso termina con un `break` para evitar que se ejecuten otros casos por error.

#### ⏸️ 3. Esperar antes de cerrar

Al final, el programa espera a que el usuario presione una tecla para que pueda leer el resultado antes de que la ventana de la consola se cierre.
