# ¡El Gran Sumador Infinito (o Casi)! ➕♾️

Escribe un programa que le pida al usuario que ingrese números enteros **positivos** y vaya calculando la suma de todos ellos. ¡El programa solo se detendrá y mostrará la suma total cuando el usuario, por fin, ingrese un número negativo!

¡Tu misión es hacer que el sumador funcione sin parar hasta esa señal de alto! 🚀

## 💡 Resolución 1

```csharp
int suma = 0;
int numero = 0;
while (numero >= 0)
{
    Console.WriteLine("Ingrese un numero posotivo");
    numero = int.Parse(Console.ReadLine());
    if (numero > 0)
    {
        suma += numero;
    }
}
Console.WriteLine($"La suma es {suma}");
Console.ReadKey();
```

## 🧠 ¿Qué hace este programa?

Este programa permite al usuario ingresar números positivos y va sumándolos hasta que se ingresa un número negativo. En ese momento, muestra el total acumulado y finaliza 🧾➕.

### 🔁 1. Bucle `while` con condición inicial

El bucle `while` se ejecuta mientras el número ingresado sea mayor o igual a cero. Esto permite controlar cuándo se debe seguir pidiendo datos y cuándo detenerse.

### 🎯 2. Solicitud y validación del número

En cada repetición, el programa pide al usuario un número. Si el número es positivo (mayor que 0), se suma al total acumulado. Si es negativo, el bucle termina.

### 📢 3. Mostrar el resultado

Una vez que el usuario introduce un número negativo, se sale del bucle y se muestra el resultado de la suma total de todos los números positivos ingresados.

## ✅ Conclusión

Este código es una buena forma de practicar bucles `while`, condiciones y acumuladores. Enseña cómo repetir una acción basada en la entrada del usuario y cómo detener el ciclo con una condición clara. ¡Muy útil para afianzar los fundamentos de la programación! 🧠✨

## 💡 Resolución 2

```csharp
int numero;
int suma = 0;
do
{
    Console.WriteLine("Ingrese un números postivo; para terminar ingrese un números negativo");
    numero = int.Parse(Console.ReadLine());
    if (numero > 0)
    {
        suma += numero;
    }
} while (numero > 0);
Console.WriteLine($"La suma de los números ingresados es {suma}");
Console.ReadKey();
```

## 🧠 ¿Qué hace este programa?

Este programa le pide al usuario que ingrese números enteros positivos y va sumándolos, pero se detiene cuando el usuario ingresa un número negativo 🧮🛑.

### 🔁 1. Uso del bucle `do...while`

El ciclo `do...while` asegura que el bloque de código se ejecute al menos una vez, pidiendo al usuario que ingrese un número en cada vuelta.

### ➕ 2. Sumar solo si el número es positivo

Cada vez que se ingresa un número, se verifica si es positivo. Si lo es, se suma a una variable acumuladora que guarda el total.

### ❌ 3. Cortar cuando el número es negativo

El ciclo sigue ejecutándose mientras el número ingresado sea mayor que 0. En cuanto se introduce un número negativo, el bucle termina.

### 📊 4. Mostrar el resultado

Después de salir del bucle, el programa muestra la suma total de los números positivos ingresados.

## ✅ Conclusión

Este ejercicio es ideal para practicar bucles con condiciones, acumuladores y estructuras de control. Además, permite trabajar con lógica de repetición hasta que se cumpla una condición específica. ¡Buen trabajo si llegaste hasta acá! 💪😁
