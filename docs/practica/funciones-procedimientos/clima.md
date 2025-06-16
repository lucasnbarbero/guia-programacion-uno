# 🌬️📊 ¡Análisis del Clima: Tu Primer Algoritmo Meteorológico! ☀️

¿Te imaginas crear un programa que te ayude a analizar el clima de una semana? En este desafío, vas a desarrollar una aplicación de consola que te permitirá registrar y procesar las temperaturas diarias. ¡Serás un verdadero climatólogo digital, usando tus conocimientos de **vectores** y **funciones** para entender el tiempo! 🧠💻

## ✨ ¿Qué debe hacer tu programa?

1.  **Cargar las temperaturas diarias:** El programa debe permitir al usuario ingresar la temperatura (en grados Celsius) para cada uno de los 7 días de la semana (por ejemplo, Lunes a Domingo). Deberás almacenar estas temperaturas en un **vector (array)**.
2.  **Mostrar todas las temperaturas registradas:** Una opción para listar las temperaturas ingresadas para cada día de la semana.
3.  **Convertir y mostrar temperaturas en Kelvin:** A partir de las temperaturas en Celsius, el programa debe mostrar cada temperatura equivalente en la escala Kelvin.
    - _Recuerda:_ Para convertir Celsius a Kelvin, simplemente sumas 273.15 a la temperatura en Celsius.
4.  **Modificar la temperatura de un día específico:** Permitir al usuario seleccionar un día (por ejemplo, "Día 3") e ingresar una nueva temperatura para ese día. Deberás validar que el día seleccionado sea válido y que la nueva temperatura también lo sea.
5.  **Mostrar las temperaturas ordenadas:** Presentar todas las temperaturas registradas, pero esta vez ordenadas de menor a mayor valor.
6.  **Calcular y mostrar la temperatura máxima:** Identificar y presentar la temperatura más alta registrada durante la semana.
7.  **Calcular y mostrar la temperatura mínima:** Identificar y presentar la temperatura más baja registrada durante la semana.
8.  **Calcular y mostrar la temperatura promedio:** Determinar la temperatura media de la semana.
9.  **Contar días por encima del promedio:** Mostrar cuántos días tuvieron una temperatura superior al promedio calculado.
10. **Salir del programa:** Finalizar la ejecución de la aplicación.

> 💡 Tip: Utiliza un **menú repetitivo** (con `while` y `switch`) para que el usuario pueda elegir qué operación realizar sobre los datos del clima. Asegúrate de manejar el caso en que se intente realizar un cálculo sin haber ingresado las temperaturas.

## 🧠 ¿Qué se practica en este ejercicio?

Este ejercicio es excelente para reforzar y aplicar varios conceptos clave:

- ✅ Declaración y manipulación de **vectores (arrays)** para almacenar colecciones de datos (temperaturas).
- ✅ Uso de **estructuras de control de flujo** (`while`, `switch`, `for`, `if-else`) para la navegación del menú y el procesamiento de los datos.
- ✅ **Modularización del código** mediante la creación de **funciones o procedimientos** para cada una de las operaciones (cargar, mostrar, calcular máximo, mínimo, promedio, etc.).
- ✅ **Validación de entradas** del usuario para asegurar que los datos ingresados (temperaturas, selección de día) sean válidos.
- ✅ Desarrollo de **algoritmos de búsqueda y cálculo** sobre colecciones de datos.
- ✅ **Operaciones con arrays:** Acceso, modificación y ordenamiento de elementos.
- ✅ **Conversión de unidades** y aplicación de fórmulas matemáticas simples.

## ✅ Conclusión

Este desafío te permite construir una herramienta práctica, aplicando de manera integrada los conocimientos sobre **arrays**, **funciones** y **lógica de programación**. ¡Es un paso más para que tus alumnos se conviertan en expertos en el manejo y análisis de datos! 📈✨

## 📄 Resolución del ejercicio

