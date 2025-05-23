# ¡Acceso Restringido! Un Desafío de Seguridad 🚫🔒

¡Hora de poner a prueba tu ingenio con un poco de seguridad informática! 🕵️‍♀️ En este desafío, vamos a simular un sistema de acceso donde el usuario debe ingresar un código PIN secreto. Pero ¡cuidado! Solo tendrán un número limitado de intentos antes de que su cuenta sea bloqueada. ¿Podrás crear un sistema que proteja el acceso de forma segura? ¡A codificar! 🚀

Escribe un programa que simule un sistema de seguridad para un PIN. El programa debe:

1.  **Solicitar al usuario que ingrese un PIN**.
2.  **Verificar si el PIN ingresado es correcto**. Para este desafío, puedes asumir que el PIN correcto es "1234".
3.  Si el PIN es correcto, **mostrar un mensaje de "Acceso concedido"**.
4.  Si el PIN es incorrecto, el usuario debe tener **un número limitado de intentos** (por ejemplo, 3 intentos).
5.  Después de cada intento fallido, el programa debe **informar al usuario cuántos intentos le quedan**.
6.  Si el usuario agota todos sus intentos sin adivinar el PIN, el programa debe **mostrar un mensaje de "Su cuenta ha sido bloqueada"**.
7.  El programa debe **seguir solicitando el PIN** hasta que sea correcto o se agoten los intentos.

¡Tu misión es construir este pequeño guardián digital! ✨

```csharp
string pin = "1234";
int contador = 3;

do
{
    Console.WriteLine("Ingrese su clave pin");
    pin = Console.ReadLine();

    if (pin == "1234")
    {
        Console.WriteLine("Acceso concedido");
    }
    else if (contador == 0)
    {
        Console.WriteLine("Su cuenta ha sido bloqueada");
    }
    else
    {
        contador--;
        Console.WriteLine($"Acceso denegado. Le quedan {contador} intentos");
    }
} while (pin != "1234" && contador > 0);


Console.ReadKey();
```

## 🧠 ¿Qué hace este programa?

Este programa simula un sistema de ingreso con PIN, permitiendo hasta tres intentos para escribir la clave correcta. Si el usuario se equivoca, se le informa cuántos intentos le quedan. Si acierta, se le concede el acceso; si se equivoca tres veces, la cuenta queda bloqueada 🔐.

### 🔁 1. Uso del bucle `do...while`

El bucle garantiza que al menos una vez se pedirá al usuario ingresar el PIN. El ciclo continúa mientras la clave ingresada sea incorrecta y aún queden intentos disponibles.

### 🔐 2. Verificación del PIN

El programa compara el valor ingresado con una clave predeterminada (`"1234"`). Si es correcta, muestra un mensaje de acceso concedido.

### 🚫 3. Control de intentos

Cada vez que el PIN es incorrecto, se descuenta un intento. Si se agotan los 3 intentos sin ingresar el PIN correcto, el programa informa que la cuenta ha sido bloqueada.

## ✅ Conclusión

Este programa es perfecto para practicar validaciones, estructuras de control y el uso de bucles `do...while` con múltiples condiciones. Además, introduce una lógica muy común en aplicaciones reales como la autenticación de usuarios. ¡Buen paso hacia programas más interactivos y seguros! 🧑‍💻🔁
