import React from "react";
import { Col, Image, Row } from "antd";
import { WrapperStyleColImage, WrapperStyleImageSmall } from "./style";

const ProductDetailComponent = () => {
  return (
    <Row style={{padding: '16px', background: '#fff'}}>
      <Col span={10}>
        <Image
          src={"https://toplist.vn/images/800px/tu-truyen-tranh-360-68615.jpg"}
          alt="image product"
        />
        <Row style={{ paddingTop: "10px", justifyContent:'space-between',margin:'5px' }}>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={
                "https://toplist.vn/images/800px/tu-truyen-tranh-360-68615.jpg"
              }
              alt="image small"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={
                "https://toplist.vn/images/800px/tu-truyen-tranh-360-68615.jpg"
              }
              alt="image small"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={
                "https://toplist.vn/images/800px/tu-truyen-tranh-360-68615.jpg"
              }
              alt="image small"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={
                "https://toplist.vn/images/800px/tu-truyen-tranh-360-68615.jpg"
              }
              alt="image small"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={
                "https://toplist.vn/images/800px/tu-truyen-tranh-360-68615.jpg"
              }
              alt="image small"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={
                "https://toplist.vn/images/800px/tu-truyen-tranh-360-68615.jpg"
              }
              alt="image small"
            />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14}>col-6 col-pull-18</Col>
    </Row>
  );
};

export default ProductDetailComponent;
