# ¡El Desafío del Ta-Te-Ti! 🎮❌⭕️

¿Quién será el ganador, el jugador ❌ o el jugador ⭕? En este ejercicio vas a desarrollar un clásico **juego de Ta-Te-Ti (Tres en línea)** para jugar en consola. Lo interesante es que vas a utilizar **recursividad** para ir alternando los turnos, y vas a trabajar con **matrices bidimensionales** (vectores de vectores) para representar el tablero. 🧠🎲

## ✨ ¿Qué debe hacer tu programa?

1. Mostrar un tablero vacío al iniciar.
2. Permitir que el jugador X elija una celda (indicando fila y columna).
3. Luego permitir al jugador O elegir su celda.
4. Alternar turnos entre jugadores hasta que uno gane o se complete el tablero.
5. Validar que las celdas elegidas no estén ocupadas.
6. Anunciar el resultado: si ganó X, ganó O o si fue un empate.

> 💡 Tip: usá la **recursividad** para alternar los turnos. Podés hacer que el método `JugarTurno` se llame a sí mismo con el jugador siguiente.

## 📦 Código base sugerido

Aquí te damos algunas funciones ya preparadas para que te enfoques en la lógica del juego y el uso de recursividad.

```csharp
// Inicializa el tablero con espacios vacíos
static void InicializarTablero(char[,] tablero)
{
    for (int fila = 0; fila < 3; fila++)
    {
        for (int col = 0; col < 3; col++)
        {
            tablero[fila, col] = ' ';
        }
    }
}

// Muestra el tablero actual en consola
static void MostrarTablero(char[,] tablero)
{
    Console.WriteLine("  0   1   2 ");
    for (int fila = 0; fila < 3; fila++)
    {
        Console.Write(fila + " ");
        for (int col = 0; col < 3; col++)
        {
            Console.Write(tablero[fila, col]);
            if (col < 2) Console.Write(" | ");
        }
        Console.WriteLine();
        if (fila < 2) Console.WriteLine(" ---+---+---");
    }
}
```

## 🧠 ¿Qué se practica en este ejercicio?

Este desafío te permite poner en práctica varios temas clave:

- ✅ Declaración y uso de **arrays bidimensionales (`char[,]`)**
- ✅ Entrada y validación de datos del usuario con `Console.ReadLine()`
- ✅ **Control de flujo** con `if`, `while`, funciones y recursividad
- ✅ Lógica de programación para detectar ganadores
- ✅ Organización del código en **métodos reutilizables**

También es un excelente ejemplo para ver cómo podemos estructurar el código en partes más pequeñas y comprensibles, y cómo se puede aplicar la recursividad en un contexto distinto al de funciones matemáticas puras.

## ✅ Conclusión

Este ejercicio no solo es entretenido, ¡sino también un excelente entrenamiento mental! Te ayuda a aplicar de manera integrada conceptos básicos como vectores, condicionales, recursividad y funciones. Además, te prepara para **estructurar programas más complejos** y pensar en lógica de juego 🤖✨.

## 📄 Resolución del ejercicio

