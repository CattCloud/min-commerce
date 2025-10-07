import type { Product } from '../models/products';

export const products: Product[] = [
  {
    id: '1',
    name: 'Zapatillas Urbanas',
    price: 179.99,
    imageUrl: 'https://img.freepik.com/vector-gratis/zapatillas-deportivas-modernas-color-azul-cordones-blancos-imagen-unica-realista-sobre-fondo-blanco-ilustracion-aislada_1284-31208.jpg',
    category: 'Calzado',
    onSale: true
  },
  {
    id: '2',
    name: 'Camiseta Deportiva',
    price: 49.99,
    imageUrl: 'https://img.freepik.com/vector-gratis/camiseta-hombre-diferentes-perspectivas-estilo-realista_23-2147818439.jpg?t=st=1759804415~exp=1759808015~hmac=c857ca54ae73712fba2da281878a6374b75b8c1f4bc9d1b78154ce80a0c4d77e&w=1060',
    category: 'Ropa',
    onSale: false
  },
  {
    id: '3',
    name: 'Reloj Inteligente',
    price: 299.99,
    imageUrl: 'https://img.freepik.com/vector-gratis/reloj-inteligente-imagen-realista-negro_1284-11873.jpg?t=st=1759804483~exp=1759808083~hmac=d48f25ddde71c3d0065e8a4af711181daffba6364534fb5bfc9dfbcb3d44d85a&w=1060',
    category: 'Tecnología',
    onSale: true
  },
  {
    id: '4',
    name: 'Mochila Viajera',
    price: 89.99,
    imageUrl: 'https://img.freepik.com/foto-gratis/mochila-binoculares-grava_23-2147833112.jpg?t=st=1759804528~exp=1759808128~hmac=0fe048b377abb08b8163285bff7c29f4b41fd2b9282b8d90192854d43b2c2685&w=1060',
    category: 'Accesorios',
    onSale: false
  },
];