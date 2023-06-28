import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccout, WrapperTextHeaderSmall } from "./style";
import { Col } from "antd";
import { UserOutlined, DownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import ButttonInputSearch from "../ButttonInputSearch/ButttonInputSearch";


const HeaderComponent = () => {
  return (
    <WrapperHeader gutter={16}>
      <Col span={6}>
        <WrapperTextHeader to="/">LOGO</WrapperTextHeader>
        {/* LOGO */}
      </Col>
      <Col span={12}>
        <ButttonInputSearch
          placeholder="input search text"
          size="large"
          bordered={false}
          textbutton= "Tìm kiếm"
        />
      </Col>
      <Col span={6} style={{display: 'flex' , gap: '20px'}}>
        <WrapperHeaderAccout>
          <UserOutlined />
          <div>
            <WrapperTextHeaderSmall>Đăng nhập / Đăng Ký</WrapperTextHeaderSmall>
            <div>
              <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
              <DownOutlined />
            </div>
          </div>
        </WrapperHeaderAccout>
        <div>
        <ShoppingCartOutlined style={{color: '#fff'}}/>
        <WrapperTextHeaderSmall >Giỏ hàng</WrapperTextHeaderSmall>
        </div>
      </Col>
    </WrapperHeader>
  );
};

export default HeaderComponent;