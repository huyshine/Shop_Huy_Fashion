import React from "react";
import { Col, Image, InputNumber, Row } from "antd";
import {
  WrapperAddressProduct,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQualityProduct,
  WrapperStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
} from "./style";
import {
  MinusOutlined,
  PlusOutlined,
  StarFilled,
} from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ProductDetailComponent = () => {
  const onChange = () => {};
  return (
    <Row style={{ padding: "16px", background: "#fff", display: "flex" }}>
      <Col span={10}>
        <Image
          src={"https://toplist.vn/images/800px/tu-truyen-tranh-360-68615.jpg"}
          alt="image product"
        />
        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
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
      <Col span={14} style={{ paddingLeft: "10px" }}>
        <WrapperStyleNameProduct>
          Sách - Thám tử lừng danh Conan - Combo 10 tập từ tập 81 đến tập 90
        </WrapperStyleNameProduct>
        <div>
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>200.000 đ</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span>Giao đến</span>
          <span className="address">Q,1 ,P. Bến Nghé , Hồ Chí Minh</span>
          <span className="change-address">Đổi địa chỉ</span>
        </WrapperAddressProduct>
        <div style={{margin: "10px 0 ", paddingBottom:"10px" ,borderTop: "1px solid #ccc", borderBottom:"1px solid #ccc"}}>
          <div style={{marginBottom:"10px"}}>Số lượng</div>
          <WrapperQualityProduct>
            <button style={{ border: "none", background: "transparent" }}>
              <MinusOutlined style={{ color: "#000", fontSize: "16px" }} />
            </button>
            <WrapperInputNumber
              defaultValue={1}
              onChange={onChange}
              size="small"
            />
            <button style={{ border: "none", background: "transparent" }}>
              <PlusOutlined style={{ color: "#000", fontSize: "16px" }} />
            </button>
          </WrapperQualityProduct>
        </div>
        <div style={{display: 'flex', alignItems: 'center' , gap:'12px'}}>
          <ButtonComponent
            size={40}
            styleButton={{
              background: "rgb(255,57,69)",
              height: "48px",
              width: "220px",
              border: "none",
              borderRadius: "4px"
            }}
            textbutton={"Chon mua"}
            styleTextButton={{ color: '#fff', fontSize: "15px", fontWeight: "700" }}
          ></ButtonComponent>
          <ButtonComponent
            size={40}
            styleButton={{
              // background: "rgb(255,57,69)",
              height: "48px",
              width: "220px",
              border: "1px solid rgb(13,92,182)",
              borderRadius: "4px"
            }}
            textbutton={"Mua trả sau"}
            styleTextButton={{ color: 'rbg(13,92,182)',fontSize: '15px' }}
          ></ButtonComponent>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailComponent;
