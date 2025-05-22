# 🥇 Primera Aplicación

## ✨ Introducción

Este pequeño programa interactúa con el usuario desde la consola. A medida que se ejecuta, pide algunos datos personales y luego los muestra, todo mientras practicas conceptos básicos como entrada por teclado, almacenamiento en variables y estructuras de control. Es un excelente primer paso para comenzar a programar 🚀.

## 🧑🏽‍💻 Código

```csharp
using System;

namespace Primera_Aplicacion
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ingrese su nombre");
            string nombre = Console.ReadLine();

            Console.WriteLine("Ingrese su apellido");
            string apellido = Console.ReadLine();

            Console.WriteLine("Ingrese su edad");
            string edad = Console.ReadLine();

            Console.WriteLine("Ingrese su dni");
            string dni = Console.ReadLine();

            Console.WriteLine("Su nombre es " + nombre + apellido + " y tiene " + edad + " años. Su DNI es " + dni);

            string pin;

            Console.WriteLine("Ingrese un clave pin");
            pin = Console.ReadLine();

            if(pin == "1234")
            {
                Console.WriteLine("Acceso concedido");
            }

            Console.ReadKey();
        }
    }
}
```

## 📘 Explicación del código

1. **Inicio del programa**  
   El programa comienza en el método `Main`, que es el punto de entrada principal de cualquier aplicación en C#.

2. **Solicitud de datos al usuario**  
   Se le pide al usuario que ingrese los siguientes datos uno por uno:

   - Nombre
   - Apellido
   - Edad
   - DNI

   Cada uno de estos valores se almacena en variables usando `Console.ReadLine()`, que permite capturar texto desde el teclado.

3. **Mostrar un resumen de los datos ingresados**  
   Después de pedir los datos, se imprime un mensaje combinando toda la información para mostrar al usuario un pequeño resumen con su nombre, apellido, edad y DNI.

4. **Verificación de PIN**  
   El programa pide al usuario que ingrese una clave tipo PIN.  
   Si el PIN ingresado es exactamente `"1234"`, se muestra el mensaje `"Acceso concedido"`.

5. **Pausa antes de cerrar**  
   Al final, se utiliza `Console.ReadKey()` para que la ventana de la consola espere a que el usuario presione una tecla antes de cerrarse. Esto permite leer los mensajes antes de que se cierre el programa.

## ✅ Conclusión

Este programa es un excelente ejemplo para empezar a practicar la interacción básica con el usuario. Aprendiste cómo pedir datos, almacenarlos y usarlos para mostrar información en pantalla. También viste cómo usar una condición simple para tomar decisiones.
