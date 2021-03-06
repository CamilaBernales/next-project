import React from "react";
import Layout from '../components/layout/Layout';
import useProducts from "../hooks/useProducts";
import ProductDetails from '../components/layout/ProductDetails';
const Home = () => {

    const { products } = useProducts('creado');


  return (
      <div>
          <Layout>
              <div className="product-list">
                <div className="container">
                    <ul  className="bg-white">
                       {products.map(product => (
                            <ProductDetails
                                key={product.id}
                                product={product}
                            />
                       ))} 
                    </ul>
                </div>
              </div>
          </Layout>
      </div>
  )
};
export default Home;
