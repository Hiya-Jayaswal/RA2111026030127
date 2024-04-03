import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { getProducts } from '../api'; 
import ProductList from '../components/ProductList'; 

function AllProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    }

    fetchData(); 
  }, []); 

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        All Products
      </Typography>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ProductList products={products} />
      )}
    </Container>
  );
}

export default AllProductsPage;