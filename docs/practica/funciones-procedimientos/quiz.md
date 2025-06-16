# 🧠🌟 ¡El Desafío del Quiz Maestro! 🏆

¿Te animas a crear tu propio juego de preguntas y respuestas en consola? En este ejercicio, vas a desarrollar un **Quiz interactivo** donde el programa te hará preguntas y el usuario deberá elegir la respuesta correcta. ¡Es una excelente manera de poner en práctica tus conocimientos de **vectores** para almacenar las preguntas y respuestas, y la **lógica condicional** para verificar las elecciones del jugador! 💻✨

## ✨ ¿Qué debe hacer tu programa?

1.  **Definir las preguntas:** Al inicio del programa, deberás tener un conjunto de preguntas predefinidas. Cada pregunta debe tener:
    - El enunciado de la pregunta.
    - Varias opciones de respuesta (por ejemplo, A, B, C).
    - La letra de la opción correcta.
    - Para almacenar esta información, deberás utilizar **múltiples vectores paralelos** (uno para los enunciados, otro para las opciones A, otro para las opciones B, etc., y otro para las respuestas correctas).
2.  **Iniciar una partida del Quiz:**
    - El programa recorrerá cada pregunta, mostrándola junto con sus opciones al usuario.
    - Debe solicitar al usuario que ingrese la letra de su respuesta (A, B o C).
    - Deberás validar que la entrada del usuario sea una opción válida (solo A, B o C).
3.  **Verificar respuestas:** Después de cada pregunta, el programa debe comparar la respuesta del usuario con la respuesta correcta:
    - Si es correcta, informarle al usuario y sumarle puntos.
    - Si es incorrecta, informarle y, si lo deseas, mostrarle cuál era la respuesta correcta.
4.  **Calcular y mostrar puntuación final:** Al finalizar todas las preguntas, el programa debe mostrar la cantidad de respuestas correctas y el puntaje total obtenido por el jugador.

> 💡 Tip: Utiliza un **menú repetitivo** (con `while` y `switch`) para ofrecer opciones como "Jugar Quiz" o "Salir". La lógica de la partida de Quiz debe estar encapsulada en una o varias funciones.

## 🧠 ¿Qué se practica en este ejercicio?

Este desafío te permitirá aplicar y consolidar los siguientes conceptos:

- ✅ Declaración y manejo de **vectores (arrays)** para almacenar diferentes tipos de datos relacionados (preguntas, opciones, respuestas).
- ✅ Uso de **múltiples vectores paralelos** para organizar información compleja (una pregunta con sus múltiples atributos).
- ✅ **Estructuras de control de flujo** (`for` para recorrer las preguntas, `if-else` para la lógica de verificación de respuestas).
- ✅ **Modularización del código** a través de **funciones o procedimientos** (por ejemplo, una función para jugar una ronda del quiz, otra para validar la entrada del usuario).
- ✅ **Validación de entradas** del usuario, asegurando que las respuestas ingresadas sean las esperadas.
- ✅ Manejo de **contadores** para llevar el puntaje.

## ✅ Conclusión

Este ejercicio no solo es divertido, ¡sino que es una excelente manera de integrar el uso de **arrays** y la **lógica condicional** en un programa interactivo! Te ayudará a pensar en cómo estructurar datos complejos y a construir una experiencia de usuario básica. ¡Prepárate para ser el **Quiz Maestro**! 🚀🏆

## 📄 Resolución del ejercicio

