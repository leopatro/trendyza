import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full bg-secondary/20 text-secondary-dark mb-2">
          {product.category}
        </span>
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <div className="mt-auto">
          <a href={`#${product.slug}`} className="btn btn-outline text-sm mt-4 w-full text-center">
            Ver mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;