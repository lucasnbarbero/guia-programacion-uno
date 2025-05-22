# Programación Imperativa

La **programación imperativa** es el primer paradigma de programación desarrollado, también conocido como **programación procedural**. Se basa en dar **instrucciones paso a paso** que cambian el **estado del programa** para lograr un resultado.

Su nombre viene del concepto de "imperar", es decir, **ordenar acciones** específicas al computador.

> 📌 **Ejemplo histórico:** En 1957, IBM desarrolló **FORTRAN** (Formula Translation), uno de los primeros lenguajes imperativos, orientado a cálculos científicos y de ingeniería. Utilizaba instrucciones como asignaciones, bucles y condicionales.

Este paradigma sirvió de base para los paradigmas que surgirían después, como:

- Programación orientada a objetos (POO)
- Programación funcional
- Programación declarativa

## 🚀 ¿Por qué empezamos con este paradigma?

El aprendizaje de la programación suele comenzar por el paradigma imperativo por las siguientes razones:

| Razón                                              | Descripción                                                                                             |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 🧱 **Fundamentos sólidos**                         | Introduce conceptos clave: variables, estructuras de control (if, while, for), funciones.               |
| 🌍 **Uso extendido**                               | Es ampliamente utilizado en la industria, por lo que sus principios son aplicables en contextos reales. |
| 🔄 **Facilita el aprendizaje de otros paradigmas** | Muchos conceptos se transfieren: entender cómo se modifica el estado te prepara para POO, por ejemplo.  |
| 🧠 **Fomenta el pensamiento algorítmico**          | Ayuda a desarrollar la capacidad de resolver problemas paso a paso.                                     |

## 🧠 Características principales

| Característica                    | Descripción                                                                         |
| --------------------------------- | ----------------------------------------------------------------------------------- |
| 🔁 **Secuencialidad**             | Las instrucciones se ejecutan una tras otra en orden.                               |
| 🧮 **Modificación de estado**     | Las variables cambian a lo largo del programa.                                      |
| 🔀 **Estructuras de control**     | Usa bucles (`for`, `while`) y condicionales (`if`, `else`) para controlar el flujo. |
| 📦 **Funciones y procedimientos** | Permite reutilizar código agrupándolo en bloques lógicos.                           |

---

## 🧪 Ejercicio práctico

**Problema**: Escribe un programa que calcule la suma de los números del 1 al 10 e imprima el resultado.

**Requisitos:**

- Usar un bucle para recorrer los números del 1 al 10.
- Sumar cada número a un acumulador.
- Imprimir el resultado final.

### 🔤 PSeInt

```pseint
Proceso SumarNumeros
  suma <- 0
  Para i <- 1 Hasta 10 Con Paso 1
    suma <- suma + i
  FinPara
  Escribir "La suma de los números del 1 al 10 es:", suma
FinProceso
```

### 💻 C\#

```csharp
using System;

class Program {
  static void Main() {
    int suma = 0;
    for (int i = 1; i <= 10; i++) {
      suma += i;
    }
    Console.WriteLine("La suma de los números del 1 al 10 es: " + suma);
  }
}
```

### 🌐 JavaScript

```javascript
let suma = 0;
for (let i = 1; i <= 10; i++) {
  suma += i;
}
console.log("La suma de los números del 1 al 10 es: " + suma);
```

### 🔍 ¿Qué tienen en común estos programas?

| Paso | Descripción                                             |
| ---- | ------------------------------------------------------- |
| 1️⃣   | Se inicializa la variable `suma` en 0.                  |
| 2️⃣   | Se ejecuta un bucle (`for`) que va del 1 al 10.         |
| 3️⃣   | En cada iteración se suma el valor de `i` a `suma`.     |
| 4️⃣   | Al terminar, se imprime el resultado.                   |
| ✅   | El programa termina porque ya no hay más instrucciones. |

---

## ✅ Conclusión

La **programación imperativa** se basa en la ejecución **ordenada y explícita** de instrucciones. Su modelo paso a paso es ideal para empezar a programar porque permite:

- Comprender el flujo del programa
- Visualizar cómo cambia el estado
- Aplicar conceptos universales a otros paradigmas

Dominar este paradigma sienta las bases para convertirte en un programador versátil y capaz de abordar problemas de forma lógica y estructurada.
