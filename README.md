# Min-Commerce

Min-Commerce es un e-commerce fullstack desarrollado con React y TypeScript. Este proyecto forma parte del Laboratorio 23, enfocado en aplicar fundamentos de TypeScript en componentes React y crear una estructura base para un catálogo de productos.

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

## Componentes Implementados

1. **ProductCard**: Componente que muestra la información de un producto individual.
   - Props tipadas: `product: Product`
   - Renderiza: nombre, precio, imagen, categoría y tag de "En Oferta" si corresponde.

2. **ProductList**: Componente que renderiza una lista de productos utilizando `ProductCard`.

3. **ProductTag**: Componente que muestra un tag "En Oferta" para productos en promoción.

## Tecnologías Utilizadas

- Frontend: React + TypeScript
- Framework CSS: Tailwind
- Iconos: Lucide React

## Instrucciones de Ejecución

1. Clonar el repositorio: `git clone https://github.com/tu-usuario/min-commerce.git`
2. Instalar dependencias: `npm install`
3. Ejecutar en desarrollo: `npm run dev`

## Links

- [Repositorio en GitHub](https://github.com/CattCloud/min-commerce)
- [Sitio desplegado en Netlify](https://min-commerce.netlify.app/)