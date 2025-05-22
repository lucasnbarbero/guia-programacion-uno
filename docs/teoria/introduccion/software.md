# Introducción al Software

## ¿Qué es el Software?

El **software** comprende el conjunto de programas, datos e instrucciones que permiten que una computadora u otro dispositivo electrónico realice tareas específicas. Es la parte intangible de un sistema informático, opuesta al hardware, y puede ir desde una simple calculadora hasta un sistema operativo complejo.

El software funciona como intermediario entre el usuario y el hardware, indicando a este último qué hacer y cómo hacerlo. Estos programas pueden organizarse en aplicaciones, servicios o sistemas que facilitan la interacción con el hardware.

> 🧠 **Ejemplo cotidiano:** Cuando abrimos un procesador de texto, el software traduce nuestras acciones (escribir, dar formato, guardar) en instrucciones que el hardware puede procesar.

---

## ¿Qué es el Código Fuente?

El **código fuente** es el texto escrito por un programador utilizando un lenguaje de programación. Contiene las instrucciones que indican al software cómo debe comportarse.

Este código es comprensible por humanos y debe traducirse a lenguaje de máquina para que pueda ser ejecutado por la computadora. Esta traducción puede hacerse mediante compiladores o intérpretes.

> 📌 El código fuente es fundamental para:
>
> * Comprender cómo funciona un programa.
> * Modificar su comportamiento.
> * Corregir errores o añadir nuevas funciones.

### Ejemplos:

* **En PSeInt:**

```pseudocodigo
Proceso ejemplo
    Escribir "Hola mundo"
FinProceso
```

* **En C#:**

```csharp
using System;
class Programa {
    static void Main() {
        Console.WriteLine("Hola mundo");
    }
}
```

---

## ¿Qué es el Hardware?

El **hardware** es el conjunto de componentes físicos que conforman un sistema informático: procesador, memoria, disco duro, monitor, etc. Trabaja en conjunto con el software para realizar operaciones.

La relación entre ambos es complementaria: el hardware ejecuta las instrucciones que el software le proporciona. Por ello, es vital que los desarrolladores comprendan sus capacidades y limitaciones.

> 🎯 **Ejemplo:** El software puede solicitar almacenar datos, pero será el disco (hardware) el que lo ejecute físicamente.

### Interacción:

```
[Usuario] → [Software] → [Hardware] → [Resultado]
```

---

## ¿Qué es un Sistema Operativo?

El **sistema operativo (SO)** es el software más importante en una computadora. Su función es gestionar los recursos del sistema y servir de puente entre el usuario, el hardware y las aplicaciones.

### Funciones principales:

* **Gestión de Recursos:** Administra memoria, CPU, dispositivos y almacenamiento.
* **Interfaz de Usuario:** GUI (gráfica) o CLI (línea de comandos).
* **Gestión de Procesos:** Controla ejecución de programas.
* **Gestión de Archivos:** Acceso seguro y eficiente a archivos.
* **Seguridad:** Protege contra accesos no autorizados.

### Ejemplos de Sistemas Operativos:

* **Para PC:** Windows, macOS, Linux, Unix.
* **Móviles:** Android, iOS, Tizen.

> 🔄 El SO es como un director de orquesta que asegura que todos los componentes trabajen en armonía.

---

## Lenguajes de Programación

### Lenguaje Máquina

Es el conjunto de instrucciones binarias (0 y 1) que una computadora puede ejecutar directamente. Está estrechamente vinculado al hardware y varía entre diferentes arquitecturas de procesador.

> 🧠 **Dato técnico:** Las compuertas lógicas del procesador se activan o desactivan según esta secuencia binaria.

### Lenguaje Ensamblador (Bajo Nivel)

Es un lenguaje simbólico que utiliza mnemónicos para representar instrucciones de máquina. Ofrece control detallado del hardware, pero es más complejo y menos portable que los lenguajes de alto nivel.

```asm
MOV AX, @data
MOV DS, AX
MOV DX, offset Cadena1
MOV AH, 9
INT 21h
INT 20h
```

> ⚙️ Se usa en sistemas embebidos, controladores, o situaciones donde el rendimiento es crítico.

### Lenguajes de Alto Nivel

Tienen una sintaxis más cercana al lenguaje humano. Son más fáciles de aprender, escribir, mantener y portar entre plataformas.

**Ejemplos:** C, Java, Python, JavaScript, C#, Go, PHP, etc.

> 🔄 Un mismo programa en lenguaje alto nivel puede funcionar en distintos sistemas si se compila adecuadamente.

---

## Traductores de Lenguajes

### Compilador

Traduce todo el código fuente a lenguaje máquina antes de ejecutarlo, generando un archivo ejecutable (.exe, .out, etc.).

**Ventajas:**

* Mayor velocidad de ejecución.
* Detecta errores antes de la ejecución.

### Intérprete

Ejecuta el código línea por línea, sin generar archivos intermedios. Útil para pruebas rápidas o entornos interactivos.

**Ventajas:**

* Ejecución inmediata.
* Ideal para depuración y educación.

---

## Diferencias entre Compilador e Intérprete

| Característica         | Compilador                  | Intérprete                    |
| ---------------------- | --------------------------- | ----------------------------- |
| Ejecución              | Antes de correr el programa | Durante la ejecución          |
| Portabilidad           | Menos portable              | Más portable (con intérprete) |
| Velocidad de ejecución | Alta                        | Menor                         |
| Archivos generados     | Ejecutable independiente    | No genera ejecutable          |
| Requisitos             | Solo necesita el ejecutable | Necesita el intérprete        |

> 💡 No es necesario preocuparse ahora por elegir uno u otro. Lo importante es practicar y entender cómo funcionan.

---

### ¿Qué sigue?

A medida que adquieras más experiencia, desarrollarás criterio para elegir herramientas y lenguajes adecuados a cada situación. Por ahora, explorá, experimentá, y aprovechá cada oportunidad de aprender practicando.
