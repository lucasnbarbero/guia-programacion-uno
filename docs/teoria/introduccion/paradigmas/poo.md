# Programación Orientada a Objetos (POO)

La **Programación Orientada a Objetos (POO)** es un paradigma basado en el concepto de objetos, que contienen datos (atributos) y funciones (métodos). Estos objetos interactúan mediante el envío de mensajes.

Un objeto puede representar, por ejemplo, a una persona con atributos como nombre, edad y localidad. Para crear objetos concretos, usamos un **molde** llamado **Clase**, que define la estructura común de esos objetos.

Otro ejemplo es la clase **Mascota**, con atributos como nombre, especie, raza, dueño y edad. Al tener varios objetos de la misma clase, podemos procesar sus atributos para obtener estadísticas, como el promedio de edad o la raza más común.

## 🧠 Características

- **Clases y Objetos**: Las clases son plantillas para crear objetos, que son instancias de esas clases.
- **Encapsulación**: Oculta los detalles internos del objeto, exponiendo solo una interfaz pública.
- **Herencia**: Permite que una clase herede atributos y métodos de otra clase.
- **Polimorfismo**: Un objeto puede comportarse de diferentes formas según el contexto.

### ✅ Ventajas

- **Reutilización de código**: Clases y objetos pueden usarse en distintas partes del programa.
- **Modularidad**: El código se organiza en módulos pequeños y fáciles de mantener.
- **Flexibilidad**: Facilita el diseño e implementación de software adaptable.

### ⚠️ Desventajas

- **Sobrecarga**: Puede generar mayor consumo de memoria y procesamiento por la creación y gestión de objetos.

## 🧪 Ejercicio de ejemplo

**Objetivo**: Implementar una clase llamada `Calculadora` con un método para calcular la suma de dos números.

### 🔤 Solución en PSeInt

```pseint
Proceso Principal
    Definir resultado Como Entero
    resultado <- 0

    // No soporta clases ni objetos, se usa un procedimiento simple
    Funcion calcularSuma(a, b)
        Retornar a + b
    FinFuncion

    resultado <- calcularSuma(5, 7)
    Escribir "La suma es: ", resultado
FinProceso
```

### 🔤 Solución en C#

```csharp
using System;

class Calculadora
{
    public int CalcularSuma(int a, int b)
    {
        return a + b;
    }
}

class Program
{
    static void Main()
    {
        Calculadora calc = new Calculadora();
        int resultado = calc.CalcularSuma(5, 7);
        Console.WriteLine("La suma es: " + resultado);
    }
}
```

### 🌐 Solución en JavaScript

```javascript
class Calculadora {
  calcularSuma(a, b) {
    return a + b;
  }
}

const calc = new Calculadora();
const resultado = calc.calcularSuma(5, 7);
console.log("La suma es: " + resultado);
```

## 🎯 Conclusión

La Programación Orientada a Objetos es fundamental para escribir código claro, modular y reutilizable. Aunque sus conceptos son abstractos y requieren práctica, entenderlos y aplicarlos permite desarrollar software más productivo y sostenible en el tiempo. La clave está en practicar y comprender estos conceptos más allá de memorizarlos.
