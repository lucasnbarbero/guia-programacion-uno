# Programación Declarativa

La **programación declarativa** es un paradigma que se enfoca en **qué se quiere lograr** en lugar de **cómo lograrlo**. Se define el resultado deseado, y se deja que el sistema determine los pasos necesarios para alcanzarlo. Se basa en la lógica y las relaciones, sin detallar el flujo de control.

## 🧠 Características Clave

| Característica     | Descripción                                                            |
| ------------------ | ---------------------------------------------------------------------- |
| **Expresividad**   | Uso de abstracciones de alto nivel para describir el problema.         |
| **Declaratividad** | Se declara el resultado deseado, sin especificar los pasos exactos.    |
| **Inferencia**     | El sistema deduce cómo realizar las operaciones según lo declarado.    |
| **Predicados**     | Se utilizan expresiones lógicas para definir relaciones y condiciones. |

### ✅ Ventajas

- **Simplicidad:** Código más conciso y fácil de entender.
- **Abstracción:** Se separa la lógica del programa de su implementación.
- **Optimización:** El sistema puede aplicar mejoras automáticas de rendimiento.

### ⚠️ Desventajas

- **Menor precisión:** Puede ser difícil expresar ciertos algoritmos con claridad.
- **Implementación compleja:** Convertirlo en instrucciones de máquina puede ser más difícil.
- **Detección de errores difícil:** La separación lógica/implementación complica la depuración.
- **Menos control:** El sistema toma decisiones que no podemos ajustar fácilmente.

> 🔍 _La depuración en programación declarativa requiere un conocimiento profundo del lenguaje y su comportamiento interno._

## 🧪 Ejercicio de Comparación

**Consigna:** Sumar los números del 1 al 10 e imprimir el resultado.

### 📌 Lenguaje: PSeInt

> ❌ _PSeInt no tiene soporte para programación declarativa._

### 📌 Lenguaje: C# (LINQ)

```csharp
using System;
using System.Linq;

class Programa {
    static void Main() {
        int suma = Enumerable.Range(1, 10).Sum();
        Console.WriteLine($"La suma de los números del 1 al 10 es: {suma}");
    }
}
```

### 📌 Lenguaje: JavaScript (Array + reduce)

```javascript
const numeros = Array.from({ length: 10 }, (_, i) => i + 1);
const suma = numeros.reduce((acum, num) => acum + num, 0);
console.log(`La suma de los números del 1 al 10 es: ${suma}`);
```

## 🎯 Conclusión

En la **programación declarativa**, el foco está en la lógica y el resultado. No detallamos cada paso, sino que usamos funciones y expresiones propias del lenguaje para expresar lo que queremos obtener. Esto permite un desarrollo más abstracto, pero requiere comprensión profunda del entorno de ejecución.

> 💡 _Este paradigma resalta cómo un mismo problema puede resolverse desde distintos enfoques, reflejando la evolución y diversidad en la programación._
