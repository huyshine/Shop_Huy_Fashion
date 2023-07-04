import { Input } from "antd";
import React, { useState } from "react";

const InputFormConponent = (props: any) => {
  // const [valueInput, setValueInput] = useState("");
  const { placeholder = "Nhập text", ...rests } = props;
  const handleOnchangeInput = (e: any) => {
    props.onChange(e.target.value);
    // console.log("value", e.target.value);
    
  };
  return (
    <Input
      placeholder={placeholder}
      value={props.value}
      {...rests}
      // {...rests}
      onChange={handleOnchangeInput}
    />
  );
};

export default InputFormConponent;
