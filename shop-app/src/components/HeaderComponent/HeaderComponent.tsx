import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccout,
  WrapperTextHeaderSmall,
} from "./style";
import { Badge, Col } from "antd";
import {
  UserOutlined,
  DownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButttonInputSearch from "../ButttonInputSearch/ButttonInputSearch";

const HeaderComponent = () => {
  return (
    // <div style={{width:"1270px" , backgroundColor: "rgb(26,148,225)" , display: "flex", justifyContent: "center"}}>
      <WrapperHeader>
        <Col span={5}>
          <WrapperTextHeader to="/">LOGO</WrapperTextHeader>
          {/* LOGO */}
        </Col>
        <Col span={13}>
          <ButttonInputSearch
            placeholder="input search text"
            size="large"
            bordered={false}
            textbutton="Tìm kiếm"
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "54px", alignItems: "center" }}
        >
          <WrapperHeaderAccout>
            <UserOutlined style={{fontSize:"30px"}} />
            <div>
              <WrapperTextHeaderSmall>
                Đăng nhập / Đăng Ký
              </WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <DownOutlined />
              </div>
            </div>
          </WrapperHeaderAccout>
          <div>
            <Badge count={4} size="small">
              <ShoppingCartOutlined
                style={{ color: "#fff", fontSize: "30px" }}
              />
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    // </div>
  );
};

export default HeaderComponent;
