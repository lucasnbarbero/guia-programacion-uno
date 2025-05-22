# Programación Funcional

La **programación funcional** es un paradigma que modela la computación como la **evaluación de funciones matemáticas**, evitando cambios de estado y datos mutables. Se centra en la creación y composición de funciones **puras**, es decir, funciones que no tienen efectos secundarios y que devuelven siempre el mismo resultado con los mismos argumentos.

---

## 🧠 Características

* **Funciones puras**: No dependen de variables externas ni modifican el estado del programa.
* **Inmutabilidad**: Los datos no se modifican una vez creados.
* **Composición**: Las funciones pueden combinarse entre sí para crear otras más complejas.
* **Recursión**: Se utiliza la recursividad en lugar de bucles para iterar.

---

### ✅ Ventajas

* **Predictibilidad**: Menos errores por efectos colaterales.
* **Testabilidad**: Las funciones puras son más fáciles de probar.
* **Paralelismo**: Al no modificar estado, es más sencillo ejecutar código en paralelo o concurrente.

---

### ⚠️ Desventajas

* **Rendimiento**: En ciertos escenarios, puede ser menos eficiente que otros paradigmas.
* **Curva de aprendizaje**: Su enfoque abstracto y el uso intensivo de recursión puede resultar complejo para quienes recién comienzan.

---

## 🧪 Ejercicio de ejemplo

**Objetivo:** Sumar los números del 1 al 10 usando funciones puras.

---

### 🔤 Solución en PSeInt

```pseint
Funcion SumaRecursiva(n)
	Si n = 0 Entonces
		Retornar 0
	SiNo
		Retornar n + SumaRecursiva(n - 1)
	FinSi
FinFuncion

Proceso Principal
	Definir suma Como Entero
	suma <- SumaRecursiva(10)
	Escribir "La suma de los números del 1 al 10 es:", suma
FinProceso
```

---

### 🧾 Solución en C\#

```csharp
using System;

class Program
{
    static int SumaRecursiva(int n)
    {
        if (n == 0)
            return 0;
        else
            return n + SumaRecursiva(n - 1);
    }

    static void Main()
    {
        int suma = SumaRecursiva(10);
        Console.WriteLine("La suma de los números del 1 al 10 es: " + suma);
    }
}
```

---

### 🌐 Solución en JavaScript

```javascript
function sumaRecursiva(n) {
  if (n === 0) return 0;
  return n + sumaRecursiva(n - 1);
}

const suma = sumaRecursiva(10);
console.log("La suma de los números del 1 al 10 es: " + suma);
```

---

## 🎯 Conclusión

La programación funcional permite resolver problemas sin alterar el estado del programa ni utilizar estructuras repetitivas tradicionales. En su lugar, se apoya en la **recursión**, la **inmutabilidad** y la **composición de funciones**. Esto mejora la legibilidad, facilita las pruebas y fomenta una programación más declarativa y robusta.
