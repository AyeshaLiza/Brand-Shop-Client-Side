import React, { useEffect, useState } from 'react';
import ProductDetailCard from '../Components/ProductDetailCard';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState([]);
  const [filteredDetail, setFilteredDetail] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch('https://server-two-gules.vercel.app/product')
      .then(res => res.json())
      .then(data => {
        setProductDetail(data)
        // console.log(data);

      })
  }, [])

  useEffect(() => {
    const findProductDetail = productDetail?.filter(detail => detail._id == id)
    // console.log(findProductDetail);
    setFilteredDetail(findProductDetail)
  }, [id, productDetail])

  return (
    <div>
      <div className='text-center space-y-5 '>
        {
          filteredDetail?.map(product => <ProductDetailCard key={product._id} detail={product}></ProductDetailCard>)
        }
       

      </div>
    </div>

  );
};

export default ProductDetail;