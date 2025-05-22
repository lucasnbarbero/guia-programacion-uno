using System;

namespace Primera_Aplicacion
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