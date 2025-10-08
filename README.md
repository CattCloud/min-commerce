# Min-Commerce

Min-Commerce es un e-commerce fullstack desarrollado con React y TypeScript. Este proyecto esta enfocado en aplicar fundamentos de TypeScript en componentes React, crear una estructura base para un catálogo de productos y posteriormente implementar un carrito de compras utilizando React Context API.

## Modelo del Producto

El modelo de datos para los productos está definido en `src/models/products.ts` mediante la interface `Product`:

```typescript
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  onSale?: boolean;
}
```

## Modelo del Carrito

El modelo de datos para los items del carrito está definido en `src/models/cart.ts` mediante la interface `CartItem`:

```typescript
export interface CartItem {
  product: Product;
  quantity: number;
}
```

## Componentes Implementados

1. **ProductCard**: Componente que muestra la información de un producto individual.
   - Props tipadas: `product: Product`
   - Renderiza: nombre, precio, imagen, categoría y tag de "En Oferta" si corresponde.

2. **ProductList**: Componente que renderiza una lista de productos utilizando `ProductCard`.

3. **ProductTag**: Componente que muestra un tag "En Oferta" para productos en promoción.

4. **CartDropdown**: Componente que muestra el contenido del carrito.

5. **CartItemActions**: Componente que permite editar la cantidad o eliminar un producto del carrito.

6. **QuantitySelector**: Componente que permite aumentar o disminuir la cantidad de un producto en el carrito.

## Páginas Implementadas

1. **Home**: Página principal que muestra el catálogo de productos utilizando `ProductList`.
2. **ProductDetailPage**: Página de detalle de un producto individual, mostrando información detallada y permitiendo añadir al carrito.
3. **CartPage**: Página del carrito de compras que muestra los productos añadidos, permite editar cantidades y muestra el resumen del pedido.

## Tecnologías Utilizadas

- Frontend: React + TypeScript
- Framework CSS: Tailwind
- Iconos: Lucide React
- Rutas: React Router

## Funcionalidades

1. Catálogo de productos con tipado estricto.
2. Carrito de compras con estado global gestionado mediante React Context API.
3. Persistencia del carrito utilizando LocalStorage.
4. Navegación entre diferentes rutas (Home, Detalle de Producto, Carrito).

## Instrucciones de Ejecución

1. Clonar el repositorio: `git clone https://github.com/CattCloud/min-commerce.git`
2. Instalar dependencias: `npm install`
3. Ejecutar en desarrollo: `npm run dev`

## Links

- [Repositorio en GitHub](https://github.com/CattCloud/min-commerce)
- [Sitio desplegado en Netlify](https://min-commerce.netlify.app/)