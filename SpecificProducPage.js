import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api'; 
import ProductDetails from '../components/ProductDetails'; 

function SpecificProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProductById(productId); 
        setProduct(data.product);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    }

    fetchProduct();
  }, [productId]); 

  return (
    <div>
      <h1>Product Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ProductDetails product={product} /> )}
    </div>
  );
}

export default SpecificProductPage;