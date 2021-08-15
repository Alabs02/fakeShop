import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  const products = useSelector(({ allProducts }) => allProducts.products);
  
  const renderList =  products.map(({ id, title, price, category, image}, index) => {
    return (
      <Link to={`/product/${id}`} key={`${id}_${index}`} className="col-span-12 pb-4 overflow-hidden transition-all transform bg-white rounded-md cursor-pointer sm:col-span-3 card hover:scale-105">
        <div className="w-full h-40 bg-white card__media overfloe-hidden">
          <img src={image} alt={title} className="object-contain w-full h-full" />
        </div>

        <h5 className="px-4 mt-4 mb-2 text-base font-medium tracking-wide text-gray-600">{title}</h5>
        <p className="px-4 mb-4 text-xl font-medium text-gray-500"><span className="line-through">N</span>{price}</p>

        <small className="px-4 text-xs tracking-wider text-gray-400 uppercase">{category}</small>
      </Link>
    );
  });

  return <>{renderList}</>;
}

export default ProductCard;