```csharp
using System;

namespace _03_quiz
{
    internal class Program
    {
        // Arrays paralelos para almacenar las preguntas y sus opciones
        static string[] preguntas = {
            "¿Cuál es la capital de Francia?",
            "¿Qué animal dice miau?",
            "¿Cuánto es 5 x 4?", // Agregado el signo de interrogación
            "¿Qué color resulta de mezclar azul y amarillo?",
            "¿Cuál es el planeta más cercano al Sol?"
        };
        static string[] opcionesA = { "a) Roma", "a) Perro", "a) 20", "a) Verde", "a) Marte" }; // Renombrado a 'opcionesA' para mayor claridad
        static string[] opcionesB = { "b) París", "b) Gato", "b) 25", "b) Rojo", "b) Mercurio" }; // Renombrado a 'opcionesB'
        static string[] opcionesC = { "c) Berlín", "c) Pájaro", "c) 15", "c) Naranja", "c) Venus" }; // Renombrado a 'opcionesC'
        static char[] respuestasCorrectas = { 'b', 'b', 'a', 'a', 'b' };

        static void Main(string[] args)
        {
            int opcion = 0;
            Console.WriteLine("--- 🧠🌟 ¡El Desafío del Quiz Maestro! 🏆 ---"); // Título al inicio del programa

            while (opcion != 2) // Bucle del menú principal
            {
                Console.WriteLine(MostrarMenu()); // Muestra el menú de opciones
                // Se agregó la validación para asegurar que la entrada del menú sea un entero
                opcion = ValidarEnteroMenu("Ingrese su opción:");
                Console.WriteLine(); // Salto de línea para mejor presentación

                switch (opcion)
                {
                    case 1:
                        IniciarPartidaQuiz(); // Llama a la función principal del juego
                        break;
                    case 2:
                        Console.WriteLine("¡Gracias por jugar! ¡Hasta la próxima!"); // Mensaje de salida
                        break;
                    default:
                        Console.WriteLine("Opción no válida. Por favor, ingrese 1 para jugar o 2 para salir.");
                        break;
                }
                // Se agregó una pausa y limpieza de consola para una mejor experiencia de usuario
                if (opcion != 2) // No pausar si el usuario elige salir
                {
                    Console.WriteLine("\nPresione cualquier tecla para continuar...");
                    Console.ReadKey();
                    Console.Clear();
                }
            }
        }

        // Función para mostrar el menú de opciones
        static string MostrarMenu()
        {
            return "1 - Empezar partida\n" +
                   "2 - Salir";
        }

        // Función principal que controla la lógica del juego del Quiz
        static void IniciarPartidaQuiz() // Renombrada para mayor claridad
        {
            Console.Clear(); // Limpia la consola al iniciar una partida
            Console.WriteLine("--- ¡Comienza el Quiz! ---");

            int puntaje = 0;
            int cantidadCorrectas = 0;

            // Recorre todas las preguntas
            for (int i = 0; i < preguntas.Length; i++)
            {
                Console.WriteLine($"\nPregunta {i + 1} de {preguntas.Length}:");
                Console.WriteLine(preguntas[i]); // Muestra el enunciado de la pregunta

                // Muestra las opciones de respuesta
                Console.WriteLine(opcionesA[i]);
                Console.WriteLine(opcionesB[i]);
                Console.WriteLine(opcionesC[i]);

                // Pide y valida la respuesta del usuario
                char respuestaUsuario = ValidarRespuesta("Ingrese su respuesta (A, B o C):");

                // Verifica si la respuesta es correcta
                if (char.ToLower(respuestaUsuario) == respuestasCorrectas[i]) // Usa char.ToLower para comparar sin importar mayúsculas/minúsculas
                {
                    Console.WriteLine("¡Correcto!");
                    puntaje += 5; // Suma puntos (puedes ajustar el valor)
                    cantidadCorrectas++;
                }
                else
                {
                    Console.WriteLine($"¡Incorrecto! La respuesta correcta era '{char.ToUpper(respuestasCorrectas[i])}'."); // Muestra la respuesta correcta
                }

                // Pausa breve después de cada pregunta para que el usuario pueda leer el feedback
                Console.WriteLine("\n----------------------------------------");
                Console.WriteLine("Presione cualquier tecla para la siguiente pregunta...");
                Console.ReadKey();
                Console.Clear(); // Limpia la consola para la siguiente pregunta
            }

            // Muestra el resultado final del Quiz
            Console.WriteLine("--- ¡Quiz Finalizado! ---");
            Console.WriteLine($"Has respondido correctamente a {cantidadCorrectas} de {preguntas.Length} preguntas.");
            Console.WriteLine($"Tu puntaje total es: {puntaje} puntos.");
            Console.WriteLine("-------------------------");
        }

        // Función para validar la entrada de la respuesta del usuario (A, B o C)
        static char ValidarRespuesta(string mensaje)
        {
            char respuesta;
            string entrada; // Usamos un string para leer y luego convertir a char

            while (true) // Bucle para pedir la respuesta hasta que sea válida
            {
                Console.Write(mensaje + " "); // Usa Console.Write para que el cursor quede en la misma línea
                entrada = Console.ReadLine();

                // Asegurarse de que la entrada no esté vacía y tenga un solo carácter
                if (string.IsNullOrWhiteSpace(entrada) || entrada.Length != 1)
                {
                    Console.WriteLine("Entrada inválida. Por favor, ingrese solo una letra (A, B o C).");
                    continue; // Vuelve a pedir la entrada
                }

                respuesta = entrada.ToLower()[0]; // Convierte la entrada a minúscula y toma el primer carácter

                // Valida si la respuesta es 'a', 'b' o 'c'
                if (respuesta == 'a' || respuesta == 'b' || respuesta == 'c')
                {
                    return respuesta; // Si es válida, retorna la respuesta
                }
                else
                {
                    Console.WriteLine("Respuesta inválida. Por favor, ingrese A, B o C.");
                }
            }
        }

        // Función para validar la entrada de opciones del menú (números enteros)
        static int ValidarEnteroMenu(string mensaje)
        {
            int valor;
            while (true)
            {
                Console.Write(mensaje + " "); // Usa Console.Write
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
    }
}
```
