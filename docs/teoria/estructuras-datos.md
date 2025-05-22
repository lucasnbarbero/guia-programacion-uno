# 🔸 Programación Imperativa: Estructuras de Datos

## 📦 Vectores

Los vectores son estructuras de datos fundamentales en programación que nos permiten almacenar una **colección ordenada de elementos del mismo tipo**. También se les conoce como **arreglos**.

### 🧩 Características principales

- **Colección ordenada:** Los elementos en un vector están dispuestos en un orden específico. Cada elemento tiene una posición única, conocida como **índice**.
- **Tipo de datos:**

  - En lenguajes **fuertemente tipados** (como C#), todos los elementos deben ser del mismo tipo.
  - En lenguajes **débilmente tipados** (como JavaScript), pueden ser de distintos tipos.

- **Acceso mediante índices:** Se accede a los elementos usando su índice. El primer elemento está en el índice `0`.
- **Tamaño fijo:** En muchos lenguajes, el tamaño del vector se define al crearlo y no puede cambiarse. Otros lenguajes permiten vectores dinámicos.

### 🎯 ¿Para qué se usan?

Los vectores son útiles para almacenar datos relacionados, como:

- Una lista de nombres
- Una serie de valores numéricos
- Resultados de una encuesta

### 🧾 Ejemplo ilustrativo

| Índice | Elemento    |
| ------ | ----------- |
| 0      | Automóvil   |
| 1      | Motocicleta |
| 2      | Avión       |
| 3      | Barco       |
| 4      | Helicóptero |

### 💻 Declaración en C\#

```csharp
string[] vehiculos = { "Automóvil", "Motocicleta", "Avión", "Barco", "Helicóptero" };
```

### 📤 Acceso a elementos del vector

```csharp
Console.WriteLine(vehiculos[0]);
```

**Salida:**

```
Automóvil
```

### 🧠 Representación conceptual

| Elemento    | Índice | Variable      |
| ----------- | ------ | ------------- |
| Automóvil   | 0      | vehiculos\[0] |
| Motocicleta | 1      | vehiculos\[1] |
| Avión       | 2      | vehiculos\[2] |
| Barco       | 3      | vehiculos\[3] |
| Helicóptero | 4      | vehiculos\[4] |

## 🧮 Matrices

Las matrices son estructuras de datos **bidimensionales** organizadas en **filas y columnas**, como una tabla. Son una extensión de los vectores.

### 🧩 Características principales

- **Filas y columnas:** Disposición en dos dimensiones.
- **Elementos del mismo tipo:** Todos los elementos deben ser del mismo tipo de datos.
- **Índices bidimensionales:** Para acceder a un valor se usa un par de índices: `[fila, columna]`.
- **Tamaño definido:** Se establece al crear la matriz y no se puede cambiar.

### 🎯 ¿Para qué se usan?

Las matrices son útiles para modelar información en forma tabular, por ejemplo:

- Tablas de datos
- Grillas de juego
- Imágenes en procesamiento digital
- Representación de grafos

### 🧾 Ejemplo ilustrativo

| Elemento    | Posición |
| ----------- | -------- |
| Automóvil   | \[0,0]   |
| Motocicleta | \[0,1]   |
| Avión       | \[0,2]   |
| Barco       | \[0,3]   |
| Helicóptero | \[0,4]   |
| Automóvil   | \[1,0]   |
| Motocicleta | \[1,1]   |
| Avión       | \[1,2]   |
| Barco       | \[1,3]   |
| Helicóptero | \[1,4]   |

### 💻 Declaración en C\#

```csharp
string[,] nombreMatriz = new string[2, 3];
```
