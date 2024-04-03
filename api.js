export async function getProducts() {
    const response = await fetch('http://localhost:3000/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  }
  
  export async function getProductById(productId) {
    const response = await fetch('http:localhost:3000/products/${productId}');
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return response.json();
  }