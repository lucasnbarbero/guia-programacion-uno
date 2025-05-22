# 🧠 Definir, Inicializar y Asignar Variables + Palabras Reservadas

---

## 📌 ¿Qué es **definir una variable**?

**Definir una variable** significa decirle al programa que **existe una nueva caja** en memoria para guardar datos.

Cuando la definimos:

- Le damos un **nombre único** (alias).
- Especificamos el **tipo de dato** que contendrá.

📦 Esto le permite al programa reservar espacio en la memoria y saber **qué tipo de dato puede almacenar**.

---

### ✏️ Ejemplo - Definición en **PSeInt**

```pseint
Definir edad Como Entero
Definir nombre Como Cadena
```

🧠 Se define una variable llamada `edad` que contendrá números enteros, y otra llamada `nombre` que contendrá texto.

---

### ✏️ Ejemplo - Definición en **C#**

```csharp
int edad;
string nombre;
```

✅ Notá que en ambos casos se indica el tipo (`int` o `string`) y luego el nombre.

---

## ⚙️ ¿Qué es **inicializar una variable**?

Inicializar una variable es darle un **valor inicial** al momento de definirla.  
Esto ayuda a evitar que contenga datos vacíos o desconocidos.

---

### 🔰 Ejemplo - Inicialización en **PSeInt**

```pseint
Definir edad Como Entero ← 0
Definir nombre Como Cadena ← "Juan"
```

---

### 🔰 Ejemplo - Inicialización en **C#**

```csharp
int edad = 0;
string nombre = "Juan";
```

> ⚠️ En C#, si no inicializás algunas variables locales, el compilador te mostrará un error si intentás usarlas.

---

## 🎯 ¿Qué es **asignar un valor**?

Asignar un valor es darle contenido a una variable en cualquier momento **después de declararla**.

- En la mayoría de lenguajes se usa el operador `=`.
- En **PSeInt**, también podés usar `<-` según la versión.

---

### 🔄 Ejemplo - Asignación en **PSeInt**

```pseint
edad ← 25
nombre ← "Lucas"
```

---

### 🔄 Ejemplo - Asignación en **C#**

```csharp
edad = 25;
nombre = "Lucas";
```

---

## 🛑 Palabras Reservadas (o Claves)

Las **palabras reservadas** son palabras que **ya están definidas** por el lenguaje y **no pueden ser usadas como nombres de variables o funciones**.

Sirven para **instrucciones propias del lenguaje**.

---

### 🚫 Ejemplo - Palabra reservada en **PSeInt**

```pseint
Escribir("Hola mundo")  // ✅ OK
Definir Escribir Como Cadena  // ❌ Error: "Escribir" ya está reservado
```

`Escribir` es una instrucción del lenguaje para mostrar mensajes. ¡No se puede usar como nombre de variable!

---

### 🚫 Ejemplo - Palabra reservada en **C#**

```csharp
Console.WriteLine("Hola mundo"); // ✅ OK
string Console = "texto";        // ❌ Error: "Console" ya está reservado
```

`Console` es un objeto especial en C# que contiene métodos como `WriteLine`. No se puede sobreescribir.

---

## 🧠 Resumen Visual

| Acción          | ¿Qué hace?                                    | ¿Cuándo?                          |
| --------------- | --------------------------------------------- | --------------------------------- |
| **Definir**     | Crear la variable y especificar su tipo       | Al declarar                       |
| **Inicializar** | Asignar un valor inicial                      | Al declarar                       |
| **Asignar**     | Cambiar el valor de una variable ya declarada | En cualquier momento del código   |
| **Reservadas**  | Palabras que no podés usar para tus variables | Siempre, son propias del lenguaje |

---

> 🎓 **Consejo para estudiantes**: Siempre que puedas, inicializá tus variables al declararlas. Así evitás errores comunes como usar datos sin valor asignado.
