# 🔢 Variables y Constantes

Un programa necesita una forma de **guardar y manipular datos**. Para ello, usamos **variables** y **constantes**, que nos permiten trabajar con la memoria del computador de manera sencilla y controlada.

---

## 📦 ¿Qué es una Variable?

Una **variable** es un **espacio en la memoria RAM** de la computadora donde se puede almacenar un valor que puede cambiar con el tiempo.  
Al declarar una variable, el programa reserva una o más “casillas” de memoria (llamadas **direcciones**), que podemos identificar mediante un **nombre**.

> 🎯 **Ejemplo**:  
> Si escribimos `Edad = 18`, estamos guardando el número 18 en una parte de la memoria, y le damos el nombre `Edad` para poder acceder a ese dato más fácilmente.

💡 **Importante:**  
No trabajamos directamente con direcciones de memoria como `0x5A3C`, sino que usamos nombres como `Edad`, `Nombre`, `Puntaje`, etc.

---

## ♻️ Características de las Variables

- Su valor **puede cambiar** durante la ejecución del programa.
- Son útiles para **almacenar resultados, entradas del usuario o valores intermedios**.
- Se pueden **reutilizar y actualizar** tantas veces como sea necesario.

---

## 🛑 ¿Y qué es una Constante?

Una **constante** es similar a una variable, pero con una diferencia clave:

> 🔐 **Su valor no puede cambiar una vez asignado.**

Esto significa que, si definimos una constante con un valor, ese valor permanecerá igual durante toda la ejecución del programa.

> 🎯 **Ejemplo**:  
> `PI = 3.14159`  
> `MAX_INTENTOS = 3`

## 📌 Cuándo usar una Constante

Usamos constantes cuando necesitamos **proteger un valor** que no debe modificarse, como:

- El valor de **PI**
- El número **máximo de intentos** en un juego
- El nombre de un **archivo de configuración**

## 🔁 Comparación rápida

| Característica  | Variable                     | Constante                     |
| --------------- | ---------------------------- | ----------------------------- |
| ¿Puede cambiar? | ✅ Sí                        | ❌ No                         |
| ¿Cuándo se usa? | Cuando el valor puede variar | Cuando el valor debe ser fijo |
| Ejemplo         | `precio = 1200`              | `IVA = 0.21`                  |

## ✨ **Conclusión:**

Las **variables** te permiten **almacenar y modificar** datos dinámicamente.  
Las **constantes** te aseguran que ciertos valores permanezcan **inamovibles**.

Ambas son herramientas esenciales para construir programas claros, seguros y mantenibles.
