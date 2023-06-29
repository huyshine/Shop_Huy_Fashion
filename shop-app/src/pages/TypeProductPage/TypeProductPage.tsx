import React from "react";
import NavBarComponet from "../../components/NavBarComponent/NavBarComponet";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, PaginationProps, Row } from "antd";
import { WrapperNavbar, WrapperProducts } from "./style";

const onChange: PaginationProps["onChange"] = (pageNumber) => {
  console.log("Page: ", pageNumber);
};

const TypeProductPage = () => {
  return (
    <div style={{ padding: "0 120px", background: "#efefef" }}>
      <Row
        style={{
          padding: "0 120px",
          background: "#efefef",
          flexWrap: "nowrap",
        }}
      >
        <WrapperNavbar span={4}>
          <NavBarComponet />
        </WrapperNavbar>
        <Col span={20}>
          <WrapperProducts >
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{textAlign: 'center', marginTop: '10px'}}/>
          </WrapperProducts>
        </Col>
      </Row>
    </div>
  );
};

export default TypeProductPage;
