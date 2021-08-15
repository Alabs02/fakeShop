import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../ProductCard';
import { get } from 'axios';
import { setProducts } from '../../store/actions/productActions';

const ProductList = () => {
  const products = useSelector(({ allProducts }) => allProducts.products);
   const dispatch = useDispatch();

  const getProducts = async () => {
    const { data, status } = await get('https://fakestoreapi.com/products').catch(err => {
      console.error('Error: ', err);
    });

    if (data) {
      console.log(data, status);
      dispatch(setProducts(data))
    }
  }

  useEffect(() => {
    getProducts();
  }, [products]);

  console.log(products);
  
  return (
    <div className="grid w-full grid-cols-12 gap-5 px-8 mt-10 mb-10 shdow-sm">
      <ProductCard />
    </div>
  );
}

export default ProductList;
