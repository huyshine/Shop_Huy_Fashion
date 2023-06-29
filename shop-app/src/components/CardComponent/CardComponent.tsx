import React from "react";
import { Card, Image } from "antd";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReportText,
} from "./style";
import { StarFilled } from "@ant-design/icons";

const { Meta } = Card;

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      style={{ width: 200 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <img
        src="https://thumbs.dreamstime.com/b/great-deals-red-rubber-stamp-over-white-background-88004036.jpg"
        style={{
          width: "68px",
          height: "20px",
          position: "absolute",
          top: "-1px",
          left: "-1px",
          borderTopLeftRadius: "3px",
        }}
      />
      <StyleNameProduct>Iproduct</StyleNameProduct>
      <WrapperReportText>
        <span>
          4.96
          <StarFilled style={{ fontSize: "10px", color: "yellow" }} />
        </span>
        <span>| Đã bán 1000+</span>
      </WrapperReportText>
      <WrapperPriceText>
        <span style={{marginRight: "8px"}}>1.000.000đ</span>
        <WrapperDiscountText>-5%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