```csharp
using System;

namespace registro_temperaturas
{
    internal class Program
    {
        // Arrays para almacenar los días de la semana y las temperaturas
        static string[] dias = new string[]
        {
            "Lunes",
            "Martes",
            "Miércoles", // Corregido: Miercoles -> Miércoles
            "Jueves",
            "Viernes",
            "Sábado",    // Corregido: Sabado -> Sábado
            "Domingo",
        };
        // Array para indicar si un día tiene una temperatura registrada
        static bool[] registros = new bool[7]
        {
            false, false, false, false, false, false, false,
        };
        static double[] temperaturas = new double[7];
        static int cantidadRegistros = 0; // Lleva la cuenta de cuántos días tienen temperatura registrada

        static void Main(string[] args)
        {
            int opcion = 0;

            // Bucle principal del menú
            while (opcion != 10)
            {
                MostrarMenu(); // Muestra el menú de opciones
                opcion = ValidarEntero("Ingrese una opcion:"); // Pide y valida la opción del usuario
                Console.WriteLine(); // Salto de línea para mejor visualización

                switch (opcion)
                {
                    case 1:
                        CargarTemperaturasDiarias(); // Llama a la función para cargar temperaturas
                        break;
                    case 2:
                        MostrarTemperaturas(); // Muestra todas las temperaturas registradas
                        break;
                    case 3:
                        MostrarTemperaturasEnKelvin(); // Convierte y muestra temperaturas en Kelvin
                        break;
                    case 4:
                        ModificarTemperaturaDiaEspecifico(); // Modifica la temperatura de un día específico
                        break;
                    case 5:
                        MostrarTemperaturasOrdenadas(); // Muestra las temperaturas ordenadas
                        break;
                    case 6:
                        MostrarTemperaturaMasAlta(); // Calcula y muestra la temperatura máxima
                        break;
                    case 7:
                        MostrarTemperaturaMasBaja(); // Calcula y muestra la temperatura mínima
                        break;
                    case 8:
                        MostrarPromedio(); // Calcula y muestra la temperatura promedio
                        break;
                    case 9:
                        ContarDiasMayorAlPromedio(); // Cuenta días con temperatura superior al promedio
                        break;
                    case 10:
                        Console.WriteLine("Saliendo del programa. ¡Hasta luego!");
                        break;
                    default:
                        Console.WriteLine("Opcion no valida. Por favor, intente de nuevo.");
                        break;
                }
                Console.WriteLine("\nPresione cualquier tecla para continuar...");
                Console.ReadKey();
                Console.Clear(); // Limpia la consola para la siguiente iteración del menú
            }
        }

        // --- Funciones auxiliares de tu código (adaptadas y mejoradas) ---

        static void MostrarMenu()
        {
            Console.WriteLine("--- 🌬️📊 Análisis del Clima: Tu Primer Algoritmo Meteorológico! ☀️ ---");
            Console.WriteLine("1. Cargar las temperaturas diarias.");
            Console.WriteLine("2. Mostrar todas las temperaturas registradas.");
            Console.WriteLine("3. Convertir y mostrar temperaturas en Kelvin.");
            Console.WriteLine("4. Modificar la temperatura de un día específico.");
            Console.WriteLine("5. Mostrar las temperaturas ordenadas.");
            Console.WriteLine("6. Calcular y mostrar la temperatura máxima.");
            Console.WriteLine("7. Calcular y mostrar la temperatura mínima.");
            Console.WriteLine("8. Calcular y mostrar la temperatura promedio.");
            Console.WriteLine("9. Contar días por encima del promedio.");
            Console.WriteLine("10. Salir del programa.");
            Console.WriteLine("--------------------------------------------------------------------");
        }

        static void CargarTemperaturasDiarias()
        {
            Console.WriteLine("\n--- Cargar Temperaturas Diarias ---");
            // Iterar sobre los 7 días para pedir la temperatura
            for (int i = 0; i < dias.Length; i++)
            {
                // Solo pide la temperatura si aún no ha sido registrada
                if (!registros[i])
                {
                    temperaturas[i] = ValidarDoble($"Ingrese la temperatura para el {dias[i]} (en Celsius): ");
                    registros[i] = true;
                    cantidadRegistros++;
                }
                else
                {
                    Console.WriteLine($"El día {dias[i]} ya tiene una temperatura registrada. Puede modificarla en la opción 4.");
                }
            }
            Console.WriteLine("¡Carga de temperaturas diarias completada!");
        }

        static void MostrarTemperaturas()
        {
            if (!HayRegistros())
            {
                Console.WriteLine("No se han cargado temperaturas aún.");
                return;
            }

            Console.WriteLine("\n--- Temperaturas Registradas ---");
            for (int i = 0; i < temperaturas.Length; i++)
            {
                if (registros[i])
                {
                    Console.WriteLine($"{dias[i]}: {temperaturas[i]:F2}°C");
                }
                else
                {
                    Console.WriteLine($"{dias[i]}: No hay registro.");
                }
            }
        }

        static void MostrarTemperaturasEnKelvin()
        {
            if (!HayRegistros())
            {
                Console.WriteLine("No se han cargado temperaturas para convertir.");
                return;
            }

            Console.WriteLine("\n--- Temperaturas en Kelvin ---");
            for (int i = 0; i < temperaturas.Length; i++)
            {
                if (registros[i])
                {
                    double kelvin = temperaturas[i] + 273.15;
                    Console.WriteLine($"{dias[i]}: {kelvin:F2}K");
                }
                else
                {
                    Console.WriteLine($"{dias[i]}: No hay registro para convertir.");
                }
            }
        }

        static void ModificarTemperaturaDiaEspecifico()
        {
            if (!HayRegistros())
            {
                Console.WriteLine("No hay temperaturas registradas para modificar.");
                return;
            }

            Console.WriteLine("\n--- Modificar Temperatura de un Día Específico ---");
            Console.WriteLine("Días disponibles:");
            for (int i = 0; i < dias.Length; i++)
            {
                Console.WriteLine($"{i + 1}. {dias[i]}");
            }

            int indiceDia = -1;
            // Solicitar y validar que el número de día sea válido
            while (indiceDia < 0 || indiceDia >= dias.Length)
            {
                indiceDia = ValidarEntero("Ingrese el número del día a modificar (1-7):") - 1; // Convertir a índice (0-6)

                if (indiceDia < 0 || indiceDia >= dias.Length)
                {
                    Console.WriteLine("Número de día inválido. Por favor, ingrese un número entre 1 y 7.");
                }
            }

            // Verificar si el día seleccionado tiene una temperatura registrada para modificar
            if (!registros[indiceDia])
            {
                Console.WriteLine($"El día {dias[indiceDia]} no tiene una temperatura registrada. Use la opción 1 para cargarla.");
                return;
            }

            // Si el día es válido y tiene registro, pedir la nueva temperatura
            temperaturas[indiceDia] = ValidarDoble($"Ingrese la nueva temperatura para el {dias[indiceDia]} (en Celsius): ");
            Console.WriteLine($"¡Temperatura del {dias[indiceDia]} modificada exitosamente!");
        }

        static void MostrarTemperaturasOrdenadas()
        {
            if (!HayRegistros())
            {
                Console.WriteLine("No se han cargado temperaturas para ordenar.");
                return;
            }

            Console.WriteLine("\n--- Temperaturas Ordenadas (de Menor a Mayor) ---");
            // Crear una copia del array de temperaturas para no modificar el original
            double[] temperaturasCopia = new double[cantidadRegistros];
            int idxCopia = 0;
            // Solo copiar las temperaturas que están registradas
            for (int i = 0; i < temperaturas.Length; i++)
            {
                if (registros[i])
                {
                    temperaturasCopia[idxCopia] = temperatures[i];
                    idxCopia++;
                }
            }

            // Algoritmo de ordenamiento de burbuja (manual)
            for (int i = 0; i < temperaturasCopia.Length - 1; i++)
            {
                for (int j = 0; j < temperaturasCopia.Length - 1 - i; j++)
                {
                    if (temperaturasCopia[j] > temperaturasCopia[j + 1])
                    {
                        // Intercambiar elementos
                        double temp = temperaturasCopia[j];
                        temperaturasCopia[j] = temperaturasCopia[j + 1];
                        temperaturasCopia[j + 1] = temp;
                    }
                }
            }

            // Mostrar las temperaturas ordenadas
            foreach (double temp in temperaturasCopia)
            {
                Console.WriteLine($"{temp:F2}°C");
            }
        }

        static void MostrarTemperaturaMasAlta()
        {
            if (!HayRegistros())
            {
                Console.WriteLine("No se han cargado temperaturas para calcular la máxima.");
                return;
            }

            double maxima = double.MinValue; // Inicializar con el valor más bajo posible
            string diaMaxima = "N/A"; // Para almacenar el día con la temperatura máxima

            for (int i = 0; i < temperaturas.Length; i++)
            {
                if (registros[i]) // Solo considera días con registro
                {
                    if (temperaturas[i] > maxima)
                    {
                        maxima = temperatures[i];
                        diaMaxima = dias[i];
                    }
                }
            }
            Console.WriteLine($"\nLa temperatura máxima registrada es: {maxima:F2}°C (el día {diaMaxima})");
        }

        static void MostrarTemperaturaMasBaja()
        {
            if (!HayRegistros())
            {
                Console.WriteLine("No se han cargado temperaturas para calcular la mínima.");
                return;
            }

            double minima = double.MaxValue; // Inicializar con el valor más alto posible
            string diaMinima = "N/A"; // Para almacenar el día con la temperatura mínima

            for (int i = 0; i < temperaturas.Length; i++)
            {
                if (registros[i]) // Solo considera días con registro
                {
                    if (temperaturas[i] < minima)
                    {
                        minima = temperatures[i];
                        diaMinima = dias[i];
                    }
                }
            }
            Console.WriteLine($"\nLa temperatura mínima registrada es: {minima:F2}°C (el día {diaMinima})");
        }

        static void MostrarPromedio()
        {
            if (!HayRegistros())
            {
                Console.WriteLine("No se han cargado temperaturas para calcular el promedio.");
                return;
            }

            Console.WriteLine($"\nLa temperatura promedio de la semana es: {CalcularPromedio():F2}°C");
        }

        static void ContarDiasMayorAlPromedio()
        {
            if (!HayRegistros())
            {
                Console.WriteLine("No se han cargado temperaturas para contar días por encima del promedio.");
                return;
            }

            double promedio = CalcularPromedio();
            int contador = 0;
            Console.WriteLine($"\n--- Días con Temperatura Superior al Promedio ({promedio:F2}°C) ---");
            for (int i = 0; i < temperaturas.Length; i++)
            {
                if (registros[i] && temperaturas[i] > promedio)
                {
                    Console.WriteLine($"{dias[i]}: {temperaturas[i]:F2}°C");
                    contador++;
                }
            }
            Console.WriteLine($"\nHay {contador} día(s) con temperatura superior al promedio.");
        }

        // --- Funciones de Validación y Verificación (de tu código, con ajustes) ---

        static bool HayRegistros()
        {
            // Verifica si hay al menos una temperatura registrada
            return cantidadRegistros > 0;
        }

        static int ValidarEntero(string mensaje)
        {
            int valor;
            while (true)
            {
                Console.Write(mensaje + " "); // Usar Write para que la entrada esté en la misma línea
                if (int.TryParse(Console.ReadLine(), out valor))
                {
                    return valor;
                }
                else
                {
                    Console.WriteLine("Entrada inválida. Por favor, ingrese un número entero.");
                }
            }
        }

        static double ValidarDoble(string mensaje)
        {
            double valor;
            while (true)
            {
                Console.Write(mensaje + " "); // Usar Write para que la entrada esté en la misma línea
                if (double.TryParse(Console.ReadLine(), out valor))
                {
                    return valor;
                }
                else
                {
                    Console.WriteLine("Entrada inválida. Por favor, ingrese un número decimal válido (ej. 25.5).");
                }
            }
        }

        static double CalcularPromedio()
        {
            // Asegurarse de que solo se sumen las temperaturas registradas
            double suma = 0;
            if (cantidadRegistros == 0) return 0; // Evitar división por cero

            for (int i = 0; i < temperaturas.Length; i++)
            {
                if (registros[i])
                {
                    suma += temperatures[i];
                }
            }
            // El promedio se calcula sobre la cantidad de días registrados, no siempre 7
            return suma / cantidadRegistros;
        }
    }
}
```
