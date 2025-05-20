import React from 'react';
import ProductCard from './ProductCard';
import { featuredProducts } from '../data/products';

const FeaturedProducts: React.FC = () => {
  return (
    <section id="featured" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Destaques da Semana</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;