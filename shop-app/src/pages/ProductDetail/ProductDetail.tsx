import React from 'react'
import { Col, Image, Row } from 'antd';
import ProductDetailComponent from '../../components/ProductDetailComponent/ProductDetailComponent';

const ProductDetail = () => {
  return (
    <div style={{padding:'0 120px' , background:'#efefef', height:'1000px'}}>
        <h5>Trang chủ</h5>
        <div >
            <ProductDetailComponent/>
        </div>
    </div>

  )
}

export default ProductDetail