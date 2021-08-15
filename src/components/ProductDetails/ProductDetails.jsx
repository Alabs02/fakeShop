import React, { useEffect } from 'react';
import { get } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectedProduct, removeSelectedProduct } from '../../store/actions/productActions';


const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector(({ product }) => product);
  const { image, title, price, category, description } = product;

  const getSingleProduct = async () => {
    const { data, status } = await get(`https://fakestoreapi.com/products/${productId}`).catch(err => {
      console.error(err);
    });

    if (data) {
      console.log(data, status);
      dispatch(selectedProduct(data));
    }
  }

  useEffect(() => {
    if(productId && productId !== "") getSingleProduct();
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [productId]);

  return (
    <div className="pb-5">
      {(Object.keys(product).length === 0) 
        ?
        <div className="grid py-4 text-indigo-600 place-items-center">
          Loding...
        </div>

        :

        <div className="grid w-3/5 grid-cols-12 gap-10 mx-8 mt-5 bg-white rounded-md shadow panel">
          <div className="col-span-5 p-8 overflow-hidden transition-all transform rounded shadow-sm panel__media hover:scale-105">
            <img src={image} className="object-contain w-full h-full" alt={title} />
          </div>
          
          <div className="col-span-7 p-8 transition-all rounded hover:shadow-lg">
            <h4 className="text-lg font-semibold tracking-wide text-gray-500">{title}</h4>

            <div className="inline-block px-4 py-2 mt-4 text-base font-semibold tracking-wider text-white bg-indigo-600 rounded-md shadow">
              {price}
            </div>

            <div className="p-2 mt-4 text-xs tracking-wider text-gray-600 uppercase bg-gray-100 rounded-md shadow-inner">
              {category}
            </div>

            <div className="mt-4 mb-4 text-base tracking-wide text-justify text-gray-700 copy">
              {description}
            </div>

            <button className="px-4 py-2 text-xs font-medium tracking-wider text-white uppercase transition-all transform bg-pink-500 rounded shadow hover:shadow-lg hover:scale-105">
              Add to cart
            </button>
          </div>
        </div>
      }
    </div>
  );
}

export default ProductDetails;
