# 🛒🧠 Carrito de compras: ¡Programá tu Orden! 💻

¿Estás listo para crear una aplicación que te permita gestionar un sistema de pedidos como en tu cafetería favorita? En este ejercicio, vas a desarrollar un **simulador de pedidos online** en consola.

## ✨ ¿Qué debe hacer tu programa?

1.  **Mostrar un menú de productos** claro y con sus precios al iniciar. Para esto, vas a necesitar almacenar los productos y sus precios en **vectores**.
2.  Permitir al usuario **agregar productos al carrito** de compras. Esto implica pedir el nombre del producto y la cantidad deseada.
    - ¡Ojo! Deberás validar que el producto que se intenta agregar exista en el menú y que la cantidad sea válida (un número entero mayor a 0).
    - El carrito también se representará usando **vectores** para guardar los productos seleccionados y sus cantidades.
3.  **Mostrar el contenido del carrito** en cualquier momento, detallando cada producto, su cantidad, precio unitario y el subtotal por cada uno.
4.  **Calcular y mostrar el total** de la orden, sumando el valor de todos los productos en el carrito.
5.  Dar la opción de **vaciar el carrito** para comenzar un nuevo pedido.
6.  Permitir **salir del programa** cuando el usuario lo desee.

> 💡 Tip: Usá una estructura de **menú repetitivo** (con `while` y `switch`) para que el usuario pueda interactuar con el sistema hasta que decida salir.

## 🧠 ¿Qué se practica en este ejercicio?

Este desafío es perfecto para consolidar varios conceptos fundamentales de Programación 1:

- ✅ Declaración y uso de **vectores (arrays)** para organizar y gestionar colecciones de datos (menú de productos, carrito de compras).
- ✅ Implementación de **estructuras de control de flujo** (`while`, `switch`, `if-else`) para la navegación del menú y la lógica del programa.
- ✅ **Modularización del código** mediante el uso de **funciones o procedimientos** para cada una de las opciones del menú y para tareas específicas como la validación de entradas.
- ✅ **Validación de datos** ingresados por el usuario, asegurando que sean del tipo y rango correctos (por ejemplo, cantidades positivas, productos existentes).
- ✅ Lógica para **búsqueda y cálculo** dentro de colecciones de datos.

## ✅ Conclusión

Este ejercicio te desafía a construir una aplicación funcional que simula un sistema del mundo real, aplicando de forma integrada los conocimientos sobre **vectores**, **validaciones** y **modularización**. ¡Es una excelente oportunidad para reforzar tu capacidad de estructurar programas complejos y resolver problemas de manera eficiente! 📈✨


## 📄 Resolución del ejercicio

```csharp
using System;

namespace carrito_compras
{
    internal class Program
    {
        static string[] productos = new string[]
            {
                "Café chico",
                "Café grande",
                "Medialuna",
                "Tostado de jamón y queso",
                "Jugo de naranja",
                "Submarino",
                "Té",
                "Agua mineral",
                "Factura surtida",
                "Sandwich de miga"
            };

        static int[] precios = new int[]
            {
                    500,  // Café chico
                    650,  // Café grande
                    350,  // Medialuna
                    850,  // Tostado de jamón y queso
                    700,  // Jugo de naranja
                    800,  // Submarino
                    600,  // Té
                    400,  // Agua mineral
                    380,  // Factura surtida
                    700   // Sandwich de miga
            };
        static string[] nombresCarrito = new string[10];
        static int[] cantidadCarrito = new int[10];
        static int totalProductos = 0;

        static void Main(string[] args)
        {
            int opcion = 0;
            while (opcion != 6)
            {
                Console.WriteLine("Elija una opcion:");
                opcion = int.Parse(Console.ReadLine());

                switch (opcion)
                {
                    case 1:
                        MostrarProductos();
                        break;
                    case 2:
                        AgregarProductoAlCarrito();
                        break;
                    case 3:
                        MostrarInformacionDelCarrito();
                        break;
                    case 4:
                        CerrarOrden();
                        break;
                    case 5:
                        VaciarCarrito();
                        break;
                    case 6:
                        break;
                    default:
                        Console.WriteLine("Ingreso invalido");
                        break;
                }
            }
        }

        static void MostrarProductos()
        {
            for (int i = 0; i < productos.Length; i++)
            {
                Console.WriteLine($"{productos[i]} - ${precios[i]}");
            }
        }

        static void AgregarProductoAlCarrito()
        {
            Console.WriteLine("Ingrese el nombre del producto que quiere agregar");
            string nombre = Console.ReadLine();
            if (!ProductoExistente(nombre))
            {
                Console.WriteLine("El producto no existe");
                return;
            }

            nombresCarrito[totalProductos] = nombre;
            int cantidad = ValidarEntero("Ingrese la cantidad a comprar");
            cantidadCarrito[totalProductos] = cantidad;

            totalProductos++;
        }

        static void MostrarInformacionDelCarrito()
        {
            if (totalProductos == 0)
            {
                Console.WriteLine("No hay productos en el carrito");
                return;
            }

            for (int i = 0; i < totalProductos; i++)
            {
                int indice = 0;

                for (int j = 0; j < productos.Length; j++)
                {
                    if (productos[j].ToLower() == nombresCarrito[i].ToLower())
                    {
                        indice = j;
                    }
                }
                Console.WriteLine($"{nombresCarrito[i]} - {cantidadCarrito[i]} - ${precios[indice]} - Subtotal: ${cantidadCarrito[i] * precios[indice]}");
            }
        }

        static void CerrarOrden()
        {
            // Mostrar el total de la orden
            if (totalProductos == 0)
            {
                Console.WriteLine("No hay productos en el carrito");
                return;
            }

            MostrarInformacionDelCarrito();
            int suma = 0;
            for (int i = 0; i < totalProductos; i++)
            {
                int indice = 0;

                for (int j = 0; j < productos.Length; j++)
                {
                    if (productos[j].ToLower() == nombresCarrito[i].ToLower())
                    {
                        indice = j;
                    }
                }
                suma += cantidadCarrito[i] * precios[indice];
            }

            Console.WriteLine($"Total de la orden: ${suma}");
        }

        static void VaciarCarrito()
        {
            for (int i = 0; i < totalProductos; i++)
            {
                nombresCarrito[i] = string.Empty;
                cantidadCarrito[i] = 0;
            }
            totalProductos = 0;

        }

        static bool ProductoExistente(string nombre)
        {
            for (int i = 0; i < productos.Length; i++)
            {
                if (productos[i].ToLower() == nombre.ToLower())
                {
                    return true;
                }
            }
            return false;
        }

        static int ValidarEntero(string msj)
        {
            int valor;
            Console.WriteLine(msj);
            while (!int.TryParse(Console.ReadLine(), out valor))
            {
                Console.WriteLine("Ingreso inválido");
            }

            return valor;
        }
    }
}

```