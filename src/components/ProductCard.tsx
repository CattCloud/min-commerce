import React from 'react';
import type { Product } from '../models/products';
import { ShoppingCart, Heart } from 'lucide-react';
import ProductTag from './ProductTag';

interface ProductCardProps {
  product: Product;
}

const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const cardClasses = `
    bg-bg-main 
    border border-border-default 
    rounded-2xl 
    p-4 
    transition-all duration-300 
    hover:border-primary-500
    hover:shadow-neon-sm
    max-w-xs w-full
    relative 
    flex flex-col
  `;

  const shadowClass = 'shadow-xl shadow-bg-app/50';

  return (
    <div className={`${cardClasses} ${shadowClass}`}>
      {product.onSale && (
        <ProductTag/>
      )}

      <button className="absolute top-2 right-2 p-2 bg-bg-hover rounded-full text-text-light hover:text-primary-500 transition-colors z-10">
        <Heart size={20} fill="currentColor" />
      </button>

 
      <div className="flex justify-center items-center h-56 mb-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-contain rounded-md transform hover:scale-[1.03] transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/300x200/1A1A1A/757575?text=Image+Missing';
          }}
        />
      </div>

   
      <div className="flex flex-col flex-grow">
        <h3 className="text-text-primary text-xl font-bold mb-1 line-clamp-2">{product.name}</h3>
        <p className="text-text-muted text-sm font-semibold uppercase tracking-wider mb-3">{product.category}</p>
        
        <div className="flex justify-between items-center mt-auto pt-2">

          <p className={
            product.onSale 
              ? "text-primary-500 text-3xl font-extrabold"
              : "text-text-primary text-2xl font-bold"
            }
          >
            {formatPrice(product.price)}
          </p>
          
        
          <button 
            className="flex items-center justify-center p-3 rounded-xl 
                       bg-bg-app text-primary-500 font-bold text-sm 
                       hover:bg-primary-dark transition-colors hover:text-text-inverse  hover:bg-primary-500
                       cursor-pointer" 
          >
            <ShoppingCart size={20} className="mr-2" />
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
