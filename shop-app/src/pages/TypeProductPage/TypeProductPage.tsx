import React from "react";
import NavBarComponet from "../../components/NavBarComponent/NavBarComponet";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Row } from "antd";
import { WrapperNavbar, WrapperProducts } from "./style";
const TypeProductPage = () => {
  return (
    <Row style={{padding:'10px 120px', background: '#efefef', flexWrap: 'nowrap' }}>
      <WrapperNavbar span={4} >
        <NavBarComponet />
      </WrapperNavbar>
      <WrapperProducts span={20} >
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </WrapperProducts>
    </Row>
  );
};

export default TypeProductPage;
