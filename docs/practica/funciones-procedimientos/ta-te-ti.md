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
