import React, { useState } from "react";
import {
  WrapperContainerLeft,
  WrapperTextLight,
  WrapperContainerRight,
} from "./style";
import InputFormConponent from "../../components/InputFormConponent/InputFormConponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { AnyAction } from "@reduxjs/toolkit";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleNavigateSignIn = () => {
    navigate("/sign-in");
  };

  const handleOnchangeEmail = (value: any) => {
    setEmail(value);
  };

  const handleOnchangePassword = (value: any) => {
    setPassword(value);
  };

  const handleOnchangeConfirmPassword = (value: any) => {
    setConfirmPassword(value);
  };

  const handleSignUp = () => {
    console.log({ email, password, confirmPassword });
    // ({ email, password, confirmPassword })
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập và tạo tài khoản</p>
          <InputFormConponent
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
            value={email}
            onChange={handleOnchangeEmail}
          />
          <div style={{ position: "relative" }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "8px",
                right: "8px",
              }}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputFormConponent
              style={{ marginBottom: "10px" }}
              placeholder="password"
              type={isShowPassword ? "type" : "password"}
              value={password}
              onChange={handleOnchangePassword}
            />
          </div>
          <div style={{ position: "relative" }}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "8px",
                right: "8px",
              }}
            >
              {isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputFormConponent
              placeholder="Confirm Password"
              type={isShowConfirmPassword ? "type" : "password"}
              value={confirmPassword}
              onChange={handleOnchangeConfirmPassword}
            />
          </div>
          <ButtonComponent
            disabled={
              !email.length || !password.length || !confirmPassword.length
            }
            onClick={handleSignUp}
            size={40}
            styleButton={{
              background: "rgb(255,57,69)",
              height: "48px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              margin: "26px 0 10px",
            }}
            textbutton={"Đăng ký tài khoản"}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
          <p>
            Bạn đã có tài khoản?{" "}
            <WrapperTextLight onClick={handleNavigateSignIn}>
              Đăng nhập
            </WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src="https://images02.vietnamworks.com/companyprofile/Tiki-Corporation/en/logo_Tiki.jpg"
            preview={false}
            alt="image-logo"
            height="203px"
            width="203px"
          />
          <h4>Mua sản phẩm tại LTTD</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignUpPage;
