// import React from 'react'
// import Slider from "react-slick"
import { Image } from "antd" 
import { WrapperSliderStyle } from "./style";

const SliderComponent = ( {arrImages} : any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

//   console.log(arrImages);
  
  return (
    <WrapperSliderStyle {...settings}>
        {arrImages.slider.map((image: any) => {
            return (
                <Image src={image} alt="slider" preview={false} width="100%" height="100%" />
            )
        } )}
    </WrapperSliderStyle>   
    )
};

export default SliderComponent;
