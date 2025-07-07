
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`)
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Products</h2>
      {products.map(product => <ProductCard key={product._id} product={product} />)}
    </div>
  );
}
