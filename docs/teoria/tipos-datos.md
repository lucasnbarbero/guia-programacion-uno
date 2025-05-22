# 🧮 Tipos de Datos

En programación, los **tipos de datos** definen qué clase de información podemos almacenar en las variables y constantes.  
Son la **base fundamental** para manipular números, texto, símbolos, decisiones lógicas y más.

---

## 🔹 Tipos de Datos Primitivos

Estos son los **tipos más básicos** e integrados en casi todos los lenguajes de programación:

| Tipo de Dato           | Descripción                                               | Ejemplos                      | Emoji |
|------------------------|-----------------------------------------------------------|-------------------------------|-------|
| 🔢 `Enteros (int)`     | Números sin decimales, positivos o negativos              | `10`, `-5`, `0`               | ➕➖   |
| 🔣 `Flotantes (float)` | Números con parte decimal (punto flotante)                | `3.14`, `-0.01`, `2.718`      | 🌊    |
| 🔠 `Caracteres (char)` | Un único símbolo: letra, número o signo                   | `'a'`, `'Z'`, `'7'`, `'*'`     | 🔤    |
| 🧵 `Cadenas (string)`  | Secuencia de caracteres                                   | `"Hola"`, `"123ABC"`         | 🧶    |
| ⚖️ `Booleanos (bool)` | Verdadero o falso (lógica binaria)                        | `true`, `false`              | ✅❌   |

> 🧠 **Nota**: Algunos lenguajes distinguen entre `float` y `double` según la precisión decimal.

---

## 📦 ¿Dónde usamos estos datos?

En variables o constantes que almacenan información.  
Por ejemplo:

```pseudo
Nombre ← "Lucas"
Edad ← 29
EsEstudiante ← true
```

Cada uno de estos valores es de un **tipo diferente** y se trata de forma distinta por el programa.

---

## 🧠 Tipado en los Lenguajes

La manera en que los lenguajes tratan los tipos de datos varía según su **sistema de tipado**.  
Veamos las dos grandes categorías:

### 🛡️ Lenguajes Fuertemente Tipados

> 💬 *“¡El tipo de dato importa mucho y debe ser claro desde el inicio!”*

- Se debe **declarar el tipo** de cada variable.
- No se puede **cambiar el tipo** una vez asignado.
- Mayor **seguridad** y **menos errores inesperados**.
- Ideal para proyectos grandes y mantenibles.

📌 **Ejemplos**: Java, C#, Swift, PSeInt

```java
int edad = 25;      // Solo puede contener enteros
edad = "veinticinco";  // ❌ Error
```

---

### 🎭 Lenguajes Débilmente Tipados

> 💬 *“El tipo puede cambiar según lo que guardes.”*

- No hace falta declarar el tipo explícitamente.
- Una variable puede **cambiar de tipo** durante la ejecución.
- Más **flexibilidad**, pero más **propenso a errores sutiles**.

📌 **Ejemplos**: JavaScript, Python, PHP

```javascript
let dato = 10;      // Es un número
dato = "diez";      // Ahora es una cadena
```

---

## ⚖️ Comparativa Visual

| Característica             | Fuertemente Tipado       | Débilmente Tipado         |
|---------------------------|---------------------------|----------------------------|
| Tipo de dato obligatorio  | ✅ Sí                      | ❌ No                      |
| Cambio de tipo permitido  | ❌ No                      | ✅ Sí                      |
| Seguridad en tiempo de compilación | ✅ Alta           | ⚠️ Baja                   |
| Flexibilidad               | 🔒 Menor                  | 🎨 Mayor                   |

---

## 🧭 ¿Qué conviene usar?

| Proyecto                    | Recomendación                  |
|-----------------------------|-------------------------------|
| Grandes y críticos          | ✅ Fuertemente tipado         |
| Prototipos, scripts rápidos | 🎯 Débilmente tipado         |

> 📌 **Conclusión**: Elegir entre un sistema tipado fuerte o débil depende de lo que estés construyendo.  
> ¡Lo importante es conocer las diferencias y usar cada uno con responsabilidad!

---

### 📚 Relación con Variables y Constantes

Recordá que **las variables y constantes almacenan datos**, y estos datos **siempre tienen un tipo**.  
El cómo y cuándo se define ese tipo depende del lenguaje que estés usando.

