import React from "react";
import {
  WrapperContent,
  WrapperLableText,
  WrapperTextPrice,
  WrapperTextValue,
} from "./style";
import { Checkbox, Col, Rate, Row } from "antd";

const NavBarComponet = () => {
  const onChange = () => {};
  const renderContent = (type: any, options: any) => {
    switch (type) {
      case "text":
        return options.map((option: any) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((option: any) => {
              return (
                <Checkbox style={{ marginLeft: 0 }} value={option.value}>
                  {option.label}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option: any) => {
          return (
            <div style={{ display: "flex" }}>
              <Rate
                style={{ fontSize: "12px" }}
                disabled
                defaultValue={option}
              />
              <span> {`tu ${option}  sao`}</span>
            </div>
          );
        });
      case "price":
        return options.map((option: any) => {
          return <WrapperTextPrice>{option}</WrapperTextPrice>;
        });
      default:
        return {};
    }
  };
  return (
    <div>
      <WrapperLableText>Lable</WrapperLableText>
      <WrapperContent>
        {renderContent("text", ["Tu lanh", "TV", "MAYGIAT"])}
        {renderContent("checkbox", ["Tu lanh", "TV", "MAYGIAT"])}
        {renderContent("star", ["4", "5"])}
        {renderContent("price", ["Tren 50000", "500k", "1M"])}

      </WrapperContent>
    </div>
  );
};

export default NavBarComponet;
