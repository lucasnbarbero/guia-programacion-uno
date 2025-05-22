# 🔹 Programación Funcional: Procedimientos y Funciones

## 🧠 ¿Qué es la programación funcional?

La programación funcional se basa en la **descomposición de problemas complejos** en subproblemas más simples. Estos subproblemas se resuelven mediante **subalgoritmos**, también llamados **subprogramas**, que pueden tomar la forma de **procedimientos** o **funciones**.

---

## 🔧 Subalgoritmos: funciones y procedimientos

Los subalgoritmos son **módulos reutilizables** que ejecutan tareas específicas. Se escriben una sola vez, pero pueden ser invocados desde distintos puntos del programa, lo cual **evita la duplicación innecesaria de código**.

### 🧩 Control de ejecución

- El **programa principal** da la orden de inicio de los subprogramas.
- Un **subprograma** puede ser llamado varias veces (`n` veces) desde el principal o desde otros subprogramas.
- Mientras un subprograma se ejecuta, el programa que lo llamó **se detiene** y espera a que termine.

---

## 🔁 Funciones

Una **función** es un subprograma que:

- Recibe datos de entrada (**parámetros**), numéricos o no.
- Devuelve **un único resultado** como salida.

### 🔍 Tipos de funciones

- **Funciones internas o intrínsecas:** incorporadas al lenguaje.
- **Funciones externas:** definidas por el programador.

### 🧾 Ejemplo de función en C\#

```csharp
int Sumar(int a, int b) {
    return a + b;
}

int resultado = Sumar(5, 3);
Console.WriteLine(resultado); // Salida: 8
```

Para que una función funcione correctamente, el número, tipo y orden de los argumentos debe coincidir con su definición.

---

## 🔁 Procedimientos

Un **procedimiento** es un subprograma que **ejecuta una tarea específica**, pero **no devuelve un resultado directamente**.

### 🧩 Características

- Se les asigna un **nombre** (identificador).
- Deben ser **declarados antes de ser llamados**.
- Pueden recibir **cero o más parámetros** desde el programa principal.

### ✅ Ventajas de usar procedimientos

- Se pueden reutilizar múltiples veces en el mismo programa.
- Se pueden compartir entre distintos programas.
- Permiten dividir tareas entre miembros del equipo.
- Pueden probarse de forma aislada e incorporarse en **librerías**.

### 🧾 Ejemplo de procedimiento en C\#

```csharp
void MostrarMensaje(string mensaje) {
    Console.WriteLine(mensaje);
}

MostrarMensaje("¡Hola, mundo!");
```