```csharp
using System;

namespace TaTeTiGame
{
    internal class Program
    {
        // Declaración del tablero de Ta-Te-Ti como una matriz de caracteres (3 filas x 3 columnas)
        static char[,] tablero = new char[3, 3];

        static void Main(string[] args)
        {
            Console.WriteLine("--- 🎮❌⭕️ ¡El Desafío del Ta-Te-Ti! 🏆 ---");
            Console.WriteLine("¡Bienvenido al juego de Ta-Te-Ti!");

            // Inicializa el tablero con espacios vacíos antes de cada partida
            InicializarTablero(tablero);

            // Muestra el tablero inicial vacío
            Console.WriteLine("\nTablero Inicial:");
            MostrarTablero(tablero);

            // Inicia el juego llamando a la función recursiva JugarTurno
            // El juego comienza con el jugador 'X' y 0 turnos jugados.
            JugarTurno(tablero, 'X', 0);

            Console.WriteLine("\n¡Juego Terminado!");
            Console.ReadKey(); // Espera una tecla antes de cerrar la consola
        }

        // --- Funciones del código base sugerido ---

        // Inicializa el tablero con espacios vacíos
        static void InicializarTablero(char[,] tablero)
        {
            for (int fila = 0; fila < 3; fila++)
            {
                for (int col = 0; col < 3; col++)
                {
                    tablero[fila, col] = ' '; // Asigna un espacio en blanco a cada celda
                }
            }
        }

        // Muestra el tablero actual en consola
        static void MostrarTablero(char[,] tablero)
        {
            Console.WriteLine("   0   1   2 "); // Encabezado de columnas
            for (int fila = 0; fila < 3; fila++)
            {
                Console.Write(fila + " "); // Número de fila
                for (int col = 0; col < 3; col++)
                {
                    Console.Write(" " + tablero[fila, col]); // Contenido de la celda
                    if (col < 2) Console.Write(" |"); // Separador vertical entre columnas
                }
                Console.WriteLine(); // Salto de línea al final de cada fila
                if (fila < 2) Console.WriteLine("  ---+---+---"); // Separador horizontal entre filas
            }
            Console.WriteLine(); // Salto de línea adicional para estética
        }

        // --- Funciones para la lógica del juego ---

        // Función recursiva para jugar un turno
        // Recibe el tablero, el jugador actual ('X' o 'O') y la cantidad de turnos jugados hasta el momento.
        static void JugarTurno(char[,] tablero, char jugadorActual, int turnosJugados)
        {
            // --- Criterios de parada de la recursión (casos base) ---

            // 1. Verificar si el jugador anterior ganó
            // Si turnosJugados es mayor a 0, significa que ya se jugó al menos un turno
            // y podemos verificar si el jugador que acaba de jugar (el anterior) ganó.
            if (turnosJugados > 0)
            {
                // El jugador anterior es el opuesto al jugadorActual
                char jugadorAnterior = (jugadorActual == 'X') ? 'O' : 'X';
                if (VerificarGanador(tablero, jugadorAnterior))
                {
                    Console.WriteLine($"¡Felicidades! ¡El jugador {jugadorAnterior} ha ganado la partida!");
                    return; // Termina la recursión
                }
            }

            // 2. Verificar si es un empate (tablero lleno y nadie ganó)
            // Si se han jugado 9 turnos y nadie ha ganado, es un empate.
            if (turnosJugados == 9)
            {
                Console.WriteLine("¡Es un empate! El tablero está lleno.");
                return; // Termina la recursión
            }

            // --- Lógica del turno actual (paso recursivo) ---

            Console.WriteLine($"\nTurno del jugador: {jugadorActual}");
            int fila, columna;
            bool celdaValida = false;

            // Bucle para solicitar y validar la entrada del usuario
            while (!celdaValida)
            {
                // Solicita la fila al usuario y la valida
                fila = ValidarEntero("Ingrese el número de fila (0, 1 o 2):");
                // Solicita la columna al usuario y la valida
                columna = ValidarEntero("Ingrese el número de columna (0, 1 o 2):");

                // Valida si las coordenadas están dentro del tablero (0-2)
                if (fila >= 0 && fila < 3 && columna >= 0 && columna < 3)
                {
                    // Valida si la celda ya está ocupada
                    if (tablero[fila, columna] == ' ')
                    {
                        tablero[fila, columna] = jugadorActual; // Coloca la marca del jugador en la celda
                        celdaValida = true; // La celda es válida, sale del bucle
                    }
                    else
                    {
                        Console.WriteLine("¡Esa celda ya está ocupada! Por favor, elija otra.");
                    }
                }
                else
                {
                    Console.WriteLine("¡Coordenadas fuera del tablero! La fila y columna deben ser 0, 1 o 2.");
                }
            }

            // Muestra el tablero actualizado después del movimiento
            MostrarTablero(tablero);

            // Llamada recursiva para el siguiente turno
            // Cambia al siguiente jugador y incrementa la cuenta de turnos jugados
            char siguienteJugador = (jugadorActual == 'X') ? 'O' : 'X';
            JugarTurno(tablero, siguienteJugador, turnosJugados + 1);
        }

        // Verifica si un jugador ha ganado la partida
        static bool VerificarGanador(char[,] tablero, char jugador)
        {
            // --- Verificar filas ---
            for (int i = 0; i < 3; i++)
            {
                if (tablero[i, 0] == jugador && tablero[i, 1] == jugador && tablero[i, 2] == jugador)
                {
                    return true;
                }
            }

            // --- Verificar columnas ---
            for (int i = 0; i < 3; i++)
            {
                if (tablero[0, i] == jugador && tablero[1, i] == jugador && tablero[2, i] == jugador)
                {
                    return true;
                }
            }

            // --- Verificar diagonales ---
            // Diagonal principal (de arriba izquierda a abajo derecha)
            if (tablero[0, 0] == jugador && tablero[1, 1] == jugador && tablero[2, 2] == jugador)
            {
                return true;
            }
            // Diagonal secundaria (de arriba derecha a abajo izquierda)
            if (tablero[0, 2] == jugador && tablero[1, 1] == jugador && tablero[2, 0] == jugador)
            {
                return true;
            }

            return false; // Si no se encuentra ninguna condición de victoria
        }

        // Función para validar que la entrada del usuario sea un número entero
        static int ValidarEntero(string mensaje)
        {
            int valor;
            while (true) // Bucle para seguir pidiendo la entrada hasta que sea válida
            {
                Console.Write(mensaje + " "); // Usa Console.Write para que la entrada esté en la misma línea
                // Intenta convertir la entrada del usuario a un entero
                if (int.TryParse(Console.ReadLine(), out valor))
                {
                    return valor; // Retorna el valor si es un entero válido
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
